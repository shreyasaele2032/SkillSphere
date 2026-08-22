const Message = require("../models/Message");
const Chat = require("../models/Chat");


const initializeSocket = (io) => {


    io.on("connection", (socket) => {


        console.log(
            "Socket connected:",
            socket.id
        );
        socket.on(
            "joinChat",
            (chatId) => {


                socket.join(chatId);


                console.log(
                    `Socket ${socket.id} joined chat ${chatId}`
                );


            }
        );

        socket.on(
            "sendMessage",
            async(data)=>{


                try {


                    const {
                        chatId,
                        senderId,
                        message,
                        messageType,
                        attachment
                    } = data;

                    const newMessage = await Message.create({

                        chat: chatId,

                        sender: senderId,

                        message: message,

                        messageType:
                            messageType || "text",

                        attachment:
                            attachment || ""

                    });

                    await Chat.findByIdAndUpdate(
                        chatId,
                        {
                            lastMessage: message,

                            lastMessageSender:
                                senderId,

                            lastMessageTime:
                                new Date()
                        }
                    );

                    const populatedMessage = await Message
  .findById(newMessage._id)
  .populate("sender", "name email");


io.to(chatId).emit(
    "receiveMessage",
    populatedMessage
);
                }
                catch(error){


                    console.log(
                        "Message error:",
                        error.message
                    );


                }
            }
        );
        socket.on(
            "disconnect",
            ()=>{
                console.log(
                    "Socket disconnected:",
                    socket.id
                );
            }
        );
    });
};


module.exports = initializeSocket;