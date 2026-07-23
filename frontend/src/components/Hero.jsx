import { Link } from "react-router-dom";
import { FaSearch, FaUsers, FaBriefcase, FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-14 items-center">

       
        <div>
          <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
            India's Smart Freelancing Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-6 leading-tight">
            Find the Perfect
            <span className="text-indigo-600"> Freelancer </span>
            for Every Project
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            SkillSphere connects talented freelancers with clients looking for
            quality work. Hire professionals, manage projects, track milestones,
            and collaborate in one secure platform.
          </p>

          
          <div className="mt-8 bg-white shadow-xl rounded-xl p-3 flex items-center">
            <FaSearch className="text-gray-500 ml-3 text-lg" />

            <input
              type="text"
              placeholder="Search skills, jobs or freelancers..."
              className="flex-1 px-4 py-3 outline-none"
            />

            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition">
              Search
            </button>
          </div>

         
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/register"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Get Started
            </Link>

            <Link
              to="/gigs"
              className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Browse Gigs
            </Link>
          </div>

         
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="text-center">
              <FaUsers className="text-indigo-600 text-3xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">15K+</h3>
              <p className="text-gray-500">Users</p>
            </div>

            <div className="text-center">
              <FaBriefcase className="text-indigo-600 text-3xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">8K+</h3>
              <p className="text-gray-500">Projects</p>
            </div>

            <div className="text-center">
              <FaStar className="text-yellow-500 text-3xl mx-auto mb-2" />
              <h3 className="text-3xl font-bold">4.9</h3>
              <p className="text-gray-500">Rating</p>
            </div>

          </div>
        </div>

       
        <div className="flex justify-center">

          <div className="relative w-full max-w-lg">

           
            <div className="bg-white rounded-3xl shadow-2xl p-8">

              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
                alt="Freelancers"
                className="rounded-2xl h-72 w-full object-cover"
              />

              <h2 className="text-2xl font-bold mt-6">
                Build Your Freelance Career
              </h2>

              <p className="text-gray-600 mt-3">
                Connect with trusted clients, showcase your portfolio, earn
                securely, and grow your professional reputation.
              </p>

              <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
                Explore Opportunities
              </button>
            </div>

            <div className="absolute -left-10 top-12 bg-white shadow-xl rounded-xl px-5 py-4 hidden lg:block">
              <p className="text-sm text-gray-500">Projects Posted</p>
              <h3 className="text-2xl font-bold text-indigo-600">8,000+</h3>
            </div>

            <div className="absolute -right-8 bottom-10 bg-white shadow-xl rounded-xl px-5 py-4 hidden lg:block">
              <p className="text-sm text-gray-500">Freelancers</p>
              <h3 className="text-2xl font-bold text-green-600">15,000+</h3>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;