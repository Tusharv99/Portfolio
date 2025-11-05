import React, { useState } from 'react';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      company: "Techmatic Systems India Pvt Ltd",
      role: "Software Developer (Internship)",
      period: "March 2025 – May 2025",
      details: [
        "Developed a Restaurant Website with separate interfaces for customers and admin panel using React.js",
        "Worked on bug fixes and feature enhancements in existing React.js projects",
        "Gained hands-on exposure to NestJS by building simple REST APIs",
        "Collaborated in an agile team environment"
      ]
    },
    {
      company: "LeafCraft, Hyderabad",
      role: "Junior Developer",
      period: "Sept 2024 – Dec 2024",
      details: [
        "Built responsive web applications with React.js, Tailwind CSS and ShadCn UI",
        "Used GraphQL APIs and Redux for efficient data handling",
        "Developed robust TypeScript code with enhanced type safety",
        "Added dynamic 3D features using Three.js"
      ]
    },
    {
      company: "LeafCraft, Hyderabad",
      role: "Junior Developer (Part 2)",
      period: "Sept 2024 – Dec 2024",
      details: [
        "Designed and developed user and admin interfaces for Employee Management System and E-commerce platform",
        "Implemented routing, navigation, and state management using Redux",
        "Collaborated with backend developers to integrate APIs with Spring Boot backend",
        "Followed MVC architecture in development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-inherit">Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 transform translate-x-4"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative mb-8 pl-20"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline dot */}
              <div className={`absolute left-8 w-4 h-4 rounded-full border-4 transform -translate-x-1 ${
                activeIndex === index 
                  ? 'bg-gray-900 border-gray-900 dark:bg-white dark:border-white scale-125' 
                  : 'bg-white border-gray-400 dark:bg-gray-900 dark:border-gray-600'
              } transition-all duration-300`}></div>
              
              {/* Content */}
              <div className={`backdrop-blur-md border rounded-2xl p-6 transition-all duration-300 ${
                activeIndex === index
                  ? ' shadow-2xl scale-105'
                  : ''
              }`}>
                <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <span className="text-sm text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className=" mb-3 font-semibold">{exp.company}</p>
                
                {/* Details - Show on hover */}
                <div className={`transition-all duration-300 ${
                  activeIndex === index ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  <ul className="list-disc list-inside space-y-2 ">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Default view - just role and company */}
                <div className={`transition-all duration-300 ${
                  activeIndex === index ? 'opacity-0 max-h-0' : 'opacity-100 max-h-20'
                } overflow-hidden`}>
                  <p className="text-gray-700 ">Hover to view details →</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;