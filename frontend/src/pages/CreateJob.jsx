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
      max-w-4xl
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



      <h2
        className="
        text-4xl
        font-extrabold
        text-center
        text-white
        mb-10
        drop-shadow-lg
        "
      >
        Create a New Job
      </h2>





      <form
        onSubmit={handleSubmit}
        className="space-y-7"
      >





        {/* Job Title */}

        <div>

          <label
            className="
            block
            mb-2
            font-semibold
            text-white
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

            text-black

            placeholder-gray-500

            rounded-xl

            px-4
            py-3

            outline-none

            focus:ring-2
            focus:ring-blue-500

            transition
            "
          />

        </div>







        {/* Category + Budget */}


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
              text-white
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
              text-white
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



        </div>









        {/* Deadline + Experience */}


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
              text-white
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


            <label
              className="
              block
              mb-2
              font-semibold
              text-white
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









        {/* Description */}


        <div>


          <label
            className="
            block
            mb-2
            font-semibold
            text-white
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

            text-black

            placeholder-gray-500

            rounded-xl

            px-4
            py-3

            resize-none

            outline-none

            focus:ring-2
            focus:ring-blue-500
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

          from-blue-600

          to-indigo-700


          hover:from-indigo-700

          hover:to-blue-600


          transition-all

          duration-300


          text-white

          py-3

          rounded-xl

          font-bold

          shadow-xl

          hover:scale-[1.02]


          disabled:opacity-50
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