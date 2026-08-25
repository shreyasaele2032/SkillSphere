// Profile of freelancer displayed

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileService from "../services/profileService";

const BACKEND_URL = "https://skillsphere-nkn4.onrender.com/api";

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
      <div
        className="
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
        "
      >
        <div
          className="
            bg-white/80
            backdrop-blur-xl
            border
            border-gray-200
            rounded-3xl
            shadow-2xl
            p-12
            text-center
          "
        >
          <h2
            className="
              text-4xl
              font-black
              text-black
              mb-6
            "
          >
            Profile Not Created
          </h2>

          <p
            className="
              text-gray-600
              mb-8
              text-lg
            "
          >
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
    <div className="min-h-screen bg-[#f7f7f7] py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-6">

          {/* LEFT PROFILE CARD */}
          <div className="lg:col-span-4">
            <div
              className="
                bg-white
                border
                border-[#e4e4e4]
                rounded-lg
                p-7
                text-center
              "
            >
              <img
                src={
                  profile.profileImage
                    ? `${BACKEND_URL}${profile.profileImage}`
                    : "https://cdn-icons-png.flaticon.com/512/12225/12225935.png"
                }
                alt={profile.user.name}
                className="
                  w-32
                  h-32
                  rounded-full
                  object-cover
                  mx-auto
                  border
                  border-[#e4e4e4]
                "
              />

              <h2
                className="
                  text-2xl
                  font-bold
                  text-[#222325]
                  mt-5
                "
              >
                {profile.user.name}
              </h2>

              <p
                className="
                  text-[#62646a]
                  text-base
                  mt-2
                "
              >
                {profile.title}
              </p>

              <div className="border-t border-[#e4e4e4] my-6" />

              {/* ABOUT */}
              <div className="text-left">
                <h3
                  className="
                    text-lg
                    font-bold
                    text-[#222325]
                    mb-3
                  "
                >
                  About Me
                </h3>

                <div
                  className="
                    bg-white
                    border
                    border-[#e4e4e4]
                    rounded-md
                    p-4
                  "
                >
                  <p
                    className="
                      text-[#62646a]
                      leading-6
                      text-sm
                    "
                  >
                    {profile.bio}
                  </p>
                </div>
              </div>

              {/* EDIT PROFILE */}
              <Link
                to="/freelancer-profile"
                className="
                  mt-6
                  block
                  w-full
                  bg-[#1dbf73]
                  hover:bg-[#19a463]
                  text-white
                  py-3
                  rounded-md
                  font-semibold
                  text-sm
                  transition
                  duration-200
                "
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* RIGHT ACCOUNT INFORMATION */}
          <div className="lg:col-span-8">
            <div
              className="
                bg-white
                border
                border-[#e4e4e4]
                rounded-lg
                p-6
                sm:p-8
              "
            >

              {/* HEADER */}
              <div
                className="
                  border-b
                  border-[#e4e4e4]
                  pb-5
                  mb-7
                "
              >
                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#222325]
                  "
                >
                  Account Information
                </h2>

                <p
                  className="
                    text-sm
                    text-[#62646a]
                    mt-1
                  "
                >
                  Your professional profile information
                </p>
              </div>

              {/* INFORMATION GRID */}
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">

                {/* NAME */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Name
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      text-[#62646a]
                      text-sm
                    "
                  >
                    {profile.user.name}
                  </div>
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Email
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      text-[#62646a]
                      text-sm
                      break-all
                    "
                  >
                    {profile.user.email}
                  </div>
                </div>

                {/* EXPERIENCE */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Experience
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      text-[#62646a]
                      text-sm
                    "
                  >
                    {profile.experience}
                  </div>
                </div>

                {/* HOURLY RATE */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Hourly Rate
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      text-[#222325]
                      text-sm
                      font-semibold
                    "
                  >
                    ₹{profile.hourlyRate}
                  </div>
                </div>

                {/* SKILLS */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Skills
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      text-[#62646a]
                      text-sm
                    "
                  >
                    {profile.skills?.join(", ")}
                  </div>
                </div>

                {/* LOCATION */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Location
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      text-[#62646a]
                      text-sm
                    "
                  >
                    {profile.location}
                  </div>
                </div>

                {/* GITHUB */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    GitHub
                  </label>

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2
                      block
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      break-all
                      text-[#1dbf73]
                      hover:text-[#19a463]
                      text-sm
                      transition
                    "
                  >
                    {profile.github}
                  </a>
                </div>

                {/* LINKEDIN */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    LinkedIn
                  </label>

                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2
                      block
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      break-all
                      text-[#1dbf73]
                      hover:text-[#19a463]
                      text-sm
                      transition
                    "
                  >
                    {profile.linkedin}
                  </a>
                </div>

                {/* PORTFOLIO */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Portfolio
                  </label>

                  <a
                    href={profile.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      mt-2
                      block
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                      break-all
                      text-[#1dbf73]
                      hover:text-[#19a463]
                      text-sm
                      transition
                    "
                  >
                    {profile.portfolio}
                  </a>
                </div>

                {/* RESUME */}
                <div>
                  <label
                    className="
                      text-sm
                      font-semibold
                      text-[#222325]
                    "
                  >
                    Resume
                  </label>

                  <div
                    className="
                      mt-2
                      bg-[#fafafa]
                      border
                      border-[#e4e4e4]
                      rounded-md
                      p-3.5
                    "
                  >
                    {profile.resume ? (
                      <a
                        href={`${BACKEND_URL}${profile.resume.replace(
                          /\\/g,
                          "/"
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          text-[#1dbf73]
                          hover:text-[#19a463]
                          text-sm
                          font-semibold
                          transition
                        "
                      >
                        📄 View Resume
                      </a>
                    ) : (
                      <span
                        className="
                          text-[#62646a]
                          text-sm
                        "
                      >
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