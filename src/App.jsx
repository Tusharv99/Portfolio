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

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }
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
    </div>
  );
}

export default App;
