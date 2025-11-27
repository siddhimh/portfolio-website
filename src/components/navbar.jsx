import React, { useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaPhone,
    FaEnvelope,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// Import Link for smooth scrolling between sections
import { Link } from "react-scroll";


const Navbar = () => {
    // State to handle mobile menu toggle (open/closed)
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-transparent text-gray-300">

            {/*Logo*/}
            <div>
                <h1 className="font-thin text-2xl italic font-serif text-black">YOOOO</h1>
            </div>

            <div className="fixed left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
                <button
                    className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
                >
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-2xl bg-white 
             flex items-center justify-center
             text-black hover:bg-slate-800 hover:text-white
             transition-colors"
                    >
                        <FaLinkedin size={24} />
                    </a>
                </button>

                <button
                    className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-2xl bg-white 
             flex items-center justify-center
             text-black hover:bg-slate-800 hover:text-white
             transition-colors"
                    >
                        <FaGithub size={24} />

                    </a>
                </button>

                <button
                    className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-2xl bg-white 
             flex items-center justify-center
             text-black hover:bg-slate-800 hover:text-white
             transition-colors"
                    >

                        <FaPhone size={24} />

                    </a>
                </button>

                <button
                    className="w-12 h-12 rounded-2xl bg-white/90 shadow-md flex items-center justify-center
             hover:bg-black hover:text-white transition-colors"
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noreferrer"
                        className="w-12 h-12 rounded-2xl bg-white 
             flex items-center justify-center
             text-black hover:bg-slate-800 hover:text-white
             transition-colors"
                    >
                        <FaEnvelope size={24} />
                    </a>
                </button>
            </div>
        </div>
    );
};

export default Navbar;
