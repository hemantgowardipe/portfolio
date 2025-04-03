import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero"; // Import the main hero section

const IntroScreen = () => {
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    // After 3.5 seconds, show Hero section
    const timer = setTimeout(() => {
      setShowHero(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  if (showHero) {
    return <Hero />; // Load Hero component after animation
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
      <motion.div
        className="text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.8 },
          },
        }}
      >
        {["Design.", "Develop.", "Deploy."].map((word, index) => (
          <motion.div
            key={index}
            className="opacity-0"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            {word}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IntroScreen;
