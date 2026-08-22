

const Payment = require("../models/Payment");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const Milestone = require("../models/Milestone");



const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});
const createPayment = async (req, res, next) => {
  try {

    const {
      milestone,
      job,
      freelancer,
      amount,
      paymentMethod,
    } = req.body;


    const payment = await Payment.create({
      milestone,
      job,
      client: req.user._id,
      freelancer,
      amount,
      paymentMethod,
    });


    res.status(201).json({
      success: true,
      message: "Payment created successfully",
      payment,
    });


  } catch (error) {
    next(error);
  }
};









const getPayments = async (req, res, next) => {
  try {

    const payments = await Payment.find({
      $or: [
        {
          client: req.user._id,
        },
        {
          freelancer: req.user._id,
        },
      ],
    })
      .populate(
        "job",
        "title"
      )
      .populate(
        "milestone",
        "title amount"
      )
      .populate(
        "client",
        "name email"
      )
      .populate(
        "freelancer",
        "name email"
      )
      .sort({
        createdAt: -1,
      });


    res.status(200).json({
      success: true,
      payments,
    });


  } catch (error) {
    next(error);
  }
};










const getPaymentById = async (
  req,
  res,
  next
) => {

  try {

    const payment =
      await Payment.findById(
        req.params.id
      )
      .populate(
        "job",
        "title"
      )
      .populate(
        "milestone",
        "title"
      );


    if (!payment) {
      return res.status(404).json({
        success:false,
        message:"Payment not found",
      });
    }



   

    if (
      payment.client.toString() !== req.user._id.toString() &&
      payment.freelancer.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success:false,
        message:"Not authorized",
      });
    }



    res.status(200).json({
      success:true,
      payment,
    });


  } catch(error) {
    next(error);
  }

};










const updatePaymentStatus = async (
  req,
  res,
  next
) => {

  try {

    const {
      paymentStatus,
      transactionId,
    } = req.body;



    const payment =
      await Payment.findById(
        req.params.id
      );


    if (!payment) {
      return res.status(404).json({
        success:false,
        message:"Payment not found",
      });
    }



    payment.paymentStatus =
      paymentStatus || payment.paymentStatus;


    payment.transactionId =
      transactionId || payment.transactionId;



    await payment.save();



    res.status(200).json({
      success:true,
      message:"Payment status updated",
      payment,
    });



  } catch(error) {
    next(error);
  }

};



const createOrder = async (req, res, next) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).json({
        success: false,
        message: "Amount is required",
      });
    }

    const options = {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      order,
    });

  } catch (error) {
    next(error);
  }
};



const verifyPayment = async (req, res, next) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      paymentId,
    } = req.body;

    const generatedSignature = crypto
      .createHmac(
        "sha256",
        process.env.RAZORPAY_KEY_SECRET
      )
      .update(
        razorpay_order_id + "|" + razorpay_payment_id
      )
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment verification failed",
      });
    }

    const payment = await Payment.findById(paymentId);

    if (payment) {
      payment.paymentStatus = "Successful";
      payment.transactionId = razorpay_payment_id;
      payment.razorpayOrderId = razorpay_order_id;
      payment.razorpayPaymentId = razorpay_payment_id;

      await payment.save();

      // Mark milestone as paid
      const milestone = await Milestone.findById(payment.milestone);

      if (milestone) {
        milestone.isPaid = true;
        await milestone.save();
      }
    }

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });

  } catch (error) {
    next(error);
  }
};







module.exports = {
  createPayment,
  getPayments,
  getPaymentById,
  updatePaymentStatus,
  createOrder,
  verifyPayment,
};