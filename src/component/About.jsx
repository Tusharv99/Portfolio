import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const counters = countersRef.current;

    // ✅ Animate the section fade-in
    gsap.fromTo(
      sectionEl,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionEl,
          start: "top 85%",
        },
      }
    );

    // ✅ Animate counting numbers when About section is visible
    counters.forEach((counter) => {
      const targetValue = +counter.dataset.target; // get the final number
      const hasPlus = counter.dataset.plus === "true"; // if should add '+'

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: targetValue,
          duration: 2,
          ease: "power1.out",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: sectionEl,
            start: "top 80%",
            once: true,
          },
          onUpdate: function () {
            counter.textContent = hasPlus
              ? Math.floor(counter.innerText) + "+"
              : Math.floor(counter.innerText);
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-inherit">
          About Me
        </h2>

        {/* Main Content */}
        <div className="about-card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Text Content */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-black dark:text-white">
                👋 Hi, I'm{" "}
                <span className="font-bold">Tushar Verma</span>, a passionate
                Java Full Stack Developer dedicated to building modern,
                efficient, and user-focused web applications.
              </p>

              <p className="text-base leading-relaxed text-black dark:text-white">
                I specialize in frontend technologies like HTML, CSS,
                JavaScript, React.js and Nextjs and in backend development using
                Java (Spring Boot) and Nodejs. I also work with MySQL and
                MongoDB to design and manage robust databases.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div
                  ref={(el) => (countersRef.current[0] = el)}
                  data-target="1"
                  data-plus="false"
                  className="text-2xl font-bold text-black dark:text-white mb-1"
                >
                  0
                </div>
                <div className="text-sm text-black dark:text-white font-medium">
                  Year Experience
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div
                  ref={(el) => (countersRef.current[1] = el)}
                  data-target="10"
                  data-plus="true"
                  className="text-2xl font-bold text-black dark:text-white mb-1"
                >
                  0
                </div>
                <div className="text-sm text-black dark:text-white font-medium">
                  Projects Completed
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div
                  ref={(el) => (countersRef.current[2] = el)}
                  data-target="10"
                  data-plus="true"
                  className="text-2xl font-bold text-black dark:text-white mb-1"
                >
                  0
                </div>
                <div className="text-sm text-black dark:text-white font-medium">
                  Technologies
                </div>
              </div>

              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <div
                  ref={(el) => (countersRef.current[3] = el)}
                  data-target="10"
                  data-plus="true"
                  className="text-2xl font-bold text-black dark:text-white mb-1"
                >
                  0
                </div>
                <div className="text-sm text-black dark:text-white font-medium">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Additional Text */}
          <div className="mt-6 space-y-4">
            <p className="text-base leading-relaxed text-black dark:text-white">
              Through hands-on projects and internships, I've gained practical
              experience in developing scalable applications, managing both
              client and server-side logic, and ensuring seamless user
              experiences.
            </p>

            <p className="text-base leading-relaxed text-black dark:text-white">
              I enjoy transforming ideas into functional digital products that
              not only look great but perform flawlessly.
            </p>

            <p className="text-base leading-relaxed text-black dark:text-white">
              When I'm not coding, I like exploring new technologies, refining
              my problem-solving skills, and staying updated with the latest
              trends in full-stack development. My goal is to keep learning,
              innovating, and contributing to impactful projects that make a
              difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
