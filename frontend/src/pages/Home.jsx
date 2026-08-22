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

  {/* HERO SECTION */}
  <section className="relative overflow-hidden text-white py-28 min-h-[600px] flex items-center">

    {/* VIDEO BACKGROUND */}
    <video
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>

    {/* DARK OVERLAY FOR READABILITY */}
    <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

    <div className="absolute top-0 left-0 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl z-10"></div>

    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl z-10"></div>

    <div className="relative z-20 max-w-7xl mx-auto px-6 text-center w-full">

      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
        Find the Right
        <br />
        <span className="text-gray-200">
          Freelancer
        </span>
      </h1>

      <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-8">
        SkillSphere is a modern freelance marketplace that connects
        talented professionals with clients looking for quality work.
        Discover services, post projects, communicate with freelancers,
        and turn ideas into successful results.
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


  {/* INTRODUCTION */}
  <section className="py-24 bg-white">

    <div className="max-w-6xl mx-auto px-6">

      <div className="text-center max-w-4xl mx-auto">

        <p className="text-green-600 font-semibold uppercase tracking-wide">
          Welcome to SkillSphere
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          Where skills meet opportunity
        </h2>

        <p className="mt-7 text-lg text-gray-600 leading-8">
          SkillSphere brings clients and freelancers together in one
          simple and trusted platform. Clients can discover skilled
          professionals, explore their services, post projects and
          collaborate with the right talent. Freelancers can showcase
          their expertise, create service listings, discover opportunities,
          and build their professional careers.
        </p>

      </div>


      <div className="grid md:grid-cols-3 gap-6 mt-14">

        <div className="border border-gray-200 p-7 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-900">
            Discover Talent
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Find professionals based on their skills, experience,
            services and project requirements.
          </p>
        </div>


        <div className="border border-gray-200 p-7 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-900">
            Showcase Skills
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Freelancers can create professional profiles, showcase
            their expertise and publish gigs for potential clients.
          </p>
        </div>


        <div className="border border-gray-200 p-7 rounded-xl hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-gray-900">
            Build Together
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Communicate, manage projects, track milestones and
            complete work efficiently in one platform.
          </p>
        </div>

      </div>

    </div>

  </section>


  {/* HOW IT WORKS */}
  <section className="py-24 bg-gray-50">

    <div className="max-w-7xl mx-auto px-6">

      <div className="text-center">

        <p className="text-green-600 font-semibold uppercase tracking-wide">
          Simple Process
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
          How SkillSphere Works
        </h2>

        <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
          From finding the right professional to completing a project,
          SkillSphere keeps the entire process simple.
        </p>

      </div>


      <div className="grid md:grid-cols-4 gap-6 mt-14">

        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <div className="text-3xl font-bold text-green-600">
            01
          </div>

          <h3 className="text-xl font-bold mt-5">
            Discover
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Search for gigs, freelancers or services that match
            your requirements.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <div className="text-3xl font-bold text-green-600">
            02
          </div>

          <h3 className="text-xl font-bold mt-5">
            Connect
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Communicate directly with freelancers and discuss
            your project requirements.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <div className="text-3xl font-bold text-green-600">
            03
          </div>

          <h3 className="text-xl font-bold mt-5">
            Collaborate
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Work together, manage milestones and keep track of
            project progress.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <div className="text-3xl font-bold text-green-600">
            04
          </div>

          <h3 className="text-xl font-bold mt-5">
            Complete
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Complete the project, process payments and build
            lasting professional relationships.
          </p>
        </div>

      </div>

    </div>

  </section>


  {/* WHY CHOOSE SKILLSPHERE */}
  <section className="py-24 bg-white">

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


  {/* FOR FREELANCERS AND CLIENTS */}
  <section className="py-24 bg-gray-50">

    <div className="max-w-7xl mx-auto px-6">

      <div className="grid md:grid-cols-2 gap-10">

        {/* FREELANCERS */}
        <div className="bg-black text-white rounded-2xl p-10">

          <p className="text-green-400 font-semibold uppercase tracking-wide">
            For Freelancers
          </p>

          <h2 className="text-4xl font-bold mt-4">
            Turn your skills into opportunities.
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Create your professional profile, showcase your expertise,
            publish gigs and connect with clients looking for your skills.
            SkillSphere gives freelancers a place to build their reputation
            and grow their freelance career.
          </p>

          <ul className="mt-7 space-y-3 text-gray-300">
            <li>✓ Create a professional freelancer profile</li>
            <li>✓ Showcase your skills and experience</li>
            <li>✓ Create and manage gigs</li>
            <li>✓ Discover relevant projects</li>
            <li>✓ Communicate directly with clients</li>
          </ul>

        </div>


        {/* CLIENTS */}
        <div className="bg-white border border-gray-300 rounded-2xl p-10 shadow-lg">

          <p className="text-green-600 font-semibold uppercase tracking-wide">
            For Clients
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            Find professionals for your next project.
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Whether you need a website, design, marketing service,
            development work or another professional service,
            SkillSphere helps you discover freelancers and collaborate
            with them efficiently.
          </p>

          <ul className="mt-7 space-y-3 text-gray-600">
            <li>✓ Discover freelancers and gigs</li>
            <li>✓ Search for specific skills</li>
            <li>✓ Post project requirements</li>
            <li>✓ Communicate with professionals</li>
            <li>✓ Track project milestones</li>
          </ul>

        </div>

      </div>

    </div>

  </section>


  {/* POPULAR CATEGORIES */}
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


  {/* PLATFORM FEATURES */}
  <section className="py-24 bg-gray-50">

    <div className="max-w-6xl mx-auto px-6 text-center">

      <p className="text-green-600 font-semibold uppercase tracking-wide">
        Everything in One Place
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
        Built for modern freelance work
      </h2>

      <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
        SkillSphere combines the essential tools freelancers and
        clients need to discover opportunities, communicate,
        manage projects and complete work efficiently.
      </p>


      <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">

        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <h3 className="text-xl font-bold">
            Real-Time Communication
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Connect with clients and freelancers through real-time
            messaging to discuss requirements and project updates.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <h3 className="text-xl font-bold">
            Project Milestones
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Break projects into manageable milestones and monitor
            progress from start to completion.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <h3 className="text-xl font-bold">
            Integrated Payments
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Manage project payments through an integrated payment
            workflow designed to make transactions convenient.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <h3 className="text-xl font-bold">
            Professional Profiles
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Freelancers can build profiles that highlight their
            skills, experience, portfolio and professional background.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <h3 className="text-xl font-bold">
            Gig Marketplace
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Freelancers can publish services while clients can
            discover services that match their requirements.
          </p>
        </div>


        <div className="bg-white border border-gray-200 rounded-xl p-7">
          <h3 className="text-xl font-bold">
            Role-Based Experience
          </h3>

          <p className="mt-3 text-gray-600 leading-7">
            Dedicated experiences for clients, freelancers and
            administrators help keep the platform organized.
          </p>
        </div>

      </div>

    </div>

  </section>


  {/* FINAL CTA */}
  <section className="bg-gradient-to-r from-black via-gray-800 to-black py-24">

    <div className="max-w-5xl mx-auto px-6 text-center">

      <p className="text-green-400 font-semibold uppercase tracking-wide">
        Start Today
      </p>

      <h2 className="text-5xl font-bold text-white mt-3">
        Ready to Start?
      </h2>

      <p className="mt-8 text-lg text-gray-300 leading-8 max-w-3xl mx-auto">
        Whether you're a freelancer looking for exciting projects
        or a client searching for talented professionals,
        SkillSphere helps you connect, collaborate,
        and build your future together.
      </p>

      <div className="mt-12">

        <Link
          to="/register"
          className="inline-block bg-white text-black px-10 py-4 font-semibold hover:bg-gray-200 hover:scale-105 transition-all duration-300"
        >
          Get Started
        </Link>

      </div>

    </div>

  </section>

</div>
  );
};

export default Home;