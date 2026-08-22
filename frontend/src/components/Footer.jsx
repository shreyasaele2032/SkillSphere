// src/components/Footer.jsx

import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

 return (
  <footer className="bg-white text-[#62646a] border-t border-[#e4e4e4]">

    <div className="max-w-7xl mx-auto px-6 py-12">

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">


        {/* ================= BRAND ================= */}

        <div>

          <h2 className="
            text-3xl
            font-extrabold
            tracking-tight
            text-[#222325]
          ">
            Skill<span className="text-[#1dbf73]">Sphere</span>
          </h2>

          <p className="
            mt-5
            text-[15px]
            font-medium
            text-[#62646a]
            leading-7
            max-w-sm
          ">
            Connecting talented freelancers with clients through a trusted,
            secure, and modern freelance marketplace.
          </p>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div>

          <h3 className="
            text-[17px]
            font-extrabold
            text-[#222325]
            mb-5
          ">
            Quick Links
          </h3>

          <div className="flex flex-col space-y-4">

            <Link
              to="/"
              className="
                text-[15px]
                font-medium
                hover:text-[#1dbf73]
                transition
                duration-200
              "
            >
              Home
            </Link>

            <Link
              to="/about"
              className="
                text-[15px]
                font-medium
                hover:text-[#1dbf73]
                transition
                duration-200
              "
            >
              About
            </Link>

            <Link
              to="/login"
              className="
                text-[15px]
                font-medium
                hover:text-[#1dbf73]
                transition
                duration-200
              "
            >
              Login
            </Link>

            <Link
              to="/register"
              className="
                text-[15px]
                font-medium
                hover:text-[#1dbf73]
                transition
                duration-200
              "
            >
              Register
            </Link>

          </div>

        </div>


        {/* ================= SERVICES ================= */}

        <div>

          <h3 className="
            text-[17px]
            font-extrabold
            text-[#222325]
            mb-5
          ">
            Services
          </h3>

          <div className="
            flex
            flex-col
            space-y-4
          ">

            <p className="
              text-[15px]
              font-medium
              hover:text-[#1dbf73]
              transition
              cursor-pointer
            ">
              Find Freelancers
            </p>

            <p className="
              text-[15px]
              font-medium
              hover:text-[#1dbf73]
              transition
              cursor-pointer
            ">
              Post Projects
            </p>

            <p className="
              text-[15px]
              font-medium
              hover:text-[#1dbf73]
              transition
              cursor-pointer
            ">
              Secure Payments
            </p>

            <p className="
              text-[15px]
              font-medium
              hover:text-[#1dbf73]
              transition
              cursor-pointer
            ">
              AI Job Matching
            </p>

          </div>

        </div>


        {/* ================= CONTACT ================= */}

        <div>

          <h3 className="
            text-[17px]
            font-extrabold
            text-[#222325]
            mb-5
          ">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="
              flex
              items-center
              gap-3
              text-[15px]
              font-medium
            ">

              <FaEnvelope
                className="
                  text-[#1dbf73]
                  text-lg
                "
              />

            <a
  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=shreyasaele2032@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-[#1dbf73] transition-colors"
>
  shreyasaele2032@gmail.com
</a>

            </div>


            {/* SOCIAL ICONS */}

            <div className="
              flex
              gap-5
              mt-7
              text-2xl
            ">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#62646a]
                  hover:text-[#222325]
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#62646a]
                  hover:text-[#222325]
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="
                  text-[#62646a]
                  hover:text-[#222325]
                  hover:-translate-y-1
                  transition-all
                  duration-200
                "
              >
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ================= COPYRIGHT ================= */}

      <div className="
        border-t
        border-[#e4e4e4]
        mt-10
        pt-6
        text-center
      ">

        <p className="
          text-sm
          font-medium
          text-[#74767e]
        ">
          © {year} SkillSphere. All Rights Reserved.
        </p>

      </div>

    </div>

  </footer>
);
};

export default Footer;