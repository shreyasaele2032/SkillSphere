import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import paymentService from "../services/paymentService";
import api from "../services/api";

const Milestones = () => {
  const { user } = useContext(AuthContext);

const [milestones, setMilestones] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchMilestones();
}, []);

const fetchMilestones = async () => {
  try {
    const response = await api.get("/milestones");

    setMilestones(response.data.milestones);
  } catch (error) {
    console.error(error);

    alert("Failed to load milestones");
  } finally {
    setLoading(false);
  }
};

const handlePayment = async (milestone) => {
  try {

    
    const paymentResponse = await paymentService.createPayment({
  milestone: milestone._id,
  job: milestone.job._id,
  freelancer: milestone.freelancer._id,
  amount: milestone.amount,
  paymentMethod: "Razorpay",
});

    const payment = paymentResponse.payment;

   
    const orderResponse = await paymentService.createOrder(
      milestone.amount
    );

    const order = orderResponse.order;

   
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,

      amount: order.amount,
      currency: order.currency,

      name: "SkillSphere",

      description: milestone.title,

      order_id: order.id,

      handler: async function (response) {

        await paymentService.verifyPayment({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          paymentId: payment._id,
        });

        alert("Payment Successful!");

        fetchMilestones();
      },

      theme: {
        color: "#2563eb",
      },
    };

    const razor = new window.Razorpay(options);

    razor.open();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Payment Failed"
    );

  }
};


const handleSubmitWork = async (milestoneId) => {
  try {

    await api.put(
      `/milestones/${milestoneId}/submit`
    );

    alert("Work submitted successfully!");

    fetchMilestones();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to submit work"
    );

  }
};

const handleApprove = async (milestoneId) => {
  try {

    await api.put(
      `/milestones/${milestoneId}/approve`
    );

    alert("Milestone approved successfully!");

    fetchMilestones();

  } catch (error) {

    console.error(error);

    alert(
      error.response?.data?.message ||
      "Failed to approve milestone"
    );

  }
};

  const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700";

    case "Approved":
      return "bg-blue-100 text-blue-700";

    case "Submitted":
      return "bg-purple-100 text-purple-700";

    case "In Progress":
      return "bg-yellow-100 text-yellow-700";

    case "Rejected":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

  const completedCount = milestones.filter(
    (m) => m.status === "Completed"
  ).length;

  const progress =
  milestones.length === 0
    ? 0
    : (completedCount / milestones.length) * 100;
