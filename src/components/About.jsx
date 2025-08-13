import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaDownload, FaCode, FaDatabase, FaTools, FaChevronRight, FaMapMarkerAlt, FaEnvelope, FaGraduationCap, FaCalendarAlt } from "react-icons/fa";


// Skills Data with categories
const skillsData = [
  {
    category: "Frontend",
    icon: <FaCode className="text-blue-600 dark:text-blue-400" />,
    items: [
      { name: "React.js", icon: "/svgs/react.svg" },
      { name: "Bootstrap", icon: "/svgs/boostrap.svg" },
      { name: "TailwindCSS", icon: "/svgs/tailwindcss.svg" }
    ]
  },
  {
    category: "Backend",
    icon: <FaDatabase className="text-purple-600 dark:text-purple-400" />,
    items: [
      { name: "PHP", icon: "/svgs/php.svg" },
      { name: "MySQL", icon: "/svgs/mysql (1).svg" },
      { name: "Symfony", icon: "/svgs/symphony.svg" },
      { name: "Laravel", icon: "/svgs/laravel.svg" },
      { name: "RESTful APIs", icon: "/svgs/flask.svg" }
    ]
  },
  {
    category: "Tools",
    icon: <FaTools className="text-green-600 dark:text-green-400" />,
    items: [
      { name: "PhpMyAdmin", icon: "/svgs/phpmyadmin.svg" },
      { name: "XAMPP", icon: "/svgs/xampp.svg" },
      { name: "Git", icon: "/svgs/git.svg" },
      { name: "VS Code", icon: "/svgs/vscode.svg" },
      { name: "Responsive Design", icon: "/svgs/responsive.svg" }
    ]
  }
];

// Skills text array for ScrollVelocity
// const skillsTexts = [
//   "React.js • Bootstrap • TailwindCSS • JavaScript • HTML5 • CSS3",
//   "PHP • MySQL • Symfony • RESTful APIs • Server Management",
//   "PhpMyAdmin • XAMPP • Git • VS Code • Responsive Design"
// ];

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
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
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
            <div className="text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>
                I'm a passionate Full-Stack Developer with expertise in creating intuitive and responsive web applications. My journey in software development began with a curiosity to build solutions that solve real-world problems and create meaningful user experiences.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I specialize in building scalable web solutions using modern frameworks and best practices. I'm constantly exploring new technologies and methodologies to enhance my skillset and deliver exceptional results.
              </p>
              <p>
                Currently pursuing my B.Tech in Computer Science Engineering at KDK College of Engineering, Nagpur, I balance academic excellence with practical project development and continuous learning.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                <FaGraduationCap className="text-blue-600 dark:text-blue-400" />
                Education
              </h3>
              <div className="ml-2 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-semibold text-lg">
                      Bachelor of Technology - Computer Science Engineering
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      KDK College of Engineering, Nagpur
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <FaCalendarAlt className="text-gray-500 text-sm" />
                      <p className="text-gray-500 dark:text-gray-400 text-sm">2022 - Present (4th Year)</p>
                    </div>
                  </div>
                </div>
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
            <div className="relative">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCode className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    Web Development Intern
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Intechzia Pvt Ltd</p>
                  <div className="flex items-center gap-2 mb-3">
                    <FaCalendarAlt className="text-gray-500 text-sm" />
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Summer 2024</p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Contributed to the development and maintenance of modern web applications. 
                    Collaborated with senior developers on various client projects, gaining hands-on 
                    experience in full-stack development and agile methodologies.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
                      PHP
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
                      MySQL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      
      case "skills":
        return (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {skillsData.map((category, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants} 
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-3">
                  {category.icon}
                  {category.category}
                </h3>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {category.items.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ 
                        y: -2,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group relative"
                      title={skill.name} // Tooltip on hover to show skill name
                    >
                      <div className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 hover:shadow-md transition-all duration-200">
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                          }}
                        />
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
      className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300 px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white tracking-tight mb-4">
            About Me
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer crafting digital experiences with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Profile Column */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="sticky top-8">
              <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-6 lg:p-8">
                {/* Profile Image */}
                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800 shadow-lg">
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
                </div>
                
                {/* Name and Title */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                    Hemant Gowardipe
                  </h2>
                  <div className="text-lg text-gray-600 dark:text-gray-400 font-medium h-8 flex items-center justify-center">
                    <Typewriter
                      options={{ loop: true, delay: 80 }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString("Full Stack Developer")
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString("React.js Specialist")
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString("Problem Solver")
                          .pauseFor(2500)
                          .start();
                      }}
                    />
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <FaEnvelope className="text-blue-600 dark:text-blue-400 text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Email</p>
                      <p className="text-gray-900 dark:text-white text-sm break-all">
                        hemantgowardipe442@gmail.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <FaMapMarkerAlt className="text-green-600 dark:text-green-400 text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Location</p>
                      <p className="text-gray-900 dark:text-white text-sm">Nagpur, Maharashtra, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-900">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <FaGraduationCap className="text-purple-600 dark:text-purple-400 text-sm" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">Education</p>
                      <p className="text-gray-900 dark:text-white text-sm">B.Tech Computer Science</p>
                    </div>
                  </div>
                </div>
                
                {/* Resume Download Button */}
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 font-medium shadow-sm transition-all duration-200"
                >
                  <FaDownload className="text-sm" />
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
                    activeTab === "about" 
                      ? "text-black dark:text-white bg-white dark:bg-gray-950 border-b-2 border-black dark:border-white" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  About
                </button>
                
                <button
                  onClick={() => setActiveTab("experience")}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
                    activeTab === "experience" 
                      ? "text-black dark:text-white bg-white dark:bg-gray-950 border-b-2 border-black dark:border-white" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  Experience
                </button>
                
                <button
                  onClick={() => setActiveTab("skills")}
                  className={`px-6 py-4 text-sm font-medium transition-all duration-200 relative ${
                    activeTab === "skills" 
                      ? "text-black dark:text-white bg-white dark:bg-gray-950 border-b-2 border-black dark:border-white" 
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                >
                  Skills
                </button>
              </div>
              
              {/* Tab Content */}
              <div className="p-6 lg:p-8 min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderTabContent()}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;