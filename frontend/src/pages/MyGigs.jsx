import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gigService from "../services/gigService";

const MyGigs = () => {
  const [gigs, setGigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyGigs();
  }, []);

  const fetchMyGigs = async () => {
    try {
      const data = await gigService.getMyGigs();
      setGigs(data.gigs);
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data?.message ||
          "Failed to load your gigs."
      );
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (gigs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        You haven't created any gigs yet.
      </div>
    );
  }

  return (
  <div
    className="
    min-h-screen
    bg-gradient-to-br
    from-slate-950
    via-gray-900
    to-gray-700
    py-14
    px-6
    "
  >
    <div className="max-w-7xl mx-auto">

      {/* Heading */}

      <div className="mb-14">

        <h1
          className="
          text-5xl
          md:text-6xl
          font-extrabold
          text-white
          tracking-tight
          "
        >
          My Gigs
        </h1>

        <p className="text-gray-300 mt-3 text-lg">
          Manage all your published gigs in one place.
        </p>

      </div>

      {/* Gig Cards */}

      <div className="grid lg:grid-cols-2 gap-10">

        {gigs.map((gig) => (

          <div
            key={gig._id}
            className="
            group
            bg-white/10
            backdrop-blur-2xl
            border
            border-white/20
            rounded-3xl
            shadow-2xl
            overflow-hidden
            transition-all
            duration-500
            hover:-translate-y-2
            hover:shadow-black/40
            hover:border-white/40
            "
          >

            {/* Header */}

            <div className="p-8 border-b border-white/10">

              <h2
                className="
                text-3xl
                font-bold
                text-white
                mb-3
                "
              >
                {gig.title}
              </h2>

              <div
                className="
                grid
                md:grid-cols-2
                gap-y-4
                gap-x-8
                text-gray-300
                "
              >

                <p>
                  <span className="font-semibold text-white">
                    Category
                  </span>
                  <br />
                  {gig.category}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Price
                  </span>
                  <br />
                  ₹{gig.price}
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Delivery
                  </span>
                  <br />
                  {gig.deliveryTime} Days
                </p>

                <p>
                  <span className="font-semibold text-white">
                    Location
                  </span>
                  <br />
                  {gig.location}
                </p>

              </div>

            </div>

            {/* Description */}

            <div className="px-8 py-7">

              <h3
                className="
                text-xl
                font-bold
                text-white
                mb-4
                "
              >
                Description
              </h3>

              <p
                className="
                text-gray-300
                leading-8
                "
              >
                {gig.description}
              </p>

            </div>

            {/* Skills */}

            <div className="px-8 pb-2">

              <h3
                className="
                text-xl
                font-bold
                text-white
                mb-4
                "
              >
                Skills
              </h3>

              <div className="flex flex-wrap gap-3">

                {gig.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="
                    px-5
                    py-2
                    rounded-full
                    bg-white/15
                    border
                    border-white/20
                    text-white
                    text-sm
                    font-medium
                    hover:bg-white/25
                    transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            {/* Footer */}

            <div
              className="
              px-8
              py-7
              mt-6
              border-t
              border-white/10
              flex
              justify-end
              "
            >

              <Link
                to="/freelancer-chats"
                className="
                bg-white
                text-black
                px-8
                py-3
                rounded-xl
                font-semibold
                shadow-lg
                hover:bg-gray-200
                hover:scale-105
                transition-all
                duration-300
                "
              >
                Open Chats
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>
);
};

export default MyGigs;