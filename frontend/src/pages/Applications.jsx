import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import jobService from "../services/jobService";
import api from "../services/api";


const Applications = () => {


  const [applicants, setApplicants] = useState([]);

  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();





  useEffect(() => {

    fetchApplications();

  }, []);






  const fetchApplications = async () => {

    try {


      const data = await jobService.getAllApplications();


      console.log(
        "Applications:",
        data.applications
      );


      setApplicants(
        data.applications || []
      );


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



const handleAccept = async (application) => {
  try {
    await api.put(
      `/jobs/${application.jobId}/select/${application.freelancer._id}`
    );

    fetchApplications();

  } catch (error) {
    console.error(error);
    alert(
      error.response?.data?.message ||
      "Failed to select freelancer"
    );
  }
};




  // Create chat with selected freelancer

  const handleSelect = async (application) => {
  try {
    const freelancerId = application.freelancer._id;

    const response = await api.post("/chat", {
      userId: freelancerId,
    });

    const chatId = response.data.chat._id;

    // Update UI
    setApplicants((prev) =>
      prev.map((app) =>
        app.freelancer._id === freelancerId
          ? { ...app, selected: true, chatId }
          : app
      )
    );

    navigate(`/chat/${chatId}`);

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


        Loading applications...


      </div>

    );


  }








 return (

  <div
    className="
    min-h-screen
    py-12
    px-4
    bg-white
    "
  >

    <div className="max-w-6xl mx-auto">


      {/* Heading */}

      <h1
        className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-gray-900
        text-center
        mb-12
        tracking-tight
        "
      >

        Freelancer Applications

      </h1>


      {
        applicants.length === 0 ? (

          <div
            className="
            bg-white
            border
            border-gray-200
            rounded-2xl
            shadow-sm
            p-10
            text-center
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              text-gray-900
              "
            >

              No applications yet

            </h2>


            <p
              className="
              text-gray-500
              mt-3
              "
            >

              Freelancers who apply will appear here.

            </p>


          </div>

        ) : (

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-7
            "
          >

            {
              applicants.map((application)=>(

                <div

                  key={application._id}

                  className="
                  bg-white
                  border
                  border-gray-200
                  rounded-2xl
                  shadow-sm
                  p-7
                  hover:shadow-lg
                  transition-shadow
                  duration-200
                  "
                >


                  <h2
                    className="
                    text-2xl
                    font-bold
                    text-gray-900
                    "
                  >

                    {application.name}

                  </h2>


                  <p
                    className="
                    mt-4
                    text-gray-600
                    "
                  >

                    <span className="font-semibold text-gray-900">
                      Email:
                    </span>{" "}

                    {application.email}

                  </p>


                  <p
                    className="
                    mt-2
                    text-gray-600
                    "
                  >

                    <span className="font-semibold text-gray-900">
                      Phone:
                    </span>{" "}

                    {application.phone}

                  </p>


                  <p
                    className="
                    mt-2
                    text-gray-600
                    "
                  >

                    <span className="font-semibold text-gray-900">
                      Portfolio:
                    </span>{" "}

                    {application.portfolio || "Not provided"}

                  </p>


                  <div className="mt-5">

                    <h3
                      className="
                      font-semibold
                      text-gray-900
                      "
                    >

                      Cover Letter:

                    </h3>


                    <p
                      className="
                      text-gray-600
                      mt-2
                      leading-relaxed
                      "
                    >

                      {application.coverLetter}

                    </p>

                  </div>


                  {
                    application.status === "accepted" ? (

                      <div className="mt-7 space-y-3">


                        <button

                          onClick={() => handleSelect(application)}

                          className="
                          w-full
                          bg-[#1dbf73]
                          hover:bg-[#19a463]
                          text-white
                          py-3
                          rounded-lg
                          font-semibold
                          shadow-sm
                          hover:shadow-md
                          transition-all
                          duration-200
                          "

                        >

                          Chat with Freelancer

                        </button>


                        <button

                          onClick={() => {
  console.log("Freelancer ID:", application.freelancer._id);
  console.log("Job ID:", application.jobId);

  navigate(
    `/jobs/${application.jobId}/create-milestone/${application.freelancer._id}`
  );
}}

                          className="
                          w-full
                          bg-gray-900
                          hover:bg-black
                          text-white
                          py-3
                          rounded-lg
                          font-semibold
                          shadow-sm
                          hover:shadow-md
                          transition-all
                          duration-200
                          "

                        >

                          Create Milestone

                        </button>


                      </div>

                    ) : (

                      <button

                        onClick={() => handleAccept(application)}

                        className="
                        mt-7
                        w-full
                        bg-[#1dbf73]
                        hover:bg-[#19a463]
                        text-white
                        py-3
                        rounded-lg
                        font-semibold
                        shadow-sm
                        hover:shadow-md
                        transition-all
                        duration-200
                        "

                      >

                        Select Freelancer

                      </button>

                    )

                  }


                </div>

              ))

            }

          </div>

        )

      }


    </div>

  </div>

);


};


export default Applications;