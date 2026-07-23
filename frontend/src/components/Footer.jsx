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
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Skill<span className="text-indigo-500">Sphere</span>
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-6">
              Connecting talented freelancers with clients through a trusted,
              secure, and modern freelance marketplace.
            </p>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                className="hover:text-indigo-400 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-indigo-400 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/login"
                className="hover:text-indigo-400 transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-indigo-400 transition duration-300"
              >
                Register
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Services
            </h3>

            <div className="flex flex-col space-y-3 text-gray-400">
              <p>Find Freelancers</p>
              <p>Post Projects</p>
              <p>Secure Payments</p>
              <p>AI Job Matching</p>
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-indigo-400" />
                <span>support@skillsphere.com</span>
              </div>

              <div className="flex gap-5 mt-6 text-2xl">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-400 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          © {year} SkillSphere. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;