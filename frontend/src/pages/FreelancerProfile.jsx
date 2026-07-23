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

    <div
      className="
      max-w-5xl
      mx-auto

      bg-white/20

      backdrop-blur-xl

      border

      border-white/30

      rounded-3xl

      shadow-2xl

      p-8
      md:p-10
      "
    >


      <h1
        className="
        text-4xl

        font-extrabold

        text-center

        text-white

        mb-10
        "
      >
        Freelancer Profile
      </h1>





      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >





        <div className="grid md:grid-cols-2 gap-6">


          {[
            ["Full Name", "name", "text"],
            ["Email", "email", "email"]
          ].map(([label,name,type]) => (

            <div key={name}>

              <label
                className="
                block
                font-semibold
                text-white
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

                text-black

                rounded-xl

                px-4

                py-3

                outline-none

                focus:ring-2

                focus:ring-blue-500
                "
              />

            </div>

          ))}


        </div>








        <div className="grid md:grid-cols-2 gap-6">


          <div>

            <label className="block font-semibold text-white mb-2">
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

              text-black

              placeholder-gray-500

              rounded-xl

              px-4

              py-3

              outline-none

              focus:ring-2

              focus:ring-blue-500
              "
            />

          </div>





          <div>

            <label className="block font-semibold text-white mb-2">
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

              text-black

              rounded-xl

              px-4

              py-3

              outline-none

              focus:ring-2

              focus:ring-blue-500
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








        <div className="grid md:grid-cols-2 gap-6">


          <div>

            <label className="block font-semibold text-white mb-2">
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

              text-black

              placeholder-gray-500

              rounded-xl

              px-4

              py-3

              outline-none

              focus:ring-2

              focus:ring-blue-500
              "
            />


          </div>





          <div>

            <label className="block font-semibold text-white mb-2">
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

              text-black

              rounded-xl

              px-4

              py-3

              outline-none

              focus:ring-2

              focus:ring-blue-500
              "
            />

          </div>


        </div>








        <div>

          <label className="block font-semibold text-white mb-2">
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

            text-black

            rounded-xl

            px-4

            py-3

            outline-none

            focus:ring-2

            focus:ring-blue-500
            "
          />


        </div>








        <div>


          <label className="block font-semibold text-white mb-2">
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

            text-black

            placeholder-gray-500

            rounded-xl

            px-4

            py-3

            outline-none

            resize-none

            focus:ring-2

            focus:ring-blue-500
            "
          />


        </div>









        <div className="grid md:grid-cols-3 gap-6">


          {[
            ["GitHub","github","https://github.com/username"],
            ["LinkedIn","linkedin","https://linkedin.com/in/username"],
            ["Portfolio","portfolio","https://myportfolio.com"]
          ].map(([label,name,placeholder])=>(


            <div key={name}>


              <label className="block font-semibold text-white mb-2">
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

                text-black

                placeholder-gray-500

                rounded-xl

                px-4

                py-3

                outline-none

                focus:ring-2

                focus:ring-blue-500
                "
              />


            </div>


          ))}


        </div>

        <div>
  <label className="block font-semibold text-white mb-3">
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
      bg-blue-600
      hover:bg-blue-700
      text-white
      px-6
      py-3
      rounded-xl
      font-semibold
      transition-all
      duration-300
      shadow-lg
    "
  >
    📄 Upload Resume
  </label>

  {/* {profile.resume && (
  <div className="mt-3">
    {typeof profile.resume === "string" ? (
      <a
        href={`http://localhost:8006/${profile.resume.replace(/\\/g, "/")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 underline"
      >
        📄 View Uploaded Resume
      </a>
    ) : (
      <p className="text-green-300">
        ✅ {profile.resume.name}
      </p>
    )}
  </div>
)} */}
</div>








        <button

          type="submit"


          className="
          w-full

          bg-gradient-to-r

          from-blue-600

          to-indigo-700


          hover:from-indigo-700

          hover:to-blue-600


          text-white

          py-3

          rounded-xl

          font-bold

          transition-all

          duration-300

          shadow-xl

          hover:scale-[1.02]
          "
        >

          Save Profile

        </button>



      </form>


    </div>


  </div>
);
};

export default FreelancerProfile;