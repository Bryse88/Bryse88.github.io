/**
 * LoadingSplash.js
 * --------------------------------------------
 * Simplified splash screen with a loading indicator
 * using three animated dots.
 *
 * Components Used:
 * - Canvas: SVG container for animations.
 * - LoadingDots: Animated dots for loading action.
 *
 * Features:
 * - Minimalistic design.
 * - Configurable dot size, spacing, color, and duration.
 * ============================================
 */

import './splash/splash.css'; // Import custom styles for the splash screen
import Canvas from './splash/Canvas'; // SVG Canvas for rendering
import LoadingDots from './splash/LoadingDots'; // Animated dots component

// Configuration Constants
const s = 100; // Base size for the canvas
const dotSize = 20; // Size of individual dots
const dotColor = '#02bbf8'; // Dot color (white)
const dotSpacing = 10; // Spacing between dots
const animationDuration = 0.8; // Duration of one animation cycle

// Inline styles for the splash screen container
const styles = {
  backgroundColor: '#0F0F10', // Dark futuristic background
  height: '100vh', // Full viewport height
};

const LoadingSplash = () => {
  return (
    <div style={styles} className="bg-black vh-100 flex items-center justify-center">
      <Canvas w={s} h={s}> {/* SVG canvas with specified dimensions */}
        {/* Loading Indicator with Animated Dots */}
        <LoadingDots
          dotSize={dotSize} // Size of each dot
          color={dotColor} // Color of the dots
          spacing={dotSpacing} // Spacing between dots
          duration={animationDuration} // Animation duration
        />
      </Canvas>
    </div>
  );
};

export default LoadingSplash;
