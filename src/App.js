import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Work from "./components/experience";
// import Contact from "./components/contacts";
// import Projects from "./components/projects";

function App() {
  return (
   <div className="relative">
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
       <div id="Skills">
        <Skills />
      </div>
        <div id="Footer">
        <Footer/>
      </div>
     

     
      
      {/* 
     
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
      */}

    </div>
  );
}

export default App;