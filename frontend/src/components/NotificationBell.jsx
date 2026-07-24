

import { useState } from "react";
import { FaBell } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    title: "New Job Posted",
    message: "A new MERN Stack project matches your skills.",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Proposal Accepted",
    message: "Your proposal has been accepted by Tech Solutions.",
    time: "1 hour ago",
  },
  {
    id: 3,
    title: "Payment Received",
    message: "₹5,000 has been credited to your wallet.",
    time: "Yesterday",
  },
];

const NotificationBell = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
     
      <button
        onClick={() => setOpen(!open)}
        className="relative p-2 rounded-full hover:bg-gray-100 transition"
      >
        <FaBell className="text-2xl text-gray-700" />

     
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
          {notifications.length}
        </span>
      </button>

     
      {open && (
        <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
          <div className="px-4 py-3 border-b bg-indigo-600 text-white">
            <h3 className="font-semibold text-lg">Notifications</h3>
          </div>

          {notifications.length > 0 ? (
            <div className="max-h-80 overflow-y-auto">
              {notifications.map((item) => (
                <div
                  key={item.id}
                  className="px-4 py-4 border-b hover:bg-gray-50 cursor-pointer transition"
                >
                  <h4 className="font-semibold text-gray-800">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-600 mt-1">
                    {item.message}
                  </p>

                  <span className="text-xs text-gray-400 mt-2 block">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              No new notifications.
            </div>
          )}

          <button className="w-full py-3 text-indigo-600 font-medium hover:bg-gray-100 transition">
            View All Notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;