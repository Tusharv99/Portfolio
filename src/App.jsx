import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

// GSAP ScrollTrigger register करें
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
    }

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

  // Scroll Progress Bar Animation
  useEffect(() => {
    if (!showContent) return;

    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    // GSAP Animation for progress bar
    gsap.to(progressBar, {
      width: '100%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          // Optional: आप progress value को कहीं और use कर सकते हैं
          console.log('Progress:', self.progress);
        }
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showContent]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* Loading Screen */}
      <LoadingScreen />

      {/* Scroll Progress Bar */}
      {showContent && (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
          <div
            ref={progressBarRef}
            className="h-full rounded-full bg-gradient-to-r  from-blue-500 via-purple-500 to-red-500 origin-left"
            style={{ width: '0%' }}
          />
        </div>
      )}

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