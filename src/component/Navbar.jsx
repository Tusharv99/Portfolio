import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Magnet from "./Magnet";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LogoNeg from "../../public/Neg.png";
import  Logo from "../../public/Log.png";

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

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 z-50 w-[70%] backdrop-blur-md rounded-2xl shadow-md border-b transition-all duration-500 ease-in-out ${
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
              key={darkMode ? "dark-logo" : "light-logo"} // Force re-render for smooth transition
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:opacity-70"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden px-2 pt-2 pb-3 space-y-1 rounded-lg m-2 backdrop-blur-md ${
              darkMode ? "bg-black/70 text-white" : "bg-white/80 text-black"
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:opacity-70"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;