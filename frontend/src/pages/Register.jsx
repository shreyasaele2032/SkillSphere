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
  <div className="
    min-h-screen
    bg-[#fafafa]
    flex
    items-center
    justify-center
    px-5
    py-12
  ">

    <div className="
      w-full
      max-w-6xl
      bg-white
      border
      border-[#e5e5e5]
      shadow-[0_4px_24px_rgba(0,0,0,0.08)]
      flex
      flex-col
      lg:flex-row
      overflow-hidden
    ">


      {/* ================= REGISTER FORM ================= */}

      <div className="
        w-full
        lg:w-[58%]
        p-8
        sm:p-10
        lg:p-12
      ">

        {/* HEADER */}

        <div className="mb-8">

          <h1 className="
            text-4xl
            sm:text-5xl
            font-extrabold
            tracking-tight
            text-[#222325]
            mb-3
          ">
            Create Your Account
          </h1>

          <p className="
            text-lg
            font-medium
            text-[#62646a]
          ">
            Join SkillSphere as a Freelancer or Client
          </p>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >


          {/* FULL NAME */}

          <div>

            <label className="
              block
              mb-2
              text-lg
              font-extrabold
              text-[#222325]
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
                h-[52px]
                px-4
                bg-white
                border
                border-[#b5b5b5]
                rounded-md
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


          {/* EMAIL */}

          <div>

            <label className="
              block
              mb-2
              text-lg
              font-extrabold
              text-[#222325]
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
                bg-white
                border
                border-[#b5b5b5]
                rounded-md
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
              mb-2
              text-lg
              font-extrabold
              text-[#222325]
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
                h-[52px]
                px-4
                bg-white
                border
                border-[#b5b5b5]
                rounded-md
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


          {/* CONFIRM PASSWORD */}

          <div>

            <label className="
              block
              mb-2
              text-lg
              font-extrabold
              text-[#222325]
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
                h-[52px]
                px-4
                bg-white
                border
                border-[#b5b5b5]
                rounded-md
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


          {/* REGISTER AS */}

          <div>

            <label className="
              block
              mb-2
              text-lg
              font-extrabold
              text-[#222325]
            ">
              Register As
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="
                w-full
                h-[52px]
                px-4
                bg-white
                border
                border-[#b5b5b5]
                rounded-md
                text-[#222325]
                text-[16px]
                font-semibold
                focus:outline-none
                focus:border-[#222325]
                focus:ring-1
                focus:ring-[#222325]
                transition
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


          {/* REGISTER BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              h-[54px]
              rounded-md
              font-extrabold
              text-lg
              text-white
              bg-[#1dbf73]
              hover:bg-[#19a463]
              transition
              duration-200
              disabled:opacity-50
              disabled:cursor-not-allowed
            "
          >
            {loading ? "Registering..." : "Register"}
          </button>


        </form>


        {/* LOGIN */}

        <p className="
          text-center
          mt-8
          text-[#62646a]
          text-base
          font-medium
        ">

          Already have an account?{" "}

          <Link
            to="/login"
            className="
              text-[#222325]
              font-extrabold
              underline
              hover:text-[#1dbf73]
              transition
            "
          >
            Login
          </Link>

        </p>

      </div>


      {/* ================= RIGHT PROMOTIONAL PANEL ================= */}

      <div className="
        hidden
        lg:flex
        lg:w-[42%]
        bg-[#1dbf73]
        text-white
        relative
        overflow-hidden
        flex-col
        justify-center
        p-12
      ">

        <div className="
          relative
          z-10
        ">

          <h2 className="
            text-4xl
            xl:text-5xl
            font-extrabold
            leading-tight
            tracking-tight
            mb-8
          ">
            Find your next opportunity
          </h2>


          <div className="
            space-y-7
            text-lg
            font-semibold
          ">

            <div className="flex gap-4">

              <span className="
                text-2xl
                font-extrabold
              ">
                ✓
              </span>

              <p>
                Connect with talented freelancers
              </p>

            </div>


            <div className="flex gap-4">

              <span className="
                text-2xl
                font-extrabold
              ">
                ✓
              </span>

              <p>
                Showcase your skills and experience
              </p>

            </div>


            <div className="flex gap-4">

              <span className="
                text-2xl
                font-extrabold
              ">
                ✓
              </span>

              <p>
                Find projects that match your skills
              </p>

            </div>


            <div className="flex gap-4">

              <span className="
                text-2xl
                font-extrabold
              ">
                ✓
              </span>

              <p>
                Build your professional network
              </p>

            </div>

          </div>

        </div>


        {/* DECORATIVE CIRCLES */}

        <div className="
          absolute
          w-80
          h-80
          rounded-full
          border-[45px]
          border-white/10
          -bottom-32
          -right-32
        " />

        <div className="
          absolute
          w-56
          h-56
          rounded-full
          border-[35px]
          border-white/10
          top-[-80px]
          right-[-70px]
        " />

      </div>

    </div>

  </div>
);
};


export default Register;