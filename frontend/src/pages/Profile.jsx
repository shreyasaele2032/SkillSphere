
//Profile of freelancer displayed
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileService from "../services/profileService";

const Profile = () => {
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
    <div className="
      min-h-screen
      flex
      flex-col
      justify-center
      items-center
      bg-gradient-to-br
      from-gray-100
      via-white
      to-gray-200
      px-5
    ">

      <div className="
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        rounded-3xl
        shadow-2xl
        p-12
        text-center
      ">

        <h2 className="
          text-4xl
          font-black
          text-black
          mb-6
        ">
          Profile Not Created
        </h2>


        <p className="
          text-gray-600
          mb-8
          text-lg
        ">
          Create your freelancer profile to showcase your skills.
        </p>


        <Link
          to="/freelancer-profile"
          className="
            inline-block
            bg-black
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            shadow-xl
            hover:bg-gray-800
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Create Profile
        </Link>


      </div>

    </div>
  );
}


return (
  <div className="min-h-screen bg-gray-100 py-12 px-6">

    <div className="max-w-7xl mx-auto">


      {/* Main Layout */}

      <div className="grid lg:grid-cols-12 gap-8">

        {/* LEFT CARD */}

        <div className="lg:col-span-4">

          <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-8
          text-center
          border
          border-gray-200
          ">

           <img
  src={
    profile.profileImage
      ? `http://localhost:8006${profile.profileImage}`
      : "https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
  }
  alt={profile.user.name}
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
              {profile.user.name}
            </h2>

            <p className="text-gray-500 mt-1">
              {profile.title}
            </p>

            <hr className="my-6"/>

            <div className="space-y-5 text-left">

              

              
              

            </div>
            {/* Bio */}

<div className="mt-8 text-left">

  <h3 className="
    text-lg
    font-bold
    text-indigo-900
    mb-3
  ">
    About Me
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
      {profile.bio}
    </p>
  </div>

</div>

            <Link
              to="/freelancer-profile"
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

        {/* RIGHT CARD */}

        <div className="lg:col-span-8">

          <div className="
          bg-white
          rounded-3xl
          shadow-xl
          border
          border-gray-200
          p-10
          ">

            <div className="border-b pb-4 mb-8">

              <h2 className="
              text-2xl
              font-bold
              text-indigo-900
              ">
                Account Information
              </h2>

            </div>

            <div className="grid md:grid-cols-2 gap-7">

              <div>
                <label className="text-gray-500">
                  Name
                </label>

                <div className="
                mt-2
                bg-gray-100
                rounded-xl
                p-4
                ">
                  {profile.user.name}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Email
                </label>

                <div className="
                mt-2
                bg-gray-100
                rounded-xl
                p-4
                ">
                  {profile.user.email}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Experience
                </label>

                <div className="
                mt-2
                bg-gray-100
                rounded-xl
                p-4
                ">
                  {profile.experience}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Hourly Rate
                </label>

                <div className="
                mt-2
                bg-gray-100
                rounded-xl
                p-4
                ">
                  ₹{profile.hourlyRate}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Skills
                </label>

                <div className="
                mt-2
                bg-gray-100
                rounded-xl
                p-4
                ">
                  {profile.skills?.join(", ")}
                </div>
              </div>

              <div>
                <label className="text-gray-500">
                  Location
                </label>

                <div className="
                mt-2
                bg-gray-100
                rounded-xl
                p-4
                ">
                  {profile.location}
                </div>
              </div>

              <div>
  <label className="text-gray-500">
    Github
  </label>

  <a
    href={profile.github}
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-2
      block
      bg-gray-100
      rounded-xl
      p-4
      break-all
      text-blue-600
      hover:text-blue-800
      hover:underline
      transition
    "
  >
    {profile.github}
  </a>
</div>

              <div>
  <label className="text-gray-500">
    LinkedIn
  </label>

  <a
    href={profile.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-2
      block
      bg-gray-100
      rounded-xl
      p-4
      break-all
      text-blue-600
      hover:text-blue-800
      hover:underline
      transition
    "
  >
    {profile.linkedin}
  </a>
</div>

              <div>
  <label className="text-gray-500">
    Portfolio
  </label>

  <a
    href={profile.portfolio}
    target="_blank"
    rel="noopener noreferrer"
    className="
      mt-2
      block
      bg-gray-100
      rounded-xl
      p-4
      break-all
      text-blue-600
      hover:text-blue-800
      hover:underline
      transition
    "
  >
    {profile.portfolio}
  </a>
</div>

<div>
  <label className="text-gray-500">
    Resume
  </label>

  <div
    className="
      mt-2
      bg-gray-100
      rounded-xl
      p-4
    "
  >
    {profile.resume ? (
      <a
        href={`http://localhost:8006/${profile.resume.replace(/\\/g, "/")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          text-blue-600
          hover:text-blue-800
          hover:underline
          font-medium
          transition
        "
      >
        📄 View Resume
      </a>
    ) : (
      <span className="text-gray-500">
        No resume uploaded
      </span>
    )}
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

export default Profile;