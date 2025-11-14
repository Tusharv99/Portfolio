import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    gsap.to(progressRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[4px] bg-transparent z-[9999]">
      <div
        ref={progressRef}
        className="h-full bg-blue-500  origin-left w-0"
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
