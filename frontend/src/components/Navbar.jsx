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
  <nav className="sticky top-0 z-50 bg-white border-b border-[#e5e5e5]">

    <div className="max-w-7xl mx-auto px-5 lg:px-8">

      <div className="flex items-center justify-between h-[76px]">


        <Link
          to="/"
          className="
            text-[32px]
            font-black
            tracking-[-1.5px]
            text-[#404145]
            hover:text-[#1dbf73]
            transition
            duration-200
          "
        >
          Skill<span className="text-[#1dbf73]">Sphere</span>
        </Link>


        <div className="
          hidden
          md:flex
          items-center
          gap-7
          text-[#222325]
        ">

          <NavLink
            to="/"
            className={navLinkStyle}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkStyle}
          >
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
                className="
                  bg-[#1dbf73]
                  text-white
                  px-6
                  py-2.5
                  rounded-md
                  font-bold
                  text-[15px]
                  hover:bg-[#19a463]
                  transition
                  duration-200
                "
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
                  className="
                    text-[#62646a]
                    hover:text-[#1dbf73]
                    text-[26px]
                    transition
                    duration-200
                  "
                >
                  <FaUserCircle />
                </NavLink>
              )}


              <button
                onClick={handleLogout}
                className="
                  bg-[#222325]
                  hover:bg-black
                  text-white
                  px-5
                  py-2.5
                  rounded-md
                  font-bold
                  text-[15px]
                  transition
                  duration-200
                "
              >
                Logout
              </button>

            </>
          )}

        </div>


        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-3xl
            text-[#222325]
            hover:text-[#1dbf73]
            transition
          "
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>


      {menuOpen && (

        <div className="
          md:hidden
          bg-white
          border-t
          text-[#222325]
          border-[#e5e5e5]
          py-6
          px-2
          flex
          flex-col
          gap-5
        ">

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
                className="
                  bg-[#1dbf73]
                  text-white
                  py-3
                  text-center
                  rounded-md
                  font-bold
                  text-base
                  hover:bg-[#19a463]
                  transition
                  duration-200
                "
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
                className="
                  bg-[#222325]
                  hover:bg-black
                  text-white
                  py-3
                  rounded-md
                  font-bold
                  text-base
                  transition
                  duration-200
                "
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