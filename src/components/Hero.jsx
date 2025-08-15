import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { supabase } from "../supabaseClient";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const { data, error } = await supabase
        .from("profile-photo")
        .select("image_url");

      if (error) {
        console.error("Error fetching profile photos:", error);
      } else {
        setPhotos(data);
      }
    };

    fetchPhotos();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  // Individual item animation variants
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1
      }
    }
  };

  // Text reveal animation
  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        mass: 1
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Large decorative background text */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          initial={{ opacity: 0, scale: 1.2, rotate: -5 }}
          animate={{ opacity: 0.03, scale: 1, rotate: -2 }}
          transition={{ 
            duration: 2, 
            ease: [0.25, 0.1, 0.25, 1],
            delay: 1
          }}
        >
          <div className="text-[25rem] font-black text-gray-900 tracking-tighter leading-none">
            HG
          </div>
        </motion.div>
        
        {/* Subtle gradient overlays */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-gray-50/40 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-gray-50/30 via-transparent to-transparent" />
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* "i'm" text */}
          <motion.div
            className="mb-2"
            variants={textRevealVariants}
          >
            <h2 className="text-5xl md:text-6xl font-light text-gray-500 tracking-wide">
              i'm
            </h2>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="mb-4"
            variants={itemVariants}
          >
            <div className="relative w-40 h-24 mx-auto mb-4">
              <motion.div 
                className="w-full h-full rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {photos.length > 0 ? (
                  photos.map((photo, index) => (
                    <motion.img 
                      key={index}
                      src={photo.image_url}
                      alt="Hemant Gowardipe"
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
                    />
                  ))
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl"></div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Name - with character animation */}
          <motion.div
            className="mb-6"
            variants={itemVariants}
          >
            <div className="overflow-hidden">
              <motion.h1 
                className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black tracking-tighter leading-none"
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ 
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  mass: 1,
                  delay: 0.8
                }}
              >
                {"hemant".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    className="inline-block"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      delay: 1 + index * 0.05
                    }}
                    whileHover={{
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            className="mb-8"
            variants={itemVariants}
          >
            <div className="overflow-hidden">
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 80,
                  damping: 20,
                  delay: 1.5
                }}
              >
                Bringing Ideas to Reality
              </motion.h2>
            </div>
          </motion.div>

          {/* Asterisk with rotation */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, rotate: -360, scale: 0 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 15,
              delay: 2
            }}
          >
            <motion.div 
              className="text-7xl font-black text-gray-300"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              *
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="mb-16"
            variants={itemVariants}
          >
            <motion.p 
              className="text-xl md:text-2xl font-semibold text-black max-w-4xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              I'm your Full Stack Developer
            </motion.p>
            <motion.p 
              className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            >
              From designing beautiful interfaces to making sure everything runs smoothly behind the scenes, 
              I've got you covered. Let's turn your ideas into interactive wonders that make waves online. 
              With me by your side, your website will be more than just pixels
            </motion.p>
          </motion.div>

          {/* Location */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 20,
              delay: 2.6
            }}
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom decorative text */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 3,
          duration: 1,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-12 w-1 h-20 bg-gradient-to-b from-gray-200 to-transparent opacity-40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-12 w-1 h-20 bg-gradient-to-t from-gray-200 to-transparent opacity-40"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 4, duration: 1 }}
      />
    </section>
  );
};

export default Hero;