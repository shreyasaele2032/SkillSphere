import api from "./api";




const getPayments = async () => {

  const response = await api.get(
    "/payments"
  );

  return response.data;

};





const getPaymentById = async (paymentId) => {

  const response = await api.get(
    `/payments/${paymentId}`
  );

  return response.data;

};





const createPayment = async (paymentData) => {

  const response = await api.post(
    "/payments",
    paymentData
  );

  return response.data;

};


const createOrder = async (amount) => {

  const response = await api.post(
    "/payments/create-order",
    {
      amount,
    }
  );

  return response.data;

};





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