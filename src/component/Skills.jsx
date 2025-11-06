import React from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaJava 
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiSpringboot, 
  SiMysql, 
  SiMongodb, 
  SiGraphql,
  SiReact 
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={24} className="text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt size={24} className="text-blue-500" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={24} className="text-cyan-500" /> },
    { name: 'JavaScript', icon: <FaJs size={24} className="text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript size={24} className="text-blue-600" /> },
    { name: 'React.js', icon: <FaReact size={24} className="text-blue-400" /> },
    { name: 'React Native', icon: <SiReact size={24} className="text-blue-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={24} /> },
    { name: 'Node.js', icon: <FaNodeJs size={24} className="text-green-600" /> },
    { name: 'Express', icon: <SiExpress size={24} /> },
    { name: 'Java', icon: <FaJava size={24} className="text-red-500" /> },
    { name: 'Spring Boot', icon: <SiSpringboot size={24} className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql size={24} className="text-blue-500" /> },
    { name: 'MongoDB', icon: <SiMongodb size={24} className="text-green-500" /> },
    { name: 'GraphQL', icon: <SiGraphql size={24} className="text-pink-500" /> },
  ];

  return (
    <section id="skills" className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>
         <p className="mt-4 text-center text-inherit text-lg opacity-80 mb-8">

Technical expertise across the stack 
 </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-400/20 rounded-2xl p-4 shadow-lg hover:shadow-3xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4">
                <div>{skill.icon}</div>
                <span className="font-semibold text-lg">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;