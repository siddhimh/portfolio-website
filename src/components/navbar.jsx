import React, { useState } from "react";
// Import icons we'll use for our navbar
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaPhone, FaVoicemail } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// Import Link for smooth scrolling between sections
import { Link } from "react-scroll";


const Navbar = () => {
  // State to handle mobile menu toggle (open/closed)
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // Main navbar container - fixed at top, full width
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      {/* Your logo or brand name */}
      <div>
        <h1 className="font-thin text-2xl italic font-serif">YOOOO</h1>
      </div>

      <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        <button
          class="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
        >
         <a href="https://linkedin.com" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaLinkedin size={30} /> </a>
        </button>

        <button
          className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
        >
         <a href="https://linkedin.com" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaGithub size={30} /> </a>
        </button>

        <button
          className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
        >
         <a href="https://linkedin.com" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaPhone size={30} /> </a>
        </button>

        <button
          className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
        >
          <a href="https://linkedin.com" className='flex justify-between items-center w-full text-gray-300 px-4'>
              LinkedIn <FaVoicemail size={30} /> </a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
