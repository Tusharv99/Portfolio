import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certificates = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const imageRef = useRef(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // ✅ Make sure these images exist in /public folder
  const certificates = [
    {
      id: 1,
      name: "Java Full Stack Developer",
      issuer: "ExcelR",
      image: "/JavaFull.png",
    },
    {
      id: 2,
      name: "Web Development Certification",
      issuer: "Coursera - University of Michigan",
      image: "/web.png",
    },
    {
      id: 3,
      name: "React Developer Certificate",
      issuer: "Meta Professional Certificate",
      image: "/react.png",
    }
  ];



  // ✅ Close modal with ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Zoom effect for modal image
  useEffect(() => {
    if (selectedCert && imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [selectedCert]);

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto" ref={sectionRef}>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-inherit mb-3">
            Certifications
          </h2>
          <p className="mt-4 text-inherit text-lg opacity-80">
            Professional certifications and achievements
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => setSelectedCert(cert)}
              className="group relative rounded-2xl overflow-hidden border border-gray-300 hover:border-gray-700 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-inherit mb-2">
                  {cert.name}
                </h3>
                <p className="text-inherit opacity-70 text-sm">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-5xl w-[90%] rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              ref={imageRef}
              src={selectedCert.image}
              alt={selectedCert.name}
              className="w-full h-auto rounded-lg shadow-2xl object-contain max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 bg-white/20 text-white hover:bg-white/40 backdrop-blur-md px-3 py-1 rounded-full text-lg font-bold"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-semibold">{selectedCert.name}</h3>
              <p className="text-gray-300">{selectedCert.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
