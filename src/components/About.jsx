import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaDownload, FaCode, FaDatabase, FaTools, FaChevronRight } from "react-icons/fa";

// Skills Data with categories
const skillsData = [
  {
    category: "Frontend",
    icon: <FaCode className="text-blue-400" />,
    items: [
      { name: "React.js", icon: "/svgs/react.svg" },
      { name: "Bootstrap", icon: "/svgs/bootstrap.svg" },
      { name: "TailwindCSS", icon: "/svgs/tailwindcss.svg" }
    ]
  },
  {
    category: "Backend",
    icon: <FaDatabase className="text-purple-400" />,
    items: [
      { name: "PHP", icon: "/svgs/php.svg" },
      { name: "MySQL", icon: "/svgs/mysql.svg" },
      { name: "Symfony", icon: "/svgs/symfony.svg" }
    ]
  },
  {
    category: "Tools",
    icon: <FaTools className="text-green-400" />,
    items: [
      { name: "PhpMyAdmin", icon: "/svgs/phpmyadmin.svg" },
      { name: "XAMPP", icon: "/svgs/xampp.svg" }
    ]
  }
];

const About = () => {
  const [activeTab, setActiveTab] = useState("about");
  const aboutRef = useRef(null);

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Tab content
  const renderTabContent = () => {
    switch(activeTab) {
      case "about":
        return (
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <div className="text-lg text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a passionate Full-Stack Developer with expertise in creating intuitive and responsive web applications. My journey in software development began with a curiosity to build things that solve real-world problems.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in building scalable web solutions that deliver exceptional user experiences. I'm constantly exploring new technologies and methodologies to enhance my skillset.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science Engineering at KDK College of Engineering, Nagpur (3rd Year), I balance my academic pursuits with practical project development.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                Education
              </h3>
              <div className="ml-4 pl-4 border-l border-purple-500/30">
                <p className="text-white font-medium">B.Tech in Computer Science Engineering</p>
                <p className="text-gray-400">KDK College of Engineering, Nagpur</p>
                <p className="text-gray-500 text-sm">2022 - Present (3rd Year)</p>
              </div>
            </div>
          </motion.div>
        );
      
      case "experience":
        return (
          <motion.div 
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full left-[-9px] top-0"></div>
              <h3 className="text-xl font-semibold text-white">Web Development Intern</h3>
              <p className="text-blue-400">Intechzia Pvt Ltd</p>
              <p className="text-gray-500">Summer 2024</p>
              <p className="mt-2 text-gray-300">
                Assisted in developing and maintaining web applications.
                Collaborated with senior developers on various projects.
              </p>
            </div>
          </motion.div>
        );
      
      case "skills":
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {skillsData.map((category, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                  {category.icon}
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl blur-sm group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                      <div className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-gray-800/80 border border-white/5 hover:border-white/20 transition-all duration-300">
                        <div className="h-14 w-14 flex items-center justify-center mb-3">
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = "/api/placeholder/64/64";
                            }}
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        );
        
      default:
        return null;
    }
  };

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="relative flex flex-col items-center min-h-screen bg-gradient-to-b from-[#121212] to-[#0a0a0a] px-4 sm:px-6 lg:px-20 py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 rounded-full bg-purple-900/10 blur-3xl"></div>
      </div>

      {/* Section title */}
      <motion.div 
        className="w-full text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
      </motion.div>

      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Profile Column */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black p-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-30"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 flex flex-col items-center h-full">
              {/* Profile Image */}
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 shadow-lg mb-6">
                <img 
                  src="/images/profile.jpg" 
                  alt="Hemant Gowardipe" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/160/160";
                  }} 
                />
              </div>
              
              {/* Name with Typewriter effect */}
              <h2 className="text-2xl font-bold text-white mb-2">Hemant Gowardipe</h2>
              <div className="text-lg text-blue-400 font-medium mb-6 h-8">
                <Typewriter
                  options={{ loop: true, delay: 50 }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Full Stack Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("React.js Expert")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("UI/UX Enthusiast")
                      .pauseFor(2000)
                      .start();
                  }}
                />
              </div>
              
              {/* Quick Info */}
              <div className="w-full space-y-4 mt-2 mb-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">hemantgowardipe442@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Nagpur, India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Education</p>
                    <p className="text-white">B.Tech in CSE</p>
                  </div>
                </div>
              </div>
              
              {/* Resume download button */}
              <motion.a
                href="/resume.pdf" // Update with your actual resume path
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-full font-medium shadow-lg shadow-purple-500/20 transition duration-300 mt-auto"
              >
                <FaDownload /> Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
        
        {/* Content Column */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black p-1 h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-30"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-md rounded-lg p-6 h-full">
              {/* Tabs */}
              <div className="flex border-b border-gray-700 mb-6">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative ${
                    activeTab === "about" 
                      ? "text-blue-400" 
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  About
                  {activeTab === "about" && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" 
                    />
                  )}
                </button>
                
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative ${
                    activeTab === "experience" 
                      ? "text-blue-400" 
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Experience
                  {activeTab === "experience" && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" 
                    />
                  )}
                </button>
                
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative ${
                    activeTab === "skills" 
                      ? "text-blue-400" 
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  Skills
                  {activeTab === "skills" && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500" 
                    />
                  )}
                </button>
              </div>
              
              {/* Tab Content with AnimatePresence for smooth transitions */}
              <div className="h-full overflow-y-auto pr-2 custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderTabContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;