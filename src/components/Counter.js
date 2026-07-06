import React, { useState, useEffect } from 'react';

const Counter = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);
  const step = (end - start) / (duration / 16); // Calculate step based on duration

  useEffect(() => {
    let animationFrameId;
    const animateCounter = () => {
      setCount((prevCount) => {
        const newCount = prevCount + step;
        if ((step > 0 && newCount >= end) || (step < 0 && newCount <= end)) {
          // Stop the animation when reaching the end
          setCount(end);
        } else {
          animationFrameId = requestAnimationFrame(animateCounter);
          return newCount;
        }
      });
    };

    // Start the animation
    animateCounter();

    // Cleanup function to cancel animation frame on component unmount
    return () => cancelAnimationFrame(animationFrameId);
  }, [start, end, duration, step]);

  return <div>{Math.round(count)}</div>; // Display the rounded count
};

export default Counter;
