

import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
    {/* Main Content */}
    <div className="p-5">
      {/* Title + Category */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
            {job.title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Posted by{" "}
            <span className="font-medium text-gray-700">
              {job.client}
            </span>
          </p>
        </div>

        <span className="shrink-0 border border-gray-200 bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
          {job.category}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-6 line-clamp-3 mb-5">
        {job.description}
      </p>

      {/* Job Details */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-600 mb-5">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-400" />
          <span className="truncate">{job.location}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaMoneyBillWave className="text-gray-400" />
          <span className="font-semibold text-gray-800">
            ₹{job.budget}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaBriefcase className="text-gray-400" />
          <span>{job.type}</span>
        </div>

        <div className="flex items-center gap-2">
          <FaClock className="text-gray-400" />
          <span>{job.duration}</span>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-5">
        {job.skills?.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-xs font-medium hover:bg-gray-200 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Footer */}
    <div className="border-t border-gray-200 px-5 py-4 flex items-center justify-between">
      <span className="text-xs text-gray-500">
        Posted {job.postedAgo}
      </span>

      <Link
        to={`/jobs/${job._id}`}
        className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
      >
        Apply Now
      </Link>
    </div>
  </div>
);
};

export default JobCard;