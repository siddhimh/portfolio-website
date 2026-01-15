import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Work from "./components/experience";
import Projects from "./components/projects";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = windowHeight > 0 ? (window.scrollY / windowHeight) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
   <div className="relative">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <Navbar />
      <div id="Home">
        <Home />
      </div>
       <div id="About">
        <About />
      </div>
       <div id="Work">
        <Work />
      </div>
      <div id="Projects">
        <Projects/> 
      </div>
      <div id="Skills">
        <Skills />
      </div>
        <div id="Footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;