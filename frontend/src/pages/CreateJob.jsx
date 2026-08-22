import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobService from "../services/jobService";

const CreateJob = () => {
  const navigate = useNavigate();

  const [jobData, setJobData] = useState({
    title: "",
    category: "",
    budget: "",
    deadline: "",
    experience: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await jobService.createJob(jobData);

      alert("Job Posted Successfully!");

      navigate("/jobs");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to post job. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

 return (
  <div
    className="
    min-h-screen
    py-12
    px-4
    bg-white
    "
  >

    <div
      className="
      max-w-4xl
      mx-auto
      bg-white
      border
      border-gray-200
      shadow-sm
      rounded-2xl
      p-8
      md:p-10
      "
    >

      <h2
        className="
        text-4xl
        font-extrabold
        text-center
        text-gray-900
        mb-10
        tracking-tight
        "
      >
        Create a New Job
      </h2>


      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >


        <div>

          <label
            className="
            block
            mb-2
            font-semibold
            text-gray-900
            "
          >
            Job Title
          </label>


          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            placeholder="Frontend React Developer"
            required

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
            focus:border-[#1dbf73]
            focus:ring-2
            focus:ring-[#1dbf73]/20
            "
          />

        </div>


        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >


          <div>

            <label
              className="
              block
              mb-2
              font-semibold
              text-gray-900
              "
            >
              Category
            </label>


            <select

              name="category"

              value={jobData.category}

              onChange={handleChange}

              required

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
            >

              <option value="">
                Select Category
              </option>

              <option>
                Web Development
              </option>

              <option>
                App Development
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
                Generative AI
              </option>


            </select>


          </div>


          <div>


            <label
              className="
              block
              mb-2
              font-semibold
              text-gray-900
              "
            >
              Budget (₹)
            </label>


            <input

              type="number"

              name="budget"

              value={jobData.budget}

              onChange={handleChange}

              placeholder="5000"

              required

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
              focus:border-[#1dbf73]
              focus:ring-2
              focus:ring-[#1dbf73]/20
              "
            />


          </div>


        </div>


        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          "
        >


          <div>


            <label
              className="
              block
              mb-2
              font-semibold
              text-gray-900
              "
            >
              Deadline
            </label>


            <input

              type="date"

              name="deadline"

              value={jobData.deadline}

              onChange={handleChange}

              required

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
              mb-2
              font-semibold
              text-gray-900
              "
            >
              Experience Required
            </label>


            <select

              name="experience"

              value={jobData.experience}

              onChange={handleChange}

              required

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
            >

              <option value="">
                Select Experience
              </option>

              <option>
                Fresher
              </option>

              <option>
                0-1 Years
              </option>

              <option>
                1-3 Years
              </option>

              <option>
                3-5 Years
              </option>

              <option>
                5+ Years
              </option>

            </select>


          </div>


        </div>


        <div>


          <label
            className="
            block
            mb-2
            font-semibold
            text-gray-900
            "
          >
            Job Description
          </label>


          <textarea

            rows="6"

            name="description"

            value={jobData.description}

            onChange={handleChange}

            placeholder="Describe the project requirements..."

            required

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
            resize-none
            outline-none
            transition
            focus:border-[#1dbf73]
            focus:ring-2
            focus:ring-[#1dbf73]/20
            "
          />


        </div>


        <button

          type="submit"

          disabled={loading}

          className="
          w-full
          bg-[#1dbf73]
          hover:bg-[#19a463]
          transition-colors
          duration-200
          text-white
          py-3
          rounded-lg
          font-bold
          shadow-sm
          hover:shadow-md
          disabled:opacity-50
          disabled:cursor-not-allowed
          "

        >

          {
            loading
            ? "Posting..."
            : "Post Job"
          }


        </button>


      </form>


    </div>


  </div>
);
};

export default CreateJob;