if (loading) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      Loading milestones...
    </div>
  );
}
 return (
  <div
    className="
      min-h-screen
      bg-[#f7f7f7]
      px-4
      py-12
      md:px-8
    "
  >

    <div className="max-w-6xl mx-auto">


      {/* ================= HEADER ================= */}

      <div className="mb-10">

        <h1
          className="
            text-4xl
            md:text-5xl
            font-black
            text-[#222325]
            tracking-tight
          "
        >
          Project Milestones
        </h1>

        <p
          className="
            text-[#62646a]
            mt-3
            text-lg
            font-medium
          "
        >
          Track project progress and milestone completion.
        </p>

      </div>


      {/* ================= OVERALL PROGRESS ================= */}

      <div
        className="
          bg-white
          border
          border-[#e4e4e4]
          rounded-xl
          shadow-sm
          p-7
          md:p-8
          mb-10
        "
      >

        <div className="flex items-center justify-between mb-5">

          <div>

            <h2
              className="
                text-xl
                md:text-2xl
                font-extrabold
                text-[#222325]
              "
            >
              Overall Progress
            </h2>

            <p
              className="
                text-[#74767e]
                text-sm
                mt-1
                font-medium
              "
            >
              Track the completion of your project milestones.
            </p>

          </div>


          <span
            className="
              text-2xl
              md:text-3xl
              font-black
              text-[#1dbf73]
            "
          >
            {progress.toFixed(0)}%
          </span>

        </div>


        {/* Progress bar */}

        <div
          className="
            w-full
            bg-[#e4e4e4]
            rounded-full
            h-4
            overflow-hidden
          "
        >

          <div
            className="
              h-4
              rounded-full
              bg-[#1dbf73]
              transition-all
              duration-700
            "
            style={{ width: `${progress}%` }}
          >
          </div>

        </div>

      </div>


      {/* ================= MILESTONES ================= */}

      <div className="space-y-5">


        {milestones.map((milestone) => (

          <div
            key={milestone._id}
            className="
              bg-white
              border
              border-[#e4e4e4]
              rounded-xl
              shadow-sm
              p-6
              md:p-8

              flex
              flex-col
              md:flex-row
              md:items-center
              md:justify-between

              gap-7

              transition-all
              duration-300

              hover:shadow-md
              hover:border-[#c8c8c8]
            "
          >


            {/* ================= MILESTONE DETAILS ================= */}

            <div className="flex-1">


              <div
                className="
                  flex
                  items-start
                  gap-4
                "
              >

                {/* Number/Icon */}

                <div
                  className="
                    hidden
                    sm:flex
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    bg-[#f1fdf7]
                    border
                    border-[#d9f5e6]
                    items-center
                    justify-center
                    text-[#1dbf73]
                    font-black
                  "
                >
                  ✓
                </div>


                <div>

                  <h2
                    className="
                      text-xl
                      md:text-2xl
                      font-black
                      text-[#222325]
                    "
                  >
                    {milestone.title}
                  </h2>


                  <div
                    className="
                      mt-4
                      flex
                      flex-wrap
                      gap-x-8
                      gap-y-3
                      text-[#62646a]
                      text-sm
                      md:text-base
                    "
                  >

                    <p>
                      <span
                        className="
                          font-extrabold
                          text-[#222325]
                        "
                      >
                        Due Date:
                      </span>{" "}

                      {new Date(
                        milestone.dueDate
                      ).toLocaleDateString()}

                    </p>


                    <p>

                      <span
                        className="
                          font-extrabold
                          text-[#222325]
                        "
                      >
                        Amount:
                      </span>{" "}

                      ₹{milestone.amount}

                    </p>

                  </div>

                </div>

              </div>


            </div>


            {/* ================= STATUS + ACTIONS ================= */}

            <div
              className="
                flex
                flex-col
                items-stretch
                md:items-end
                min-w-[190px]
              "
            >


              {/* Status */}

              <span
                className={`
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2
                  rounded-full
                  text-sm
                  font-black
                  ${getStatusColor(
                    milestone.status
                  )}
                `}
              >

                {milestone.status}

              </span>


              {/* ================= FREELANCER ================= */}

              {user?.role === "freelancer" &&
              milestone.status === "Pending" && (

                <button
                  onClick={() =>
                    handleSubmitWork(
                      milestone._id
                    )
                  }

                  className="
                    mt-4
                    w-full

                    bg-[#222325]
                    hover:bg-[#404145]

                    text-white

                    px-6
                    py-3

                    rounded-lg

                    font-extrabold

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                  "
                >

                  Submit Work

                </button>

              )}


              {/* ================= CLIENT APPROVAL ================= */}

              {user?.role === "client" &&
              milestone.status === "Submitted" && (

                <button
                  onClick={() =>
                    handleApprove(
                      milestone._id
                    )
                  }

                  className="
                    mt-4
                    w-full

                    bg-[#1dbf73]
                    hover:bg-[#19a463]

                    text-white

                    px-6
                    py-3

                    rounded-lg

                    font-extrabold

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                  "
                >

                  Approve Milestone

                </button>

              )}


              {/* ================= PAYMENT ================= */}

              {user?.role === "client" &&
              milestone.status === "Approved" &&
              !milestone.isPaid && (

                <button
                  onClick={() =>
                    handlePayment(
                      milestone
                    )
                  }

                  className="
                    mt-4
                    w-full

                    bg-[#1dbf73]
                    hover:bg-[#19a463]

                    text-white

                    px-6
                    py-3

                    rounded-lg

                    font-extrabold

                    shadow-sm

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                  "
                >

                  Pay Now

                </button>

              )}


              {/* ================= PAID ================= */}

              {milestone.isPaid && (

                <p
                  className="
                    mt-4

                    inline-flex
                    items-center
                    justify-center

                    bg-[#f1fdf7]

                    border
                    border-[#b7ead0]

                    text-[#168a52]

                    px-5
                    py-2

                    rounded-lg

                    font-black

                    text-sm
                  "
                >

                  ✓ Paid

                </p>

              )}


            </div>


          </div>

        ))}


      </div>


    </div>

  </div>
);
};

export default Milestones;