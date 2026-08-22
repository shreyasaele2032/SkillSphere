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
  <div className="min-h-screen bg-white">

   


    {/* ================= LOGIN SECTION ================= */}
    <div className="
      min-h-[calc(100vh-72px)]
      flex
      items-center
      justify-center
      px-5
      py-12
      bg-[#fafafa]
    ">

      <div className="
        w-full
        max-w-[1050px]
        bg-white
        border
        border-[#e5e5e5]
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
        flex
        flex-col
        md:flex-row
        overflow-hidden
      ">


        {/* ================= LEFT PROMOTIONAL PANEL ================= */}
        <div className="
          hidden
          md:flex
          md:w-[48%]
          bg-[#7a263c]
          text-white
          relative
          overflow-hidden
          flex-col
          justify-between
          p-10
          lg:p-12
        ">

          {/* CONTENT */}
          <div className="relative z-10">

            <h2 className="
              text-4xl
              lg:text-[42px]
              leading-[1.1]
              font-extrabold
              tracking-tight
              mb-8
            ">
              Success starts here
            </h2>


            <div className="
              space-y-6
              text-lg
              lg:text-xl
              font-semibold
              leading-7
            ">

              <div className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>
                  Find skilled professionals for your projects
                </span>
              </div>

              <div className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>
                  Quality work delivered faster
                </span>
              </div>

              <div className="flex gap-3">
                <span className="font-bold">✓</span>
                <span>
                  Connect with talented freelancers worldwide
                </span>
              </div>

            </div>

          </div>


          {/* DECORATIVE AREA */}
          <div className="
            absolute
            bottom-0
            left-0
            right-0
            h-[42%]
            bg-gradient-to-t
            from-[#5d1c2f]
            to-transparent
          " />

          {/* SIMPLE DECORATIVE CIRCLES */}
          <div className="
            absolute
            bottom-[-100px]
            left-[-80px]
            w-[300px]
            h-[300px]
            rounded-full
            border-[45px]
            border-white/10
          " />

          <div className="
            absolute
            bottom-[-150px]
            right-[-100px]
            w-[350px]
            h-[350px]
            rounded-full
            border-[55px]
            border-white/10
          " />

        </div>


        {/* ================= RIGHT LOGIN PANEL ================= */}
        <div className="
          w-full
          md:w-[52%]
          bg-white
          p-8
          sm:p-10
          lg:p-12
        ">

          {/* HEADER */}
          <div className="mb-8">

            <h1 className="
              text-3xl
              lg:text-[34px]
              font-extrabold
              text-[#222325]
              tracking-tight
              mb-2
            ">
              Sign in to your account
            </h1>

            <p className="
              text-[16px]
              font-medium
              text-[#62646a]
            ">
              Don't have an account?{" "}

              <Link
                to="/register"
                className="
                  text-[#222325]
                  font-bold
                  underline
                  hover:text-[#1dbf73]
                  transition
                "
              >
                Join here
              </Link>
            </p>

          </div>


          {/* ================= FORM ================= */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* EMAIL */}
            <div>

              <label className="
                block
                text-[16px]
                font-extrabold
                text-[#222325]
                mb-2
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
                  h-[52px]
                  px-4
                  border
                  border-[#b5b5b5]
                  bg-white
                  text-[#222325]
                  text-[16px]
                  font-medium
                  placeholder:text-[#95979d]
                  focus:outline-none
                  focus:border-[#222325]
                  focus:ring-1
                  focus:ring-[#222325]
                  transition
                "
              />

            </div>


            {/* PASSWORD */}
            <div>

              <label className="
                block
                text-[16px]
                font-extrabold
                text-[#222325]
                mb-2
              ">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="
                  w-full
                  h-[52px]
                  px-4
                  border
                  border-[#b5b5b5]
                  bg-white
                  text-[#222325]
                  text-[16px]
                  font-medium
                  placeholder:text-[#95979d]
                  focus:outline-none
                  focus:border-[#222325]
                  focus:ring-1
                  focus:ring-[#222325]
                  transition
                "
              />

            </div>


            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-[52px]
                bg-[#1dbf73]
                hover:bg-[#19a463]
                text-white
                text-[17px]
                font-extrabold
                transition
                duration-200
                disabled:opacity-50
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>


          {/* DIVIDER */}
          <div className="
            flex
            items-center
            gap-4
            my-8
          ">

            <div className="flex-1 border-t border-[#e5e5e5]" />

            

            <div className="flex-1 border-t border-[#e5e5e5]" />

          </div>


          


        </div>

      </div>

    </div>

  </div>
);
};

export default Login;