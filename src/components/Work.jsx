import React, { useState, useEffect } from "react";
import { FaGithub, FaLink, FaAward, FaTimes, FaExternalLinkAlt, FaCode, FaStar, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { supabase } from "../supabaseClient"; // Add this import

const Work = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [certificates, setCertificates] = useState([]); // Changed from hardcoded to state
  const [certificatesLoading, setCertificatesLoading] = useState(true); // Add loading state
  const { scrollYProgress } = useScroll();
  
  // Subtle parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // Fetch certificates from Supabase
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        setCertificatesLoading(true);
        
        const { data, error } = await supabase
          .from("certificates")
          .select("*")
          .order("date", { ascending: false });
        
        if (error) {
          console.error("Error fetching certificates:", error);
        } else if (data && data.length > 0) {
          // Transform the data to match the expected format
          const transformedCertificates = data.map(cert => ({
            id: cert.id,
            title: cert.title,
            issuer: cert.issuer,
            date: new Date(cert.date).toLocaleDateString('en-US', { 
              month: 'short', 
              year: 'numeric' 
            }),
            credentialId: cert.credential_id || `CERT-${cert.id}`,
            image: cert.file_url,
            level: cert.level || "Certified",
            skills: cert.skills ? (Array.isArray(cert.skills) ? cert.skills : cert.skills.split(',').map(s => s.trim())) : []
          }));
          setCertificates(transformedCertificates);
        } else {
          setCertificates([]);
        }
      } catch (error) {
        console.error("Error fetching certificates:", error);
      } finally {
        setCertificatesLoading(false);
      }
    };

    fetchCertificates();
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Loading skeleton component for certificates
  const CertificatesSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800">
          <div className="p-6 h-full flex flex-col animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-lg bg-gray-200 dark:bg-gray-800 w-12 h-12"></div>
              <div className="text-right">
                <div className="w-16 h-6 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
                <div className="w-12 h-3 bg-gray-200 dark:bg-gray-800 rounded mt-1"></div>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-6 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
              <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded mb-4"></div>
              <div className="mb-4">
                <div className="w-16 h-3 bg-gray-200 dark:bg-gray-800 rounded mb-2"></div>
                <div className="flex flex-wrap gap-1">
                  <div className="w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                  <div className="w-16 h-6 bg-gray-200 dark:bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
            <div className="w-full h-10 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="work"
      className="relative min-h-screen bg-white dark:bg-black transition-colors duration-300"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-gray-900 dark:text-white"
            style={{ y: y1 }}
          >
            Featured Projects
          </motion.h1>
          
          <motion.p 
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A collection of projects that showcase modern web development, 
            innovative solutions, and attention to user experience.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="space-y-24 lg:space-y-32 mb-24 lg:mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col lg:grid-cols-2' : ''
              }`}>
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <motion.div
                    className="relative overflow-hidden rounded-xl lg:rounded-2xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Subtle overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' 
                          ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800' 
                          : 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          project.status === 'Live' ? 'bg-green-500' : 'bg-blue-500'
                        }`} />
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800">
                        <FaCode className="mr-2 text-xs" />
                        {project.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
                      {project.title}
                    </h2>
                    
                    <h3 className="text-lg text-gray-600 dark:text-gray-400 font-medium mb-4">
                      {project.subtitle}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-base lg:text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-200 font-medium"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub className="text-lg" />
                        View Code
                      </motion.a>
                      
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-200 font-medium"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                        <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
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
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 lg:mb-16">
            <motion.h2 
              className="text-3xl lg:text-4xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Certifications
            </motion.h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and achievements in modern technologies
            </p>
          </div>

          {/* Show loading skeleton while fetching */}
          {certificatesLoading ? (
            <CertificatesSkeleton />
          ) : certificates.length === 0 ? (
            <div className="text-center py-12">
              <FaAward className="text-4xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">No certificates found.</p>
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {certificates.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-md"
                  whileHover={{ y: -4 }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-900">
                        <FaAward className="text-xl text-gray-700 dark:text-gray-300" />
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                          cert.level === 'Elite' 
                            ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800' :
                          cert.level === 'Advanced' 
                            ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800' :
                          cert.level === 'Professional' 
                            ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' :
                            'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                        }`}>
                          {cert.level}
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{cert.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {cert.issuer}
                      </p>
                      
                      {cert.skills.length > 0 && (
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Key Skills:</p>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 2).map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs text-gray-700 dark:text-gray-300">
                                {skill}
                              </span>
                            ))}
                            {cert.skills.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-900 rounded text-xs text-gray-500 dark:text-gray-400">
                                +{cert.skills.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <motion.button
                      onClick={() => setSelectedCertificate(cert)}
                      className="w-full py-2.5 px-4 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-4xl max-h-[90vh] mx-4 bg-white dark:bg-gray-950 rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button 
                className="absolute top-4 right-4 z-50 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 p-2.5 rounded-lg transition-all duration-200"
                onClick={() => setSelectedCertificate(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes className="text-lg" />
              </motion.button>

              {/* Scrollable Content */}
              <div className="h-full overflow-y-auto">
                {/* Certificate Image/PDF */}
                <div className="relative w-full bg-gray-50 dark:bg-gray-900 min-h-[60vh] flex items-center justify-center">
                  {selectedCertificate.image ? (
                    <>
                      {/* Check if it's a PDF */}
                      {selectedCertificate.image.toLowerCase().endsWith('.pdf') ? (
                        <div className="w-full h-full flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
                              <svg className="w-12 h-12 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"/>
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"/>
                              </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                              PDF Certificate
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-6">
                              {selectedCertificate.title}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                              <a 
                                href={selectedCertificate.image} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
                              >
                                <FaExternalLinkAlt className="text-sm" />
                                Open PDF in New Tab
                              </a>
                              <a 
                                href={selectedCertificate.image} 
                                download
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                              >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                                </svg>
                                Download PDF
                              </a>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {/* Regular image */}
                          <img 
                            src={selectedCertificate.image} 
                            alt={`${selectedCertificate.title} Certificate`} 
                            className="w-full h-full object-contain max-h-[60vh] p-6"
                            onLoad={() => {
                              console.log("✅ Certificate image loaded successfully:", selectedCertificate.image);
                            }}
                            onError={(e) => {
                              console.error("❌ Failed to load certificate image:", selectedCertificate.image);
                              console.error("Error details:", e);
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          {/* Fallback content for images */}
                          <div className="hidden w-full h-full items-center justify-center p-8">
                            <div className="text-center">
                              <FaAward className="text-4xl text-gray-400 mx-auto mb-4" />
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {selectedCertificate.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-2">Certificate preview unavailable</p>
                              <p className="text-xs text-gray-500 dark:text-gray-600 mb-4">
                                Image URL: {selectedCertificate.image}
                              </p>
                              <a 
                                href={selectedCertificate.image} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                              >
                                <FaExternalLinkAlt className="text-sm" />
                                Open in New Tab
                              </a>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  ) : (
                    <div className="w-full h-full items-center justify-center p-8 flex">
                      <div className="text-center">
                        <FaAward className="text-4xl text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                          {selectedCertificate.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">No certificate file URL provided</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Certificate Details */}
                <div className="p-6 lg:p-8 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                        {selectedCertificate.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {selectedCertificate.issuer} • {selectedCertificate.date}
                      </p>
                    </div>
                    <span className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium ${
                      selectedCertificate.level === 'Elite' 
                        ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800' :
                      selectedCertificate.level === 'Advanced' 
                        ? 'bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800' :
                      selectedCertificate.level === 'Professional' 
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' :
                        'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                    }`}>
                      {selectedCertificate.level}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Credential ID</p>
                      <p className="text-gray-900 dark:text-white font-mono bg-gray-100 dark:bg-gray-900 px-3 py-2 rounded-lg text-sm border border-gray-200 dark:border-gray-800">
                        {selectedCertificate.credentialId}
                      </p>
                    </div>
                    {selectedCertificate.skills.length > 0 && (
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Skills Validated</p>
                        <div className="flex flex-wrap gap-2">
                          {selectedCertificate.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-800">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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