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

//   const handleSearch = async () => {
//   try {

//     setLoading(true);

//     if (search.trim() === "") {
//       await fetchGigs();
//       return;
//     }

//     const data = await gigService.searchGigs(search);

//     setGigs(data.gigs);

//   } catch (error) {

//     console.error(error);

//     alert(
//       error.response?.data?.message ||
//       "Search failed."
//     );

//   } finally {
//     setLoading(false);
//   }
// };
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

    bg-gradient-to-br
    from-black
    via-gray-700
    to-white

    py-10
    px-4
    "
  >

    <div className="max-w-7xl mx-auto">


      <h1
        className="
        text-5xl

        font-extrabold

        text-center

        text-white

        mb-12
        "
      >
        Available Gigs
      </h1>





      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

  {gigs.map((gig) => (

    <div
      key={gig._id}
      className="
      w-full
      max-w-md
      bg-white/20
      backdrop-blur-xl
      border
      border-white/30
      rounded-3xl
      shadow-2xl
      p-6
      transition-all
      duration-300
      hover:bg-white/30
      hover:-translate-y-2
      "
    >




            <h2
              className="
              text-3xl

              font-bold

              text-white
              "
            >
              {gig.title}
            </h2>





            <div className="mt-5 space-y-3 text-gray-100">


              <p>
                <span className="font-bold text-white">
                  Freelancer:
                </span>{" "}
                {gig.freelancer?.name}
              </p>


              <p>
                <span className="font-bold text-white">
                  Category:
                </span>{" "}
                {gig.category}
              </p>


              <p>
                <span className="font-bold text-white">
                  Price:
                </span>{" "}
                ₹{gig.price}
              </p>


              <p>
                <span className="font-bold text-white">
                  Delivery Time:
                </span>{" "}
                {gig.deliveryTime} Days
              </p>


              {/* <p>
                <span className="font-bold text-white">
                  Rating:
                </span>{" "}
                ⭐ {gig.rating}
              </p>


              <p>
                <span className="font-bold text-white">
                  Reviews:
                </span>{" "}
                {gig.reviews}
              </p> */}


              <p>
                <span className="font-bold text-white">
                  Location:
                </span>{" "}
                {gig.location || "Remote"}
              </p>


            </div>








            <div className="mt-8">


              <h3
                className="
                text-xl

                font-bold

                text-white

                mb-3
                "
              >
                Description
              </h3>


              <p
                className="
                text-gray-200

                leading-7
                "
              >
                {gig.description}
              </p>


            </div>









            <div className="mt-8">


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


                {gig.skills?.map((skill,index)=>(


                  <span

                    key={index}

                    className="
                    bg-white/30

                    backdrop-blur-md

                    border

                    border-white/40

                    text-white

                    px-4

                    py-2

                    rounded-full

                    font-medium
                    "
                  >

                    {skill}

                  </span>


                ))}


              </div>


            </div>








            <div className="mt-8 flex gap-4">


              {user?.role === "client" && (

                <button
  onClick={() =>
    handleContact(gig.freelancer._id)
  }
  className="
    bg-blue-600
    hover:bg-blue-700
    text-white
    px-6
    py-3
    rounded-xl
    font-semibold
    shadow-lg
    transition-all
    hover:scale-105
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