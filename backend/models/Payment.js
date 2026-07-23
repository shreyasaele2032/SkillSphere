

const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    milestone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Milestone",
      required: true,
    },

    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    freelancer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    amount: {
      type: Number,
      required: [true, "Payment amount is required"],
      min: 0,
    },

    paymentMethod: {
      type: String,
      enum: [
        "Credit Card",
        "Debit Card",
        "UPI",
        "Net Banking",
        "Wallet",
        "Stripe",
        "Razorpay",
      ],
      default: "UPI",
    },

    transactionId: {
      type: String,
      default: "",
    },

    razorpayOrderId: {
  type: String,
  default: "",
},

razorpayPaymentId: {
  type: String,
  default: "",
},

    paymentStatus: {
      type: String,
      enum: [
        "Pending",
        "Successful",
        "Failed",
        "Refunded",
      ],
      default: "Pending",
    },

    paymentDate: {
      type: Date,
      default: Date.now,
    },

    notes: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);