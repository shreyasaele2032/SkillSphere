import { useState } from "react";

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "E-Commerce Website",
      category: "Web Development",
      description:
        "Built a fully responsive MERN Stack e-commerce application with authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/username/ecommerce",
      liveDemo: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Full Stack",
      description:
        "Developed a task management platform with authentication, CRUD operations, and real-time updates.",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      github: "https://github.com/username/task-manager",
      liveDemo: "https://taskmanager-demo.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      category: "Frontend",
      description:
        "Designed and developed a personal portfolio website showcasing projects and skills.",
      technologies: ["React", "Tailwind CSS"],
      github: "https://github.com/username/portfolio",
      liveDemo: "https://portfolio-demo.com",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">

       
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">
            My Portfolio
          </h1>
          <p className="text-gray-600 mt-3">
            Showcase your best projects and impress potential clients.
          </p>
        </div>

   
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
            >
              <h2 className="text-2xl font-bold text-blue-600">
                {project.title}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {project.category}
              </p>

              <p className="text-gray-700 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

      
        {projects.length === 0 && (
          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold text-gray-600">
              No projects added yet.
            </h2>
            <p className="text-gray-500 mt-2">
              Start adding your completed projects to build your portfolio.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Portfolio;