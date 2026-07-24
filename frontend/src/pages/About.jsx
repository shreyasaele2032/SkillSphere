import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-black
      via-gray-900
      to-gray-700
      text-white
      px-6
      py-16
    ">




      <div className="
        max-w-6xl
        mx-auto
        text-center
      ">


        <h1 className="
          text-5xl
          md:text-6xl
          font-extrabold
          bg-gradient-to-r
          from-blue-400
          to-cyan-300
          bg-clip-text
          text-transparent
        ">
          About SkillSphere
        </h1>


        <p className="
          mt-6
          text-lg
          text-gray-300
          max-w-3xl
          mx-auto
        ">
          SkillSphere is a modern freelancing platform that connects
          talented freelancers with clients looking for quality work.
          Our mission is to make hiring and collaboration simple,
          transparent, and efficient.
        </p>


      </div>





     
      <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-8
        mt-16
      ">



        <div className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-2xl
          p-8
          shadow-xl
          hover:scale-105
          transition
        ">

          <h2 className="
            text-2xl
            font-bold
            text-blue-400
          ">
            Our Mission
          </h2>


          <p className="
            mt-4
            text-gray-300
          ">
            To create a trusted ecosystem where freelancers
            can showcase their skills and clients can easily
            find the right talent.
          </p>


        </div>






        <div className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-2xl
          p-8
          shadow-xl
          hover:scale-105
          transition
        ">


          <h2 className="
            text-2xl
            font-bold
            text-cyan-400
          ">
            For Freelancers
          </h2>


          <p className="
            mt-4
            text-gray-300
          ">
            Build your professional profile, showcase your
            expertise, discover projects, and grow your
            freelance career.
          </p>


        </div>







        <div className="
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-2xl
          p-8
          shadow-xl
          hover:scale-105
          transition
        ">


          <h2 className="
            text-2xl
            font-bold
            text-blue-400
          ">
            For Clients
          </h2>


          <p className="
            mt-4
            text-gray-300
          ">
            Find skilled professionals, post gigs,
            communicate instantly, and complete projects
            smoothly.
          </p>


        </div>



      </div>







     

      <div className="
        max-w-6xl
        mx-auto
        mt-20
      ">


        <h2 className="
          text-4xl
          font-bold
          text-center
        ">
          Why Choose SkillSphere?
        </h2>




        <div className="
          grid
          md:grid-cols-2
          gap-6
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
                bg-white/10
                backdrop-blur-lg
                border
                border-white/20
                rounded-xl
                p-5
                text-gray-200
                hover:bg-white/20
                transition
              "
            >

              ✓ {feature}

            </div>

          ))}



        </div>


      </div>







   


      <div className="
        max-w-5xl
        mx-auto
        mt-20
        text-center
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-10
      ">


        <h2 className="
          text-3xl
          font-bold
        ">
          Ready to Start Your Journey?
        </h2>


        <p className="
          mt-4
          text-gray-300
        ">
          Join SkillSphere today and connect with
          opportunities worldwide.
        </p>




        <Link
          to="/register"
          className="
            inline-block
            mt-6
            px-8
            py-3
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            font-bold
            hover:scale-105
            transition
          "
        >
          Get Started
        </Link>



      </div>



    </div>
  );
};


export default About;