import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-[#0c0c0c] px-6 py-10 relative overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-[#121212] opacity-50 pointer-events-none"></div>

      {/* Main Heading with Rocket Animation */}
      <div className="relative text-center">
        <h1 className="text-[10vw] font-extrabold text-[#e5e1dc] uppercase tracking-wide leading-none">
          LET'S<span className="text-[#e5e1dc]">•</span>TALK
        </h1>

        {/* 3D Rocket Animation */}
        <motion.img
          src="/svgs/rocket.svg"
          alt="Rocket"
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[5vw] h-[5vw]"
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>

      {/* Contact Message */}
      <p className="mt-8 text-2xl text-gray-300 text-center">
        Got a question, proposal, or want to work together?
        <br />
        <a
          href="mailto:rajugowardipe0@gmail.com"
          className="text-[#e5e1dc] font-semibold underline hover:text-white transition duration-300"
        >
          SEND ME AN EMAIL
        </a>
      </p>

      {/* Social Icons */}
      <div className="mt-10 flex space-x-8">
        {[
          { icon: <FaGithub size={40} />, link: "https://github.com/hemantgowardipe" },
          { icon: <FaLinkedin size={40} />, link: "https://linkedin.com/in/hemant-gowardipe-96614b24a" },
          { icon: <FaInstagram size={40} />, link: "https://www.instagram.com/hemant_gowardipe/" },
        ].map(({ icon, link }, index) => (
          <motion.a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e5e1dc] transition transform hover:text-white hover:scale-110"
            whileHover={{ scale: 1.2, color: "#ffffff" }}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
