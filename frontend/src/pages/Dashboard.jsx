
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

    bg-gradient-to-br
    from-black
    via-gray-700
    to-white

    py-10
    px-6

    font-sans
    "
  >

    <div className="max-w-7xl mx-auto">



     

      <div
        className="
        relative
        overflow-hidden

        rounded-[28px]

        bg-white/20

        backdrop-blur-xl

        border
        border-white/30

        p-10
        md:p-14

        shadow-2xl

        text-white

        mb-10
        "
      >


        

        <div
          className="
          pointer-events-none
          absolute
          inset-0

          bg-gradient-to-br
          from-white/10
          via-transparent
          to-black/20
          "
        />


        <div
          className="
          pointer-events-none

          absolute
          -top-20
          -right-20

          w-80
          h-80

          rounded-full

          bg-blue-500/20

          blur-3xl
          "
        />


        <div
          className="
          pointer-events-none

          absolute
          -bottom-20

          left-[10%]

          w-72
          h-72

          rounded-full

          bg-purple-500/20

          blur-3xl
          "
        />





        <div
          className="
          relative
          z-10

          flex
          flex-col
          md:flex-row

          gap-8

          items-center

          justify-between
          "
        >



          <div>


            <span
              className="
              inline-flex
              items-center
              gap-2

              text-xs

              font-semibold

              tracking-widest

              uppercase

              text-blue-300

              mb-4
              "
            >

              <span
                className="
                w-2
                h-2

                rounded-full

                bg-blue-400

                shadow-lg
                "
              />

              SkillSphere Dashboard

            </span>





            <h1
              className="
              text-4xl
              md:text-5xl

              font-bold

              tracking-tight

              mb-4
              "
            >

              Welcome, {name} 👋

            </h1>





            <p
              className="
              text-gray-200

              text-lg

              max-w-2xl

              leading-8
              "
            >

              {role === "client"
                ? "Manage your projects, review applications, and hire the best freelancers from SkillSphere."
                : "Explore projects, apply to exciting opportunities, and grow your freelancing career with SkillSphere."}

            </p>


          </div>







  

          <div
            className="
            relative

            w-[168px]
            h-[168px]

            flex-shrink-0

            flex

            items-center

            justify-center
            "
          >


            <div
              className="
              absolute

              inset-0

              rounded-full

              border

              border-dashed

              border-white/40
              "
            />



            <div
              className="
              relative

              z-10

              w-[122px]

              h-[122px]

              rounded-full

              bg-white/10

              backdrop-blur-xl

              border

              border-white/30

              flex

              flex-col

              items-center

              justify-center

              text-center

              "
            >


              <span
                className="
                text-xs

                uppercase

                tracking-widest

                text-gray-300
                "
              >
                Account
              </span>


              <span
                className="
                text-xl

                font-bold

                capitalize

                text-white
                "
              >
                {role}
              </span>


            </div>


          </div>



        </div>


      </div>







    


      {role === "client" && (

        <div
          className="
          bg-white/20

          backdrop-blur-xl

          border

          border-white/30

          rounded-[26px]

          shadow-2xl

          p-8

          mb-10
          "
        >



          <h2
            className="
            text-2xl

            font-bold

            text-white

            mb-4
            "
          >
            Find Freelance Services
          </h2>





          <div className="flex gap-4">



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

              bg-white

              border

              border-gray-300

              text-black

              placeholder-gray-500

              rounded-xl

              px-5

              py-3

              focus:outline-none

              focus:ring-2

              focus:ring-blue-500
              "
            />





            <button
              onClick={() => {
                if(search.trim()){
                  navigate(`/gigs?search=${search}`);
                }
              }}

              className="
              bg-gradient-to-r

              from-blue-600

              to-indigo-700

              hover:from-indigo-700

              hover:to-blue-600

              text-white

              px-8

              rounded-xl

              font-semibold

              transition
              "
            >

              Search

            </button>



          </div>



        </div>

      )}
      

