import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="w-full bg-black text-white py-12 px-6"
    >
      <div className={`max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        
        {/* Contact */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
          <a 
            href="mailto:sm13610@nyu.edu" 
            className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300 hover:scale-110 group"
          >
            <FaEnvelope className="group-hover:animate-bounce-subtle" />
            <span>sm13610@nyu.edu</span>
          </a>
          <a 
            href="https://linkedin.com/in/siddhi-mhatre" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300 hover:scale-110 group"
          >
            <FaLinkedin className="group-hover:animate-bounce-subtle" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/siddhimh" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-purple-400 transition-all duration-300 hover:scale-110 group"
          >
            <FaGithub className="group-hover:animate-bounce-subtle" />
            <span>GitHub</span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right hover:text-white transition-colors">
          © 2025 Siddhi Mhatre. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;