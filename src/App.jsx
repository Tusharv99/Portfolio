import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import SocialLinks from './component/SocialLinks';
import ThemeToggle from './component/ThemeToggle';
import Home from './component/Home';
import About from './component/About';
import Education from './component/Education';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Certificates from './component/Certificates ';
import LoadingScreen from './component/LoadingScreen';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }

    // Show main content after loading screen (2.5 seconds)
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Main App Content - Only show after loading */}
      {showContent && (
        <>
          <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
          <SocialLinks darkMode={darkMode} />
          <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          
          <main>
            <Home />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Certificates/>
            <Contact />
          </main>

          {/* <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;