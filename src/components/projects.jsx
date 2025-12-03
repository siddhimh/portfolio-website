import React from "react";
import me from "../assets/me.png"; // Replace with real images

const projects = [
  {
    img: me,
    title: "Cafe Finder App",
    desc: "A smart cafe discovery tool using Google Places API.",
  },
  {
    img: me,
    title: "AI Tutor System",
    desc: "Intelligent tutoring system with embeddings + RAG.",
  },
  {
    img: me,
    title: "2D Café Game",
    desc: "Godot-based time-management game with custom AI.",
  },
];

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full bg-white text-black px-6 py-20 flex flex-col items-center"
    >
      {/* Title */}
      <div className="w-full max-w-screen-lg mx-auto mb-10">
        <h2 className="text-4xl font-extrabold tracking-wide relative inline-block">
          #projects
          <span className="block h-[4px] bg-black mt-3 w-full"></span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-screen-lg w-full">

        {projects.map((project, index) => (
          <div
            key={index}
            className="
              border-2 border-black rounded-xl 
              bg-white shadow-lg 
              hover:bg-black hover:text-white 
              transition-all duration-300 p-8
              flex flex-col items-center
              w-72 h-96
            "
          >
            {/* Bigger Inner Square Image */}
            <div className="w-48 h-48 bg-black rounded-xl overflow-hidden mb-5">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-bold mb-2 text-center">{project.title}</h3>
            <p className="text-sm opacity-80 text-center">{project.desc}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
