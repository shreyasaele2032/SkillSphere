import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import authService from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    
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

    try {

      setLoading(true);


      const data = await authService.login(formData);
      console.log("LOGIN RESPONSE:", data);
      console.log("TOKEN:", data.token);
      console.log("USER:", data.user); 



      if (data.user && data.token) {

        login(
          data.user,
          data.token
        );

      }



      alert("Login Successful!");


     if (data.user.role === "admin") {

  navigate("/admin-dashboard");

} else {

  navigate("/dashboard");

}


    } catch (error) {

      console.error(error);


      alert(
        error.response?.data?.message ||
          "Login failed. Please try again."
      );


    } finally {

      setLoading(false);

    }
  };


  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-white relative overflow-hidden">

    {/* Background Effects */}

    <div className="absolute top-10 left-10 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl"></div>

    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

    {/* Login Card */}

    <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10">

      <h1 className="text-4xl font-bold text-center text-white mb-3">
        Welcome Back
      </h1>

      <p className="text-center text-gray-300 mb-8">
        Login to your SkillSphere account
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-4 py-3 border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-black transition"
          />

        </div>

        {/* Password */}

        <div>

          <label className="block text-white font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 text-black px-4 py-3 border border-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-black transition"
          />

        </div>

        {/* Role */}

        {/* <div>

          <label className="block text-white font-semibold mb-2">
            Login As
          </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full bg-gray-200 text-black px-4 py-3 border border-gray-300 focus:outline-none focus:border-black transition"
          >
            <option value="freelancer">
              Freelancer
            </option>

            <option value="client">
              Client
            </option>

          </select>

        </div> */}

        {/* Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black hover:bg-gray-800 text-white py-3 font-semibold shadow-lg transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      {/* Register */}

      <p className="text-center text-gray-300 mt-8">

        Don't have an account?{" "}

        <Link
          to="/register"
          className="text-white font-semibold hover:text-gray-200 transition"
        >
          Register
        </Link>

      </p>

    </div>

  </div>
);
};

export default Login;