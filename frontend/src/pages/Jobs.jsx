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
  <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-white py-12 px-6">

    <div className="max-w-7xl mx-auto">

    

      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold text-white">
          Jobs Posted
        </h1>


      </div>

     

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {jobs.map((job) => (

          <div
            key={job._id}
            className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl hover:-translate-y-2  rounded-3xl transition-all duration-300 overflow-hidden"
          >

       

            <div className="bg-black text-white px-6 py-4">

              <h2 className="text-2xl font-bold">
                {job.title}
              </h2>

            </div>

         

            <div className="p-6 space-y-4">


  <div>
    <p className="font-semibold text-gray-600 mb-1">
      Description
    </p>
    <p className="text-gray-700 text-sm leading-relaxed">
      {job.description}
    </p>
  </div>

  <div className="border-t border-gray-200"></div>


  <div className="flex justify-between">
    <span className="font-semibold text-gray-600">
      Category
    </span>
    <span className="text-black">
      {job.category}
    </span>
  </div>

  <div className="border-t border-gray-200"></div>

 
  <div className="flex justify-between">
    <span className="font-semibold text-gray-600">
      Experience
    </span>
    <span className="text-blue-600 font-medium">
      {job.experienceLevel}
    </span>
  </div>

  <div className="border-t border-gray-200"></div>

 
  <div className="flex justify-between">
    <span className="font-semibold text-gray-600">
      Budget
    </span>
    <span className="text-green-600 font-bold">
      ₹{job.budget}
    </span>
  </div>

  <div className="border-t border-gray-200"></div>

  
  <div className="flex justify-between">
    <span className="font-semibold text-gray-600">
      Location
    </span>
    <span className="text-black">
      {job.location}
    </span>
  </div>

  <div className="border-t border-gray-200"></div>

 
  <div className="flex justify-between">
    <span className="font-semibold text-gray-600">
      Deadline
    </span>
    <span className="text-red-500 font-medium">
      {job.deadline
        ? new Date(job.deadline)
            .toLocaleDateString("en-GB")
            .replace(/\//g, "-")
        : "Not specified"}
    </span>
  </div>

</div>

           

            <div className="border-t border-gray-300 p-6">

              {user?.role === "freelancer" && (

                appliedJobs.includes(job._id) ? (

                  <button
                    disabled
                    className="w-full bg-gray-400 text-white py-3 font-semibold cursor-not-allowed"
                  >
                    Applied ✓
                  </button>

                ) : (

                  <Link
                    to={`/jobs/${job._id}/apply`}
                    className="block w-full text-center bg-black hover:bg-gray-800 text-white py-3 font-semibold transition-all duration-300"
                  >
                    Apply Now
                  </Link>

                )

              )}

            </div>

          </div>

        ))}

      </div>

     

      {jobs.length === 0 && (

        <div className="text-center mt-20">

          <h2 className="text-3xl font-bold text-white">
            No Jobs Available Now
          </h2>

          <p className="text-gray-300 mt-4">
            Check back later for new opportunities.
          </p>

        </div>

      )}

    </div>

  </div>
);

};


export default Jobs;