import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";


const AdminUserDetails = () => {

  const { id } = useParams();

  const [user, setUser] = useState(null);


  useEffect(() => {

    const fetchUser = async () => {

      try {

        const response = await api.get(
          `/admin/users/${id}`
        );

        setUser(response.data);

      } catch (error) {

        console.log(error);

      }

    };


    fetchUser();

  }, [id]);



  if (!user) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  }



  return (

  <div
    className="
    min-h-screen
    bg-[#f7f7f7]
    py-12
    px-4
    md:px-8
    "
  >

    <div
      className="
      max-w-4xl
      mx-auto
      bg-white
      border
      border-gray-200
      rounded-2xl
      shadow-sm
      overflow-hidden
      "
    >

      {/* Header */}

      <div
        className="
        bg-gray-900
        px-8
        py-8
        "
      >

        <div className="flex items-center gap-5">

          <div
            className="
            w-16
            h-16
            rounded-full
            bg-[#1dbf73]
            flex
            items-center
            justify-center
            text-white
            text-2xl
            font-bold
            "
          >
            {user.name?.charAt(0)?.toUpperCase()}
          </div>

          <div>

            <h1
              className="
              text-3xl
              font-bold
              text-white
              "
            >
              User Details
            </h1>

            <p className="text-gray-300 mt-1">
              Account information and profile details
            </p>

          </div>

        </div>

      </div>


      {/* User Information */}

      <div className="p-8">

        <div className="grid md:grid-cols-2 gap-5">


          <div
            className="
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            p-5
            "
          >

            <p className="text-sm font-medium text-gray-500 mb-1">
              Name
            </p>

            <p className="text-lg font-semibold text-gray-900">
              {user.name}
            </p>

          </div>


          <div
            className="
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            p-5
            "
          >

            <p className="text-sm font-medium text-gray-500 mb-1">
              Email
            </p>

            <p className="text-lg font-semibold text-gray-900 break-words">
              {user.email}
            </p>

          </div>


          <div
            className="
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            p-5
            "
          >

            <p className="text-sm font-medium text-gray-500 mb-1">
              Role
            </p>

            <span
              className="
              inline-flex
              px-3
              py-1
              rounded-full
              bg-green-50
              text-[#168f59]
              text-sm
              font-semibold
              capitalize
              "
            >
              {user.role}
            </span>

          </div>


          <div
            className="
            bg-gray-50
            border
            border-gray-200
            rounded-xl
            p-5
            "
          >

            <p className="text-sm font-medium text-gray-500 mb-1">
              Location
            </p>

            <p className="text-lg font-semibold text-gray-900">
              {user.location || "Not added"}
            </p>

          </div>


        </div>


        {
          user.role === "freelancer" && (

            <div className="mt-8">

              <div className="flex items-center gap-3 mb-5">

                <div className="h-6 w-1 bg-[#1dbf73] rounded-full"></div>

                <h2 className="text-xl font-bold text-gray-900">
                  Freelancer Information
                </h2>

              </div>


              <div className="grid md:grid-cols-3 gap-5">


                <div
                  className="
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  p-5
                  "
                >

                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Skills
                  </p>

                  <p className="text-gray-900 font-semibold leading-relaxed">
                    {
                      user.skills.length > 0
                      ? user.skills.join(", ")
                      : "No skills added"
                    }
                  </p>

                </div>


                <div
                  className="
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  p-5
                  "
                >

                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Rating
                  </p>

                  <p className="text-2xl font-bold text-gray-900">
                    {user.rating}
                  </p>

                </div>


                <div
                  className="
                  bg-gray-50
                  border
                  border-gray-200
                  rounded-xl
                  p-5
                  "
                >

                  <p className="text-sm font-medium text-gray-500 mb-2">
                    Total Reviews
                  </p>

                  <p className="text-2xl font-bold text-gray-900">
                    {user.totalReviews}
                  </p>

                </div>


              </div>

            </div>

          )
        }


        {
          user.role === "client" && (

            <div className="mt-8">

              <div className="flex items-center gap-3 mb-5">

                <div className="h-6 w-1 bg-[#1dbf73] rounded-full"></div>

                <h2 className="text-xl font-bold text-gray-900">
                  Client Information
                </h2>

              </div>


              <div
                className="
                bg-gray-50
                border
                border-gray-200
                rounded-xl
                p-6
                "
              >

                <p className="text-sm font-medium text-gray-500 mb-2">
                  About
                </p>

                <p className="text-gray-700 leading-7">
                  {user.bio || "No information"}
                </p>

              </div>

            </div>

          )
        }


      </div>

    </div>

  </div>

);

};


export default AdminUserDetails;