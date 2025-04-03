import React from "react";
import { Link } from "react-scroll";
import { FaFilePdf } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-6 z-50">
      
      {/* PDF Icon (Resume Download) */}
      <a
        href="/resume.pdf"
        download
        className="text-red-500 text-2xl hover:text-red-400 transition-all flex items-center"
        title="Download Resume"
      >
        <FaFilePdf />
      </a>

      {/* Navigation Links with Shake Effect */}
      <Link
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-400 transition-all hover:shake-effect"
      >
        Home
      </Link>
      <Link
        to="work"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-400 transition-all hover:shake-effect"
      >
        Work
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-400 transition-all hover:shake-effect"
      >
        About
      </Link>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-gray-400 transition-all hover:shake-effect"
      >
        Contact
      </Link>

      {/* Custom CSS for Shake Effect */}
      <style>{`
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-3px); }
          50% { transform: translateX(3px); }
          75% { transform: translateX(-3px); }
          100% { transform: translateX(0); }
        }
        .shake-effect:hover {
          display: inline-block;
          animation: shake 0.3s ease-in-out infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
