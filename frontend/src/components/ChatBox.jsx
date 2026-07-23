import { useEffect, useState, useContext } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useSocket } from "../context/SocketContext";
import { useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";
const ChatBox = () => {
  const { socket } = useSocket();
  const { chatId } = useParams();
  const { user } = useContext(AuthContext);
 const userId = user?._id || user?.id;
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
const fetchMessages = async () => {
      try {
        const response = await api.get(
          `/chat/${chatId}/messages`
        );
        const formattedMessages =
          response.data.messages.map((msg) => ({
            id: msg._id,
            sender:
              msg.sender._id === userId
                ? "me"
                : "other",
            text: msg.message,
            time:
              new Date(
                msg.createdAt
              ).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
          }));
        setMessages(formattedMessages);
      } catch (error) {
        console.log(
          "Fetch messages error:",
          error
        );
      }
    };
    if(chatId && userId){
      fetchMessages();
    }
  }, [chatId, userId]);
  useEffect(() => {
    if (!socket || !chatId) return;
console.log("Sending message:", {
  chatId,
  senderId: userId,
  message: input
});


    // Join chat room

    socket.emit(
      "joinChat",
      chatId
    );
    const receiveMessage = (message) => {
      setMessages((prev) => [
        ...prev,
        {
          id: message._id,
          sender:
            message.sender._id === userId
              ? "me"
              : "other",
          text: message.message,
          time:
            new Date(
              message.createdAt
            ).toLocaleTimeString([], {

              hour:"2-digit",

              minute:"2-digit",

            }),


        }


      ]);



    };


    socket.on(
      "receiveMessage",
      receiveMessage
    );


    return () => {


      socket.off(
        "receiveMessage",
        receiveMessage
      );


    };

  }, [socket, chatId, userId]);
  const sendMessage = () => {
    if (!input.trim()) return;

    if (!socket) return;




    socket.emit(
      "sendMessage",
      {


        chatId,


        senderId:userId,


        message:input,


        messageType:"text",


      }
    );



    setInput("");

  };


  return (
  <div className="w-full bg-white pt-4  px-4 pb-4">

    {/* Chat Container */}
    <div className="w-full h-[calc(100vh-80px)] bg-white rounded-2xl shadow-2xl overflow-hidden border border-white flex flex-col">

      {/* Header */}
      <div className="h-18 bg-black flex items-center justify-between px-8 border-b border-white">

        <div className="flex items-center gap-4">

          <div className="relative">

            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl shadow-md">
              🧑‍💻
            </div>

            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-black"></span>

          </div>

          <div>
            <h2 className="text-white text-lg font-semibold">
              Freelancer
            </h2>

            <p className="text-gray-400 text-xs">
              Online
            </p>
          </div>

        </div>

        <div className="text-white text-sm tracking-wide">
          SkillSphere Chat
        </div>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto px-8 py-5 space-y-4 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100">

        {messages.map((msg) => (

          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "me"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`max-w-[45%] rounded-xl px-4 py-2 transition-all duration-200 hover:shadow-lg ${
                msg.sender === "me"
                  ? "bg-white text-black border border-gray-300 rounded-br-sm shadow-md"
                  : "bg-gray-800 text-white rounded-bl-sm shadow-md"
              }`}
            >

              <p className="text-sm leading-6 break-words">
                {msg.text}
              </p>

              <p
                className={`text-[10px] mt-2 text-right ${
                  msg.sender === "me"
                    ? "text-gray-500"
                    : "text-gray-400"
                }`}
              >
                {msg.time}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Input */}

      <div className="bg-white border-t border-gray-300 px-6 py-4">

        <div className="flex items-center gap-3">

          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 h-11 px-5 rounded-full border border-gray-300 bg-gray-50 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition"
          />

          <button
            onClick={sendMessage}
            className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <FaPaperPlane size={16} />
          </button>

        </div>

      </div>

    </div>

  </div>
);

};

export default ChatBox;