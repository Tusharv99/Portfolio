import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Magnet from './Magnet'; // 👈 Import Magnet component

const SocialLinks = ({ darkMode }) => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/tushar-verma-061978233',
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/Tusharv99',
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:tusharverma8399@gmail.com',
    },
    {
      name: 'Phone',
      icon: <FaPhoneAlt size={24} />,
      url: 'tel:9182574094',
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border border-white/20 dark:border-gray-400/20 rounded-2xl p-4 shadow-2xl">
        <div className="flex flex-col space-y-6">
          {socials.map((social) => (
            <Magnet key={social.name} magnetStrength={8} padding={50}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
              >
                <div
                  className={`${
                    darkMode
                      ? 'text-gray-100 hover:text-gray-400'
                      : 'text-gray-900 hover:text-gray-500'
                  }`}
                >
                  {social.icon}
                </div>
                <div className="absolute right-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {social.name}
                </div>
              </a>
            </Magnet>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
