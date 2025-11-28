import React from "react";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Jio Platforms Limited",
    duration: "Sep 2023 - Jun 2025",
    description: "Worked on backend systems, APIs, and notification services.",
  },
  {
    title: "Intern - Backend Developer",
    company: "ABC Tech",
    duration: "Jun 2022 - Aug 2022",
    description: "Developed REST APIs and optimized database queries.",
  },
  {
    title: "College Project Intern",
    company: "XYZ University",
    duration: "Jan 2022 - May 2022",
    description: "Built a web-based project management system for students.",
  },
];

const ExperienceTimeline = () => {
  const boxHeight = 180; // fixed height
  const boxWidth = 400;  // fixed width in px

  return (
    <div name="experience" className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-screen-lg mx-auto">
        {/* Section title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide relative inline-block mb-10">
          #experience
          <span className="block h-[3px] bg-black mt-4 w-full"></span>
        </h2>

        {/* Timeline */}
        <div className="relative flex flex-col items-start">
          {/* Vertical line spanning all boxes */}
          <div className="absolute w-1 bg-black left-12 top-0 bottom-0"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex items-center mb-10 relative"
              style={{ height: boxHeight }}
            >
              {/* Dot centered on the line */}
              <div className="w-6 h-6 bg-black rounded-full absolute left-9 top-1/2 transform -translate-y-1/2"></div>

              {/* Content box with fixed width & height */}
              <div
                className="ml-20 bg-white border-2 border-black p-6 rounded-xl shadow-md flex flex-col justify-center overflow-hidden"
                style={{ width: boxWidth, height: boxHeight }}
              >
                <p className="font-bold text-lg">{exp.title}</p>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-800">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
