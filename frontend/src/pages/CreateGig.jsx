

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
      bg-[#f7f7f7]
      py-12
      px-4
      sm:px-6
    "
  >

    <div
      className="
        max-w-4xl
        mx-auto
        bg-white
        border
        border-[#e4e4e4]
        rounded-xl
        shadow-sm
        p-7
        sm:p-10
        lg:p-12
      "
    >

      {/* HEADER */}

      <div className="
        border-b
        border-[#e4e4e4]
        pb-7
        mb-9
      ">

        <h1
          className="
            text-4xl
            sm:text-5xl
            font-extrabold
            tracking-tight
            text-[#222325]
            mb-3
          "
        >
          Create a New Gig
        </h1>

        <p
          className="
            text-lg
            sm:text-xl
            font-medium
            text-[#62646a]
          "
        >
          Showcase your skills and start receiving freelance projects.
        </p>

      </div>


      {/* FORM */}

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >


        {/* GIG TITLE */}

        <div>

          <label className="
            block
            text-lg
            font-extrabold
            text-[#222325]
            mb-3
          ">
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
              h-[54px]
              bg-white
              border
              border-[#b5b5b5]
              text-[#222325]
              text-[16px]
              font-medium
              placeholder:text-[#95979d]
              rounded-md
              px-4
              outline-none
              focus:border-[#222325]
              focus:ring-1
              focus:ring-[#222325]
              transition
            "
          />

        </div>


        {/* CATEGORY */}

        <div>

          <label className="
            block
            text-lg
            font-extrabold
            text-[#222325]
            mb-3
          ">
            Category
          </label>

          <select
            name="category"
            value={gig.category}
            onChange={handleChange}
            required
            className="
              w-full
              h-[54px]
              bg-white
              border
              border-[#b5b5b5]
              text-[#222325]
              text-[16px]
              font-semibold
              rounded-md
              px-4
              outline-none
              focus:border-[#222325]
              focus:ring-1
              focus:ring-[#222325]
              transition
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


        {/* PRICE + DELIVERY */}

        <div className="
          grid
          md:grid-cols-2
          gap-7
        ">


          {/* PRICE */}

          <div>

            <label className="
              block
              text-lg
              font-extrabold
              text-[#222325]
              mb-3
            ">
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
                h-[54px]
                bg-white
                border
                border-[#b5b5b5]
                text-[#222325]
                text-[16px]
                font-semibold
                placeholder:text-[#95979d]
                rounded-md
                px-4
                outline-none
                focus:border-[#222325]
                focus:ring-1
                focus:ring-[#222325]
                transition
              "
            />

          </div>


          {/* DELIVERY */}

          <div>

            <label className="
              block
              text-lg
              font-extrabold
              text-[#222325]
              mb-3
            ">
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
                h-[54px]
                bg-white
                border
                border-[#b5b5b5]
                text-[#222325]
                text-[16px]
                font-semibold
                placeholder:text-[#95979d]
                rounded-md
                px-4
                outline-none
                focus:border-[#222325]
                focus:ring-1
                focus:ring-[#222325]
                transition
              "
            />

          </div>

        </div>


        {/* LOCATION */}

        <div>

          <label className="
            block
            text-lg
            font-extrabold
            text-[#222325]
            mb-3
          ">
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
              h-[54px]
              bg-white
              border
              border-[#b5b5b5]
              text-[#222325]
              text-[16px]
              font-medium
              placeholder:text-[#95979d]
              rounded-md
              px-4
              outline-none
              focus:border-[#222325]
              focus:ring-1
              focus:ring-[#222325]
              transition
            "
          />

        </div>


        {/* SKILLS */}

        <div>

          <label className="
            block
            text-lg
            font-extrabold
            text-[#222325]
            mb-3
          ">
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
              h-[54px]
              bg-white
              border
              border-[#b5b5b5]
              text-[#222325]
              text-[16px]
              font-medium
              placeholder:text-[#95979d]
              rounded-md
              px-4
              outline-none
              focus:border-[#222325]
              focus:ring-1
              focus:ring-[#222325]
              transition
            "
          />

        </div>


        {/* DESCRIPTION */}

        <div>

          <label className="
            block
            text-lg
            font-extrabold
            text-[#222325]
            mb-3
          ">
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
              border-[#b5b5b5]
              text-[#222325]
              text-[16px]
              font-medium
              placeholder:text-[#95979d]
              rounded-md
              px-4
              py-4
              resize-none
              outline-none
              focus:border-[#222325]
              focus:ring-1
              focus:ring-[#222325]
              transition
              leading-7
            "
          />

        </div>


        {/* CREATE BUTTON */}

        <div className="
          pt-3
          border-t
          border-[#e4e4e4]
        ">

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-[56px]
              bg-[#1dbf73]
              hover:bg-[#19a463]
              text-white
              font-extrabold
              text-lg
              rounded-md
              transition
              duration-200
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Creating..." : "Create Gig"}
          </button>

        </div>

      </form>

    </div>

  </div>
);
};

export default CreateGig;