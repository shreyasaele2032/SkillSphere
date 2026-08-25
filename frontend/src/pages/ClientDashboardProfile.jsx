import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileService from "../services/profileService";

const ClientDashboardProfile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const data = await profileService.getMyProfile();
      setProfile(data.profile);
    } catch (error) {
      console.log(error);
    }
  };


  if (!profile) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading Profile...
      </div>
    );
  }


  return (
  <div className="min-h-screen bg-white py-12 px-6">
    <div className="max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-12 gap-8">

        {/* Left Card */}

        <div className="lg:col-span-4">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              p-8
              text-center
              hover:shadow-lg
              transition-shadow
              duration-200
            "
          >

            <img
              src={
                profile.profileImage
                  ? `https://skillsphere-nkn4.onrender.com/api${profile.profileImage}`
                  : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
              }
              alt="Client"
              className="
                w-36
                h-36
                rounded-full
                object-cover
                mx-auto
                border-4
                border-green-100
                shadow-md
              "
            />

            <h2 className="text-3xl font-bold text-gray-900 mt-5">
              {profile.user?.name || "Not Available"}
            </h2>

            <p className="text-gray-500 mt-2 font-medium">
              {profile.title || "Company Name"}
            </p>

            <hr className="my-6 border-gray-200" />

            <div className="mt-8 text-left">

              <h3
                className="
                  text-lg
                  font-bold
                  text-gray-900
                  mb-3
                "
              >
                About Company
              </h3>

              <div
                className="
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  p-5
                "
              >
                <p
                  className="
                    text-gray-600
                    leading-7
                    text-sm
                  "
                >
                  {profile.bio || "No information available"}
                </p>
              </div>

            </div>

            <Link
              to="/client/edit"
              className="
                mt-8
                inline-block
                w-full
                bg-[#1dbf73]
                hover:bg-[#19a463]
                text-white
                py-3
                rounded-lg
                font-semibold
                transition-colors
                duration-200
                shadow-sm
              "
            >
              Edit Profile
            </Link>

          </div>

        </div>


        <div className="lg:col-span-8">

          <div
            className="
              bg-white
              rounded-2xl
              border
              border-gray-200
              shadow-sm
              p-8
              lg:p-10
            "
          >

            <div className="border-b border-gray-200 pb-4 mb-8">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-gray-900
                "
              >
                Company Information
              </h2>

              <div className="mt-2 h-1 w-12 bg-[#1dbf73] rounded-full"></div>

            </div>

            <div className="grid md:grid-cols-2 gap-7">

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Company Name
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-lg
                    p-4
                    text-gray-900
                    font-medium
                  "
                >
                  {profile.title || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Contact Person
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-lg
                    p-4
                    text-gray-900
                    font-medium
                  "
                >
                  {profile.user?.name || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Email
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-lg
                    p-4
                    text-gray-900
                    font-medium
                  "
                >
                  {profile.user?.email || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-500">
                  Location
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-50
                    border
                    border-gray-200
                    rounded-lg
                    p-4
                    text-gray-900
                    font-medium
                  "
                >
                  {profile.location || "Not Available"}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </div>
);
};


export default ClientDashboardProfile;