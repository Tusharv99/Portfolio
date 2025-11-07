import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const loadingRef = useRef(null);
  const textRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main text animation
      const tl = gsap.timeline();

      // Text entrance animation
      tl.fromTo(textRef.current, 
        { 
          scale: 0.8, 
          opacity: 0,
          y: 50 
        },
        { 
          scale: 1, 
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)"
        }
      );

      // Shiny text animation (infinite loop)
      gsap.to(textRef.current, {
        backgroundPosition: '200% center',
        duration: 2,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true
      });

      // Loading dots animation
      dotsRef.current.forEach((dot, index) => {
        gsap.to(dot, {
          scale: 1.2,
          opacity: 1,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          delay: index * 0.2
        });
      });

      // Auto hide after 2 seconds
      const hideTimeline = gsap.timeline({ delay: 2 });
      hideTimeline.to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false)
      });
    }, loadingRef);

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 z-50 flex items-center justify-center"
    >
      {/* Main Content */}
      <div className="text-center">
        {/* Shiny Text */}
        <h1 
          ref={textRef}
          className="text-5xl md:text-7xl font-bold text-white mb-6 shiny-text-gsap"
        >
          HELLO 
        </h1> <br />
        <h1 
          ref={textRef}
          className="text-5xl md:text-7xl font-bold text-white mb-6 shiny-text-gsap"
        >
           NAMASTE
        </h1>
        

        {/* Subtitle */}
        <p className="text-gray-400 text-lg mb-8 opacity-0" ref={el => {
          if (el) {
            gsap.to(el, {
              opacity: 1,
              duration: 0.8,
              delay: 0.3
            });
          }
        }}>
          Welcome to my portfolio
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              ref={el => dotsRef.current[index] = el}
              className="w-3 h-3 bg-white rounded-full opacity-50"
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div 
          className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl"
          ref={el => {
            if (el) {
              gsap.to(el, {
                x: 100,
                y: -50,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
              });
            }
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl"
          ref={el => {
            if (el) {
              gsap.to(el, {
                x: -100,
                y: 50,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;