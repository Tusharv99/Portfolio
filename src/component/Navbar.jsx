import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Magnet from "./Magnet";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LogoNeg from "../../public/Neg.png";
import Logo from "../../public/Log.png";

gsap.registerPlugin(ScrollToPlugin);

const Navbar = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(Logo);

  const navItems = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  // ✅ Update logo when theme changes with smooth transition
  useEffect(() => {
    setCurrentLogo(darkMode ? LogoNeg : Logo);
  }, [darkMode]);

  // ✅ Scroll detection effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // ✅ Smooth Scroll on click
  const handleNavClick = (id) => {
    setIsOpen(false);
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: `#${id.toLowerCase()}`, offsetY: 80 },
      ease: "power3.inOut",
    });
  };

  // ✅ Close menu when clicking on overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navbar - Hidden on mobile */}
      <nav
        className={`hidden md:block fixed left-1/2 -translate-x-1/2 z-50 w-[70%] backdrop-blur-md rounded-2xl shadow-md border-b transition-all duration-500 ease-in-out ${
          isVisible ? "top-3 opacity-100" : "-top-24 opacity-0"
        } ${
          darkMode
            ? "bg-black/40 border-gray-800 text-white"
            : "bg-white/40 border-gray-200 text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo with smooth transition */}
            <div className="font-bold text-xl">
              <img 
                src={currentLogo} 
                alt="Tushar Verma Logo" 
                className="w-27 h-auto transition-opacity duration-300"
                key={darkMode ? "dark-logo" : "light-logo"}
              />
            </div>

            {/* Desktop Navbar */}
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-6">
                {navItems.map((item) => (
                  <Magnet key={item} magnetStrength={8} padding={60}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className="hover:opacity-80 transition-transform duration-300 text-sm font-medium cursor-pointer"
                    >
                      {item}
                    </button>
                  </Magnet>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="md:hidden fixed top-3 right-3 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-2xl backdrop-blur-md shadow-md border transition-all duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${
            darkMode
              ? "bg-black/40 border-gray-800 text-white hover:bg-black/60"
              : "bg-white/40 border-gray-200 text-black hover:bg-white/60"
          }`}
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay with Enhanced Glassmorphism */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={handleOverlayClick}
        >
          <div 
            className={`fixed top-0 right-0 h-full w-64 max-w-[80vw] backdrop-blur-xl shadow-2xl border-l transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ${
              darkMode 
                ? "bg-black/30 border-gray-700/50 text-white" 
                : "bg-white/30 border-gray-300/50 text-black"
            }`}
          >
            {/* Enhanced Glassmorphism Header */}
            <div className={`backdrop-blur-md border-b py-4 ${
              darkMode 
                ? "bg-black/20 border-gray-700/30" 
                : "bg-white/20 border-gray-300/30"
            }`}>
              <div className="flex justify-between items-center px-4">
                {/* Logo in Mobile Menu */}
                <div className="font-bold text-lg">
                  <img 
                    src={currentLogo} 
                    alt="Tushar Verma Logo" 
                    className="w-24 h-auto"
                  />
                </div>
                
              </div>
            </div>

            {/* Enhanced Glassmorphism Menu Items */}
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item)}
                  className={`block w-full text-left px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 backdrop-blur-md border ${
                    darkMode
                      ? "bg-black/20 border-gray-700/30 text-white hover:bg-black/40 hover:border-gray-600/50"
                      : "bg-white/20 border-gray-300/30 text-black hover:bg-white/40 hover:border-gray-400/50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Optional: Footer with enhanced glassmorphism */}
            <div className={`absolute bottom-0 left-0 right-0 backdrop-blur-md border-t py-3 ${
              darkMode 
                ? "bg-black/20 border-gray-700/30" 
                : "bg-white/20 border-gray-300/30"
            }`}>
              <div className="text-center text-sm opacity-70">
                Tushar Verma
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;