import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {

  const [users, setUsers] = useState([]);

  const navigate = useNavigate();


  useEffect(() => {

    const fetchUsers = async () => {

      try {

        const response = await api.get("/admin/users");

        setUsers(response.data);

      } catch (error) {

        console.log(error);

      }

    };


    fetchUsers();

  }, []);

  const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this user?"
  );

  if (!confirmDelete) return;

  try {
    await api.delete(`/admin/users/${id}`);

    setUsers(users.filter((u) => u._id !== id));

    alert("User deleted successfully");

  } catch (error) {
    console.log(error);
    alert("Failed to delete user");
  }
};



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
    "
  >

    <main className="max-w-7xl mx-auto">


      {/* Header */}

      <div
        className="
        bg-white/20
        backdrop-blur-xl
        border
        border-white/30
        rounded-3xl
        p-10
        shadow-2xl
        mb-10
        "
      >

        <h1
          className="
          text-5xl
          font-black
          text-white
          "
        >
          Admin Dashboard
        </h1>

        <p className="text-gray-200 mt-3 text-lg">
          Manage SkillSphere users, freelancers and clients.
        </p>

      </div>




      {/* Freelancer Section */}

      <section
        className="
        bg-white/20
        backdrop-blur-xl
        border
        border-white/30
        rounded-3xl
        p-8
        shadow-2xl
        mb-10
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          text-white
          mb-6
          "
        >
          👨‍💻 Freelancers
        </h2>


        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


        {
          users
          .filter((user)=>user.role==="freelancer")
          .map((user)=>(

            <div
              key={user._id}
              className="
              bg-white/30
              backdrop-blur-xl
              border
              border-white/30
              rounded-3xl
              p-6
              shadow-xl
              hover:-translate-y-2
              transition-all
              "
            >


              <h3
                className="
                text-2xl
                font-bold
                text-black
                "
              >
                {user.name}
              </h3>


              <p className="text-gray-800 mt-2">
                {user.email}
              </p>


              <p className="mt-2 capitalize font-semibold">
                Role : {user.role}
              </p>


              <div className="mt-5 flex gap-3">

  <button
    onClick={() => {
      navigate(`/dashboard/${user._id}`);
    }}
    className="
    flex-1
    bg-black
    text-white
    px-6
    py-3
    rounded-xl
    hover:bg-gray-800
    transition
    "
  >
    View Dashboard
  </button>

  <button
    onClick={() => handleDelete(user._id)}
    className="
    bg-red-600
    hover:bg-red-700
    text-white
    px-6
    py-3
    rounded-xl
    transition
    "
  >
    Delete
  </button>

</div>


            </div>

          ))
        }


        </div>

      </section>







      {/* Client Section */}


      <section
        className="
        bg-white/20
        backdrop-blur-xl
        border
        border-white/30
        rounded-3xl
        p-8
        shadow-2xl
        mb-10
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          text-white
          mb-6
          "
        >
          🏢 Clients
        </h2>



        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


        {
          users
          .filter((user)=>user.role==="client")
          .map((user)=>(

            <div
              key={user._id}
              className="
              bg-white/30
              backdrop-blur-xl
              border
              border-white/30
              rounded-3xl
              p-6
              shadow-xl
              hover:-translate-y-2
              transition-all
              "
            >


              <h3
                className="
                text-2xl
                font-bold
                text-black
                "
              >
                {user.name}
              </h3>


              <p className="text-gray-800 mt-2">
                {user.email}
              </p>


              <p className="mt-2 capitalize font-semibold">
                Role : {user.role}
              </p>


              <div className="mt-5 flex gap-3">

  <button
    onClick={() => {
      navigate(`/dashboard/${user._id}`);
    }}
    className="
    flex-1
    bg-black
    text-white
    px-6
    py-3
    rounded-xl
    hover:bg-gray-800
    transition
    "
  >
    View Dashboard
  </button>

  <button
    onClick={() => handleDelete(user._id)}
    className="
    bg-red-600
    hover:bg-red-700
    text-white
    px-6
    py-3
    rounded-xl
    transition
    "
  >
    Delete
  </button>

</div>

            </div>

          ))
        }


        </div>


      </section>







      {/* Admin Section */}

      {/* <section
        className="
        bg-white/20
        backdrop-blur-xl
        border
        border-white/30
        rounded-3xl
        p-8
        shadow-2xl
        "
      > */}

       

{/* 
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


        {
          users
          .filter((user)=>user.role==="admin")
          .map((user)=>(

            <div
              key={user._id}
              className="
              bg-white/30
              backdrop-blur-xl
              border
              border-white/30
              rounded-3xl
              p-6
              shadow-xl
              "
            >

              <h3 className="text-2xl font-bold">
                {user.name}
              </h3>


              <p className="mt-2">
                {user.email}
              </p>


            </div>

          ))
        }


        </div> */}


      {/* </section> */}


    </main>

  </div>
);
};


export default AdminDashboard;