// src/components/GigCard.jsx

import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";

const GigCard = ({ gig }) => {
  return (
  <div
    className="
      bg-white
      border
      border-gray-300
      rounded-xl
      shadow-lg
      hover:shadow-2xl
      hover:-translate-y-1
      transition-all
      duration-300
      overflow-hidden
      w-full
      max-w-[360px]
      mx-auto
    "
  >


    <div className="overflow-hidden">

      <img
        src={
          gig.image ||
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
        }
        alt={gig.title}
        className="
          w-full
          h-48
          object-cover
          hover:scale-105
          transition-transform
          duration-500
        "
      />

    </div>

    <div className="p-5">

     

      <div className="flex items-center gap-3 mb-4">

        <img
          src={
            gig.profileImage ||
            "https://i.pravatar.cc/100?img=5"
          }
          alt={gig.freelancer}
          className="
            w-12
            h-12
            rounded-full
            border-2
            border-gray-300
            object-cover
          "
        />

        <div>

          <h3 className="font-semibold text-gray-900 text-base">
            {gig.freelancer}
          </h3>

          <div className="flex items-center gap-1 text-sm text-gray-500">

            <FaMapMarkerAlt className="text-black" />

            {gig.location}

          </div>

        </div>

      </div>

    

      <h2
        className="
          text-lg
          font-bold
          text-black
          mb-3
          line-clamp-2
          min-h-[56px]
        "
      >
        {gig.title}
      </h2>

    

      <p
        className="
          text-gray-600
          text-sm
          leading-6
          mb-5
          line-clamp-3
          min-h-[72px]
        "
      >
        {gig.description}
      </p>

     

      <div className="flex items-center justify-between mb-5">

        <div className="flex items-center gap-1">

          <FaStar className="text-yellow-500" />

          <span className="font-semibold text-gray-900">
            {gig.rating}
          </span>

          <span className="text-gray-500 text-sm">
            ({gig.reviews} reviews)
          </span>

        </div>

      </div>

     

      <div className="flex justify-between items-center border-t border-gray-300 pt-4">

        <div className="flex items-center gap-2">

          <FaMoneyBillWave className="text-green-600 text-lg" />

          <span className="text-xl font-bold text-black">
            ₹{gig.price}
          </span>

        </div>

        <Link
          to={`/gig/${gig._id}`}
          className="
            bg-black
            hover:bg-gray-800
            text-white
            px-4
            py-2
            rounded-lg
            font-medium
            transition-all
            duration-300
            hover:shadow-lg
          "
        >
          View Gig
        </Link>

      </div>

    </div>

  </div>
);
};

export default GigCard;