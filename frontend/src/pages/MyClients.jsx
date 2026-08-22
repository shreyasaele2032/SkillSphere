import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chatService from "../services/chatService";

const MyClients = () => {

  const [clients, setClients] = useState([]);

  useEffect(() => {
    loadClients();
  }, []);

  const loadClients = async () => {

    try {

      const data = await chatService.getMyClients();

      setClients(data.clients);

    } catch (error) {
      console.error(error);
    }

  };

 return (
  <div
    className="
      min-h-screen
      bg-[#f7f7f7]
      py-12
      px-5
      md:px-8
    "
  >

    <div className="max-w-6xl mx-auto">


      {/* ================= HEADER ================= */}

      <div className="mb-10">

        <h1
          className="
            text-4xl
            md:text-5xl
            font-black
            text-[#222325]
            tracking-tight
          "
        >
          Clients Who Contacted You
        </h1>

        <p
          className="
            mt-3
            text-[#62646a]
            text-lg
            font-medium
          "
        >
          Connect with clients and continue your freelance conversations.
        </p>

      </div>


      {/* ================= EMPTY STATE ================= */}

      {clients.length === 0 ? (

        <div
          className="
            bg-white
            border
            border-[#e4e4e4]
            rounded-xl
            shadow-sm
            p-12
            md:p-16
            text-center
          "
        >

          <div
            className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-[#f1fdf7]
              border
              border-[#d9f5e6]
              flex
              items-center
              justify-center
              text-3xl
              mb-6
            "
          >
            💬
          </div>


          <h2
            className="
              text-3xl
              font-black
              text-[#222325]
            "
          >
            No clients yet.
          </h2>


          <p
            className="
              mt-3
              text-[#62646a]
              text-lg
              font-medium
            "
          >
            Clients who want to collaborate will appear here.
          </p>

        </div>

      ) : (

        /* ================= CLIENT LIST ================= */

        <div className="space-y-4">


          {clients.map((item) => (

            <div
              key={item.chatId}

              className="
                group
                bg-white
                border
                border-[#e4e4e4]
                rounded-xl
                shadow-sm
                p-6
                md:p-7

                flex
                flex-col
                sm:flex-row

                justify-between
                items-start
                sm:items-center

                gap-6

                hover:shadow-md
                hover:border-[#c8c8c8]

                transition-all
                duration-300
              "
            >


              {/* ================= CLIENT INFORMATION ================= */}

              <div
                className="
                  flex
                  items-center
                  gap-5
                "
              >


                {/* CLIENT INITIAL */}

                <div
                  className="
                    w-16
                    h-16
                    shrink-0

                    rounded-full

                    bg-[#1dbf73]

                    text-white

                    flex
                    items-center
                    justify-center

                    text-2xl
                    font-black

                    shadow-sm
                  "
                >

                  {item.client.name.charAt(0)}

                </div>


                {/* CLIENT DETAILS */}

                <div>

                  <h2
                    className="
                      text-2xl
                      font-black
                      text-[#222325]

                      group-hover:text-[#1dbf73]

                      transition
                    "
                  >
                    {item.client.name}
                  </h2>


                  <p
                    className="
                      mt-1
                      text-[#62646a]
                      font-semibold
                    "
                  >
                    {item.client.role}
                  </p>

                </div>


              </div>


              {/* ================= OPEN CHAT ================= */}

              <Link
                to={`/chat/${item.chatId}`}

                className="
                  w-full
                  sm:w-auto

                  bg-[#222325]
                  hover:bg-[#1dbf73]

                  text-white

                  px-8
                  py-3

                  rounded-lg

                  font-extrabold

                  text-center

                  shadow-sm

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                "
              >

                Open Chat →

              </Link>


            </div>

          ))}


        </div>

      )}


    </div>

  </div>
);
};

export default MyClients;