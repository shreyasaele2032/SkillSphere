import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import jobService from "../services/jobService";

const ApplyJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    portfolio: "",
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await jobService.applyForJob(id, formData);

      alert("Application submitted successfully!");

      navigate("/jobs");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to submit application."
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
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-black
    via-gray-700
    to-white
    "
  >


    <div
      className="
      w-full
      max-w-2xl

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
        text-center
        mb-10
        drop-shadow-lg
        "
      >
        Apply for Job
      </h1>




      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >



        <div>

          <label
            className="
            block
            text-white
            font-semibold
            mb-2
            "
          >
            Full Name
          </label>


          <input
            type="text"
            name="name"
            value={formData.name}
            readOnly

            className="
            w-full

            bg-white/30

            backdrop-blur-md

            border
            border-white/40

            text-white

            placeholder-gray-300

            rounded-xl

            px-4
            py-3

            outline-none

            focus:ring-2
            focus:ring-blue-400
            "
          />

        </div>





        <div>

          <label
            className="
            block
            text-white
            font-semibold
            mb-2
            "
          >
            Email
          </label>


          <input
            type="email"
            name="email"
            value={formData.email}
            readOnly

            className="
            w-full

            bg-white/30

            backdrop-blur-md

            border
            border-white/40

            text-white

            rounded-xl

            px-4
            py-3

            outline-none

            focus:ring-2
            focus:ring-blue-400
            "
          />

        </div>







        <div>

          <label
            className="
            block
            text-white
            font-semibold
            mb-2
            "
          >
            Phone Number
          </label>


          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required

            className="
            w-full

            bg-white/30

            backdrop-blur-md

            border
            border-white/40

            text-white

            rounded-xl

            px-4
            py-3

            outline-none

            focus:ring-2
            focus:ring-blue-400
            "
          />

        </div>







        <div>

          <label
            className="
            block
            text-white
            font-semibold
            mb-2
            "
          >
            Portfolio Link
          </label>


          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="https://yourportfolio.com"

            className="
            w-full

            bg-white/30

            backdrop-blur-md

            border
            border-white/40

            text-white

            placeholder-gray-300

            rounded-xl

            px-4
            py-3

            outline-none

            focus:ring-2
            focus:ring-blue-400
            "
          />

        </div>








        <div>

          <label
            className="
            block
            text-white
            font-semibold
            mb-2
            "
          >
            Cover Letter
          </label>


          <textarea
            name="coverLetter"
            rows="6"

            value={formData.coverLetter}

            onChange={handleChange}

            placeholder="Tell the client why you're the right freelancer..."

            required

            className="
            w-full

            bg-white/30

            backdrop-blur-md

            border
            border-white/40

            text-white

            placeholder-gray-300

            rounded-xl

            px-4
            py-3

            outline-none

            resize-none

            focus:ring-2
            focus:ring-blue-400
            "
          />

        </div>








        <button

          type="submit"

          disabled={loading}

          className="
          w-full

          bg-gradient-to-r

          from-green-400

          to-emerald-600

          hover:from-emerald-600

          hover:to-green-500


          text-white

          py-3

          rounded-xl

          font-bold

          shadow-xl

          transition-all

          duration-300

          hover:scale-[1.02]

          disabled:opacity-50
          "

        >

          {loading
            ? "Submitting..."
            : "Submit Application"
          }

        </button>




      </form>


    </div>


  </div>
);
};

export default ApplyJob;