// CustomCursor.js
import React, { useState, useEffect } from 'react';
import './cursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setInteracting] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
      setInteracting(hoveredElement && hoveredElement.classList.contains('interact'));
    };

    const onMouseEnter = () => {
      setInteracting(true);
    };

    const onMouseLeave = () => {
      setInteracting(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${isInteracting ? 'interacting' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${isInteracting ? "60px" : "30px"}`,
        height: `${isInteracting ? "60px" : "30px"}`,
      }}
    ></div>
  );
};

export default CustomCursor;
