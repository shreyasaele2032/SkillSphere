// src/components/JobCard.jsx

import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 p-6">
      {/* Client */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            {job.title}
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Posted by <span className="font-medium">{job.client}</span>
          </p>
        </div>

        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
          {job.category}
        </span>
      </div>

   
      <p className="text-gray-600 line-clamp-3 mb-5">
        {job.description}
      </p>

     
      <div className="space-y-3 text-gray-600 mb-6">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-indigo-600" />
          <span>{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-green-600" />
          <span className="font-semibold">
            Budget: ₹{job.budget}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase className="text-blue-600" />
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaClock className="text-orange-500" />
          <span>{job.duration}</span>
        </div>
      </div>

     
      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills?.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center border-t pt-4">
        <span className="text-gray-500 text-sm">
          Posted {job.postedAgo}
        </span>

        <Link
          to={`/jobs/${job._id}`}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;