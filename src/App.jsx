/* ============================================
   Main App Component
   --------------------------------------------
   This file serves as the central component
   that organizes and renders the splash screen,
   main content (Hero and Content), and the
   interactive circle.
   ============================================ */

   import React, { useState, useEffect } from 'react'; // React hooks for state and effects
   import Splash from './Splash'; // Splash screen component
   import Hero from './Hero'; // Hero section component
   import Content from './Content'; // Main content sections
   import './App.css'; // Styles specific to this component
   
   export default function App() {
     // State to manage the visibility of the splash screen
     const [showSplash, setShowSplash] = useState(true);
   
     /* --------------------------------------------
        Function to handle the circle's movement
        Updates the position of the circle element
        based on mouse movements.
        -------------------------------------------- */
     const moveCircle = (e) => {
       const circle = document.getElementById('circle');
       if (circle) {
         circle.style.left = e.pageX + 'px'; // Set circle's horizontal position
         circle.style.top = e.pageY + 'px'; // Set circle's vertical position
       }
     };
   
     /* --------------------------------------------
        useEffect Hook
        - Hides the splash screen after 4.5 seconds.
        - Attaches a mousemove event listener to track
          the cursor's position for the interactive circle.
        - Cleans up (removes timer and event listener) on unmount.
        -------------------------------------------- */
     useEffect(() => {
       const timer = setTimeout(() => {
         setShowSplash(false); // Hide splash screen after 4.5 seconds
       }, 4500);
   
       // Attach mousemove event listener
       document.addEventListener('mousemove', moveCircle);
   
       // Cleanup function to remove event listener and timer
       return () => {
         clearTimeout(timer); // Clear the timer
         document.removeEventListener('mousemove', moveCircle); // Remove the event listener
       };
     }, []); // Empty dependency array ensures this runs only once (on mount)
   
     /* --------------------------------------------
        JSX Structure
        - If `showSplash` is true, the Splash component
          is rendered.
        - Otherwise, the main content (Hero, Content, Circle)
          is displayed with a fade-in effect.
        -------------------------------------------- */
     return (
       <>
         {showSplash ? (
           <Splash /> // Render splash screen if showSplash is true
         ) : (
           <div className="main fade-in">
             <Hero /> {/* Hero section (e.g., welcome message) */}
             <Content /> {/* Main content sections (e.g., About, Projects, Contact) */}
             <div id="circle" className="circle"></div> {/* Interactive circle */}
           </div>
         )}
       </>
     );
   }
   