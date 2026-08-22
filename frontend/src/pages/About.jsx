import { Link } from "react-router-dom";

const About = () => {
  return (
  <div className="min-h-screen bg-white text-gray-900 px-6 py-16">

    {/* Hero */}
    <div className="max-w-6xl mx-auto text-center">

      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        About SkillSphere
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
        SkillSphere is a modern freelancing platform that connects
        talented freelancers with clients looking for quality work.
        Our mission is to make hiring and collaboration simple,
        transparent, and efficient.
      </p>

    </div>


    {/* Mission / Users */}
    <div className="
      max-w-6xl
      mx-auto
      grid
      md:grid-cols-3
      gap-6
      mt-16
    ">

      <div className="
        bg-white
        border
        border-gray-200
        rounded-xl
        p-7
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      ">

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          Our Mission
        </h2>

        <p className="
          mt-4
          text-gray-600
          leading-7
        ">
          To create a trusted ecosystem where freelancers
          can showcase their skills and clients can easily
          find the right talent.
        </p>

      </div>


      <div className="
        bg-white
        border
        border-gray-200
        rounded-xl
        p-7
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      ">

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          For Freelancers
        </h2>

        <p className="
          mt-4
          text-gray-600
          leading-7
        ">
          Build your professional profile, showcase your
          expertise, discover projects, and grow your
          freelance career.
        </p>

      </div>


      <div className="
        bg-white
        border
        border-gray-200
        rounded-xl
        p-7
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      ">

        <h2 className="
          text-xl
          font-semibold
          text-gray-900
        ">
          For Clients
        </h2>

        <p className="
          mt-4
          text-gray-600
          leading-7
        ">
          Find skilled professionals, post gigs,
          communicate instantly, and complete projects
          smoothly.
        </p>

      </div>

    </div>


    {/* Why Choose SkillSphere */}
    <div className="
      max-w-6xl
      mx-auto
      mt-20
    ">

      <h2 className="
        text-3xl
        md:text-4xl
        font-bold
        text-center
        text-gray-900
      ">
        Why Choose SkillSphere?
      </h2>


      <div className="
        grid
        md:grid-cols-2
        gap-4
        mt-10
      ">

        {[
          "Real-time chat between clients and freelancers",
          "Secure authentication and role-based access",
          "Easy gig creation and project discovery",
          "Professional freelancer profiles",
          "Integrated payment system",
          "Modern marketplace experience"
        ].map((feature,index)=>(

          <div
            key={index}
            className="
              bg-gray-50
              border
              border-gray-200
              rounded-lg
              px-5
              py-4
              text-gray-700
              hover:bg-white
              hover:shadow-md
              transition-all
              duration-300
            "
          >

            <span className="
              text-green-600
              font-bold
              mr-2
            ">
              ✓
            </span>

            {feature}

          </div>

        ))}

      </div>

    </div>


    {/* CTA */}
    <div className="
      max-w-5xl
      mx-auto
      mt-20
      text-center
      bg-gray-50
      border
      border-gray-200
      rounded-2xl
      p-10
      md:p-12
    ">

      <h2 className="
        text-3xl
        md:text-4xl
        font-bold
        text-gray-900
      ">
        Ready to Start Your Journey?
      </h2>

      <p className="
        mt-4
        text-gray-600
        text-lg
      ">
        Join SkillSphere today and connect with
        opportunities worldwide.
      </p>


      <Link
        to="/register"
        className="
          inline-block
          mt-7
          px-8
          py-3
          rounded-lg
          bg-black
          text-white
          font-semibold
          hover:bg-gray-800
          transition-all
          duration-200
        "
      >
        Get Started
      </Link>

    </div>

  </div>
);
};


export default About;