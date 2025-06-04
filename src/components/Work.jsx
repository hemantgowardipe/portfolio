import React, { useState } from "react";
import { FaGithub, FaLink, FaAward, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "IntechZia",
      date: "Summer 2024",
      credentialId: "ISO-9001 : 2005",
      image: "/certificates/full-stack.jpg", // Replace with your actual certificate image path
    },
    {
      id: 2,
      title: "Programming in Java(Elite)",
      issuer: "IIT Kharagpur",
      date: "Apr 2025",
      credentialId: "",
      image: "/certificates/nptel_java.jpg", // Replace with your actual certificate image path
    },
    {
      id: 3,
      title: "AIML - Virtual INternship",
      issuer: "AICTE(AWS)",
      date: "Nov 2023",
      credentialId: "",
      image: "/certificates/AICTE_AIML.jpg", // Replace with your actual certificate image path
    },
    {
      id: 4,
      title: "IBM Cloud Essentials",
      issuer: "IBM",
      date: "Oct 2023",
      credentialId: "",
      image: "/certificates/ibm_cloud.jpg", // Replace with your actual certificate image path
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] px-4 sm:px-6 lg:px-20 py-24 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-purple-900/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-900/10 blur-3xl"></div>
      </div>

      {/* Section title */}
      <motion.div 
        className="w-full text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Projects</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4"></div>
      </motion.div>

      {/* PROJECTS SECTION */}
      <div className="w-full space-y-20">
        {/* FIRST PROJECT */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl max-w-6xl w-full mx-auto"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div 
                className="relative overflow-hidden rounded-lg border-2 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <img
                  src="/projects/file_management.png"
                  alt="File Management System"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm">Real-time file management system for seamless team collaboration</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-white">
                  Real-Time <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Document Sharing</span>
                </h2>
                <p className="text-gray-300 mt-4 text-sm sm:text-lg leading-relaxed">
                  The Real-Time File Management System is a high-performance, secure,
                  and scalable solution for seamless file handling. Supports real-time
                  uploads, sharing, and RBAC with instant synchronization.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    Tailwind CSS
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    PHP
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    MySQL
                  </span>
                </div>

                <div className="flex justify-center md:justify-start space-x-6 mt-8">
                  <motion.a
                    href="https://github.com/hemantgowardipe/files_management_system.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-full border border-white/10 transition duration-300"
                  >
                    <FaGithub className="text-lg" /> <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://hemantgowardipe.github.io/files_management_system/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-3 rounded-full shadow-lg shadow-purple-500/20 transition duration-300"
                  >
                    <FaLink className="text-lg" /> <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* SECOND PROJECT */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl max-w-6xl w-full mx-auto"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 p-8 sm:p-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div 
                className="relative overflow-hidden rounded-lg border-2 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <img
                  src="/projects/ai_summarizer.png"
                  alt="E-Commerce Platform"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm"></p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-white">
                  AI - <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Summarizer</span>
                </h2>
                <p className="text-gray-300 mt-4 text-sm sm:text-lg leading-relaxed">
                  Built an AI-powered text summarizer using Next.js and Google's Gemini API for real-time, intelligent content compression.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    Next.js
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    Gemini-AI
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    TailwindCss
                  </span>
                </div>

                <div className="flex justify-center md:justify-start space-x-6 mt-8">
                  <motion.a
                    href="https://github.com/hemantgowardipe/ai_summarizer.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-full border border-white/10 transition duration-300"
                  >
                    <FaGithub className="text-lg" /> <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://ai-summarizer-seven-phi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-3 rounded-full shadow-lg shadow-blue-500/20 transition duration-300"
                  >
                    <FaLink className="text-lg" /> <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* THIRD PROJECT */}
        <motion.div
          className="relative rounded-xl overflow-hidden shadow-2xl max-w-6xl w-full mx-auto"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm z-0"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 sm:p-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div 
                className="relative overflow-hidden rounded-lg border-2 border-white/10 shadow-2xl"
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <img
                  src="/projects/weather_app.png"
                  alt="File Management System"
                  className="w-full h-auto max-h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <p className="text-white text-sm"></p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 text-white text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-white">
                  Live AI<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Assistance Weather App</span>
                </h2>
                <p className="text-gray-300 mt-4 text-sm sm:text-lg leading-relaxed">
                  Crafting smart, user-centric web applications with a blend of React, Next.js, and AI-driven innovation.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    Next.js
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    Open AI
                  </span>
                  <span className="text-xs sm:text-sm font-medium bg-white/5 border border-white/10 px-4 sm:px-6 py-2 rounded-full backdrop-blur-sm">
                    React
                  </span>
                </div>

                <div className="flex justify-center md:justify-start space-x-6 mt-8">
                  <motion.a
                    href="https://github.com/hemantgowardipe/weather_app.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-5 py-3 rounded-full border border-white/10 transition duration-300"
                  >
                    <FaGithub className="text-lg" /> <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href="https://weatherapp-eight-sage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-5 py-3 rounded-full shadow-lg shadow-purple-500/20 transition duration-300"
                  >
                    <FaLink className="text-lg" /> <span>Live Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CERTIFICATES SECTION */}
      <motion.div 
        className="w-full mt-32"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">Professional certifications that validate my skills and expertise in various technologies and domains.</p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {certificates.map((cert) => (
            <motion.div 
              key={cert.id}
              variants={cardVariants}
              className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-30"></div>
              <div className="relative bg-gray-900 rounded-lg p-6 h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <FaAward className="text-2xl text-purple-400" />
                    <span className="text-xs font-medium text-gray-400">{cert.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
                  <div className="mt-3 flex items-center">
                    <span className="text-xs font-medium text-gray-500">Credential ID:</span>
                    <span className="text-xs ml-2 text-gray-300">{cert.credentialId}</span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setSelectedCertificate(cert)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 px-4 rounded-lg bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-500 hover:to-blue-500 text-white text-sm font-medium backdrop-blur-sm transition duration-300 flex items-center justify-center gap-2"
                >
                  <span>View Certificate</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] w-full bg-gray-800">
                {/* You can replace this with the actual certificate image */}
                <img 
                  src={selectedCertificate.image} 
                  alt={`${selectedCertificate.title} Certificate`} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/800/600";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCertificate.title}</h3>
                <p className="text-gray-300">Issued by {selectedCertificate.issuer} • {selectedCertificate.date}</p>
                <div className="mt-3 flex items-center">
                  <span className="text-sm font-medium text-gray-400">Credential ID:</span>
                  <span className="text-sm ml-2 text-gray-200">{selectedCertificate.credentialId}</span>
                </div>
              </div>
              <button 
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                onClick={() => setSelectedCertificate(null)}
              >
                <FaTimes />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;