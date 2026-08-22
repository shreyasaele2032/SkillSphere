
import { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ChatList from "../components/ChatList";
import api from "../services/api";

import {
  FaBriefcase,
  FaClipboardList,
  FaMoneyCheckAlt,
} from "react-icons/fa";
 const Dashboard = () => {

  const { user } = useContext(AuthContext);

const navigate = useNavigate();

const { userId } = useParams();

const [search, setSearch] = useState("");

const [viewUser, setViewUser] = useState(null);

  const dashboardUser = viewUser || user;

const role = dashboardUser?.role || "freelancer";

const name = dashboardUser?.name || "User";

  useEffect(() => {

  const fetchUser = async () => {

    if(userId){

      try {

        const response = await api.get(
          `/admin/users/${userId}`
        );

        setViewUser(response.data);

      } catch(error){

        console.log(error);

      }

    }

  };


  fetchUser();

}, [userId]);

  return (

  <div
    className="
    min-h-screen
    bg-white
    py-12
    px-6
    font-sans
    "
  >

    <div className="max-w-7xl mx-auto">


      {/* ================= HEADER ================= */}

      <div className="mb-14">

        <p
          className="
          text-sm
          font-semibold
          text-[#1dbf73]
          mb-3
          "
        >
          SkillSphere Marketplace
        </p>

        <h1
          className="
          text-4xl
          md:text-5xl
          font-normal
          tracking-tight
          text-[#404145]
          "
        >
          Welcome, {name} 👋
        </h1>

        <p
          className="
          mt-4
          text-gray-500
          text-lg
          max-w-3xl
          leading-7
          "
        >

          {role === "client"
            ? "Manage your projects, review applications, and hire the best freelancers from SkillSphere."
            : "Explore projects, apply to exciting opportunities, and grow your freelancing career with SkillSphere."}

        </p>

      </div>



      {/* ================= CLIENT SEARCH ================= */}

      {role === "client" && (

        <div className="mb-14">

          <h2
            className="
            text-3xl
            font-semibold
            text-[#404145]
            mb-5
            "
          >
            Find freelance services
          </h2>


          <div
            className="
            flex
            flex-col
            md:flex-row
            max-w-4xl
            gap-3
            "
          >

            <input
              type="text"

              placeholder="Search gigs by category or skill..."

              value={search}

              onChange={(e) => setSearch(e.target.value)}

              onKeyDown={(e) => {
                if(e.key === "Enter" && search.trim()){
                  navigate(`/gigs?search=${search}`);
                }
              }}

              className="
              flex-1
              h-14
              border
              border-gray-400
              rounded-md
              px-5
              text-gray-900
              placeholder-gray-500
              focus:outline-none
              focus:border-gray-700
              "
            />


            <button
              onClick={() => {
                if(search.trim()){
                  navigate(`/gigs?search=${search}`);
                }
              }}

              className="
              h-14
              px-10
              bg-[#1dbf73]
              hover:bg-[#19a463]
              text-white
              rounded-md
              font-semibold
              transition
              "
            >
              Search
            </button>

          </div>

        </div>

      )}



      {/* ================= QUICK ACTIONS ================= */}

      <div>

        <div
          className="
          flex
          items-end
          justify-between
          mb-8
          "
        >

          <div>

            <h2
              className="
              text-3xl
              md:text-4xl
              font-normal
              text-[#404145]
              "
            >
              {role === "client"
                ? "Manage your SkillSphere work"
                : "Grow your freelancing career"}
            </h2>

            <p
              className="
              mt-3
              text-gray-500
              "
            >
              Access your most frequently used features.
            </p>

          </div>

        </div>



        {/* ================= CLIENT ================= */}

        {role === "client" ? (

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            "
          >


            {/* My Jobs */}

            <Link
              to="/jobs"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
                  alt="My Jobs"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                My Jobs
              </h3>


              <p
                className="
                mt-2
                text-gray-500
                leading-6
                "
              >
                Create, edit and manage all the freelance projects you have posted.
              </p>

            </Link>



            {/* Applications */}

            <Link
              to="/applications"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
                  alt="Applications"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                View Applications
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                Review freelancers who applied for your projects and hire the best talent.
              </p>

            </Link>



            {/* Milestones */}

            <Link
              to="/milestones"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
                  alt="Milestones"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                Milestones
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                View project milestones and securely pay freelancers.
              </p>

            </Link>



            {/* Contacted Freelancers */}

            <Link
              to="/my-freelancers"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                  alt="Contacted Freelancers"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                Contacted Freelancers
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                View all freelancers you've contacted and continue your conversations.
              </p>

            </Link>


          </div>

        ) : (


          /* ================= FREELANCER ================= */

          <div
            className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            "
          >


            {/* Browse Jobs */}

            <Link
              to="/jobs"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=900&q=80"
                  alt="Browse Jobs"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                Browse Jobs
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                Explore freelance opportunities that match your skills.
              </p>

            </Link>



            {/* My Applications */}

            <Link
              to="/my-applications"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80"
                  alt="My Applications"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                My Applications
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                Track all the jobs you've applied for in one place.
              </p>

            </Link>



            {/* My Gigs */}

            <Link
              to="/my-gigs"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80"
                  alt="My Gigs"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                My Gigs
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                View and manage all the gigs you've created.
              </p>

            </Link>



            {/* My Clients */}

            <Link
              to="/my-clients"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                  alt="My Clients"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                My Clients
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                View clients who contacted you and continue your conversations.
              </p>

            </Link>



            {/* My Milestones */}

            <Link
              to="/milestones"
              className="
              group
              block
              "
            >

              <div
                className="
                h-64
                overflow-hidden
                rounded-sm
                bg-gray-100
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
                  alt="My Milestones"
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />

              </div>


              <h3
                className="
                mt-4
                text-xl
                font-bold
                text-[#404145]
                group-hover:text-[#1dbf73]
                transition
                "
              >
                My Milestones
              </h3>


              <p className="mt-2 text-gray-500 leading-6">
                Track project progress, submit work, and manage milestone payments.
              </p>

            </Link>


          </div>

        )}

      </div>

    </div>

  </div>

);
};

export default Dashboard;