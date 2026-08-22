import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import milestoneService from "../services/milestoneService";

const CreateMilestone = () => {
  const navigate = useNavigate();
const { jobId, freelancerId } = useParams();

console.log("JOB ID:", jobId);
console.log("FREELANCER ID:", freelancerId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await milestoneService.createMilestone({
        job: jobId,
        freelancer: freelancerId,
        title,
        description,
        amount,
        dueDate,
      });

      alert("Milestone created successfully!");

      navigate("/milestones");

    } catch (error) {

      console.error(error);

      alert(
        error.response?.data?.message ||
        "Failed to create milestone."
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
      px-5
    "
  >

    <div
      className="
        max-w-2xl
        mx-auto
        bg-white
        border
        border-[#e4e4e4]
        rounded-xl
        shadow-sm
        overflow-hidden
      "
    >

      {/* ================= HEADER ================= */}

      <div
        className="
          px-8
          md:px-10
          py-8
          border-b
          border-[#e4e4e4]
        "
      >

        <h1
          className="
            text-4xl
            md:text-5xl
            font-extrabold
            text-[#222325]
            tracking-tight
          "
        >
          Create Milestone
        </h1>

        <p
          className="
            mt-3
            text-[16px]
            font-medium
            text-[#62646a]
            leading-6
          "
        >
          Define a milestone, set its budget, and choose a deadline.
        </p>

      </div>


      {/* ================= FORM ================= */}

      <div className="p-8 md:p-10">

        <form
          onSubmit={handleSubmit}
          className="space-y-7"
        >


          {/* MILESTONE TITLE */}

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
              Milestone Title
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
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


          {/* DESCRIPTION */}

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
              Description
            </label>

            <textarea
              rows="5"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="
                w-full
                bg-white
                border
                border-[#b5b5b5]
                text-[#222325]
                text-[16px]
                font-medium
                rounded-md
                px-4
                py-4
                resize-none
                leading-7
                outline-none
                focus:border-[#222325]
                focus:ring-1
                focus:ring-[#222325]
                transition
              "
            />

          </div>


          {/* AMOUNT + DATE */}

          <div
            className="
              grid
              md:grid-cols-2
              gap-6
            "
          >

            {/* AMOUNT */}

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
                Amount (₹)
              </label>

              <input
                type="number"
                value={amount}
                onChange={(e) =>
                  setAmount(e.target.value)
                }
                required
                className="
                  w-full
                  h-[52px]
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
              />

            </div>


            {/* DUE DATE */}

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
                Due Date
              </label>

              <input
                type="date"
                value={dueDate}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
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

          </div>


          {/* ================= SUBMIT ================= */}

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
                h-[54px]
                bg-[#1dbf73]
                hover:bg-[#19a463]
                text-white
                text-[17px]
                font-extrabold
                rounded-md
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >

              {
                loading
                  ? "Creating..."
                  : "Create Milestone"
              }

            </button>

          </div>


        </form>

      </div>

    </div>

  </div>
);
};

export default CreateMilestone;