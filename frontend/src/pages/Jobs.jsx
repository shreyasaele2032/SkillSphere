import { useEffect, useState, useContext } from "react";
import jobService from "../services/jobService";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";


const Jobs = () => {

  const { user } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [loading, setLoading] = useState(true);



  useEffect(() => {

    fetchJobs();

    if(user?.role === "freelancer"){
      fetchAppliedJobs();
    }

  }, [user]);




  const fetchJobs = async () => {
  try {

    let data;

    if (user?.role === "client") {
      data = await jobService.getMyJobs();
    } else {
      data = await jobService.getJobs();
    }

    setJobs(data.jobs);

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to load jobs."
    );

  } finally {

    setLoading(false);

  }
};





  const fetchAppliedJobs = async () => {

    try {

      const response = await api.get(
        "/jobs/my-applications"
      );


      const ids = response.data.applications.map(
        (application)=> application.jobId
      );


      setAppliedJobs(ids);


    } catch(error) {

      console.log(
        "Failed to fetch applications",
        error
      );

    }

  };






  if (loading) {

    return (

      <div className="min-h-screen flex justify-center items-center text-xl font-semibold">

        Loading jobs...

      </div>

    );

  }




  return (
  <div className="min-h-screen bg-white py-12 px-6">

    <div className="max-w-7xl mx-auto">

      {/* Page Header */}
      <div className="mb-10">

        <p className="text-green-600 font-semibold text-sm uppercase tracking-wide">
          Explore Opportunities
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Jobs Posted
        </h1>

        <p className="text-gray-500 mt-3 max-w-2xl">
          Discover projects posted by clients and find opportunities
          that match your skills and experience.
        </p>

      </div>


      {/* Jobs */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="
              bg-white
              border
              border-gray-200
              rounded-xl
              overflow-hidden
              hover:shadow-xl
              hover:-translate-y-1
              transition-all
              duration-300
              flex
              flex-col
            "
          >

            {/* Job Header */}
            <div className="px-6 pt-6">

              <div className="flex items-start justify-between gap-3">

                <h2 className="
                  text-xl
                  font-semibold
                  text-gray-900
                  leading-7
                ">
                  {job.title}
                </h2>

                <span className="
                  shrink-0
                  bg-gray-100
                  text-gray-700
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-medium
                ">
                  {job.category}
                </span>

              </div>

            </div>


            {/* Job Details */}
            <div className="p-6 flex-1">

              {/* Description */}
              <div className="mb-6">

                <p className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-gray-400
                  mb-2
                ">
                  Description
                </p>

                <p className="
                  text-sm
                  text-gray-600
                  leading-6
                  line-clamp-3
                ">
                  {job.description}
                </p>

              </div>


              {/* Information */}
              <div className="
                border-t
                border-gray-100
                pt-5
                space-y-4
              ">

                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-500">
                    Category
                  </span>

                  <span className="
                    text-sm
                    font-medium
                    text-gray-900
                  ">
                    {job.category}
                  </span>

                </div>


                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-500">
                    Experience
                  </span>

                  <span className="
                    text-sm
                    font-medium
                    text-gray-900
                  ">
                    {job.experienceLevel}
                  </span>

                </div>


                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-500">
                    Budget
                  </span>

                  <span className="
                    text-sm
                    font-bold
                    text-gray-900
                  ">
                    ₹{job.budget}
                  </span>

                </div>


                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-500">
                    Location
                  </span>

                  <span className="
                    text-sm
                    font-medium
                    text-gray-900
                  ">
                    {job.location}
                  </span>

                </div>


                <div className="flex justify-between items-center">

                  <span className="text-sm text-gray-500">
                    Deadline
                  </span>

                  <span className="
                    text-sm
                    font-medium
                    text-gray-900
                  ">
                    {job.deadline
                      ? new Date(job.deadline)
                          .toLocaleDateString("en-GB")
                          .replace(/\//g, "-")
                      : "Not specified"}
                  </span>

                </div>

              </div>

            </div>


            {/* Footer */}
            <div className="
              border-t
              border-gray-200
              px-6
              py-5
              bg-gray-50
            ">

              {user?.role === "freelancer" && (

                appliedJobs.includes(job._id) ? (

                  <button
                    disabled
                    className="
                      w-full
                      bg-gray-300
                      text-gray-600
                      py-3
                      rounded-lg
                      text-sm
                      font-semibold
                      cursor-not-allowed
                    "
                  >
                    Applied ✓
                  </button>

                ) : (

                  <Link
                    to={`/jobs/${job._id}/apply`}
                    className="
                      block
                      w-full
                      text-center
                      bg-black
                      hover:bg-gray-800
                      text-white
                      py-3
                      rounded-lg
                      text-sm
                      font-semibold
                      transition-all
                      duration-200
                    "
                  >
                    Apply Now
                  </Link>

                )

              )}

            </div>

          </div>

        ))}

      </div>


      {/* No Jobs */}
      {jobs.length === 0 && (

        <div className="
          text-center
          mt-20
          py-16
          border
          border-gray-200
          rounded-xl
          bg-gray-50
        ">

          <h2 className="
            text-2xl
            font-bold
            text-gray-900
          ">
            No Jobs Available Now
          </h2>

          <p className="
            text-gray-500
            mt-3
          ">
            Check back later for new opportunities.
          </p>

        </div>

      )}

    </div>

  </div>
);

};


export default Jobs;