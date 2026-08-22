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
      bg-[#f7f7f7]
      py-12
      px-5
    "
  >

    <div className="max-w-7xl mx-auto">


      {/* ================= PAGE HEADER ================= */}

      <div className="
        mb-12
        border-b
        border-[#e4e4e4]
        pb-8
      ">

        <h1
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            tracking-tight
            text-[#222325]
            mb-3
          "
        >
          My Applications
        </h1>

        <p
          className="
            text-lg
            font-medium
            text-[#62646a]
          "
        >
          Track the jobs you've applied for and manage your opportunities.
        </p>

      </div>


      {/* ================= EMPTY STATE ================= */}

      {applications.length === 0 ? (

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

          <div className="
            w-16
            h-16
            mx-auto
            mb-6
            rounded-full
            bg-[#f1fdf7]
            flex
            items-center
            justify-center
            text-[#1dbf73]
            text-3xl
            font-black
          ">
            ✓
          </div>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-extrabold
              text-[#222325]
            "
          >
            No Applications Yet
          </h2>

          <p
            className="
              mt-4
              text-[#62646a]
              text-lg
              font-medium
            "
          >
            Start applying for projects and build your freelancing career.
          </p>

        </div>


      ) : (


        /* ================= APPLICATION CARDS ================= */

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >


          {applications.map((application) => (

            <div
              key={application._id}
              className="
                group
                bg-white
                border
                border-[#e4e4e4]
                rounded-xl
                shadow-sm
                p-7
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >


              {/* ================= CARD HEADER ================= */}

              <div className="
                border-b
                border-[#eeeeee]
                pb-5
                mb-5
              ">

                <h2
                  className="
                    text-2xl
                    font-extrabold
                    text-[#222325]
                    leading-tight
                    group-hover:text-[#1dbf73]
                    transition
                  "
                >
                  {application.title}
                </h2>

              </div>


              {/* ================= APPLICATION DETAILS ================= */}

              <div
                className="
                  space-y-5
                  text-[16px]
                  text-[#62646a]
                "
              >


                <p>
                  <span className="
                    font-extrabold
                    text-[#222325]
                  ">
                    Category:
                  </span>{" "}
                  {application.category}
                </p>


                <p>
                  <span className="
                    font-extrabold
                    text-[#222325]
                  ">
                    Budget:
                  </span>{" "}
                  <span className="
                    font-bold
                    text-[#222325]
                  ">
                    ₹{application.budget}
                  </span>
                </p>


                <p>
                  <span className="
                    font-extrabold
                    text-[#222325]
                  ">
                    Client:
                  </span>{" "}
                  <span className="font-semibold">
                    {application.client.name}
                  </span>
                </p>


                {/* ================= STATUS ================= */}

                <p className="flex items-center gap-3 flex-wrap">

                  <span className="
                    font-extrabold
                    text-[#222325]
                  ">
                    Status:
                  </span>


                  <span
                    className={

                      application.status === "accepted"

                      ?

                      `
                        px-4
                        py-1.5
                        rounded-full
                        bg-[#e6f7ee]
                        text-[#087f45]
                        font-extrabold
                        text-sm
                        capitalize
                      `

                      :

                      application.status === "rejected"

                      ?

                      `
                        px-4
                        py-1.5
                        rounded-full
                        bg-[#fdeaea]
                        text-[#c52222]
                        font-extrabold
                        text-sm
                        capitalize
                      `

                      :

                      `
                        px-4
                        py-1.5
                        rounded-full
                        bg-[#fff4d6]
                        text-[#8a6500]
                        font-extrabold
                        text-sm
                        capitalize
                      `
                    }
                  >

                    {application.status}

                  </span>

                </p>


              </div>


              {/* ================= CHAT BUTTON ================= */}

              {application.status === "accepted" && (

                <button
                  onClick={() => handleChat(application)}
                  className="
                    mt-7
                    w-full
                    h-[50px]
                    bg-[#1dbf73]
                    hover:bg-[#19a463]
                    text-white
                    rounded-md
                    font-extrabold
                    text-[16px]
                    transition
                    duration-200
                  "
                >
                  Chat with Client
                </button>

              )}


            </div>

          ))}


        </div>


      )}


    </div>

  </div>
);
};

export default MyApplications;