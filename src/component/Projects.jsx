import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard"; // 👈 import the new component

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Website",
      description:
        "Full-stack restaurant platform with separate admin and customer interfaces.",
      tech: [
        "React.js",
        "Shadcn",
        "Context API",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      github: "https://github.com/Tusharv99/RestuUser",
      live: "https://resto.healthfier.com/",
      image: "/Restu.png",
    },
    {
      title: "Admin Dashboard",
      description: "Admin dashboard for managing restaurant operations.",
      tech: [
        "React.js",
        "Shadcn",
        "Context API",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      github: "https://github.com/Tusharv99/RestuAdmin",
      live: "https://restoadmin.healthfier.com/",
      image: "/Admin.png",
    },
    {
      title: "Weather Site",
      description:
        "Weather forecasting app with real-time city-based updates and responsive UI.",
      tech: ["React.js", "Redux", "TypeScript", "Weather API"],
      github: "https://github.com/Tusharv99/Klimate",
      live: "https://klimate-three-mu.vercel.app/",
      image: "/Klimate.png",
    },
    {
      title: "Cocktail Animation",
      description: "Interactive cocktail website using smooth GSAP animations.",
      tech: ["React.js", "GSAP", "Shadcn"],
      github: "https://github.com/Tusharv99/Cocktail-GSAP-",
      live: "https://gsap-cocktail.netlify.app/",
      image: "/Mojito.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-10 px-6 sm:px-16 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-black">
          Projects
        </h2>
          <p className="mt-4 text-center text-inherit text-lg opacity-80 mb-8">

Showcasing innovation and technical execution  </p>

        {/* 2 cards per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <SpotlightCard
              key={index}
              spotlightColor="rgba(255, 255, 255, 0.16)"
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-42 overflow-hidden rounded-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:scale-110 transition-transform duration-300 p-3 bg-black/50 rounded-full"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:scale-110 transition-transform duration-300 p-3 bg-black/50 rounded-full"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="">
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs text-gray-900 dark:text-gray-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
