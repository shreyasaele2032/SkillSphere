import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import jobService from "../services/jobService";
import api from "../services/api";

const MyApplications = () => {

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {

      const data = await jobService.getMyApplications();
      console.log(data);

      setApplications(data.applications || []);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to load applications"
      );

    } finally {

      setLoading(false);

    }
  };

  const handleChat = async (application) => {
    try {

      const response = await api.post("/chat", {
        userId: application.client._id,
      });

      navigate(`/chat/${response.data.chat._id}`);

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to start chat"
      );

    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
  <div
    className="
    min-h-screen
    py-12
    px-5

    bg-gradient-to-br
    from-black
    via-gray-700
    to-white
    "
  >

    <div className="max-w-7xl mx-auto">


      <h1
        className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-center
        text-white
        mb-16
        drop-shadow-lg
        "
      >
        My Applications
      </h1>



      {applications.length === 0 ? (

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
            No Applications Yet
          </h2>

          <p
            className="
            mt-4
            text-gray-200
            text-lg
            "
          >
            Start applying for projects and build your freelancing career.
          </p>


        </div>


      ) : (


        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >



          {applications.map((application) => (


            <div
              key={application._id}

              className="
              group
              relative

              bg-white/25

              backdrop-blur-xl

              border
              border-white/30

              rounded-3xl

              shadow-2xl

              p-8

              hover:-translate-y-3

              hover:bg-white/30

              transition-all

              duration-500
              "
            >



              <div
                className="
                absolute
                inset-0
                rounded-3xl
                bg-gradient-to-br
                from-white/20
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition
                "
              />


              <div className="relative z-10">


              <h2
                className="
                text-3xl
                font-black
                text-white
                "
              >
                {application.title}
              </h2>



              <div
                className="
                mt-6
                space-y-4
                text-gray-100
                text-lg
                "
              >


                <p>
                  <span className="font-bold text-white">
                    Category:
                  </span>{" "}
                  {application.category}
                </p>



                <p>
                  <span className="font-bold text-white">
                    Budget:
                  </span>{" "}
                  ₹{application.budget}
                </p>



                <p>
                  <span className="font-bold text-white">
                    Client:
                  </span>{" "}
                  {application.client.name}
                </p>



                <p className="flex items-center gap-3">


                  <span className="font-bold text-white">
                    Status:
                  </span>


                  <span
                    className={

                      application.status === "accepted"

                      ?

                      `
                      px-4
                      py-1
                      rounded-full
                      bg-green-500/30
                      text-green-200
                      font-bold
                      text-sm
                      `

                      :

                      application.status === "rejected"

                      ?

                      `
                      px-4
                      py-1
                      rounded-full
                      bg-red-500/30
                      text-red-200
                      font-bold
                      text-sm
                      `

                      :

                      `
                      px-4
                      py-1
                      rounded-full
                      bg-yellow-500/30
                      text-yellow-200
                      font-bold
                      text-sm
                      `
                    }
                  >

                    {application.status}

                  </span>


                </p>


              </div>





              {application.status === "accepted" && (


                <button

                  onClick={() => handleChat(application)}

                  className="
                  mt-8
                  w-full

                  bg-gradient-to-r
                  from-blue-500
                  to-indigo-600

                  text-white

                  py-4

                  rounded-2xl

                  font-bold

                  shadow-xl

                  hover:scale-105

                  transition-all
                  duration-300
                  "

                >

                  Chat with Client

                </button>


              )}



              </div>


            </div>



          ))}



        </div>


      )}



    </div>


  </div>
);
};

export default MyApplications;