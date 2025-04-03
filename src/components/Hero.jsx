import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-white text-center px-6 pb-24">
      
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm" style={{ backgroundImage: "url('/images/diwali.jpg')" }}></div>

      {/* Top-Right Social Icons */}
      <div className="absolute top-6 right-6 flex space-x-4 z-20">
        <a
          href="https://github.com/hemantgowardipe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/hemant-gowardipe-96614b24a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-gray-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Main Content */}
      <motion.h1
        className="text-7xl md:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        HEMANT  
      </motion.h1>

      <motion.h2
        className="text-6xl md:text-7xl font-extrabold text-gray-200 z-10 mt-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        GOWARDIPE
      </motion.h2>

      {/* Boxed Profile Image with Curved Corners */}
      <motion.div
        className="relative w-40 h-40 md:w-48 md:h-48 shadow-lg overflow-hidden z-10 mt-6 rounded-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img src="/images/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
      </motion.div>

      {/* Bottom Left - Full Stack PHP Developer */}
      <motion.p
        className="absolute bottom-8 left-10 text-xl text-black font-medium z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Full Stack PHP Developer
      </motion.p>

      {/* Bottom Right - Location & Opportunity */}
      <motion.p
        className="absolute bottom-8 right-10 text-xl text-black font-medium text-right z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Exploring new opportunity and,<br />
        working remotely from Nagpur, Maharashtra.
      </motion.p>
    </section>
  );
};

export default Hero;
