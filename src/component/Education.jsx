import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';

const Education = () => {

  
  const educationData = [
    { institution: "Lovely Professional University", degree: "MCA (Pursuing)", period: "Aug 2025 – Present" },
    { institution: "ExcelR", degree: "Java Full Stack Development (Diploma)", period: "Sept 2023 – May 2024" },
    { institution: "Osmania University", degree: "B.Sc in Computer Science", period: "Dec 2020 – May 2023" },
    { institution: "Kendriya Vidyalaya", degree: "12th MPC", period: "May 2019" }
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 ">Education</h2>
        
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500 transform -translate-x-1/2"></div>
          
          <div className="space-y-1">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                
                {/* Left side items */}
                {index % 2 === 0 && (
                  <>
                    <div className="w-5/11 ">
                      <div className=" p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold  mb-2">{edu.institution}</h3>
                        <p className=" mb-3">{edu.degree}</p>
                        <div className="flex items-center justify-end ">
                          <FaCalendarAlt size={14} className="mr-2" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 z-10"></div>
                  </>
                )}
                
                {/* Right side items */}
                {index % 2 !== 0 && (
                  <>
                    <div className="w-5/11">
                      <div className=" p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-2">{edu.institution}</h3>
                        <p className=" mb-3">{edu.degree}</p>
                        <div className="flex items-center justify-end">
                          <FaCalendarAlt size={14} className="mr-2" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-white dark:border-gray-900 z-10"></div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;