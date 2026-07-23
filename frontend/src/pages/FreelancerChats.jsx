import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const FreelancerChats = () => {
  const [chats, setChats] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    try {
      const res = await api.get("/chat");
      setChats(res.data.chats);
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <div
    className="
    min-h-screen

    bg-gradient-to-br
    from-black
    via-gray-700
    to-white

    py-10

    px-5
    "
  >

    <div className="max-w-5xl mx-auto">



      <div
        className="
        mb-10

        bg-white/20

        backdrop-blur-xl

        border

        border-white/30

        rounded-3xl

        p-8

        shadow-2xl
        "
      >

        <h1
          className="
          text-4xl

          font-extrabold

          text-white

          tracking-tight
          "
        >
          Clients Who Contacted You
        </h1>


        <p
          className="
          text-gray-200

          mt-2
          "
        >
          View your conversations and continue discussions with clients.
        </p>


      </div>







      {chats.map((chat) => {


        const client = chat.participants.find(
          (p) => p._id !== (user?._id || user?.id)
        );


        return (

          <div

            key={chat._id}

            onClick={() => navigate(`/chat/${chat._id}`)}


            className="
            bg-white/20

            backdrop-blur-xl

            border

            border-white/30

            p-6

            rounded-2xl

            shadow-xl

            mb-5

            cursor-pointer

            transition-all

            duration-300

            hover:bg-white/30

            hover:-translate-y-1
            "

          >



            <h2
              className="
              text-2xl

              font-bold

              text-white
              "
            >
              {client?.name}
            </h2>




            <p
              className="
              text-gray-200

              mt-2

              truncate
              "
            >
              {chat.lastMessage || "No messages"}
            </p>




            <div
              className="
              mt-4

              inline-flex

              items-center

              text-sm

              text-blue-300

              font-semibold
              "
            >
              Open Chat →
            </div>



          </div>

        );

      })}


    </div>

  </div>
);
};

export default FreelancerChats;