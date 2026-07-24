import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaBell,
  FaComments,
  FaUserCircle,
} from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";
import { useNotifications } from "../context/NotificationContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { notifications } = useNotifications();
  const navigate = useNavigate();

  const isLoggedIn = !!user;

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-black font-semibold border-b-2 border-black pb-1 transition-all"
      : "text-gray-600 hover:text-black transition-all duration-300";

  const handleLogout = () => {
  logout();
  setMenuOpen(false);
  navigate("/", { replace: true });
};

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-300 shadow-lg">

      <div className="max-w-7xl mx-auto px-8">

        <div className="flex items-center justify-between h-20">

         

          <Link
            to="/"
            className="text-3xl font-extrabold tracking-wide text-black hover:text-gray-700 transition"
          >
            SkillSphere
          </Link>

         

          <div className="hidden md:flex items-center gap-8 text-black">

            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkStyle}>
  About
</NavLink>

          

            {isLoggedIn && user?.role === "freelancer" && (
              <>
                <NavLink
                  to="/create-gig"
                  className={navLinkStyle}
                >
                  Create Gig
                </NavLink>
              </>
            )}

         

            {isLoggedIn && user?.role === "client" && (
              <>
                <NavLink
                  to="/create-job"
                  className={navLinkStyle}
                >
                  Create Job
                </NavLink>
              </>
            )}

            {!isLoggedIn ? (
              <>
                <NavLink
                  to="/login"
                  className={navLinkStyle}
                >
                  Login
                </NavLink>

                <Link
                  to="/register"
                  className="bg-black text-white px-6 py-2.5 hover:bg-gray-800 transition duration-300 shadow-md"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                {user?.role === "admin" ? (

  <NavLink
    to="/admin-dashboard"
    className={navLinkStyle}
  >
    Admin Dashboard
  </NavLink>

) : (

  <NavLink
    to="/dashboard"
    className={navLinkStyle}
  >
    Dashboard
  </NavLink>

)}
                           

               {user?.role !== "admin" && (
  <NavLink
    to={user?.role === "client" ? "/client-profile" : "/profile"}
    className="text-gray-600 hover:text-black text-3xl transition duration-300"
  >
    <FaUserCircle />
  </NavLink>
)}

                {/* Logout */}

                <button
                  onClick={handleLogout}
                  className="bg-black hover:bg-gray-800 text-white px-5 py-2.5 transition duration-300 shadow-md"
                >
                  Logout
                </button>

              </>
            )}

          </div>

        

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-3xl text-black"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

     
        {menuOpen && (

          <div className="md:hidden bg-white border-t text-black border-gray-300 py-6 flex flex-col gap-5">

            <NavLink
              to="/"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
  to="/about"
  className={navLinkStyle}
  onClick={() => setMenuOpen(false)}
>
  About
</NavLink>

          

            {isLoggedIn && user?.role === "freelancer" && (
              <>
                <NavLink
                  to="/jobs"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Jobs
                </NavLink>

                <NavLink
                  to="/create-gig"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Create Gig
                </NavLink>
              </>
            )}

      

            {isLoggedIn && user?.role === "client" && (
              <>
                <NavLink
                  to="/gigs"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Gigs
                </NavLink>

                <NavLink
                  to="/create-job"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Create Job
                </NavLink>
              </>
            )}
                        {!isLoggedIn ? (

              <>

                <NavLink
                  to="/login"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="bg-black text-white py-3 text-center font-medium hover:bg-gray-800 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Register
                </NavLink>

              </>

            ) : (

              <>

                <NavLink
                  to="/dashboard"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Dashboard
                </NavLink>

                <NavLink
                  to="/chat"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Chat
                </NavLink>

                {user?.role !== "admin" && (
  <NavLink
    to={user?.role === "client" ? "/client-profile" : "/profile"}
    className={navLinkStyle}
    onClick={() => setMenuOpen(false)}
  >
    Profile
  </NavLink>
)}

                <button
                  onClick={handleLogout}
                  className="bg-black hover:bg-gray-800 text-white py-3 transition duration-300 shadow-md"
                >
                  Logout
                </button>

              </>

            )}

          </div>

        )}

      </div>

    </nav>
  );
};

export default Navbar;