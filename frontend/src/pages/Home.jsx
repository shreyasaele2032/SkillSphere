import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    "Web Development",
    "App Development",
    "UI/UX Design",
    "Graphic Design",
    "Content Writing",
    "Digital Marketing",
  ];

  const features = [
    {
      title: "Verified Freelancers",
      description: "Work with talented professionals verified by SkillSphere.",
    },
    {
      title: "Secure Payments",
      description: "Payments are handled securely between clients and freelancers.",
    },
    {
      title: "Quality Projects",
      description: "Find projects from startups, businesses, and organizations.",
    },
  ];

  return (
  <div className="bg-white">

    

    <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-800 to-white text-white py-28">

     

      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Find the Right
          <br />
          <span className="text-gray-200">
            Freelancer
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
          SkillSphere connects talented freelancers with clients looking
          for high-quality work. Post projects, discover gigs,
          collaborate seamlessly, and build successful careers.
        </p>

        <div className="mt-12">

          <Link
            to="/register"
            className="inline-block bg-white text-black px-10 py-4 font-semibold shadow-xl hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            Join SkillSphere
          </Link>

        </div>

      </div>

    </section>


    <section className="py-24 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-black mb-16">
          Why Choose SkillSphere?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white border border-gray-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8"
            >

              <h3 className="text-2xl font-bold text-black mb-5">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
        

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-black mb-16">
          Popular Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {categories.map((category, index) => (

            <div
              key={index}
              className="bg-gray-100 border border-gray-300 p-8 text-center cursor-pointer hover:bg-black hover:text-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <h3 className="text-xl font-semibold">
                {category}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>


    <section className="bg-gradient-to-r from-black via-gray-800 to-black py-24">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready to Start?
        </h2>

        <p className="mt-8 text-lg text-gray-300 leading-8 max-w-3xl mx-auto">
          Whether you're a freelancer looking for exciting projects
          or a client searching for talented professionals,
          SkillSphere helps you connect, collaborate,
          and build your future together.
        </p>

        <div className="mt-12">


        </div>

      </div>

    </section>

  </div>
);
};

export default Home;