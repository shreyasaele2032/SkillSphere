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
  <div className="min-h-screen px-4 py-10 
    bg-gradient-to-br from-black via-gray-700 to-white">

    <div className="max-w-6xl mx-auto">


    
      <div className="mb-10">

        <h1 className="text-4xl md:text-5xl font-extrabold 
        text-white drop-shadow-lg">
          Project Milestones
        </h1>

        <p className="text-gray-200 mt-3 text-lg">
          Track project progress and milestone completion.
        </p>

      </div>



  

      <div
        className="
        bg-white/20 
        backdrop-blur-xl
        border border-white/30
        rounded-3xl
        shadow-2xl
        p-8
        mb-10
        "
      >

        <div className="flex justify-between mb-4">

          <span className="text-white font-semibold text-lg">
            Overall Progress
          </span>


          <span className="text-white font-bold text-lg">
            {progress.toFixed(0)}%
          </span>


        </div>


        <div className="
          w-full 
          bg-white/30 
          rounded-full 
          h-4
          overflow-hidden
        ">

          <div
            className="
            h-4
            rounded-full
            bg-gradient-to-r
            from-blue-400
            via-purple-500
            to-indigo-600
            transition-all
            duration-700
            "
            style={{ width: `${progress}%` }}
          >
          </div>

        </div>


      </div>





  

      <div className="grid gap-8">


        {milestones.map((milestone) => (

          <div
            key={milestone._id}

            className="
            bg-white/25
            backdrop-blur-xl
            border
            border-white/30
            rounded-3xl
            shadow-2xl
            p-7

            flex
            flex-col
            md:flex-row
            md:justify-between
            md:items-center

            hover:scale-[1.02]
            transition-all
            duration-300
            "
          >



    

            <div>


              <h2
                className="
                text-2xl
                font-bold
                text-white
                "
              >
                {milestone.title}
              </h2>



              <p className="
              text-gray-200
              mt-4
              "
              >

                <strong>
                  Due Date:
                </strong>{" "}

                {new Date(
                  milestone.dueDate
                ).toLocaleDateString()}

              </p>




              <p className="
              text-gray-200
              mt-2
              "
              >

                <strong>
                  Amount:
                </strong>{" "}

                ₹{milestone.amount}

              </p>


            </div>






       


            <div className="
            mt-6
            md:mt-0
            flex
            flex-col
            items-center
            ">



              <span

              className={`
              px-5
              py-2
              rounded-full
              text-sm
              font-bold
              shadow-lg

              ${getStatusColor(
                milestone.status
              )}
              `}

              >

                {milestone.status}

              </span>






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

                bg-gradient-to-r
                from-blue-500
                to-indigo-600

                hover:from-indigo-600
                hover:to-blue-700

                text-white

                px-6
                py-3

                rounded-xl

                font-semibold

                shadow-lg

                transition-all
                "

                >

                  Submit Work

                </button>

              )}







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

                bg-gradient-to-r
                from-blue-500
                to-indigo-600

                hover:scale-105

                text-white

                px-6
                py-3

                rounded-xl

                font-semibold

                shadow-lg

                transition-all
                "

                >

                  Approve Milestone

                </button>

              )}







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

                bg-gradient-to-r
                from-green-400
                to-emerald-600

                hover:scale-105

                text-white

                px-6
                py-3

                rounded-xl

                font-semibold

                shadow-lg

                transition-all
                "

                >

                  Pay Now

                </button>

              )}







              {milestone.isPaid && (

                <p
                className="
                mt-4

                bg-green-500/20

                border
                border-green-400

                text-green-300

                px-5
                py-2

                rounded-xl

                font-bold

                "
                >

                  ✅ Paid

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