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
      bg-[#f7f7f7]
      py-12
      px-4
      sm:px-6
    "
  >

    <div
      className="
        w-full
        max-w-3xl
        mx-auto
        bg-white
        border
        border-[#e4e4e4]
        rounded-xl
        shadow-sm
        overflow-hidden
      "
    >

      {/* HEADER */}

      <div
        className="
          px-7
          sm:px-10
          py-8
          border-b
          border-[#e4e4e4]
          bg-white
        "
      >

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
          Apply for Job
        </h1>

        <p
          className="
            text-lg
            font-medium
            text-[#62646a]
          "
        >
          Tell the client why you're the right freelancer for this project.
        </p>

      </div>


      {/* FORM */}

      <div className="p-7 sm:p-10">

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >


          {/* FULL NAME */}

          <div>

            <label
              className="
                block
                text-[17px]
                font-extrabold
                text-[#222325]
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
                h-[52px]
                bg-[#f5f5f5]
                border
                border-[#d5d5d5]
                text-[#62646a]
                text-[16px]
                font-semibold
                rounded-md
                px-4
                outline-none
                cursor-not-allowed
              "
            />

          </div>


          {/* EMAIL */}

          <div>

            <label
              className="
                block
                text-[17px]
                font-extrabold
                text-[#222325]
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
                h-[52px]
                bg-[#f5f5f5]
                border
                border-[#d5d5d5]
                text-[#62646a]
                text-[16px]
                font-semibold
                rounded-md
                px-4
                outline-none
                cursor-not-allowed
              "
            />

          </div>


          {/* PHONE NUMBER */}

          <div>

            <label
              className="
                block
                text-[17px]
                font-extrabold
                text-[#222325]
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
                h-[52px]
                bg-white
                border
                border-[#b5b5b5]
                text-[#222325]
                text-[16px]
                font-medium
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


          {/* PORTFOLIO */}

          <div>

            <label
              className="
                block
                text-[17px]
                font-extrabold
                text-[#222325]
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
                h-[52px]
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


          {/* COVER LETTER */}

          <div>

            <label
              className="
                block
                text-[17px]
                font-extrabold
                text-[#222325]
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
                outline-none
                resize-none
                leading-7
                focus:border-[#222325]
                focus:ring-1
                focus:ring-[#222325]
                transition
              "
            />

          </div>


          {/* SUBMIT */}

          <div
            className="
              pt-5
              border-t
              border-[#e4e4e4]
            "
          >

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-[56px]
                bg-[#1dbf73]
                hover:bg-[#19a463]
                text-white
                text-lg
                font-extrabold
                rounded-md
                transition
                duration-200
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >

              {loading
                ? "Submitting..."
                : "Submit Application"
              }

            </button>

          </div>


        </form>

      </div>

    </div>

  </div>
);
};

export default ApplyJob;