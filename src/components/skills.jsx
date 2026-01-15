import React, { useState, useEffect, useRef } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiCplusplus, SiTypescript, SiPython, SiExpress, SiMysql, SiPostgresql, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
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

  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} /> },
    { name: "TypeScript", icon: <SiTypescript size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "Python", icon: <SiPython size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "NodeJS", icon: <FaNodeJs size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "MySQL", icon: <SiMysql size={40} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "Tailwind", icon: <SiTailwindcss size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
  ];

  return (
    <div ref={sectionRef} name="skills" className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
        
        {/* Section Title */}
        <div className={`mb-6 inline-block transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide relative inline-block mb-6">
          #skills
          <span className="block h-[4px] bg-black mt-3 w-full"></span>
        </h2>
        </div>
       

        {/* Skills Grid - 5 columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center pb-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              className={`
                border-2 border-black rounded-xl p-4 flex flex-col items-center justify-center
                bg-white font-bold transition-all duration-300 shadow-lg cursor-pointer
                hover:bg-black hover:text-white hover:scale-110 hover:rotate-3 flex-shrink-0
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                ${hoveredSkill === index ? 'transform scale-110 rotate-3' : ''}
              `}
              style={{ 
                transitionDelay: `${index * 50}ms`,
                width: '120px',
                height: '120px'
              }}
            >
              <div className={`transition-transform duration-300 ${hoveredSkill === index ? 'animate-bounce-subtle' : ''}`}>
                <div className={hoveredSkill === index ? 'text-white' : 'text-black'}>
                  {skill.icon}
                </div>
              </div>
              <p className={`mt-2 text-sm font-semibold transition-colors ${
                hoveredSkill === index ? 'text-white' : 'text-black'
              }`}>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
