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
    py-12
    px-6

    bg-gradient-to-br
    from-black
    via-gray-700
    to-white
    "
  >


    <div className="max-w-6xl mx-auto">


      <h1
        className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-white
        mb-16
        tracking-tight
        drop-shadow-lg
        "
      >
        Clients Who Contacted You
      </h1>




      {clients.length === 0 ? (


        <div
          className="
          bg-white/20
          backdrop-blur-xl

          border
          border-white/30

          rounded-3xl

          shadow-2xl

          p-12

          text-center
          "
        >


          <h2
            className="
            text-3xl
            font-bold
            text-white
            "
          >
            No clients yet.
          </h2>


          <p
            className="
            mt-3
            text-gray-200
            text-lg
            "
          >
            Clients who want to collaborate will appear here.
          </p>


        </div>


      ) : (


        <div className="space-y-8">


          {clients.map((item) => (


            <div
              key={item.chatId}

              className="
              group

              bg-white/25

              backdrop-blur-xl

              border
              border-white/30

              rounded-3xl

              shadow-2xl

              p-8

              flex

              flex-col

              md:flex-row

              justify-between

              items-start

              md:items-center

              gap-6

              hover:bg-white/30

              hover:-translate-y-2

              transition-all

              duration-500
              "
            >




              <div className="flex items-center gap-6">


                <div
                  className="
                  w-16
                  h-16

                  rounded-full

                  bg-white/20

                  backdrop-blur-xl

                  border
                  border-white/30

                  text-white

                  flex

                  items-center

                  justify-center

                  text-2xl

                  font-black
                  "
                >
                  
                  {item.client.name.charAt(0)}

                </div>





                <div>


                  <h2
                    className="
                    text-3xl
                    font-black
                    text-white
                    "
                  >
                    {item.client.name}
                  </h2>



                  <p
                    className="
                    mt-1
                    text-gray-200
                    font-medium
                    "
                  >
                    {item.client.role}
                  </p>



                </div>


              </div>






              <Link

                to={`/chat/${item.chatId}`}

                className="
                bg-gradient-to-r

                from-blue-500

                to-indigo-600

                text-white

                px-8

                py-3

                rounded-full

                font-bold

                shadow-xl

                hover:scale-105

                transition-all

                duration-300
                "

              >

                Open Chat

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