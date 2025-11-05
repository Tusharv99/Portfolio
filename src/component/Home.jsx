import React from 'react';
import { FaDownload } from 'react-icons/fa';
import SplitText from './SplitText';
import resumeFile from '../../public/TusharResume.pdf'; 
import img from '../../public/My.jpeg'

const Home = () => {

  
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'TusharResume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <SplitText
            text="Tushar Verma"
            tag="h1"
            className="text-5xl md:text-7xl font-bold mb-4 text-inherit"
            splitType="chars"
          />

          <SplitText
            text="Full Stack Developer"
            tag="h2"
            className="text-2xl md:text-3xl mb-6 opacity-80 text-inherit"
            splitType="words"
          />

          <p className="text-lg mb-8 opacity-80 max-w-md text-inherit">
            Crafting digital experiences with modern technologies and innovative solutions.
          </p>

          <button 
            onClick={handleDownloadResume}
            className="flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-3 cursor-pointer rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg mx-auto md:mx-0 hover:bg-gray-800 dark:hover:bg-gray-200"
          >
            <FaDownload />
            Download Resume
          </button>
        </div>

        <div className="relative">
          <div className="w-80 h-80 mx-auto md:w-96 md:h-96 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden shadow-2xl flex items-center justify-center">
            <span className="opacity-80 text-inherit"><img src={img} alt="" /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;