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
  <div className="min-h-screen bg-gray-100 py-12 px-6">
    <div className="max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-12 gap-8">

        {/* Left Card */}

        <div className="lg:col-span-4">

          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              p-8
              text-center
              border
              border-gray-200
            "
          >

            <img
              src={
                profile.profileImage
                  ? `http://localhost:8006${profile.profileImage}`
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
                border-indigo-100
                shadow-lg
              "
            />

            <h2 className="text-3xl font-bold mt-5">
              {profile.user?.name || "Not Available"}
            </h2>

            <p className="text-gray-500 mt-1">
              {profile.title || "Company Name"}
            </p>

            <hr className="my-6" />

            {/* About Company */}

            <div className="mt-8 text-left">

              <h3
                className="
                  text-lg
                  font-bold
                  text-indigo-900
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
                  rounded-2xl
                  p-5
                  shadow-sm
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
                bg-orange-500
                hover:bg-orange-600
                text-white
                py-3
                rounded-xl
                font-semibold
                transition
              "
            >
              Edit Profile
            </Link>

          </div>

        </div>

        {/* Right Card */}

        <div className="lg:col-span-8">

          <div
            className="
              bg-white
              rounded-3xl
              shadow-xl
              border
              border-gray-200
              p-10
            "
          >

            <div className="border-b pb-4 mb-8">

              <h2
                className="
                  text-2xl
                  font-bold
                  text-indigo-900
                "
              >
                Company Information
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-7">

              <div>
                <label className="text-gray-500">
                  Company Name
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-100
                    rounded-xl
                    p-4
                  "
                >
                  {profile.title || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Contact Person
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-100
                    rounded-xl
                    p-4
                  "
                >
                  {profile.user?.name || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Email
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-100
                    rounded-xl
                    p-4
                  "
                >
                  {profile.user?.email || "Not Available"}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Location
                </label>

                <div
                  className="
                    mt-2
                    bg-gray-100
                    rounded-xl
                    p-4
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