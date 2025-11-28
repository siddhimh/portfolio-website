import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiCplusplus } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "C++", icon: <SiCplusplus size={40} /> },
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3Alt size={40} /> },
    { name: "JavaScript", icon: <SiJavascript size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "MongoDB", icon: <SiMongodb size={40} /> },
    { name: "Git", icon: <FaGitAlt size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
  ];

  return (
    <div name="skills" className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center">
        
        {/* Section Title */}
        <div className="mb-6 inline-block">
           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide relative inline-block mb-6">
          #skills
          <span className="block h-[4px] bg-black mt-3 w-full"></span>
        </h2>
        </div>
       

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border-2 border-black rounded-xl p-6 flex flex-col items-center justify-center
                         bg-white font-bold hover:bg-black hover:text-white transition-colors shadow-lg"
            >
              {skill.icon}
              <p className="mt-3 text-gray-600 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
