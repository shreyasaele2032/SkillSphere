// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaClipboardList,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      name: "My Gigs",
      path: "/my-gigs",
      icon: <FaBriefcase />,
    },
    {
      name: "My Jobs",
      path: "/my-jobs",
      icon: <FaClipboardList />,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="w-72 min-h-screen bg-gray-900 text-white shadow-lg">
 
      <div className="px-6 py-8 border-b border-gray-700">
        <h1 className="text-3xl font-bold">
          Skill<span className="text-indigo-500">Sphere</span>
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Freelancer Dashboard
        </p>
      </div>

      
      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 transition-all duration-200
              ${
                isActive
                  ? "bg-indigo-600 text-white border-r-4 border-indigo-300"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>


      <div className="absolute bottom-0 w-72 border-t border-gray-700 p-6">
        <button className="flex items-center gap-3 w-full justify-center bg-red-500 hover:bg-red-600 py-3 rounded-lg transition">
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;