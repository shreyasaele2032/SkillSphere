import api from "./api";


// Create or get chat
const createChat = async (userId) => {

  const response = await api.post(
    "/chat",
    {
      userId,
    }
  );

  return response.data;

};



// Get all conversations of logged-in user
const getConversations = async () => {

  const response = await api.get(
    "/chat"
  );

  return response.data;

};



// Get messages of a chat
const getMessages = async (chatId) => {

  const response = await api.get(
    `/chat/${chatId}/messages`
  );

  return response.data;

};

// Get all clients who contacted the freelancer
const getMyClients = async () => {

  const response = await api.get(
    "/chat/my-clients"
  );

  return response.data;

};



// Send message
const sendMessage = async (
  chatId,
  messageData
) => {

  const response = await api.post(
    `/chat/${chatId}/messages`,
    messageData
  );

  return response.data;

};


const getMyFreelancers = async () => {
  const response = await api.get(
    "/chat/my-freelancers"
  );

  return response.data;
};



// Mark messages as read
const markAsRead = async (chatId) => {

  const response = await api.put(
    `/chat/${chatId}/read`
  );

  return response.data;

};



const chatService = {

  createChat,
  getConversations,
  getMessages,
  sendMessage,
  markAsRead,
  getMyClients,
  getMyFreelancers,

};


export default chatService;