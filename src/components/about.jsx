import React, { useState, useEffect, useRef } from "react";
import ProfilePic from "../assets/me.jpeg"; // Replace with your image path

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about" ref={sectionRef} className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
       <div className={`mb-6 inline-block transition-all duration-1000 ${
         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
       }`}>
 <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide relative inline-block mb-6">
  #about me
  <span className="block h-[4px] bg-black mt-3 w-full"></span>
</h2>

</div>


        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Text - Left */}
          <div className={`md:w-1/2 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <p className="text-gray-800 text-lg leading-relaxed mb-4 hover:text-gray-600 transition-colors cursor-default">
              Hey, I'm Siddhi! A software developer who loves understanding how systems work end to end and learning something new with every project. I enjoy turning vague ideas into clean APIs and reliable services, and I care a lot about writing code that is easy to reason about, test, and improve over time.
            </p>
          </div>

          {/* Photo - Right with parallax effect */}
          <div className={`md:w-1/2 flex justify-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-black rounded-full transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
              <img
                src={ProfilePic}
                alt="Profile"
                className="relative w-64 h-64 object-cover rounded-full shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
