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

    <div className="min-h-screen bg-gray-100 p-8">


      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8">


        <h1 className="text-3xl font-bold mb-6">
          User Details
        </h1>



        <div className="space-y-4">


          <p>
            <b>Name:</b> {user.name}
          </p>


          <p>
            <b>Email:</b> {user.email}
          </p>


          <p>
            <b>Role:</b> {user.role}
          </p>


          <p>
            <b>Location:</b> {user.location || "Not added"}
          </p>



          {
            user.role === "freelancer" && (

              <>

                <p>
                  <b>Skills:</b>{" "}
                  {
                    user.skills.length > 0
                    ? user.skills.join(", ")
                    : "No skills added"
                  }
                </p>


                <p>
                  <b>Rating:</b> {user.rating}
                </p>


                <p>
                  <b>Total Reviews:</b> {user.totalReviews}
                </p>


              </>

            )
          }



          {
            user.role === "client" && (

              <>

                <p>
                  <b>About:</b>{" "}
                  {user.bio || "No information"}
                </p>


              </>

            )
          }



        </div>


      </div>


    </div>

  );

};


export default AdminUserDetails;