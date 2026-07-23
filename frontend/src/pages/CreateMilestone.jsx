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
      max-w-2xl
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

        text-white

        mb-8

        drop-shadow-lg
        "
      >
        Create Milestone
      </h1>





      <form

        onSubmit={handleSubmit}

        className="space-y-7"

      >






        {/* Title */}

        <div>

          <label
            className="
            block
            font-semibold
            text-white
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








        {/* Description */}


        <div>


          <label
            className="
            block
            font-semibold
            text-white
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









        {/* Amount */}


        <div>


          <label
            className="
            block
            font-semibold
            text-white
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









        {/* Due Date */}


        <div>


          <label
            className="
            block
            font-semibold
            text-white
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









        {/* Submit */}


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

          {
            loading
            ? "Creating..."
            : "Create Milestone"
          }


        </button>



      </form>


    </div>


  </div>
);
};

export default CreateMilestone;