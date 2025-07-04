import React, { useState, useEffect } from "react";
import { FaGithub, FaLink, FaAward, FaTimes, FaExternalLinkAlt, FaCode, FaStar } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const Work = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCertificate]);

  const projects = [
    {
      id: 1,
      title: "Real-Time Document Sharing",
      subtitle: "Advanced File Management System",
      description: "A high-performance, secure, and scalable solution for seamless file handling. Features real-time uploads, intelligent sharing, role-based access control, and instant synchronization across teams.",
      image: "/projects/file_management.png",
      technologies: ["Tailwind CSS", "PHP", "MySQL", "WebSockets", "Redis"],
      github: "https://github.com/hemantgowardipe/files_management_system.git",
      live: "https://hemantgowardipe.github.io/files_management_system/",
      features: ["Real-time collaboration", "RBAC Security", "Cloud Storage", "Version Control"],
      category: "Full Stack",
      status: "Production Ready"
    },
    {
      id: 2,
      title: "AI-Powered Summarizer",
      subtitle: "Intelligent Content Compression",
      description: "Revolutionary AI-powered text summarizer leveraging Google's Gemini API for real-time, context-aware content compression with advanced natural language processing.",
      image: "/projects/ai_summarizer.png",
      technologies: ["Next.js", "Gemini AI", "TailwindCSS", "React Hooks", "API Integration"],
      github: "https://github.com/hemantgowardipe/ai_summarizer.git",
      live: "https://ai-summarizer-seven-phi.vercel.app/",
      features: ["AI-Powered", "Real-time Processing", "Multi-format Support", "Context Awareness"],
      category: "AI/ML",
      status: "Live"
    },
    {
      id: 3,
      title: "Smart Weather Assistant",
      subtitle: "AI-Enhanced Weather Platform",
      description: "Next-generation weather application combining real-time meteorological data with AI-driven insights and personalized recommendations for optimal user experience.",
      image: "/projects/weather_app.png",
      technologies: ["Next.js", "OpenAI", "React", "Weather API", "Geolocation"],
      github: "https://github.com/hemantgowardipe/weather_app.git",
      live: "https://weatherapp-eight-sage.vercel.app/",
      features: ["AI Recommendations", "Real-time Data", "Location-based", "Weather Insights"],
      category: "Web App",
      status: "Live"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Full Stack Web Development",
      issuer: "IntechZia",
      date: "Summer 2024",
      credentialId: "ISO-9001 : 2005",
      image: "/certificates/full-stack.jpg",
      level: "Professional",
      skills: ["React", "Node.js", "Database Design", "System Architecture"]
    },
    {
      id: 2,
      title: "Programming in Java (Elite)",
      issuer: "IIT Kharagpur",
      date: "Apr 2025",
      credentialId: "NPTEL-ELITE-2025",
      image: "/certificates/nptel_java.jpg",
      level: "Elite",
      skills: ["Core Java", "OOP", "Data Structures", "Algorithms"]
    },
    {
      id: 3,
      title: "AIML Virtual Internship",
      issuer: "AICTE (AWS)",
      date: "Nov 2023",
      credentialId: "AICTE-AWS-2023",
      image: "/certificates/AICTE_AIML.jpg",
      level: "Advanced",
      skills: ["Machine Learning", "AI Frameworks", "Cloud Computing", "Data Science"]
    },
    {
      id: 4,
      title: "IBM Cloud Essentials",
      issuer: "IBM",
      date: "Oct 2023",
      credentialId: "IBM-CLOUD-2023",
      image: "/certificates/ibm_cloud.jpg",
      level: "Certified",
      skills: ["Cloud Architecture", "DevOps", "Container Orchestration", "Microservices"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.6 
      }
    }
  };

  return (
    <section
      id="work"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Dynamic background effects */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
          animate={{
            x: mousePosition.x * -0.01,
            y: mousePosition.y * -0.01,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight mb-6"
            style={{ y: y1 }}
          >
            <span className="text-white">My</span>{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
                Projects
              </span>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 blur-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </motion.h1>
          
          <motion.div 
            className="w-32 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Crafting innovative digital experiences with cutting-edge technologies 
            and a passion for exceptional user interfaces.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-32 mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative max-w-7xl mx-auto"
              onHoverStart={() => setActiveProject(project.id)}
              onHoverEnd={() => setActiveProject(null)}
            >
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}>
                {/* Project Image */}
                <div className="w-full lg:w-1/2 relative">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500"
                    whileHover={{ scale: 1.02 }}
                    style={{ y: index % 2 === 0 ? y1 : y2 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <div className="p-6 w-full">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.features.map((feature, i) => (
                            <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-30">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                        project.status === 'Live' ? 'bg-green-500/80 text-white' : 
                        project.status === 'Production Ready' ? 'bg-blue-500/80 text-white' : 
                        'bg-yellow-500/80 text-black'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="mb-4">
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 backdrop-blur-sm border border-purple-500/30 mb-4">
                        <FaCode className="mr-2" />
                        {project.category}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h2>
                    
                    <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold mb-6">
                      {project.subtitle}
                    </h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-200 hover:bg-white/10 transition-colors cursor-default"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="text-xl group-hover:rotate-12 transition-transform" />
                        <span className="font-semibold">View Code</span>
                      </motion.a>
                      
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full shadow-lg shadow-purple-500/25 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt className="text-xl group-hover:rotate-12 transition-transform" />
                        <span className="font-semibold">Live Demo</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Section */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Professional{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Certifications
              </span>
            </motion.h2>
            
            <motion.div 
              className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Validated expertise across cutting-edge technologies and development practices
            </p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certificates.map((cert) => (
              <motion.div
                key={cert.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <motion.div 
                      className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaAward className="text-2xl text-purple-400" />
                    </motion.div>
                    <div className="text-right">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        cert.level === 'Elite' ? 'bg-yellow-500/20 text-yellow-300' :
                        cert.level === 'Advanced' ? 'bg-red-500/20 text-red-300' :
                        cert.level === 'Professional' ? 'bg-blue-500/20 text-blue-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {cert.level}
                      </span>
                      <p className="text-xs text-gray-400 mt-1">{cert.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">Issued by {cert.issuer}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 mb-2">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.slice(0, 2).map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 2 && (
                          <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-400">
                            +{cert.skills.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={() => setSelectedCertificate(cert)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 hover:from-purple-500/30 hover:to-blue-500/30 text-white text-sm font-medium backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2 border border-white/10 group-hover:border-purple-500/30"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedCertificate(null)}
          >
            {/* Modal Container with proper scrolling */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-6xl max-h-[95vh] mx-4 my-4 sm:mx-8 sm:my-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Fixed position with better visibility */}
              <motion.button 
                className="absolute top-4 right-4 z-50 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 border border-white/20 hover:border-white/40"
                onClick={() => setSelectedCertificate(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes className="text-lg" />
              </motion.button>

              {/* Scrollable Content */}
              <div className="h-full overflow-y-auto">
                {/* Certificate Image */}
                <div className="relative w-full bg-gradient-to-br from-gray-800 to-gray-700 min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center">
                  <img 
                    src={selectedCertificate.image} 
                    alt={`${selectedCertificate.title} Certificate`} 
                    className="w-full h-full object-contain max-h-[70vh] p-4"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback content */}
                  <div className="hidden w-full h-full items-center justify-center p-8">
                    <div className="text-center text-white">
                      <FaAward className="text-6xl text-purple-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold mb-2">{selectedCertificate.title}</h3>
                      <p className="text-gray-300">Certificate preview not available</p>
                    </div>
                  </div>
                </div>
                
                {/* Certificate Details */}
                <div className="p-6 sm:p-8 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-lg sm:text-xl text-gray-300">
                        Issued by {selectedCertificate.issuer} • {selectedCertificate.date}
                      </p>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                      selectedCertificate.level === 'Elite' ? 'bg-yellow-500/20 text-yellow-300' :
                      selectedCertificate.level === 'Advanced' ? 'bg-red-500/20 text-red-300' :
                      selectedCertificate.level === 'Professional' ? 'bg-blue-500/20 text-blue-300' :
                      'bg-green-500/20 text-green-300'
                    }`}>
                      {selectedCertificate.level}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 mb-2">Credential ID:</p>
                      <p className="text-white font-mono bg-white/5 px-3 py-2 rounded-lg break-all">
                        {selectedCertificate.credentialId}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Skills Validated:</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedCertificate.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;