import React, { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const lastPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    // Detect Mobile View
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust based on screen size
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Disable custom cursor on mobile

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Calculate cursor velocity based on movement speed
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);
      setVelocity(speed);

      lastPosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return; // Disable animation on mobile

    const moveOuterCursor = () => {
      setOuterPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.12, // Smooth transition
        y: prev.y + (position.y - prev.y) * 0.12,
      }));
      requestRef.current = requestAnimationFrame(moveOuterCursor);
    };
    requestRef.current = requestAnimationFrame(moveOuterCursor);

    return () => cancelAnimationFrame(requestRef.current);
  }, [position, isMobile]);

  return (
    <>
      {!isMobile && (
        <>
          {/* Inner Dot */}
          <div
            className="fixed w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] shadow-lg"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          ></div>

          {/* Outer Polarized Circle */}
          <div
            className="fixed rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
            style={{
              left: `${outerPosition.x}px`,
              top: `${outerPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${1 + velocity / 300})`,
              width: "50px",
              height: "50px",
              border: "3px solid transparent",
              background: `conic-gradient(from 180deg at 50% 50%, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.3))`,
              boxShadow: "0 0 20px rgba(255,255,255,0.4)", // Soft glow effect
              opacity: 1,
            }}
          ></div>

          {/* Hide Default Cursor */}
          <style>{`* { cursor: none; }`}</style>
        </>
      )}
    </>
  );
};

export default Cursor;
