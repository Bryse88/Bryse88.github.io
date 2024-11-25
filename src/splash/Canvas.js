/**
 * ============================================
 * Canvas Component
 * --------------------------------------------
 * A flexible SVG canvas for rendering graphical 
 * elements with padding and dynamic animations.
 * 
 * Props:
 * - w (number): Width of the canvas (required).
 * - h (number): Height of the canvas (required).
 * - children (node): SVG child elements to render inside the canvas.
 * - bgColor (string): Background color of the canvas (default: 'transparent').
 * 
 * Features:
 * - Adds padding for animated elements that expand beyond bounds.
 * - Ensures smooth rendering with responsive design.
 * - Default styling supports a centered, resizable canvas.
 * ============================================
 */

import PropTypes from 'prop-types';

function Canvas({ w, h, children, bgColor = 'transparent' }) {
  // Define padding to accommodate expanding animations
  const padding = 50; // Adjust based on expected ripple size or animations
  const viewBoxW = w + padding * 2;
  const viewBoxH = h + padding * 2;

  // Create an expanded viewBox for the canvas
  const viewBox = [-padding, -padding, viewBoxW, viewBoxH].join(' ');

  // Inline styles for the <svg> element
  const styles = {
    display: 'block',                 // Ensures SVG behaves as a block element
    backgroundColor: bgColor,         // Dynamic background color
    maxWidth: '400px',                // Restrict maximum width for responsiveness
    width: '100vh',                   // Set width relative to viewport height
    height: '100vh',                  // Full viewport height for immersion
    margin: '0 auto',                 // Center the canvas horizontally
  };

  return (
    <svg
      version="1.1"                  // Define the SVG version
      xmlns="http://www.w3.org/2000/svg" // SVG namespace
      viewBox={viewBox}              // Define the visible region
      style={styles}                 // Apply inline styles
    >
      {children}                     {/* Render child SVG elements */}
    </svg>
  );
}

Canvas.propTypes = {
  w: PropTypes.number.isRequired,    // Required width of the canvas
  h: PropTypes.number.isRequired,    // Required height of the canvas
  children: PropTypes.node,          // Child elements (optional)
  bgColor: PropTypes.string,         // Background color (optional)
};

export default Canvas;
