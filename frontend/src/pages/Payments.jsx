import { useEffect, useState } from "react";
import paymentService from "../services/paymentService";

const Payments = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const data = await paymentService.getPayments();
      setPayments(data);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to load payments."
      );
    } finally {
      setLoading(false);
    }
  };

  const totalEarned = payments
    .filter((payment) => payment.status === "Paid")
    .reduce((sum, payment) => sum + Number(payment.amount), 0);

  const getStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-red-100 text-red-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading payments...
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-12 px-5">


    <div className="max-w-7xl mx-auto">



      {/* Heading */}

      <div className="mb-12">


        <h1 className="
        text-5xl
        md:text-6xl
        font-black
        text-black
        tracking-tight
        ">
          Payments
        </h1>



        <p className="
        mt-4
        text-lg
        text-gray-600
        ">
          View your payment history and transaction status.
        </p>



      </div>





      {/* Summary Cards */}


      <div className="
      grid
      md:grid-cols-3
      gap-8
      mb-12
      ">




        <div className="
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        rounded-3xl
        shadow-xl
        p-8
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
        ">


          <h3 className="
          text-gray-500
          font-semibold
          text-lg
          ">
            Total Earned
          </h3>



          <p className="
          text-4xl
          font-black
          text-green-600
          mt-4
          ">
            ₹{totalEarned.toLocaleString()}
          </p>


        </div>







        <div className="
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        rounded-3xl
        shadow-xl
        p-8
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
        ">



          <h3 className="
          text-gray-500
          font-semibold
          text-lg
          ">
            Completed Payments
          </h3>



          <p className="
          text-4xl
          font-black
          text-black
          mt-4
          ">
            {payments.filter((p) => p.status === "Paid").length}
          </p>



        </div>







        <div className="
        bg-white/80
        backdrop-blur-xl
        border
        border-gray-200
        rounded-3xl
        shadow-xl
        p-8
        hover:-translate-y-2
        hover:shadow-2xl
        transition-all
        duration-300
        ">



          <h3 className="
          text-gray-500
          font-semibold
          text-lg
          ">
            Pending Payments
          </h3>




          <p className="
          text-4xl
          font-black
          text-red-600
          mt-4
          ">
            {payments.filter((p) => p.status === "Pending").length}
          </p>




        </div>




      </div>








      {/* Payment Table */}



      <div className="
      bg-white/80
      backdrop-blur-xl
      border
      border-gray-200
      rounded-3xl
      shadow-xl
      overflow-x-auto
      ">



        <table className="w-full">



          <thead className="
          bg-black
          text-white
          ">


            <tr>


              <th className="
              py-5
              px-6
              text-left
              font-bold
              ">
                Project
              </th>



              <th className="
              py-5
              px-6
              text-left
              font-bold
              ">
                Client
              </th>



              <th className="
              py-5
              px-6
              text-left
              font-bold
              ">
                Amount
              </th>



              <th className="
              py-5
              px-6
              text-left
              font-bold
              ">
                Date
              </th>



              <th className="
              py-5
              px-6
              text-left
              font-bold
              ">
                Status
              </th>



            </tr>


          </thead>





          <tbody>



            {payments.map((payment)=>(



              <tr

                key={payment._id}

                className="
                border-b
                border-gray-200
                hover:bg-gray-100
                transition
                "

              >



                <td className="py-5 px-6 font-medium">
                  {payment.project}
                </td>



                <td className="py-5 px-6">
                  {payment.client}
                </td>



                <td className="
                py-5
                px-6
                font-bold
                ">
                  ₹{payment.amount}
                </td>




                <td className="py-5 px-6">
                  {payment.date}
                </td>




                <td className="py-5 px-6">


                  <span

                    className={`
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-bold
                    ${getStatusColor(payment.status)}
                    `}

                  >

                    {payment.status}

                  </span>



                </td>



              </tr>



            ))}



          </tbody>




        </table>





        {payments.length === 0 && (


          <div className="
          text-center
          py-12
          text-gray-500
          text-lg
          ">

            No payment history available.

          </div>



        )}



      </div>





    </div>



  </div>
);
};

export default Payments;