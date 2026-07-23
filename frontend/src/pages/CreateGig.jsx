// src/pages/CreateGig.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import gigService from "../services/gigService";

const CreateGig = () => {
  const navigate = useNavigate();

  const [gig, setGig] = useState({
    title: "",
    category: "",
    price: "",
    deliveryTime: "",
    location: "",
    description: "",
    skills: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setGig({
      ...gig,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const gigData = {
        ...gig,
        skills: gig.skills
          ? gig.skills.split(",").map((skill) => skill.trim())
          : [],
      };

      await gigService.createGig(gigData);

      alert("Gig created successfully!");

      setGig({
        title: "",
        category: "",
        price: "",
        deliveryTime: "",
        location: "",
        description: "",
        skills: "",
      });

      navigate("/gigs");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to create gig."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
  <div
    className="
    min-h-screen
    py-10
    px-4
    bg-gradient-to-br
    from-black
    via-gray-700
    to-white
    "
  >

    <div
      className="
      max-w-3xl
      mx-auto

      bg-white/20
      backdrop-blur-xl

      border
      border-white/30

      shadow-2xl

      rounded-3xl

      p-8
      md:p-10
      "
    >


      <h1
        className="
        text-4xl
        font-extrabold
        text-white
        mb-3
        "
      >
        Create a New Gig
      </h1>


      <p
        className="
        text-gray-200
        mb-10
        text-lg
        "
      >
        Showcase your skills and start receiving freelance projects.
      </p>




      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >



        {/* Gig Title */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Gig Title
          </label>


          <input
            type="text"
            name="title"
            value={gig.title}
            onChange={handleChange}
            placeholder="e.g. I will build a MERN Stack website"
            required

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
            focus:ring-indigo-500

            transition
            "
          />

        </div>





        {/* Category */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Category
          </label>


          <select
            name="category"
            value={gig.category}
            onChange={handleChange}
            required

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
            focus:ring-indigo-500
            "
          >

            <option value="">
              Select Category
            </option>

            <option>
              Web Development
            </option>

            <option>
              Mobile App Development
            </option>

            <option>
              UI/UX Design
            </option>

            <option>
              Graphic Design
            </option>

            <option>
              Content Writing
            </option>

            <option>
              Digital Marketing
            </option>

            <option>
              AI / Machine Learning
            </option>


          </select>


        </div>








        {/* Price & Delivery */}

        <div className="grid md:grid-cols-2 gap-6">


          <div>

            <label className="block text-white font-semibold mb-2">
              Starting Price (₹)
            </label>


            <input
              type="number"
              name="price"
              value={gig.price}
              onChange={handleChange}
              placeholder="5000"
              required

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
              focus:ring-indigo-500
              "
            />

          </div>





          <div>

            <label className="block text-white font-semibold mb-2">
              Delivery Time
            </label>


            <input
              type="text"
              name="deliveryTime"
              value={gig.deliveryTime}
              onChange={handleChange}
              placeholder="e.g. 7 Days"
              required

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
              focus:ring-indigo-500
              "
            />

          </div>


        </div>







        {/* Location */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Location
          </label>


          <input
            type="text"
            name="location"
            value={gig.location}
            onChange={handleChange}
            placeholder="e.g. Mysuru, Karnataka"

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
            focus:ring-indigo-500
            "
          />


        </div>







        {/* Skills */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Skills (comma separated)
          </label>


          <input
            type="text"
            name="skills"
            value={gig.skills}
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB, Express"

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
            focus:ring-indigo-500
            "
          />


        </div>








        {/* Description */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Gig Description
          </label>


          <textarea
            name="description"
            rows="6"
            value={gig.description}
            onChange={handleChange}
            placeholder="Describe your service, experience, and what the client will receive..."
            required

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

            resize-none

            outline-none

            focus:ring-2
            focus:ring-indigo-500
            "
          />


        </div>








        {/* Submit Button */}

        <button
          type="submit"
          disabled={loading}

          className="
          w-full

          bg-gradient-to-r
          from-indigo-600
          to-purple-600

          hover:from-purple-600
          hover:to-indigo-600

          text-white

          font-bold

          py-3

          rounded-xl

          shadow-xl

          transition-all

          duration-300

          hover:scale-[1.02]

          disabled:opacity-50
          "
        >

          {loading ? "Creating..." : "Create Gig"}

        </button>


      </form>


    </div>


  </div>
);
};

export default CreateGig;