import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="backdrop-blur-xl bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-8 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Footer Text */}
        <p className="text-black dark:text-white text-center md:text-left">
          © {new Date().getFullYear()} <span className="font-semibold">Tushar Verma</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl">
          {[
            { icon: <FaLinkedin />, href: "https://linkedin.com" },
            { icon: <FaGithub />, href: "https://github.com" },
            { icon: <FaEnvelope />, href: "mailto:tushar@example.com" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black dark:text-white hover:opacity-80 transition-opacity duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
