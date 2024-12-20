/**
 * LoadingDots.js
 * --------------------------------------------
 * This component creates a simple loading indicator
 * with three dots that scale up and down in place.
 *
 * Key Features:
 * - Smooth scaling animation using GSAP.
 * - Configurable size, color, spacing, and duration.
 *
 * Purpose:
 * - Replaces the previous circular crest animation
 *   with a minimalistic loading indicator.
 */

import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

function LoadingDots({ dotSize, color, spacing, duration }) {
  const dotsRef = useRef([]); // Array of refs for the three dots
  dotsRef.current = dotsRef.current.slice(0, 3); // Limit to three refs

  useEffect(() => {
    // Animate each dot with a staggered delay
    dotsRef.current.forEach((dot, index) => {
      if (dot) {
        gsap.fromTo(
          dot,
          { scale: 0.5 }, // Start smaller
          {
            scale: 1, // Animate to full size
            duration: duration, // Animation duration
            repeat: -1, // Infinite loop
            yoyo: true, // Reverse the animation
            ease: 'sine.inOut', // Smooth easing
            delay: index * (duration / 3), // Staggered delay
          }
        );
      }
    });
  }, [duration]);

  return (
    <svg
      width={(dotSize + spacing) * 3} // Adjust width to fit three dots
      height={dotSize * 2} // Adjust height for dot size
      style={{ display: 'block', margin: '0 auto' }}
    >
      {[0, 1, 2].map((i) => (
        <circle
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          cx={(dotSize + spacing) * i + dotSize / 2} // Position each dot
          cy={dotSize} // Center vertically
          r={dotSize / 2} // Radius based on dotSize
          fill={color} // Dot color
        />
      ))}
    </svg>
  );
}

LoadingDots.propTypes = {
  dotSize: PropTypes.number, // Diameter of each dot
  color: PropTypes.string, // Fill color of the dots
  spacing: PropTypes.number, // Space between dots
  duration: PropTypes.number, // Animation duration for one cycle
};

LoadingDots.defaultProps = {
  dotSize: 20, // Default dot size
  color: '#000', // Default color: black
  spacing: 10, // Default spacing between dots
  duration: 0.8, // Default animation duration
};

export default LoadingDots;
