

const express = require("express");

const router = express.Router();


const {
  createChat,
  getChats,
  getMessages,
  sendMessage,
  markAsRead,
  getMyClients,
  getMyFreelancers,
} = require("../controllers/chatController");


const {
  protect,
} = require("../middleware/authMiddleware");




router.post(
  "/",
  protect,
  createChat
);



router.get(
  "/",
  protect,
  getChats
);


router.get(
  "/my-clients",
  protect,
  getMyClients
);

router.get(
  "/my-freelancers",
  protect,
  getMyFreelancers
);

router.get(
  "/:chatId/messages",
  protect,
  getMessages
);



router.post(
  "/:chatId/messages",
  protect,
  sendMessage
);





router.put(
  "/:chatId/read",
  protect,
  markAsRead
);


module.exports = router;