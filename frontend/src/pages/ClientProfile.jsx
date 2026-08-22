import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ClientProfile = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);


  const [profile, setProfile] = useState({
    title: "",
    contactPerson: "",
    email: "",
    location: "",
    portfolio: "",
    bio: "",
  });



  useEffect(() => {
    fetchProfile();
  }, []);



  const fetchProfile = async () => {

    try {

      const res = await api.get("/profile/me");

      const data = res.data.profile;


      setProfile({

        title: data.title || "",

        contactPerson: data.user?.name || "",

        email: data.user?.email || "",

        location: data.location || "",

        portfolio: data.portfolio || "",

        bio: data.bio || "",

      });


    } catch(error){

      console.log(error);
      alert("Failed to load profile");

    }
    finally{

      setLoading(false);

    }

  };





  const handleChange = (e)=>{

    setProfile({

      ...profile,

      [e.target.name]: e.target.value,

    });

  };





  const handleSubmit = async(e)=>{

    e.preventDefault();


    try{


      const profileData = {

        title: profile.title,

        location: profile.location,

        portfolio: profile.portfolio,

        bio: profile.bio,

      };


      await api.put("/profile", profileData);


      alert("Profile Updated Successfully");


      navigate("/client-profile");


    }
    catch(error){

      console.log(error);

      alert("Failed to update profile");

    }

  };





  if(loading){

    return(

      <div className="min-h-screen flex justify-center items-center text-2xl font-semibold">

        Loading...

      </div>

    );

  }





  return (

  <div
    className="
    min-h-screen
    bg-white
    py-12
    px-4
    "
  >

    <div
      className="
      max-w-5xl
      mx-auto
      bg-white
      border
      border-gray-200
      rounded-2xl
      shadow-sm
      p-8
      md:p-10
      "
    >

      <h1
        className="
        text-4xl
        font-extrabold
        text-center
        text-gray-900
        mb-10
        tracking-tight
        "
      >
        Edit Client Profile
      </h1>


      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >


        <div className="grid md:grid-cols-2 gap-6">


          <div>

            <label
              className="
              block
              font-semibold
              text-gray-900
              mb-2
              "
            >
              Company Name
            </label>


            <input

              type="text"

              name="title"

              value={profile.title}

              onChange={handleChange}

              className="
              w-full
              bg-white
              border
              border-gray-300
              text-gray-900
              rounded-lg
              px-4
              py-3
              outline-none
              transition
              focus:border-[#1dbf73]
              focus:ring-2
              focus:ring-[#1dbf73]/20
              "

              required

            />

          </div>


          <div>

            <label
              className="
              block
              font-semibold
              text-gray-900
              mb-2
              "
            >
              Contact Person
            </label>


            <input

              type="text"

              name="contactPerson"

              value={profile.contactPerson}

              onChange={handleChange}

              className="
              w-full
              bg-white
              border
              border-gray-300
              text-gray-900
              rounded-lg
              px-4
              py-3
              outline-none
              transition
              focus:border-[#1dbf73]
              focus:ring-2
              focus:ring-[#1dbf73]/20
              "

            />

          </div>


        </div>


        <div className="grid md:grid-cols-2 gap-6">


          <div>

            <label
              className="
              block
              font-semibold
              text-gray-900
              mb-2
              "
            >
              Email
            </label>


            <input

              type="email"

              name="email"

              value={profile.email}

              onChange={handleChange}

              className="
              w-full
              bg-white
              border
              border-gray-300
              text-gray-900
              rounded-lg
              px-4
              py-3
              outline-none
              transition
              focus:border-[#1dbf73]
              focus:ring-2
              focus:ring-[#1dbf73]/20
              "

              required

            />

          </div>


          <div>

            <label
              className="
              block
              font-semibold
              text-gray-900
              mb-2
              "
            >
              Location
            </label>


            <input

              type="text"

              name="location"

              value={profile.location}

              onChange={handleChange}

              className="
              w-full
              bg-white
              border
              border-gray-300
              text-gray-900
              rounded-lg
              px-4
              py-3
              outline-none
              transition
              focus:border-[#1dbf73]
              focus:ring-2
              focus:ring-[#1dbf73]/20
              "

            />

          </div>


        </div>


        <div>

          <label
            className="
            block
            font-semibold
            text-gray-900
            mb-2
            "
          >
            Website
          </label>


          <input

            type="text"

            name="portfolio"

            value={profile.portfolio}

            onChange={handleChange}

            placeholder="https://company.com"

            className="
            w-full
            bg-white
            border
            border-gray-300
            text-gray-900
            rounded-lg
            px-4
            py-3
            outline-none
            transition
            focus:border-[#1dbf73]
            focus:ring-2
            focus:ring-[#1dbf73]/20
            "

          />

        </div>


        <div>

          <label
            className="
            block
            font-semibold
            text-gray-900
            mb-2
            "
          >
            About Company
          </label>


          <textarea

            rows="6"

            name="bio"

            value={profile.bio}

            onChange={handleChange}

            placeholder="Tell clients about your company..."

            className="
            w-full
            bg-white
            border
            border-gray-300
            text-gray-900
            placeholder-gray-400
            rounded-lg
            px-4
            py-3
            outline-none
            resize-none
            transition
            focus:border-[#1dbf73]
            focus:ring-2
            focus:ring-[#1dbf73]/20
            "

          />

        </div>


        <button

          type="submit"

          className="
          w-full
          bg-[#1dbf73]
          hover:bg-[#19a463]
          text-white
          py-4
          rounded-lg
          font-bold
          text-lg
          transition-colors
          duration-200
          shadow-sm
          hover:shadow-md
          "

        >

          Save Profile

        </button>


      </form>


    </div>


  </div>

);

};


export default ClientProfile;