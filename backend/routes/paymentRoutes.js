

const express = require("express");

const router = express.Router();


const {
  createPayment,
  getPayments,
  getPaymentById,
  updatePaymentStatus,
  createOrder,
  verifyPayment,
} = require("../controllers/paymentController");


const {
  protect,
  authorize,
} = require("../middleware/authMiddleware");




router.post(
  "/",
  protect,
  authorize("client"),
  createPayment
);


router.post(
  "/create-order",
  protect,
  authorize("client"),
  createOrder
);


router.post(
  "/verify",
  protect,
  authorize("client"),
  verifyPayment
);




router.get(
  "/",
  protect,
  getPayments
);




router.get(
  "/:id",
  protect,
  getPaymentById
);




router.put(
  "/:id/status",
  protect,
  updatePaymentStatus
);



module.exports = router;