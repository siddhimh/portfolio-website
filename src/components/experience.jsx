import React, { useState, useEffect, useRef } from "react";

const experiences = [
  {
    title: "Software Development Engineer",
    company: "Jio Platforms Limited",
    duration: "Sep 2023 - Jun 2025",
    description: [
      "Developed AI-powered document processing pipeline with OCR and LLM parsing, handling 1000+ requests/day on GPU infrastructure.",
      "Built high-throughput Notification Service achieving 99.9% delivery reliability and Node.js + MongoDB web app reducing operational turnaround from days to hours.",
      "Implemented monitoring and alerting across services for improved visibility and faster incident detection."
    ],
  },
  {
    title: "Intern - Backend Developer",
    company: "Jio Platforms Limited",
    duration: "Mar 2023 - Sep 2023",
    description: [
      "Optimized file upload API performance, reducing latency from several seconds to under one second for large batch uploads.",
      "Integrated SAP HANA APIs and built centralized OTP authentication service for scalable microservices workflows."
    ],
  },
];

const ExperienceTimeline = () => {
  const boxHeight = 180; // fixed height
  const boxWidth = 400;  // fixed width in px
  const [visibleItems, setVisibleItems] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, index]);
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const items = sectionRef.current.querySelectorAll('.timeline-item');
      items.forEach((item) => observer.observe(item));
    }

    return () => {
      if (sectionRef.current) {
        const items = sectionRef.current.querySelectorAll('.timeline-item');
        items.forEach((item) => observer.unobserve(item));
      }
    };
  }, []);

  return (
    <div ref={sectionRef} name="experience" className="w-full bg-white text-black px-6 py-16 relative">
      <div className="max-w-screen-lg mx-auto">
        {/* Section title */}
        <div className={`transition-all duration-1000 ${
          visibleItems.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide relative inline-block mb-10">
            #experience
            <span className="block h-[3px] bg-black mt-4 w-full"></span>
          </h2>
        </div>

        {/* Timeline with Details */}
        <div className="relative flex flex-col items-start pl-8 md:pl-12">
          {/* Vertical line spanning all boxes */}
          <div className="absolute w-1 bg-black left-8 md:left-12 top-0 bottom-0"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              data-index={index}
              className="timeline-item w-full mb-10 relative"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Left side - Timeline dot and box */}
                <div className="flex items-center relative" style={{ height: boxHeight }}>
                  {/* Animated Dot */}
                  <div className={`
                    w-6 h-6 bg-black rounded-full absolute -left-3 top-1/2 transform -translate-y-1/2
                    transition-all duration-500 z-10
                    ${visibleItems.includes(index) 
                      ? 'opacity-100 scale-100 ring-4 ring-black/20' 
                      : 'opacity-0 scale-0'}
                    ${selectedExperience === index ? 'ring-8 ring-black/40' : ''}
                  `}></div>

                  {/* Content box with animation */}
                  <div
                    onMouseEnter={() => setSelectedExperience(index)}
                    onMouseLeave={() => setSelectedExperience(null)}
                    className={`
                      ml-6 bg-white border-2 border-black p-6 rounded-xl shadow-md 
                      flex flex-col justify-center overflow-hidden
                      transition-all duration-500 cursor-pointer
                      hover:scale-105 hover:shadow-xl
                      ${visibleItems.includes(index) 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-8'}
                      ${selectedExperience === index ? 'border-gray-400 shadow-2xl' : ''}
                    `}
                    style={{ width: boxWidth, height: boxHeight }}
                  >
                    <p className="font-bold text-lg transition-colors">{exp.title}</p>
                    <p className="text-gray-700 transition-colors">
                      {exp.company} | {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Right side - Details Panel (aligned with the box) */}
                {selectedExperience === index && (
                  <div 
                    className="flex-1 md:ml-4 w-full md:w-auto mt-4 md:mt-0"
                    onMouseEnter={() => setSelectedExperience(index)}
                    onMouseLeave={() => setSelectedExperience(null)}
                  >
                    <div className="relative bg-white border-2 border-black rounded-xl shadow-2xl p-8 animate-slide-in-right">
                      <div>
                        <h4 className="text-lg font-bold mb-4">Key Responsibilities:</h4>
                        <ul className="list-disc list-outside ml-5 space-y-3 text-gray-800 leading-relaxed text-sm">
                          {exp.description.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
