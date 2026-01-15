import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Home from "./home";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// Import Link for smooth scrolling between sections
import { Link } from "react-scroll";

const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const handleClick = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["Home", "About", "Work", "Projects", "Skills"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "Home", label: "Home" },
    { to: "About", label: "About" },
    { to: "Work", label: "Experience" },
    { to: "Projects", label: "Projects" },
    { to: "Skills", label: "Skills" },
  ];

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-white/80 backdrop-blur-sm text-gray-300 z-40 shadow-sm">
      <div className="w-full px-10 flex items-center justify-between">
        {/*Logo with hover effect*/}
        <div>
          <Link
            to="Home"
            smooth
            duration={500}
            className="font-extrabold text-2xl text-gray-900 cursor-pointer hover:text-black transition-colors"
          >
            SIDDHI MHATRE
          </Link>
        </div>

        <ul className="hidden md:flex gap-8 font-bold text-xl text-gray-900">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={500}
                className={`
                  cursor-pointer transition-all duration-300 relative
                  ${activeSection === link.to 
                    ? 'text-black border-b-2 border-black' 
                    : 'text-gray-700 hover:text-black'}
                `}
                onSetActive={() => setActiveSection(link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Left Sidebar - Social Media Icons - Fixed and centered vertically */}
      <div className="fixed left-6 top-0 h-screen flex items-center justify-center z-50 pointer-events-none">
        <div className="flex flex-col gap-4 pointer-events-auto">
        <a
          href="https://linkedin.com/in/mhatre-siddhi"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center
             text-black hover:scale-110 hover:rotate-6
             transition-all duration-300 group"
        >
          <FaLinkedin size={24} className="group-hover:scale-110 transition-transform text-black" />
        </a>

        <a
          href="https://github.com/siddhimh"
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center
             text-black hover:scale-110 hover:rotate-6
             transition-all duration-300 group"
        >
          <FaGithub size={24} className="group-hover:scale-110 transition-transform text-black" />
        </a>

        <a
          href="mailto:sm13610@nyu.edu"
          className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center
             text-black hover:scale-110 hover:rotate-6
             transition-all duration-300 group"
        >
          <FaEnvelope size={22} className="group-hover:scale-110 transition-transform text-black" />
        </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
