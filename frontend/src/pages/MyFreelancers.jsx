import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import chatService from "../services/chatService";

const MyFreelancers = () => {
  const [freelancers, setFreelancers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchFreelancers();
  }, []);

  const fetchFreelancers = async () => {
    try {
      const data = await chatService.getMyFreelancers();
      setFreelancers(data.freelancers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="min-h-screen bg-white py-12 px-6">
    <div className="max-w-7xl mx-auto">

      <h1 className="text-4xl font-bold text-gray-900 mb-10 tracking-tight">
        Freelancers I've Contacted
      </h1>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

        {freelancers.map((item) => (

          <div
            key={item.chatId}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200"
          >

            <h2 className="text-2xl font-bold text-gray-900">
              {item.freelancer.name}
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              <b className="text-gray-900">Gig:</b> {item.gig.title}
            </p>

            <p className="text-gray-600 mt-2">
              <b className="text-gray-900">Category:</b> {item.gig.category}
            </p>

            <p className="text-gray-600 mt-2">
              <b className="text-gray-900">Price:</b> ₹{item.gig.price}
            </p>

            <button
              onClick={() => navigate(`/chat/${item.chatId}`)}
              className="mt-6 w-full bg-[#1dbf73] hover:bg-[#19a463] text-white font-semibold px-5 py-3 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Open Chat
            </button>

          </div>

        ))}

      </div>

    </div>
  </div>
);
};

export default MyFreelancers;