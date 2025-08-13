import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        {/* Fine Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
        
        {/* Subtle Gradient Overlays */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-gray-50/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-gray-50/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <motion.nav
        className="absolute top-0 left-0 right-0 z-50 px-6 py-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
      >
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.div
            className="text-xl font-semibold text-gray-900 tracking-tight"
            style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            Hemant Gowardipe
          </motion.div>
          
          <div className="flex items-center space-x-3">
            <motion.a
              href="mailto:hemantgowardipe@gmail.com"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaEnvelope className="text-sm" />
              <span className="text-sm font-medium">Contact</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/hemantgowardipe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-lg" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/hemant-gowardipe-96614b24a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="text-lg" />
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-sm font-medium mb-8 shadow-sm"
            style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span>Available for new opportunities</span>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            <div className="relative w-36 h-36 mx-auto">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl shadow-gray-200/50">
                <img 
                  src="/images/sora_img.png" 
                  alt="Hemant Gowardipe - Full Stack PHP Developer" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Subtle Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-100/80 pointer-events-none" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 tracking-tight leading-tight" 
                style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}>
              Hemant Gowardipe
            </h1>
          </motion.div>

          {/* Role & Location */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-2"
               style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}>
              Full Stack PHP Developer
            </p>
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <FaMapMarkerAlt className="text-sm" />
              <span className="text-base" style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}>
                Remote • Nagpur, Maharashtra
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            I specialize in building scalable web applications and crafting exceptional user experiences. 
            Passionate about clean code, modern technologies, and solving complex problems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            <motion.button
              className="px-8 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in touch
            </motion.button>
            
            <motion.button
              className="px-8 py-3 bg-white text-gray-700 font-medium border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              View projects
            </motion.button>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.25, 0, 1] }}
          >
            <p className="text-sm text-gray-500 mb-4 font-medium tracking-wide uppercase"
               style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}>
              Technologies
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['PHP', 'Laravel', 'React', 'MySQL', 'JavaScript', 'Git', 'Python', 'Flask'].map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-4 py-2 bg-gray-50 border border-gray-200/80 rounded-full text-gray-700 text-sm font-medium hover:bg-gray-100 hover:border-gray-300 transition-all duration-200 cursor-default"
                  style={{ fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Inter", sans-serif' }}
                  whileHover={{ scale: 1.05, y: -1 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05, duration: 0.4, ease: "easeOut" }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-8 w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-60" />
      <div className="absolute bottom-1/3 right-8 w-px h-16 bg-gradient-to-b from-transparent via-gray-200 to-transparent opacity-60" />
    </section>
  );
};

export default Hero;