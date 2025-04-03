import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center min-h-screen bg-[#0d0d0d] px-4 sm:px-6 lg:px-20 space-y-12"
    >
      {/* FIRST PROJECT */}
      <motion.div
        className="mt-20 relative rounded-xl shadow-2xl p-8 sm:p-12 max-w-6xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(135deg, #111, #222, #333)",
          boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src="/projects/file_management.png"
            alt="File Management System"
            className="rounded-lg object-cover w-full h-auto max-h-[350px] sm:max-h-[450px]"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-white">
            Real-Time Document Sharing
          </h2>
          <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed">
            The Real-Time File Management System is a high-performance, secure,
            and scalable solution for seamless file handling. Supports real-time
            uploads, sharing, and RBAC with instant synchronization.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start space-x-2 sm:space-x-3 mt-4 sm:mt-5">
            <span className="text-xs sm:text-sm font-semibold bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              Tailwind CSS
            </span>
            <span className="text-xs sm:text-sm font-semibold bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              PHP
            </span>
            <span className="text-xs sm:text-sm font-semibold bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              MySQL
            </span>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mt-5 sm:mt-6">
            <a
              href="https://github.com/hemantgowardipe/files_management_system.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-3xl sm:text-4xl hover:text-gray-400 transition duration-200" />
            </a>
            <a
              href="https://hemantgowardipe.github.io/files_management_system/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="text-white text-3xl sm:text-4xl hover:text-gray-400 transition duration-200" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* SECOND PROJECT */}
      <motion.div
        className="relative rounded-xl shadow-2xl p-8 sm:p-12 max-w-6xl w-full flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-16" // Added mb-16
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          background: "linear-gradient(135deg, #111, #222, #333)",
          boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="w-full md:w-1/2 flex justify-center">
          <motion.img
            src="/projects/ezshop.png"
            alt="E-Commerce Platform"
            className="rounded-lg object-cover w-full h-auto max-h-[350px] sm:max-h-[450px]"
            whileHover={{ scale: 1.05 }}
          />
        </div>

        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-white">
            EZShop- E-Commerce Platform
          </h2>
          <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed">
            EZShop is a feature-rich e-commerce platform with dynamic product
            grids, user authentication, shopping cart, and secure checkout
            process.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start space-x-2 sm:space-x-3 mt-4 sm:mt-5">
            <span className="text-xs sm:text-sm font-semibold bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              PHP
            </span>
            <span className="text-xs sm:text-sm font-semibold bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              MYSQL
            </span>
            <span className="text-xs sm:text-sm font-semibold bg-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg">
              BOOTSTRAP
            </span>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 mt-5 sm:mt-6">
            <a
              href="https://github.com/hemantgowardipe/EZshop.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-white text-3xl sm:text-4xl hover:text-gray-400 transition duration-200" />
            </a>
            <a
              href="https://hemantgowardipe.github.io/EZshop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="text-white text-3xl sm:text-4xl hover:text-gray-400 transition duration-200" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Work;
