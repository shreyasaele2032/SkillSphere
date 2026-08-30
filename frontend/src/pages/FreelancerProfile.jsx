import { useEffect, useState } from "react";
import profileService from "../services/profileService";

const FreelancerProfile = () => {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    title: "",
    skills: "",
    experience: "",
    hourlyRate: "",
    location: "",
    bio: "",
    github: "",
    linkedin: "",
    portfolio: "",
    resume: null,
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await profileService.getMyProfile();

      if (data.profile) {
        setProfile({
  name: data.profile.user.name,
  email: data.profile.user.email,
  title: data.profile.title || "",
  skills: data.profile.skills?.join(", ") || "",
  experience: data.profile.experience || "",
  hourlyRate: data.profile.hourlyRate || "",
  location: data.profile.location || "",
  bio: data.profile.bio || "",
  github: data.profile.github || "",
  linkedin: data.profile.linkedin || "",
  portfolio: data.profile.portfolio || "",
  resume: data.profile.resume || null,
});
      }
    } catch (error) {
      console.log("No profile found");
    }
  };

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    formData.append("title", profile.title);
    formData.append(
      "skills",
      JSON.stringify(
        profile.skills.split(",").map((s) => s.trim())
      )
    );
    formData.append("experience", profile.experience);
    formData.append("hourlyRate", profile.hourlyRate);
    formData.append("location", profile.location);
    formData.append("bio", profile.bio);
    formData.append("github", profile.github);
    formData.append("linkedin", profile.linkedin);
    formData.append("portfolio", profile.portfolio);

    if (profile.resume) {
      formData.append("resume", profile.resume);
    }

    await profileService.saveProfile(formData);

    alert("Profile Saved Successfully!");
    loadProfile();

  } catch (err) {
    console.log(err);
    alert("Failed to save profile");
  }
};
  // Your existing JSX starts here...

  ```jsx
return (
  <div className="min-h-screen bg-gray-50 py-10 px-4">

    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Freelancer Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Create a professional profile to showcase your skills and attract clients.
        </p>
      </div>


      {/* Profile Card */}
      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-xl
        shadow-sm
        p-6
        md:p-10
        "
      >

        <form
          onSubmit={handleSubmit}
          className="space-y-8"
        >


          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">

            {[
              ["Full Name", "name", "text"],
              ["Email", "email", "email"]
            ].map(([label, name, type]) => (

              <div key={name}>

                <label
                  className="
                  block
                  text-sm
                  font-semibold
                  text-gray-800
                  mb-2
                  "
                >
                  {label}
                </label>

                <input
                  type={type}
                  name={name}
                  value={profile[name]}
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
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  "
                />

              </div>

            ))}

          </div>


          {/* Professional Title & Experience */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Professional Title
              </label>

              <input
                type="text"
                name="title"
                value={profile.title}
                onChange={handleChange}
                placeholder="MERN Stack Developer"

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
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
                "
              />

            </div>


            <div>

              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Experience
              </label>

              <select
                name="experience"
                value={profile.experience}
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
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
                "
              >

                <option value="">
                  Select Experience
                </option>

                <option>Fresher</option>
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3+ Years</option>
                <option>5+ Years</option>

              </select>

            </div>

          </div>


          {/* Skills & Hourly Rate */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Skills
              </label>

              <input
                type="text"
                name="skills"
                value={profile.skills}
                onChange={handleChange}
                placeholder="React, Node.js, MongoDB, Tailwind CSS"

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
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
                "
              />

            </div>


            <div>

              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Hourly Rate (₹)
              </label>

              <input
                type="number"
                name="hourlyRate"
                value={profile.hourlyRate}
                onChange={handleChange}
                placeholder="500"

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
                transition
                focus:border-green-500
                focus:ring-2
                focus:ring-green-100
                "
              />

            </div>

          </div>


          {/* Location */}
          <div>

            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={profile.location}
              onChange={handleChange}
              placeholder="Bengaluru, Karnataka"

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
              transition
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
              "
            />

          </div>


          {/* Bio */}
          <div>

            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Bio
            </label>

            <textarea
              rows="5"
              name="bio"
              value={profile.bio}
              onChange={handleChange}
              placeholder="Tell clients about yourself..."

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
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
              "
            />

          </div>


          {/* Social Links */}
          <div>

            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Online Presence
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {[
                ["GitHub", "github", "https://github.com/username"],
                ["LinkedIn", "linkedin", "https://linkedin.com/in/username"],
                ["Portfolio", "portfolio", "https://myportfolio.com"]
              ].map(([label, name, placeholder]) => (

                <div key={name}>

                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    {label}
                  </label>

                  <input
                    type="url"
                    name={name}
                    value={profile[name]}
                    onChange={handleChange}
                    placeholder={placeholder}

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
                    transition
                    focus:border-green-500
                    focus:ring-2
                    focus:ring-green-100
                    "
                  />

                </div>

              ))}

            </div>

          </div>


          {/* Resume */}
          <div>

            <label className="block text-sm font-semibold text-gray-800 mb-3">
              Resume (PDF)
            </label>

            <input
              type="file"
              id="resume"
              accept=".pdf"
              className="hidden"
              onChange={(e) =>
                setProfile({
                  ...profile,
                  resume: e.target.files[0],
                })
              }
            />

            <label
              htmlFor="resume"

              className="
              inline-flex
              items-center
              gap-2
              cursor-pointer
              bg-white
              border
              border-green-500
              text-green-600
              hover:bg-green-50
              px-5
              py-3
              rounded-lg
              font-semibold
              transition
              duration-200
              "
            >
              📄 Upload Resume
            </label>

            <p className="text-xs text-gray-500 mt-2">
              Upload your latest resume in PDF format.
            </p>

          </div>


          {/* Save Button */}
          <div className="pt-4 border-t border-gray-200">

            <button
              type="submit"

              className="
              w-full
              bg-green-600
              hover:bg-green-700
              active:bg-green-800
              text-white
              py-3.5
              rounded-lg
              font-bold
              transition
              duration-200
              shadow-sm
              hover:shadow-md
              "
            >
              Save Profile
            </button>

          </div>


        </form>

      </div>

    </div>

  </div>
);
```

};

export default FreelancerProfile;