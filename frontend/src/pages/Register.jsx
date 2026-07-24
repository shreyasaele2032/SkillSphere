import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "freelancer",
  });

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }


    try {

      setLoading(true);


      const { confirmPassword, ...userData } = formData;


      const data = await authService.register(userData);



     
      if (data.user && data.token) {

        login(
          data.user,
          data.token
        );

      }



      alert("Registration Successful!");


      navigate("/dashboard");


    } catch (error) {

      console.error(error);


      alert(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      );


    } finally {

      setLoading(false);

    }

  };


  return (
  <div className="min-h-screen flex items-center justify-center px-4 py-12 
                  bg-gradient-to-br from-black via-gray-900 to-gray-700">

    <div className="
      w-full 
      max-w-lg 
      rounded-2xl 
      p-8 
      bg-white/10 
      backdrop-blur-xl 
      border 
      border-white/20 
      shadow-2xl
    ">


      <h1 className="
        text-4xl 
        font-extrabold 
        text-center 
        bg-gradient-to-r 
        from-blue-400 
        to-cyan-300 
        bg-clip-text 
        text-transparent
      ">
        Create Your Account
      </h1>


      <p className="
        text-center 
        text-gray-300 
        mt-3 
        mb-8
      ">
        Join SkillSphere as a Freelancer or Client
      </p>




      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >



        <div>

          <label className="
            block 
            mb-2 
            text-gray-200 
            font-semibold
          ">
            Full Name
          </label>


          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
          />

        </div>





        <div>

          <label className="
            block 
            mb-2 
            text-gray-200 
            font-semibold
          ">
            Email
          </label>


          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
          />

        </div>






        <div>

          <label className="
            block 
            mb-2 
            text-gray-200 
            font-semibold
          ">
            Password
          </label>


          <input
            type="password"
            name="password"
            placeholder="Create a password"
            value={formData.password}
            onChange={handleChange}
            required
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
          />

        </div>







        <div>

          <label className="
            block 
            mb-2 
            text-gray-200 
            font-semibold
          ">
            Confirm Password
          </label>


          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              placeholder-gray-400
              outline-none
              focus:ring-2
              focus:ring-blue-500
              transition
            "
          />

        </div>







        <div>

          <label className="
            block 
            mb-2 
            text-gray-200 
            font-semibold
          ">
            Register As
          </label>



          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="
              w-full
              px-4
              py-3
              rounded-xl
              bg-white/10
              border
              border-white/20
              text-white
              outline-none
              focus:ring-2
              focus:ring-blue-500
            "
          >

            <option 
              value="freelancer"
              className="text-black"
            >
              Freelancer
            </option>


            <option 
              value="client"
              className="text-black"
            >
              Client
            </option>


          </select>


        </div>








        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            py-3
            rounded-xl
            font-bold
            text-white
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            hover:scale-[1.02]
            shadow-lg
            shadow-blue-500/30
            transition
            disabled:opacity-50
          "
        >

          {loading ? "Registering..." : "Register"}

        </button>



      </form>







      <p className="
        text-center 
        mt-8 
        text-gray-300
      ">

        Already have an account?{" "}


        <Link
          to="/login"
          className="
            text-cyan-400
            font-semibold
            hover:text-blue-400
            transition
          "
        >

          Login

        </Link>


      </p>





    </div>

  </div>
);
};


export default Register;