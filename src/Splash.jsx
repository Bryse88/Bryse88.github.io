/**
 * ============================================
 * Splash Component
 * --------------------------------------------
 * Creates an animated splash screen using 
 * concentric circle patterns with dynamic 
 * animations.
 * 
 * Components Used:
 * - Canvas: SVG container for animations.
 * - Nucleus: Central animated circle.
 * - Crest: Animated concentric circle patterns.
 * 
 * Features:
 * - Responsive design.
 * - Dynamic circle animations with GSAP.
 * - Customizable colors and sizes.
 * ============================================
 */

import './splash/splash.css';  // Import custom styles for the splash screen
import Canvas from './splash/Canvas'; // SVG Canvas for rendering
import Nucleus from './splash/Nucleus'; // Central animated element
import Crest from './splash/Crest'; // Concentric animated patterns

// Configuration Constants
const s = 100; // Base size for the canvas
const center = { x: s / 2, y: s / 2 }; // Center coordinates
const circleColor = '#fff'; // Circle color (white)
const circleSize = 3; // Circle size
const amp = 12; // Spacing between concentric circles
const crests = [ // Configuration for animated crests
  { count: 8, offset: false },
  { count: 16, offset: false },
  { count: 16, offset: true },
  { count: 16, offset: false },
  { count: 16, offset: true },
  { count: 16, offset: false },
];

// Inline styles for the splash screen container
const styles = {
  backgroundColor: '#0F0F10', // Dark futuristic background
  height: '100vh',           // Full viewport height
};

const Splash = () => {
  return (
    <div style={styles} className="bg-black vh-100 flex items-center">
      <Canvas w={s} h={s}> {/* SVG canvas with specified dimensions */}
        {/* Central Nucleus */}
        <Nucleus 
          x={center.x} 
          y={center.y} 
          r={circleSize} 
          fill={circleColor} 
        />
        {/* Animated Concentric Crests */}
        {crests.map(({ count, offset }, idx) => (
          <Crest 
            key={idx}                     // Unique key for each crest
            count={count}                 // Number of circles
            circleSize={circleSize}       // Size of individual circles
            radius={amp + amp * idx}      // Dynamic radius for spacing
            center={center}               // Center point of crests
            offset={offset}               // Alternating offsets
            delay={0.8 * (idx + 1) / crests.length} // Staggered delay
            fill={circleColor}            // Circle color
          />
        ))}
      </Canvas>
    </div>
  );
};

export default Splash;
