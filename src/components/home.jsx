import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import me from '../assets/me.png'; // Your profile photo
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
 return (
   // Main container - full screen with dark background
   <div name="Home" className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center py-20">
      {/* Centered content wrapper */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-center px-4">
        
        {/* Main headline */}
        <h2 className="text-2xl sm:text-6xl font-bold text-gray-800">
          Hi, I'm Siddhi
        </h2>

        {/* Sub headline */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-500 mt-4">
          Design. Data. Code. I create interactive experiences that blend all three.
        </h3>

        {/* Intro text */}
        <p className="text-gray-600 py-5 max-w-lg mx-auto text-center leading-relaxed">
          I’m a software engineer with experience in backend systems, distributed services, and modern web development. I enjoy blending design, data, and engineering to build reliable, scalable, and intuitive digital experiences.
        </p>

        {/* About Me button */}
        <Link
          to="About"
          smooth
          duration={500}
          className="group rounded-2xl bg-black text-white shadow-md flex items-center justify-center px-6 py-3
           hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Scroll Down
          <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight size={25} className="ml-3" />
          </span>
        </Link>

      </div>
    </div>
 );
};

export default Home;

