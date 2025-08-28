import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactForm from "./pages/ContactForm";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import IconAttributions from './pages/IconAttributions.tsx';

export default function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) > 4) {
        // Only hide header after scrolling past 64px
        if (currentScrollY > 64) {
          setShowHeader(currentScrollY < lastScrollY);
        } else {
          setShowHeader(true);
        }
        lastScrollY = currentScrollY;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm 
                        flex justify-between items-center px-6 md:px-8 h-16
                        transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}>
        
        <Link to="/" className="flex items-center space-x-1 hover:opacity-80">
          <img
            src="/LogoGearThinner.svg" //
            alt="Site logo"
            className="w-12 h-12 my-2"
          />
          <h1 className="text-2xl font-bold text-customGreen"></h1>
        </Link>
        <nav className="flex text-gray-700 font-medium">
  {["Home", "Contact"].map((label, idx) => (
    <Link
  key={idx}
  to={label === "Home" ? 
    "/" : 
    label === "Projects" ? 
    "/#projects" :
    `/${label.toLowerCase()}`}
  className="px-4 py-2 flex items-center group"
>
  <span className="relative inline-block text-[1.1rem] group-hover:text-green-600 transition-colors duration-200">
    {label}
    <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-green-600 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:left-0"></span>
  </span>
</Link>
  ))}
</nav>
      </header>
      <div className="mt-16"></div>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactForm/>} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="/icons" element={<IconAttributions />} />
        <Route path="*" element={<div className="p-6 text-red-500">Page not found</div>} />
      </Routes>
      
      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-12 pb-10">
        <div className="flex justify-center space-x-8 mb-5">
          <a href="https://github.com/JoeE09" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub size={36} />
          </a>
          <a href="https://linkedin.com/in/JoeE09" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin size={36} />
          </a>
        </div>
        © 2025 Joseph Ensminger
        <small className="text-gray-400 text-xs mt-8 block text-center">
          All trademarks and logos are the property of their respective owners and are used here for informational and educational purposes only. {" "}
          <Link to="/icons" className="text-gray-500 underline">
            View icon attributions
          </Link>
          .
          <br />
          <br />
          Note: Some logos are represented by generic icons due to trademark/copyright restrictions. All displayed icons are either in the public domain or permissively licensed.
        </small>
      </footer>
    </div>
  );
}