import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ChatList = () => {

  const [chats, setChats] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    const fetchChats = async () => {

      try {

        const res = await api.get("/chat");

        setChats(res.data.chats);

      } catch(error) {

        console.log(error);

      }

    };


    fetchChats();

  }, []);



  return (

  <div
    className="
      min-h-screen
      bg-[#f7f7f7]
      py-10
      px-5
    "
  >

    <div className="max-w-4xl mx-auto">


      {/* ================= HEADER ================= */}

      <div
        className="
          mb-8
          border-b
          border-[#e4e4e4]
          pb-6
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
          Messages
        </h1>

        <p
          className="
            mt-2
            text-[#62646a]
            text-lg
            font-medium
          "
        >
          Your conversations with clients and freelancers.
        </p>

      </div>


      {/* ================= CHAT LIST ================= */}

      <div className="space-y-3">

        {
          chats.map((chat) => (

            <div
              key={chat._id}
              onClick={() =>
                navigate(`/chat/${chat._id}`)
              }
              className="
                group
                bg-white
                border
                border-[#e4e4e4]
                rounded-xl
                px-6
                py-5
                shadow-sm
                cursor-pointer
                flex
                items-center
                justify-between
                gap-5
                hover:shadow-md
                hover:border-[#c8c8c8]
                hover:-translate-y-0.5
                transition-all
                duration-200
              "
            >


              {/* ================= USER INFO ================= */}

              <div className="
                flex
                items-center
                gap-4
                min-w-0
              ">

                {/* Avatar */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-[#f1fdf7]
                    border
                    border-[#d9f5e6]
                    flex
                    items-center
                    justify-center
                    text-xl
                    shrink-0
                  "
                >
                  👤
                </div>


                {/* Names */}

                <div className="min-w-0">

                  <p
                    className="
                      text-lg
                      font-extrabold
                      text-[#222325]
                      truncate
                      group-hover:text-[#1dbf73]
                      transition
                    "
                  >
                    {
                      chat.participants.map(
                        (person) => person.name
                      ).join(" & ")
                    }
                  </p>

                  <p
                    className="
                      text-sm
                      text-[#74767e]
                      font-medium
                      mt-1
                    "
                  >
                    Click to open conversation
                  </p>

                </div>

              </div>


              {/* ================= ARROW ================= */}

              <div
                className="
                  text-[#74767e]
                  text-xl
                  font-bold
                  group-hover:text-[#1dbf73]
                  group-hover:translate-x-1
                  transition-all
                "
              >
                →
              </div>


            </div>

          ))
        }

      </div>

    </div>

  </div>

);

};


export default ChatList;