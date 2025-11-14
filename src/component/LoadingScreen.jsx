import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const loadingRef = useRef(null);
  const textContainerRef = useRef(null);
  const helloRef = useRef(null);
  const namasteRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main text animation
      const tl = gsap.timeline();

      // Text container entrance animation
      tl.fromTo(textContainerRef.current, 
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

      // Metallic shine animation for both texts
      const shineTimeline = gsap.timeline({ repeat: -1 });
      shineTimeline
        .to([helloRef.current, namasteRef.current], {
          '--shine-position': '100%',
          duration: 1,
          ease: 'power2.inOut'
        })
        .to([helloRef.current, namasteRef.current], {
          '--shine-position': '-100%',
          duration: 1,
          ease: 'power2.inOut'
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
      const hideTimeline = gsap.timeline({ delay: 1.5 });
      hideTimeline.to(loadingRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          shineTimeline.kill(); 
          setIsVisible(false);
        }
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
      <div ref={textContainerRef} className="text-center">
        {/* Metallic Text with Shine Effect */}
        <div className="mb-2">
          <h1 
            ref={helloRef}
            className="text-7xl md:text-9xl font-bold metallic-text"
            style={{
              fontFamily: "'Great Vibes', cursive",
              '--shine-position': '-100%',
              background: `
                linear-gradient(110deg, 
                  transparent 40%, 
                  rgba(255, 255, 255, 0.1) 50%, 
                  rgba(255, 255, 255, 0.3) 55%, 
                  rgba(255, 255, 255, 0.1) 60%, 
                  transparent 70%
                )`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'var(--shine-position) 0%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
              textShadow: `
                0 0 1px rgba(255, 255, 255, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.6)
              `,
              position: 'relative'
            }}
          >
            HELLO
          </h1>
        </div>
        
        <div className="mb-6">
          <h1 
            ref={namasteRef}
            className="text-7xl md:text-9xl font-bold metallic-text"
            style={{
              fontFamily: "'Great Vibes', cursive",

              '--shine-position': '-100%',
              background: `
                linear-gradient(110deg, 
                  transparent 40%, 
                  rgba(255, 255, 255, 0.1) 50%, 
                  rgba(255, 255, 255, 0.3) 55%, 
                  rgba(255, 255, 255, 0.1) 60%, 
                  transparent 70%
                )`,
              backgroundSize: '200% 100%',
              backgroundPosition: 'var(--shine-position) 0%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block',
              textShadow: `
                0 0 1px rgba(255, 255, 255, 0.1),
                0 1px 2px rgba(0, 0, 0, 0.8),
                0 2px 4px rgba(0, 0, 0, 0.6)
              `,
              position: 'relative'
            }}
          >
            NAMASTE
          </h1>
        </div>

        {/* Base metallic color (hidden but provides the color) */}
        <style jsx>{`
          .metallic-text::before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              135deg,
              #888 0%,
              #ccc 25%,
              #eee 50%,
              #ccc 75%,
              #888 100%
            );
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            z-index: -1;
          }
        `}</style>

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