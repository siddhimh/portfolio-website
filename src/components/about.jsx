import React from "react";
import ProfilePic from "../assets/me.png"; // Replace with your image path

const About = () => {
  return (
    <div id="about" className="w-full bg-white text-black px-6 py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-10">
       <div className="mb-6 inline-block">
 <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide relative inline-block mb-6">
  #about me
  <span className="block h-[4px] bg-black mt-3 w-full"></span>
</h2>

</div>


        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-10">
          {/* Text - Left */}
          <div className="md:w-1/2">
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              Hello! I am Siddhi Mhatre, a passionate backend developer and
              aspiring AR/game developer. I love building efficient, scalable
              systems and exploring how data flows to power amazing user
              experiences. In my projects, I combine creativity with technical
              expertise to craft interactive and polished applications.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed mb-4">
              I enjoy diving deep into technologies like Node.js, React,
              MongoDB, and Docker, combining them to craft high-performance
              applications. I am also fascinated by AR/VR and interactive gaming
              experiences, constantly exploring how immersive technology can
              merge with real-world problem solving.
            </p>
          </div>

          {/* Photo - Right */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={ProfilePic}
              alt="Profile"
              className="w-64 h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
