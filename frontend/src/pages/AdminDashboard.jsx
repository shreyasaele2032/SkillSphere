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
    bg-[#f7f7f7]
    py-10
    px-4
    md:px-8
    "
  >

    <main className="max-w-7xl mx-auto">

      {/* Dashboard Header */}

      <div
        className="
        bg-white
        border
        border-gray-200
        rounded-xl
        px-6
        py-7
        md:px-8
        shadow-sm
        mb-8
        "
      >

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

          <div>

            <div className="flex items-center gap-3 mb-2">

              <div
                className="
                w-10
                h-10
                rounded-lg
                bg-[#1dbf73]
                flex
                items-center
                justify-center
                text-white
                font-bold
                text-lg
                "
              >
                S
              </div>

              <span className="text-sm font-semibold text-[#1dbf73] uppercase tracking-wide">
                SkillSphere Admin
              </span>

            </div>

            <h1
              className="
              text-3xl
              md:text-4xl
              font-bold
              text-gray-900
              tracking-tight
              "
            >
              Admin Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage SkillSphere users, freelancers and clients.
            </p>

          </div>

        </div>

      </div>


      {/* Freelancers */}

      <section
        className="
        bg-white
        border
        border-gray-200
        rounded-xl
        shadow-sm
        mb-8
        overflow-hidden
        "
      >

        <div
          className="
          px-6
          py-5
          md:px-7
          border-b
          border-gray-200
          flex
          items-center
          justify-between
          "
        >

          <div>

            <h2
              className="
              text-xl
              md:text-2xl
              font-bold
              text-gray-900
              "
            >
              Freelancers
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage registered freelancers
            </p>

          </div>

          <div
            className="
            bg-green-50
            text-[#168f59]
            px-3
            py-1.5
            rounded-full
            text-sm
            font-semibold
            "
          >
            Freelancer
          </div>

        </div>


        <div
          className="
          p-6
          md:p-7
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          "
        >

          {
            users
            .filter((user)=>user.role==="freelancer")
            .map((user)=>(

              <div
                key={user._id}
                className="
                group
                bg-white
                border
                border-gray-200
                rounded-xl
                p-5
                hover:border-[#1dbf73]
                hover:shadow-md
                transition-all
                duration-200
                "
              >

                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                      w-11
                      h-11
                      rounded-full
                      bg-gray-900
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-lg
                      "
                    >
                      {user.name?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>

                      <h3
                        className="
                        text-lg
                        font-bold
                        text-gray-900
                        "
                      >
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-0.5">
                        {user.email}
                      </p>

                    </div>

                  </div>

                </div>


                <div className="mt-5">

                  <span
                    className="
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-full
                    bg-green-50
                    text-[#168f59]
                    text-xs
                    font-semibold
                    capitalize
                    "
                  >
                    {user.role}
                  </span>

                </div>


                <div
                  className="
                  mt-5
                  pt-4
                  border-t
                  border-gray-100
                  flex
                  gap-3
                  "
                >

                  <button
                    onClick={() => {
                      navigate(`/dashboard/${user._id}`);
                    }}
                    className="
                    flex-1
                    bg-gray-900
                    text-white
                    px-4
                    py-2.5
                    rounded-lg
                    text-sm
                    font-semibold
                    hover:bg-black
                    transition-colors
                    "
                  >
                    View Dashboard
                  </button>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="
                    px-4
                    py-2.5
                    rounded-lg
                    border
                    border-red-200
                    bg-red-50
                    text-red-600
                    text-sm
                    font-semibold
                    hover:bg-red-100
                    transition-colors
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


      {/* Clients */}

      <section
        className="
        bg-white
        border
        border-gray-200
        rounded-xl
        shadow-sm
        mb-8
        overflow-hidden
        "
      >

        <div
          className="
          px-6
          py-5
          md:px-7
          border-b
          border-gray-200
          flex
          items-center
          justify-between
          "
        >

          <div>

            <h2
              className="
              text-xl
              md:text-2xl
              font-bold
              text-gray-900
              "
            >
              Clients
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage registered clients
            </p>

          </div>

          <div
            className="
            bg-gray-100
            text-gray-700
            px-3
            py-1.5
            rounded-full
            text-sm
            font-semibold
            "
          >
            Client
          </div>

        </div>


        <div
          className="
          p-6
          md:p-7
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-5
          "
        >

          {
            users
            .filter((user)=>user.role==="client")
            .map((user)=>(

              <div
                key={user._id}
                className="
                group
                bg-white
                border
                border-gray-200
                rounded-xl
                p-5
                hover:border-[#1dbf73]
                hover:shadow-md
                transition-all
                duration-200
                "
              >

                <div className="flex items-start justify-between gap-3">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                      w-11
                      h-11
                      rounded-full
                      bg-gray-900
                      text-white
                      flex
                      items-center
                      justify-center
                      font-bold
                      text-lg
                      "
                    >
                      {user.name?.charAt(0)?.toUpperCase()}
                    </div>

                    <div>

                      <h3
                        className="
                        text-lg
                        font-bold
                        text-gray-900
                        "
                      >
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-0.5">
                        {user.email}
                      </p>

                    </div>

                  </div>

                </div>


                <div className="mt-5">

                  <span
                    className="
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-full
                    bg-gray-100
                    text-gray-700
                    text-xs
                    font-semibold
                    capitalize
                    "
                  >
                    {user.role}
                  </span>

                </div>


                <div
                  className="
                  mt-5
                  pt-4
                  border-t
                  border-gray-100
                  flex
                  gap-3
                  "
                >

                  <button
                    onClick={() => {
                      navigate(`/dashboard/${user._id}`);
                    }}
                    className="
                    flex-1
                    bg-gray-900
                    text-white
                    px-4
                    py-2.5
                    rounded-lg
                    text-sm
                    font-semibold
                    hover:bg-black
                    transition-colors
                    "
                  >
                    View Dashboard
                  </button>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="
                    px-4
                    py-2.5
                    rounded-lg
                    border
                    border-red-200
                    bg-red-50
                    text-red-600
                    text-sm
                    font-semibold
                    hover:bg-red-100
                    transition-colors
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

    </main>

  </div>
);
};


export default AdminDashboard;