<div
  className="
  bg-white/20

  backdrop-blur-xl

  border

  border-white/30

  rounded-[26px]

  shadow-2xl

  p-8

  md:p-11
  "
>


  <div className="mb-9">


    <h2
      className="
      text-2xl

      md:text-3xl

      font-bold

      text-white
      "
    >
      Quick Actions
    </h2>



    <p
      className="
      text-gray-200

      mt-2
      "
    >
      Access your most frequently used features.
    </p>


  </div>





  <div
    className="
    grid

    md:grid-cols-3

    gap-6
    "
  >




    {role === "client" ? (

      <>


   

        <Link
  to="/jobs"
  className="
  group
  relative
  overflow-hidden

  bg-white/30
  backdrop-blur-xl

  border
  border-white/20

  rounded-3xl

  p-8

  shadow-2xl

  hover:bg-white/20
  hover:-translate-y-2
  hover:shadow-cyan-500/20

  transition-all
  duration-300
  "
>

  <div className="absolute left-0 top-0 h-full w-2 rounded-l-3xl"></div>

  <div
    className="
    w-16
    h-16

    rounded-2xl

    bg-cyan-500/20

    flex
    items-center
    justify-center

    text-cyan-400
    text-3xl

    mb-6

    group-hover:scale-110

    transition
    "
  >
    <FaBriefcase />
  </div>

  <h3 className="text-2xl font-bold text-black">
    My Jobs
  </h3>

  <p
    className="
    mt-3

    text-black

    leading-7
    "
  >
    Create, edit and manage all the freelance projects you have posted.
  </p>

</Link>







       


        <Link
  to="/applications"
  className="
  group
  relative
  overflow-hidden

  bg-white/30
  backdrop-blur-xl

  border
  border-white/20

  rounded-3xl

  p-8

  shadow-2xl

  hover:bg-white/20
  hover:-translate-y-2
  hover:shadow-amber-500/20

  transition-all
  duration-300
  "
>

  <div className="absolute left-0 top-0 h-full w-2 rounded-l-3xl"></div>

  <div
    className="
    w-16
    h-16

    rounded-2xl

    bg-amber-500/20

    flex
    items-center
    justify-center

    text-amber-400
    text-3xl

    mb-6

    group-hover:scale-110

    transition
    "
  >
    <FaClipboardList />
  </div>

  <h3 className="text-2xl font-bold text-black">
    View Applications
  </h3>

  <p
    className="
    mt-3

    text-black

    leading-7
    "
  >
    Review freelancers who applied for your projects and hire the best talent.
  </p>

</Link>









      

       <Link
  to="/milestones"
  className="
  group
  relative
  overflow-hidden

  bg-white/30
  backdrop-blur-xl

  border
  border-white/20

  rounded-3xl

  p-8

  shadow-2xl

  hover:bg-white/20
  hover:-translate-y-2
  hover:shadow-emerald-500/20

  transition-all
  duration-300
  "
>

  <div className="absolute left-0 top-0 h-full w-2 rounded-l-3xl"></div>

  <div
    className="
    w-16
    h-16

    rounded-2xl

    bg-emerald-500/20

    flex
    items-center
    justify-center

    text-emerald-400
    text-3xl

    mb-6

    group-hover:scale-110

    transition
    "
  >
    <FaMoneyCheckAlt />
  </div>

  <h3 className="text-2xl font-bold text-black">
    Milestones
  </h3>

  <p
    className="
    mt-3
    

    text-black

    leading-7
    "
  >
    View project milestones and securely pay freelancers.
  </p>

</Link>

<Link
  to="/my-freelancers"
  className="
  group
  relative
  overflow-hidden

  bg-white/30
  backdrop-blur-xl

  border
  border-white/20

  rounded-3xl

  p-8

  shadow-2xl

  hover:bg-white/20
  hover:-translate-y-2
  hover:shadow-purple-500/20

  transition-all
  duration-300
  "
>

  <div
    className="
    w-16
    h-16

    rounded-2xl

    bg-purple-500/20

    flex
    items-center
    justify-center

    text-purple-400
    text-3xl

    mb-6

    group-hover:scale-110

    transition
    "
  >
    💬
  </div>

  <h3 className="text-2xl font-bold text-black">
    Contacted Freelancers
  </h3>

  <p
    className="
    mt-3

    text-black

    leading-7
    "
  >
    View all freelancers you've contacted and continue your conversations.
  </p>

</Link>

      </>

    ) : (



      <>
           

       <Link
  to="/jobs"
  className="
  group

  rounded-[20px]

  bg-white/30

  backdrop-blur-xl

  border

  border-white/30

  text-black

  p-8

  shadow-2xl

  hover:bg-white/30

  hover:-translate-y-2

  transition-all

  duration-300
  "
>

  <div
    className="
    text-4xl
    mb-4

    transition-transform
    duration-300

    group-hover:scale-110
    "
  >
    🔍
  </div>


  <h3 className="text-2xl font-bold">
    Browse Jobs
  </h3>


  <p className="mt-2 text-black leading-relaxed font-bold">
    Explore freelance opportunities that match your skills.
  </p>

</Link>





<Link
  to="/my-applications"
  className="
  group

  rounded-[20px]

  bg-white/30

  backdrop-blur-xl

  border

  border-white/30

  text-black

  p-8

  shadow-2xl

  hover:bg-white/30

  hover:-translate-y-2

  transition-all

  duration-300
  "
>

  <div
    className="
    text-4xl
    mb-4

    transition-transform
    duration-300

    group-hover:scale-110
    "
  >
    📑
  </div>


  <h3 className="text-2xl font-bold">
    My Applications
  </h3>


  <p className="mt-2 text-black leading-relaxed font-bold">
    Track all the jobs you've applied for in one place.
  </p>

</Link>






<Link
  to="/my-gigs"
  className="
  group

  rounded-[20px]

  bg-white/30

  backdrop-blur-xl

  border

  border-white/30

  text-black

  p-8

  shadow-2xl

  hover:bg-white/30

  hover:-translate-y-2

  transition-all

  duration-300
  "
>

  <div
    className="
    text-4xl
    mb-4

    transition-transform
    duration-300

    group-hover:scale-110
    "
  >
    🚀
  </div>


  <h3 className="text-2xl font-bold">
    My Gigs
  </h3>


  <p className="mt-2 text-black leading-relaxed font-bold">
    View and manage all the gigs you've created.
  </p>

</Link>







<Link
  to="/my-clients"
  className="
  group

  rounded-[20px]

  bg-white/30

  backdrop-blur-xl

  border

  border-white/30

  text-black

  p-8

  shadow-2xl

  hover:bg-white/30

  hover:-translate-y-2

  transition-all

  duration-300
  "
>

  <div
    className="
    text-4xl
    mb-4

    transition-transform
    duration-300

    group-hover:scale-110
    "
  >
    🤝
  </div>


  <h3 className="text-2xl font-bold">
    My Clients
  </h3>


  <p className="mt-2 text-black leading-relaxed font-bold">
    View clients who contacted you and continue your conversations.
  </p>

</Link>


<Link
  to="/milestones"
  className="
  group

  rounded-[20px]

  bg-white/30

  backdrop-blur-xl

  border

  border-white/30

  text-black

  p-8

  shadow-2xl

  hover:bg-white/30

  hover:-translate-y-2

  transition-all

  duration-300
  "
>

  <div
    className="
    text-4xl
    mb-4

    transition-transform
    duration-300

    group-hover:scale-110
    "
  >
    💰
  </div>


  <h3 className="text-2xl font-bold">
    My Milestones
  </h3>


  <p className="mt-2 text-black leading-relaxed font-bold">
    Track project progress, submit work, and manage milestone payments.
  </p>

</Link>



      </>

    )}



  </div>


</div>



</div>

</div>

);
};

export default Dashboard;