import React, { useState, useEffect, useRef } from "react";

const projects = [
  {
    title: "Distributed Job Scheduling System",
    stack: "NestJS, PostgreSQL, RabbitMQ, Docker",
    description: "Built a cloud native job scheduling system with cron execution, scalable workers, reliable retries, robust REST APIs, persistent state management, and AI driven log analysis for debugging distributed systems.",
  },
  {
    title: "Mental Health Website",
    stack: "React, JavaScript, Node.js, MSSQL, Google Maps API, GeoJSON",
    description: "Built a full stack mental health platform with journaling, mood tracking, therapist discovery, geolocation based matching, spatial indexing, scalable APIs, and a user focused frontend.",
  },
  {
    title: "Cafe Finder",
    stack: "Node.js, JavaScript, HTML",
    description: "Developed a web application that helps users discover nearby cafes, featuring location based search, clean UI, and efficient backend logic for retrieving and displaying relevant results.",
  },
];

export default function Projects() {
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
    <div
      ref={sectionRef}
      name="projects"
      className="w-full bg-white text-black px-6 py-20 flex flex-col items-center"
    >
      <div className="w-full max-w-screen-lg mx-auto">
        {/* Title */}
        <div className={`mb-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <h2 className="text-4xl font-extrabold tracking-wide relative inline-block">
            #projects
            <span className="block h-[4px] bg-black mt-3 w-full"></span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                border-2 border-black rounded-xl 
                bg-white shadow-lg 
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300 p-6
                flex flex-col h-full
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-sm font-bold mb-4 text-gray-600 hover:text-gray-300 transition-colors">
                Stack: {project.stack}
              </p>
              <p className="text-gray-800 hover:text-gray-200 leading-relaxed text-sm flex-grow transition-colors">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
