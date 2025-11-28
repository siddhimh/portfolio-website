

const Footer= ()=> {
return(<footer className="w-full bg-black text-white py-8 px-6">
  <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Contact */}
    <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
      <a href="mailto:sm13610@nyu.edu" className="hover:text-purple-400 transition-colors">sm13610@nyu.edu</a>
      <a href="https://linkedin.com/in/siddhi-mhatre" target="_blank" className="hover:text-purple-400 transition-colors">LinkedIn</a>
      <a href="https://github.com/siddhimh" target="_blank" className="hover:text-purple-400 transition-colors">GitHub</a>
    </div>

    {/* Copyright */}
    <p className="text-gray-400 text-sm text-center md:text-right">
      © 2025 Siddhi Mhatre. All rights reserved.
    </p>

  </div>
</footer>
)
}

export default Footer;
