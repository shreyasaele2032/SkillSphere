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
  <div className="w-full bg-[#f7f7f7] pt-4 px-4 pb-4">

    <div className="
      w-full
      h-[calc(100vh-80px)]
      bg-white
      rounded-xl
      shadow-sm
      overflow-hidden
      border
      border-[#e4e4e4]
      flex
      flex-col
    ">


      {/* ================= CHAT HEADER ================= */}

      <div className="
        h-[72px]
        bg-white
        flex
        items-center
        justify-between
        px-6
        lg:px-8
        border-b
        border-[#e4e4e4]
      ">

        <div className="flex items-center gap-4">

          <div className="relative">

            <div className="
              w-12
              h-12
              rounded-full
              bg-[#f1fdf7]
              flex
              items-center
              justify-center
              text-2xl
              border
              border-[#d9f5e6]
            ">
              🧑‍💻
            </div>

            <span className="
              absolute
              bottom-0
              right-0
              w-3.5
              h-3.5
              rounded-full
              bg-[#1dbf73]
              border-2
              border-white
            " />

          </div>


          <div>

            <h2 className="
              text-[#222325]
              text-lg
              font-extrabold
            ">
              Freelancer
            </h2>

            <p className="
              text-[#1dbf73]
              text-xs
              font-bold
              mt-0.5
            ">
              Online
            </p>

          </div>

        </div>


        <div className="
          hidden
          sm:block
          text-[#62646a]
          text-sm
          font-bold
          tracking-wide
        ">
          SkillSphere Chat
        </div>

      </div>


      {/* ================= MESSAGES ================= */}

      <div className="
        flex-1
        overflow-y-auto
        px-5
        sm:px-8
        py-6
        space-y-4
        bg-[#fafafa]
      ">

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
              className={`max-w-[75%] sm:max-w-[55%] px-5 py-3 shadow-sm transition-all duration-200 hover:shadow-md ${
                msg.sender === "me"
                  ? "bg-[#1dbf73] text-white rounded-2xl rounded-br-sm"
                  : "bg-white text-[#222325] border border-[#e4e4e4] rounded-2xl rounded-bl-sm"
              }`}
            >

              <p className="
                text-[15px]
                font-medium
                leading-6
                break-words
              ">
                {msg.text}
              </p>


              <p
                className={`text-[10px] mt-2 text-right font-medium ${
                  msg.sender === "me"
                    ? "text-white/80"
                    : "text-[#95979d]"
                }`}
              >
                {msg.time}
              </p>

            </div>

          </div>

        ))}

      </div>


      {/* ================= MESSAGE INPUT ================= */}

      <div className="
        bg-white
        border-t
        border-[#e4e4e4]
        px-5
        sm:px-6
        py-4
      ">

        <div className="
          flex
          items-center
          gap-3
        ">

          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="
              flex-1
              h-12
              px-5
              rounded-full
              border
              border-[#b5b5b5]
              bg-white
              text-[#222325]
              text-[15px]
              font-medium
              placeholder:text-[#95979d]
              focus:outline-none
              focus:border-[#222325]
              focus:ring-1
              focus:ring-[#222325]
              transition
            "
          />


          <button
            onClick={sendMessage}
            className="
              w-12
              h-12
              rounded-full
              bg-[#1dbf73]
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#19a463]
              hover:scale-105
              active:scale-95
              transition-all
              duration-200
            "
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