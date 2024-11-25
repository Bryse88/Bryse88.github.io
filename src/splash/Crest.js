/**
 * Crest.js
 * --------------------------------------------
 * This component creates a visually appealing,
 * animated circular crest using SVG and GSAP.
 *
 * Key Features:
 * - Configurable circle arrangement in a circular pattern.
 * - Smooth animations for radius and position using GSAP.
 * - Dynamic props for flexible customization.
 *
 * Purpose:
 * - Enhances the visual appeal of the website with dynamic, futuristic animations.
 * - Designed to fit into tech-inspired and modern layouts.
 *
 * Props:
 * - count: Number of circles in the crest.
 * - center: Center point coordinates of the crest.
 * - circleSize: Initial size of each circle.
 * - offset: Creates a staggered or alternate pattern.
 * - radius: Radius of the circular crest.
 * - delay: Animation start delay for synchronization.
 * - fill: Fill color of the circles.
 *
 */

import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

function Crest({ count, center, circleSize, offset, radius, delay, fill }) {
  /**
   * Ref to hold references to each circle element.
   * @type {React.MutableRefObject<SVGCircleElement[]>}
   */
  const refs = useRef([]);
  refs.current = refs.current.slice(0, count);

  useEffect(() => {
    /**
     * Animation Logic
     * - Calculates the position of each circle using trigonometry.
     * - Animates radius and position with GSAP.
     */
    const theta = (2 * Math.PI) / count; // Angle between circles.
    const delta = offset ? theta / 2 : 0; // Offset adjustment.

    refs.current.forEach((ref, idx) => {
      if (ref) {
        const { x, y } = getLocation(theta, delta, idx, radius); // Start position.
        const end = getLocation(theta, delta, idx, radius * 0.5); // End position.

        gsap.fromTo(
          ref,
          1, // Animation duration in seconds.
          {
            attr: { r: circleSize, cx: x, cy: y }, // Initial state.
          },
          {
            attr: { r: circleSize / 8, cx: end.x, cy: end.y }, // Animated state.
            ease: 'sine.inOut', // Easing function for smooth animation.
            delay, // Start delay for synchronization.
            yoyo: true, // Reverses the animation.
            repeat: -1, // Infinite loop.
          }
        );
      }
    });
  }, [count, center, circleSize, offset, radius, delay]);

  /**
   * Renders the circle nodes in the SVG group.
   */
  const nodes = Array(count)
    .fill()
    .map((_, idx) => {
      const { x, y } = getLocation(
        (2 * Math.PI) / count,
        offset ? Math.PI / count : 0,
        idx,
        radius
      );
      return (
        <circle
          key={idx}
          ref={(el) => (refs.current[idx] = el)}
          cx={x}
          cy={y}
          r={circleSize}
          fill={fill}
          strokeWidth={circleSize * 0.2}
        />
      );
    });

  return (
    <g transform={`translate(${center.x}, ${center.y})`}>
      {nodes}
    </g>
  );
}

/**
 * PropTypes validation for better error handling.
 */
Crest.propTypes = {
  count: PropTypes.number.isRequired, // Number of circles.
  circleSize: PropTypes.number.isRequired, // Initial circle radius.
  center: PropTypes.object.isRequired, // Coordinates of the crest center.
  fill: PropTypes.string.isRequired, // Circle fill color.
  offset: PropTypes.bool.isRequired, // Offset for staggered effect.
  radius: PropTypes.number.isRequired, // Radius of the crest.
  delay: PropTypes.number.isRequired, // Animation delay.
};

export default Crest;

/**
 * Utility function to calculate position of circles.
 * @param {number} theta - Angle between circles.
 * @param {number} delta - Offset adjustment.
 * @param {number} idx - Current circle index.
 * @param {number} r - Radius of the crest.
 * @returns {Object} {x, y} - Coordinates of the circle.
 */
function getLocation(theta, delta, idx, r) {
  const x = r * Math.cos(delta + theta * idx);
  const y = r * Math.sin(delta + theta * idx);
  return { x, y };
}
