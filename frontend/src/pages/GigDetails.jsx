import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import gigService from "../services/gigService";
import { AuthContext } from "../context/AuthContext";
import { useSearchParams } from "react-router-dom";
import chatService from "../services/chatService";

const GigDetails = () => {
  const [gigs, setGigs] = useState([]);
const [loading, setLoading] = useState(true);
const { user } = useContext(AuthContext);
const navigate = useNavigate();
const [searchParams] = useSearchParams();

const searchQuery = searchParams.get("search");

const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGigs();
  }, []);

  const fetchGigs = async () => {
    try {
      let data;

if(searchQuery){
  data = await gigService.searchGigs(searchQuery);
}
else{
  data = await gigService.getGigs();
}

      // Backend returns { success, count, gigs }
      setGigs(data.gigs);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to load gigs."
      );
    } finally {
      setLoading(false);
    }
  };


const handleContact = async (freelancerId) => {
  try {
    const response = await chatService.createChat(freelancerId);

    navigate(`/chat/${response.chat._id}`);

  } catch (error) {
    console.error(error);

    alert(
      error.response?.data?.message ||
      "Unable to start chat."
    );
  }
};
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading gigs...
      </div>
    );
  }

  if (gigs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        No gigs available.
      </div>
    );
  }

  return (
  <div
    className="
    min-h-screen
    bg-[#f7f7f7]
    py-10
    px-4
    "
  >

    <div className="max-w-7xl mx-auto">

      <h1
        className="
        text-4xl
        md:text-5xl
        font-bold
        text-center
        text-[#222325]
        mb-10
        "
      >
        Available Gigs
      </h1>


      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

        {gigs.map((gig) => (

          <div
            key={gig._id}
            className="
            w-full
            bg-white
            border
            border-[#e4e4e4]
            rounded-xl
            overflow-hidden
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
            hover:-translate-y-1
            "
          >

            {/* Card Header */}

            <div className="p-6 border-b border-[#eeeeee]">

              <h2
                className="
                text-2xl
                font-semibold
                text-[#222325]
                leading-snug
                "
              >
                {gig.title}
              </h2>


              <div className="mt-5 space-y-3 text-sm">

                <p className="text-[#62646a]">
                  <span className="font-semibold text-[#222325]">
                    Freelancer:
                  </span>{" "}
                  {gig.freelancer?.name}
                </p>


                <p className="text-[#62646a]">
                  <span className="font-semibold text-[#222325]">
                    Category:
                  </span>{" "}
                  {gig.category}
                </p>


                <p className="text-[#62646a]">
                  <span className="font-semibold text-[#222325]">
                    Price:
                  </span>{" "}
                  <span className="font-semibold text-[#222325]">
                    ₹{gig.price}
                  </span>
                </p>


                <p className="text-[#62646a]">
                  <span className="font-semibold text-[#222325]">
                    Delivery Time:
                  </span>{" "}
                  {gig.deliveryTime} Days
                </p>


                <p className="text-[#62646a]">
                  <span className="font-semibold text-[#222325]">
                    Location:
                  </span>{" "}
                  {gig.location || "Remote"}
                </p>

              </div>

            </div>


            {/* Description */}

            <div className="p-6">

              <h3
                className="
                text-base
                font-semibold
                text-[#222325]
                mb-3
                "
              >
                Description
              </h3>


              <p
                className="
                text-sm
                text-[#62646a]
                leading-6
                line-clamp-4
                "
              >
                {gig.description}
              </p>

            </div>


            {/* Skills */}

            <div className="px-6 pb-6">

              <h3
                className="
                text-base
                font-semibold
                text-[#222325]
                mb-3
                "
              >
                Skills
              </h3>


              <div className="flex flex-wrap gap-2">

                {gig.skills?.map((skill,index)=>(

                  <span
                    key={index}
                    className="
                    bg-[#f2f2f2]
                    border
                    border-[#e4e4e4]
                    text-[#404145]
                    px-3
                    py-1.5
                    rounded-full
                    text-xs
                    font-medium
                    "
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </div>


            {/* Action */}

            <div
              className="
              px-6
              py-5
              border-t
              border-[#eeeeee]
              bg-white
              "
            >

              {user?.role === "client" && (

                <button
                  onClick={() =>
                    handleContact(gig.freelancer._id)
                  }
                  className="
                    w-full
                    bg-[#1dbf73]
                    hover:bg-[#19a463]
                    text-white
                    px-6
                    py-3
                    rounded-lg
                    font-semibold
                    text-sm
                    transition-all
                    duration-200
                    hover:shadow-md
                  "
                >
                  Contact Freelancer
                </button>

              )}

            </div>


          </div>

        ))}

      </div>

    </div>

  </div>
);
};

export default GigDetails;