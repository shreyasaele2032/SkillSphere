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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-white py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-white mb-10">
          Freelancers I've Contacted
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {freelancers.map((item) => (

            <div
              key={item.chatId}
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl p-6 shadow-2xl"
            >

              <h2 className="text-2xl font-bold text-white">
                {item.freelancer.name}
              </h2>

              <p className="text-gray-200 mt-3">
                <b>Gig:</b> {item.gig.title}
              </p>

              <p className="text-gray-200">
                <b>Category:</b> {item.gig.category}
              </p>

              <p className="text-gray-200">
                <b>Price:</b> ₹{item.gig.price}
              </p>

              <button
                onClick={() => navigate(`/chat/${item.chatId}`)}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl"
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