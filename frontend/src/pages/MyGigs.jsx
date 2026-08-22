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
      bg-[#f7f7f7]
      py-12
      px-5
    "
  >

    <div className="max-w-7xl mx-auto">


      {/* ================= HEADER ================= */}

      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-4
          mb-10
          pb-8
          border-b
          border-[#e4e4e4]
        "
      >

        <div>

          <h1
            className="
              text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              text-[#222325]
            "
          >
            My Gigs
          </h1>

          <p
            className="
              text-lg
              font-medium
              text-[#62646a]
              mt-3
            "
          >
            Manage all your published gigs in one place.
          </p>

        </div>

      </div>


      {/* ================= GIGS ================= */}

      <div
        className="
          grid
          md:grid-cols-2
          gap-6
        "
      >

        {gigs.map((gig) => (

          <div
            key={gig._id}
            className="
              group
              bg-white
              border
              border-[#e4e4e4]
              rounded-xl
              overflow-hidden
              shadow-sm
              hover:shadow-lg
              transition-all
              duration-300
            "
          >


            {/* ================= GIG HEADER ================= */}

            <div
              className="
                p-7
                border-b
                border-[#eeeeee]
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                "
              >

                <div className="flex-1">

                  <h2
                    className="
                      text-2xl
                      md:text-3xl
                      font-extrabold
                      text-[#222325]
                      leading-tight
                      group-hover:text-[#1dbf73]
                      transition
                    "
                  >
                    {gig.title}
                  </h2>

                  <p
                    className="
                      mt-2
                      text-sm
                      font-semibold
                      text-[#62646a]
                    "
                  >
                    {gig.category}
                  </p>

                </div>


                {/* PRICE */}

                <div className="
                  text-right
                  shrink-0
                ">

                  <p
                    className="
                      text-xs
                      font-bold
                      text-[#74767e]
                      uppercase
                      tracking-wide
                    "
                  >
                    Starting at
                  </p>

                  <p
                    className="
                      text-2xl
                      font-extrabold
                      text-[#222325]
                      mt-1
                    "
                  >
                    ₹{gig.price}
                  </p>

                </div>

              </div>


              {/* ================= DETAILS ================= */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-5
                  mt-7
                "
              >

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#74767e]
                    "
                  >
                    Delivery
                  </p>

                  <p
                    className="
                      mt-1
                      text-[16px]
                      font-extrabold
                      text-[#222325]
                    "
                  >
                    {gig.deliveryTime} Days
                  </p>

                </div>


                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-wide
                      text-[#74767e]
                    "
                  >
                    Location
                  </p>

                  <p
                    className="
                      mt-1
                      text-[16px]
                      font-extrabold
                      text-[#222325]
                    "
                  >
                    {gig.location}
                  </p>

                </div>

              </div>

            </div>


            {/* ================= DESCRIPTION ================= */}

            <div className="px-7 pt-7">

              <h3
                className="
                  text-lg
                  font-extrabold
                  text-[#222325]
                  mb-3
                "
              >
                Description
              </h3>

              <p
                className="
                  text-[#62646a]
                  leading-7
                  text-[15px]
                  font-medium
                "
              >
                {gig.description}
              </p>

            </div>


            {/* ================= SKILLS ================= */}

            <div className="px-7 pt-7">

              <h3
                className="
                  text-lg
                  font-extrabold
                  text-[#222325]
                  mb-4
                "
              >
                Skills
              </h3>


              <div className="flex flex-wrap gap-2.5">

                {gig.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#f2f2f2]
                      border
                      border-[#e4e4e4]
                      text-[#222325]
                      text-sm
                      font-bold
                      hover:bg-[#e8e8e8]
                      transition
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>


            {/* ================= FOOTER ================= */}

            <div
              className="
                px-7
                py-6
                mt-7
                border-t
                border-[#eeeeee]
                flex
                items-center
                justify-between
                gap-4
              "
            >

              <div>

                <p
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-wide
                    text-[#74767e]
                  "
                >
                  Gig Status
                </p>

                <p
                  className="
                    text-sm
                    font-extrabold
                    text-[#1dbf73]
                    mt-1
                  "
                >
                  Active
                </p>

              </div>


              <Link
                to="/freelancer-chats"
                className="
                  bg-[#222325]
                  text-white
                  px-7
                  py-3
                  rounded-md
                  font-extrabold
                  text-[15px]
                  hover:bg-black
                  hover:-translate-y-0.5
                  transition-all
                  duration-200
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