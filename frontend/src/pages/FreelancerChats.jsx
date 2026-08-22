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
      bg-[#f7f7f7]
      py-12
      px-5
    "
  >

    <div className="max-w-5xl mx-auto">


      {/* ================= PAGE HEADER ================= */}

      <div
        className="
          mb-8
          bg-white
          border
          border-[#e4e4e4]
          rounded-xl
          shadow-sm
          p-8
        "
      >

        <h1
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-[#222325]
            tracking-tight
          "
        >
          Clients Who Contacted You
        </h1>

        <p
          className="
            text-[#62646a]
            mt-3
            text-lg
            font-medium
          "
        >
          View your conversations and continue discussions with clients.
        </p>

      </div>


      {/* ================= CLIENT LIST ================= */}

      <div className="space-y-4">

        {chats.map((chat) => {


          const client = chat.participants.find(
            (p) => p._id !== (user?._id || user?.id)
          );


          return (

            <div
              key={chat._id}
              onClick={() => navigate(`/chat/${chat._id}`)}
              className="
                group
                bg-white
                border
                border-[#e4e4e4]
                rounded-xl
                shadow-sm
                p-6
                cursor-pointer
                transition-all
                duration-300
                hover:shadow-md
                hover:border-[#c8c8c8]
                hover:-translate-y-1
              "
            >


              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                "
              >


                {/* ================= CLIENT INFO ================= */}

                <div
                  className="
                    flex
                    items-center
                    gap-4
                    min-w-0
                  "
                >

                  {/* CLIENT AVATAR */}

                  <div
                    className="
                      w-14
                      h-14
                      shrink-0
                      rounded-full
                      bg-[#f1fdf7]
                      border
                      border-[#d9f5e6]
                      flex
                      items-center
                      justify-center
                      text-2xl
                    "
                  >
                    👤
                  </div>


                  {/* NAME + MESSAGE */}

                  <div className="min-w-0">

                    <h2
                      className="
                        text-xl
                        md:text-2xl
                        font-extrabold
                        text-[#222325]
                        group-hover:text-[#1dbf73]
                        transition
                      "
                    >
                      {client?.name}
                    </h2>


                    <p
                      className="
                        text-[#62646a]
                        mt-1.5
                        text-[15px]
                        font-medium
                        truncate
                      "
                    >
                      {chat.lastMessage || "No messages"}
                    </p>

                  </div>

                </div>


                {/* ================= OPEN CHAT ================= */}

                <div
                  className="
                    shrink-0
                    hidden
                    sm:flex
                    items-center
                    gap-2
                    text-[#222325]
                    font-extrabold
                    text-sm
                    group-hover:text-[#1dbf73]
                    transition
                  "
                >
                  Open Chat

                  <span
                    className="
                      text-lg
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>

                </div>


              </div>


              {/* MOBILE OPEN CHAT */}

              <div
                className="
                  sm:hidden
                  mt-5
                  pt-4
                  border-t
                  border-[#eeeeee]
                  text-[#1dbf73]
                  font-extrabold
                  text-sm
                "
              >
                Open Chat →

              </div>


            </div>

          );

        })}

      </div>


    </div>

  </div>
);
};

export default FreelancerChats;