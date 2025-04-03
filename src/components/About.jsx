import React, { useState, useCallback, useRef, useMemo } from "react";
import ReactFlow, { Background, Controls, Handle } from "react-flow-renderer";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// **Skills Data**
const skillsData = [
  { name: "React.js", icon: "/svgs/react.svg" },
  { name: "PHP", icon: "/svgs/php.svg" },
  { name: "MySQL", icon: "/svgs/mysql.svg" },
  { name: "PhpMyAdmin", icon: "/svgs/phpmyadmin.svg" },
  { name: "Symfony", icon: "/svgs/symfony.svg" },
  { name: "XAMPP", icon: "/svgs/xampp.svg" },
  { name: "Bootstrap", icon: "/svgs/bootstrap.svg" },
  { name: "TailwindCss", icon: "/svgs/tailwindcss.svg" },
];

// **Nodes & Edges**
const nodes = [
  { id: "name", type: "custom", position: { x: 300, y: 50 }, data: { label: "👨‍💻 Hemant Gowardipe", color: "#3498db" } },
  { id: "education", type: "custom", position: { x: 300, y: 180 }, data: { label: "🎓 Education", color: "#e67e22" } },
  { id: "skills", type: "custom", position: { x: 300, y: 310 }, data: { label: "🛠️ Skills", color: "#2ecc71" } },
  { id: "working", type: "custom", position: { x: 300, y: 440 }, data: { label: "🚀 Working On", color: "#e74c3c" } },
];

const edges = [
  { id: "e1", source: "name", target: "education", animated: true, style: { stroke: "#e67e22", strokeWidth: 3 } },
  { id: "e2", source: "education", target: "skills", animated: true, style: { stroke: "#2ecc71", strokeWidth: 3 } },
  { id: "e3", source: "skills", target: "working", animated: true, style: { stroke: "#e74c3c", strokeWidth: 3 } },
];

// **Custom Node Component**
const CustomNode = ({ data }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    whileTap={{ scale: 0.95 }}
    className="shadow-lg font-bold text-white text-lg"
    style={{
      padding: "14px 24px",
      borderRadius: "12px",
      backgroundColor: data.color,
      textAlign: "center",
    }}
  >
    {data.label}
    <Handle type="source" position="bottom" />
    <Handle type="target" position="top" />
  </motion.div>
);

const About = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [key, setKey] = useState(0);
  const aboutRef = useRef(null);

  // ✅ Fix React Flow Warning by memoizing nodeTypes
  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  const handleNodeClick = useCallback((event, node) => {
    setSelectedNode(node.data.label);
    setKey((prevKey) => prevKey + 1);

    setTimeout(() => {
      aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  }, []);

  return (
    <section id="about" className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-10">
      <h2 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-wide">About Me</h2>

      {/* 📌 Flowchart */}
      <div className="relative w-full max-w-[85%] sm:max-w-[50%] mx-auto h-[500px] sm:h-[600px] overflow-hidden">
        <ReactFlow
          nodes={nodes.map((node) => ({
            ...node,
            type: "custom",
            data: { ...node.data, onClick: handleNodeClick },
          }))}
          edges={edges}
          nodeTypes={nodeTypes} // ✅ Using memoized nodeTypes
          onNodeClick={handleNodeClick}
          zoomOnScroll={false}
          panOnScroll={false}
          panOnDrag={true}
          fitView
        >
          <Background color="#ddd" gap={12} />
          <Controls />
        </ReactFlow>
      </div>

      {/* 📌 Description with Enhanced Typography */}
      <motion.div
        ref={aboutRef}
        key={key}
        className="mt-8 p-6 max-w-xl text-lg text-gray-800 bg-gray-100 shadow-lg rounded-lg font-semibold leading-relaxed tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Typewriter
          options={{ delay: 25 }}
          onInit={(typewriter) => {
            let text = "";
            switch (selectedNode) {
              case "👨‍💻 Hemant Gowardipe":
                text = "Passionate Full-Stack Developer | <b>React.js</b> | <b>Tailwind CSS</b> | <b>PHP</b> | <b>MySQL</b>\n. Specializing in Real-Time Systems & AI-powered solutions.\n Building scalable & interactive web applications!";
                break;
              case "🎓 Education":
                text = "📖 Pursuing **B.Tech in Computer Science Engineering** at **KDK College of Engineering, Nagpur (3rd Year)**.";
                break;
              case "🛠️ Skills":
                text = "🔧 Here are my **top technical skills**.";
                break;
              case "🚀 Working On":
                text = "📡 Building **real-time web solutions**, enhancing my **React.js portfolio**, & exploring **AI-powered features**!";
                break;
              default:
                text = "";
            }
            typewriter.typeString(text).start();
          }}
        />
      </motion.div>

      {/* **Skills Grid (Only Show for "Skills" Click)** */}
      {selectedNode === "🛠️ Skills" && (
        <motion.div
          className="mt-5 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={skill.icon} alt={skill.name} className="w-14 h-14 sm:w-16 sm:h-16" />
              <p className="mt-2 text-gray-700 text-sm font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
};

export default About;
