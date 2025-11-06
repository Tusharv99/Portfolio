import React from 'react';
import { FaDownload, FaCode, FaRocket, FaLaptopCode } from 'react-icons/fa';
import SplitText from './SplitText';

const Home = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/TusharResume.pdf';
    link.download = 'TusharResume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-22">
      <div className="max-w-7xl mx-auto w-full h-auto min-h-[85vh]">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 h-auto">
          
          {/* Main Name Card - Large */}
          <div className="md:col-span-7 md:row-span-2 rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 border-1 hover:scale-[1.01] relative overflow-hidden group min-h-[300px] sm:min-h-[400px]">
            <div className="absolute inset-0 "></div>
            <div className="space-y-3 sm:space-y-4 relative z-10">
              <SplitText 
                text="Tushar Verma" 
                tag="h1" 
                className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 text-inherit leading-tight" 
                splitType="chars" 
              />
              <SplitText 
                text="Full Stack Developer" 
                tag="h2" 
                className="text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6 opacity-80 text-inherit leading-relaxed" 
                splitType="words" 
              />
              <p className="text-base sm:text-lg text-inherit opacity-70 max-w-lg mt-2 sm:mt-4 leading-relaxed">
                Crafting digital experiences with modern technologies and innovative solutions.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-full"></div>
          </div>

          {/* Profile Image Card - Circular */}
          <div className="md:col-span-5 md:row-span-2 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 border-1 flex items-center justify-center p-6 sm:p-8 hover:scale-[1.01] relative overflow-hidden group min-h-[300px] sm:min-h-[400px]">
            <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-48 h-48 sm:w-66 sm:h-66 md:w-82 md:h-82 rounded-full overflow-hidden border-4 border-gray-900 dark:border-gray-100 shadow-2xl relative z-10 ring-2 ring-offset-4 ring-offset-gray-100 dark:ring-offset-gray-900">
              <img 
                src="/My.jpeg" 
                alt="Tushar Verma" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Skills Card */}
          <div className="md:col-span-4 rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-1 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden group min-h-[120px]">
            <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 rounded-bl-full"></div>
            <div className="flex items-center gap-3 sm:gap-4 relative z-10 h-full">
              <div className="p-2 sm:p-3 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                <FaCode className="text-xl sm:text-2xl text-inherit" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-inherit">Modern Stack</h3>
                <p className="text-xs sm:text-sm text-inherit opacity-70 leading-tight">
                  React, Node.js, MongoDB
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="md:col-span-4 rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-1 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden group min-h-[120px]">
            <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 rounded-tr-full"></div>
            <div className="flex items-center gap-3 sm:gap-4 relative z-10 h-full">
              <div className="p-2 sm:p-3 rounded-2xl shadow-lg group-hover:-rotate-6 transition-transform duration-300 flex-shrink-0">
                <FaRocket className="text-xl sm:text-2xl text-inherit" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-1 text-inherit">Fast Delivery</h3>
                <p className="text-xs sm:text-sm text-inherit opacity-70 leading-tight">
                  Quality code, quick turnaround
                </p>
              </div>
            </div>
          </div>

          {/* Download Resume Card */}
          <div className="md:col-span-4 rounded-3xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group border-1 hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden min-h-[120px]" onClick={handleDownloadResume}>
            <div className="absolute inset-0 transition-opacity duration-300"></div>
            <div className="flex items-center gap-3 sm:gap-4 relative z-10 h-full">
              <div className="p-2 sm:p-3 rounded-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                <FaDownload className="text-xl sm:text-2xl text-inherit" />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-inherit">Download Resume</h3>
                <p className="text-xs text-inherit opacity-70 mt-1">Get my CV</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;