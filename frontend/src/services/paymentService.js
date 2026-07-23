import api from "./api";



// Get all payments of logged-in user
const getPayments = async () => {

  const response = await api.get(
    "/payments"
  );

  return response.data;

};




// Get single payment details
const getPaymentById = async (paymentId) => {

  const response = await api.get(
    `/payments/${paymentId}`
  );

  return response.data;

};




// Create payment for project/milestone
const createPayment = async (paymentData) => {

  const response = await api.post(
    "/payments",
    paymentData
  );

  return response.data;

};

// Create Razorpay Order
const createOrder = async (amount) => {

  const response = await api.post(
    "/payments/create-order",
    {
      amount,
    }
  );

  return response.data;

};




// Update payment status
const updatePaymentStatus = async (
  paymentId,
  statusData
) => {

  const response = await api.put(
    `/payments/${paymentId}/status`,
    statusData
  );

  return response.data;

};


// Verify Razorpay Payment
const verifyPayment = async (paymentData) => {

  const response = await api.post(
    "/payments/verify",
    paymentData
  );

  return response.data;

};





const paymentService = {

  getPayments,
  getPaymentById,
  createPayment,
  updatePaymentStatus,
  createOrder,
  verifyPayment,

};



export default paymentService;