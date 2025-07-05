import React, { useEffect, useState, useRef } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [outerPosition, setOuterPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const lastPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });

      const dx = clientX - lastPosition.current.x;
      const dy = clientY - lastPosition.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      setVelocity((prevVelocity) => prevVelocity * 0.85 + speed * 0.15);
      setAngle(Math.atan2(dy, dx) * (180 / Math.PI));

      lastPosition.current = { x: clientX, y: clientY };
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;

    const moveOuterCursor = () => {
      setOuterPosition((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;

        const newX = prev.x + dx * 0.1;
        const newY = prev.y + dy * 0.1;

        return { x: newX, y: newY };
      });

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
            className="fixed w-3 h-3 rounded-full pointer-events-none z-[9999]"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: "translate(-50%, -50%)",
              background: "transparent",
            }}
          ></div>

          {/* Outer Jelly-Inverted Circle */}
          <div
            className="fixed rounded-full pointer-events-none z-[9998]"
            style={{
              left: `${outerPosition.x}px`,
              top: `${outerPosition.y}px`,
              width: "60px",
              height: "60px",
              background: "#ffffff",
              mixBlendMode: "difference",
              borderRadius: "50%",
              transform: `
                translate(-50%, -50%) 
                rotate(${angle}deg) 
                scale(${1 + velocity / 150}, ${1 - velocity / 600})
              `,
              transition: "background 0.3s ease",
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
