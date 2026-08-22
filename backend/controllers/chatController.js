
//"next" is an Express middleware function used to pass control to the next middleware.
//When we call next(error), it passes the error to the global error-handling middleware,
//allowing us to handle errors centrally instead of repeating error-handling code in every controller."
const Chat = require("../models/Chat");
const Message = require("../models/Message");
const Gig = require("../models/Gig");




const createChat = async (req, res, next) => {
  try {

    const {
      userId,
    } = req.body; //The frontend sends the ID of the person the logged-in user wants to chat with.
  

    let chat = await Chat.findOne({
      participants: {
        $all: [
          req.user._id,
          userId,
        ],
      },
    });
//This checks:
// "Does a chat already exist between these two users?"
// req.user._id is the id of currently logged-in user.
// userId is the other user.
// $all means both IDs must be present in the participants array.


    if (!chat) {

      chat = await Chat.create({
        participants: [
          req.user._id,
          userId,
        ],
      });

    }


    res.status(200).json({
      success: true,
      chat,
    });


  } catch(error) {
    next(error);
  }
}; //Creates a chat between the logged-in user and another user.
//If a chat already exists between them, it returns the existing chat instead of creating a duplicate.







const getChats = async (
  req,
  res,
  next
) => { //This gets all chats belonging to the logged-in user

  try {

    const chats = await Chat.find({
      participants: req.user._id,
    })
      .populate(
        "participants",
        "name profileImage role"
      )
      .sort({
        updatedAt: -1,
      });


    res.status(200).json({
      success: true,
      chats,
    });


  } catch(error) {
    next(error);
  }

};




//This is mainly useful when the logged-in user wants to see their clients they have chatted with.
const getMyClients = async (req, res, next) => {
  try {

    const chats = await Chat.find({
      participants: req.user._id,
    })
      .populate(
        "participants",
        "name profileImage role"
      )
      .sort({
        updatedAt: -1,
      });

    const clients = chats.map((chat) => {

      const client = chat.participants.find(
        (user) =>
          user._id.toString() !== req.user._id.toString()
      );

      return {
        chatId: chat._id,
        client,
      };

    });

    res.status(200).json({
      success: true,
      clients,
    });

  } catch (error) {
    next(error);
  }
};





const getMessages = async (
  req,
  res,
  next
) => {

  try {

    const messages =
      await Message.find({
        chat: req.params.chatId,
      })
      .populate(
        "sender",
        "name profileImage"
      )
      .sort({
        createdAt: 1,
      });


    res.status(200).json({
      success:true,
      messages,
    });


  } catch(error) {
    next(error);
  }

};









const sendMessage = async (
  req,
  res,
  next
) => { //This function is used to send a new message.

  try {

    const {
      message,
      messageType,
      attachment,
    } = req.body;



    const chat = await Chat.findById(
      req.params.chatId
    );


    if (!chat) {
      return res.status(404).json({
        success:false,
        message:"Chat not found",
      });
    }





    const newMessage =
      await Message.create({

        chat: chat._id,

        sender: req.user._id,

        message,

        messageType:
          messageType || "text",

        attachment:
          attachment || "",

      }); //This creates a new message in MongoDB.





   

    chat.lastMessage = message;

    chat.lastMessageSender =
      req.user._id;

    chat.lastMessageTime =
      new Date();


    await chat.save();





    res.status(201).json({

      success:true,

      message:
        "Message sent successfully",

      data:newMessage,

    });



  } catch(error) {
    next(error);
  }

};









const markAsRead = async (
  req,
  res,
  next
) => {

  try {

    await Message.updateMany(

      {
        chat:req.params.chatId,

        sender:{
          $ne:req.user._id,
        },

      },

      {
        isRead:true,
      }

    );


    res.status(200).json({

      success:true,

      message:
        "Messages marked as read",

    });


  } catch(error) {
    next(error);
  }

};


const getMyFreelancers = async (req, res, next) => {
  try {

    const chats = await Chat.find({
      participants: req.user._id,
    }).populate(
      "participants",
      "name profileImage role"
    );

    const result = [];

    for (const chat of chats) {

      const freelancer = chat.participants.find(
        (user) =>
          user._id.toString() !== req.user._id.toString()
      );

      if (!freelancer) continue;

      

      const gig = await Gig.findOne({
        freelancer: freelancer._id,
      });

      if (gig) {
        result.push({
          chatId: chat._id,
          freelancer,
          gig,
        });
      }

    }

    res.status(200).json({
      success: true,
      freelancers: result,
    });

  } catch (error) {
    next(error);
  }
}; //This is similar to getMyClients(), but it is used to get freelancers the logged-in user has chatted with.




module.exports = {
  createChat,
  getChats,
  getMessages,
  sendMessage,
  markAsRead,
  getMyClients,
  getMyFreelancers,
};