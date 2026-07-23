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
    py-10
    px-4
    bg-gradient-to-br
    from-black
    via-gray-700
    to-white
    "
  >


    <div className="max-w-6xl mx-auto">



      {/* Heading */}

      <h1
        className="
        text-4xl
        md:text-5xl
        font-extrabold
        text-white
        text-center
        mb-12
        drop-shadow-lg
        "
      >

        Freelancer Applications

      </h1>





      {
        applicants.length === 0 ? (


          <div
            className="
            bg-white/20
            backdrop-blur-xl
            border
            border-white/30
            rounded-3xl
            shadow-2xl
            p-10
            text-center
            "
          >


            <h2
              className="
              text-2xl
              font-bold
              text-white
              "
            >

              No applications yet

            </h2>



            <p
              className="
              text-gray-200
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
            gap-8
            "
          >




            {
              applicants.map((application)=>(



                <div

                  key={application._id}

                  className="
                  bg-white/25
                  backdrop-blur-xl
                  border
                  border-white/30
                  rounded-3xl
                  shadow-2xl
                  p-7
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                  "
                >





                  <h2
                    className="
                    text-2xl
                    font-bold
                    text-white
                    "
                  >

                    {application.name}

                  </h2>






                  <p
                    className="
                    mt-4
                    text-gray-200
                    "
                  >

                    <span className="font-semibold text-white">
                      Email:
                    </span>{" "}

                    {application.email}

                  </p>







                  <p
                    className="
                    mt-2
                    text-gray-200
                    "
                  >

                    <span className="font-semibold text-white">
                      Phone:
                    </span>{" "}

                    {application.phone}

                  </p>







                  <p
                    className="
                    mt-2
                    text-gray-200
                    "
                  >

                    <span className="font-semibold text-white">
                      Portfolio:
                    </span>{" "}

                    {application.portfolio || "Not provided"}

                  </p>







                  <div className="mt-5">


                    <h3
                      className="
                      font-semibold
                      text-white
                      "
                    >

                      Cover Letter:

                    </h3>



                    <p
                      className="
                      text-gray-200
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
                          bg-gradient-to-r
                          from-blue-500
                          to-indigo-600
                          hover:scale-105
                          text-white
                          py-3
                          rounded-xl
                          font-semibold
                          shadow-lg
                          transition-all
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
                          bg-gradient-to-r
                          from-green-400
                          to-emerald-600
                          hover:scale-105
                          text-white
                          py-3
                          rounded-xl
                          font-semibold
                          shadow-lg
                          transition-all
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
                        bg-gradient-to-r
                        from-green-400
                        to-green-700
                        hover:scale-105
                        text-white
                        py-3
                        rounded-xl
                        font-semibold
                        shadow-lg
                        transition-all
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