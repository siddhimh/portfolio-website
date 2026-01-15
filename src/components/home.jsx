import React, { useState, useEffect } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import me from '../assets/me.jpeg'; // Your profile photo
import { Link } from "react-scroll"; // For smooth scrolling

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Siddhi";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;
    
    typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 100);

    return () => {
      if (typingInterval) {
        clearInterval(typingInterval);
      }
    };
  }, []);

 return (
   // Main container - full screen with light background
   <div name="Home" className="min-h-screen w-full bg-white flex flex-col items-center justify-center py-20">
      {/* Centered content wrapper */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center text-center px-4">
        
        {/* Main headline with typing animation */}
        <h2 className="text-2xl sm:text-6xl font-bold text-gray-900 min-h-[4rem] sm:min-h-[6rem] flex items-center justify-center drop-shadow-lg">
          {displayText}
          {displayText.length < fullText.length && (
            <span className="animate-blink text-gray-900 ml-1">|</span>
          )}
        </h2>

        {/* Sub headline with fade-in */}
        <h3 className={`text-xl sm:text-2xl font-bold text-gray-800 mt-4 transition-all duration-1000 drop-shadow-md ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Design. Data. Code. I create interactive experiences that blend all three.
        </h3>

        {/* Intro text with fade-in */}
        <p className={`text-gray-700 py-5 max-w-lg mx-auto text-center leading-relaxed transition-all duration-1000 delay-300 ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          I'm a software engineer with experience in backend systems, distributed services, and modern web development. I enjoy blending design, data, and engineering to build reliable, scalable, and intuitive digital experiences.
        </p>

        {/* About Me button with fade-in and bounce */}
        <Link
          to="About"
          smooth
          duration={500}
          className={`group rounded-2xl bg-gray-800 text-white border-2 border-gray-800 shadow-lg flex items-center justify-center px-6 py-3
           hover:bg-white hover:text-gray-800 hover:scale-110 hover:shadow-xl hover:border-gray-800 transition-all duration-300 cursor-pointer mt-4
           ${showContent ? 'opacity-100 translate-y-0 animate-bounce-subtle' : 'opacity-0 translate-y-4'} delay-500`}
        >
          Scroll Down
          <span className="group-hover:rotate-90 duration-300 ml-3">
            <HiArrowNarrowRight size={25} />
          </span>
        </Link>

      </div>
    </div>
 );
};

export default Home;

