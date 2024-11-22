/* ============================================
   Hero Component
   --------------------------------------------
   This component serves as the landing section
   of the app. It includes a dynamic rotating
   heading, a profile image, navigation links,
   a short bio, and social media links.
   ============================================ */

   import React, { useState, useEffect } from 'react'; // React hooks for state and effects
   import githubLogo from './assets/github.png'; // GitHub logo image
   import linkedinLogo from './assets/ln.png'; // LinkedIn logo image
   import instagramLogo from './assets/insta.png'; // Instagram logo image
   import headShot from './assets/Photo.png'; // Profile headshot
   
   export default function Hero() {
     // State to manage the current heading (e.g., 'Engineer', 'Designer', etc.)
     const [heading, setHeading] = useState('Engineer');
   
     /* --------------------------------------------
        useEffect Hook
        - Rotates the `heading` every second, cycling
          through an array of descriptive titles.
        - Cleans up the interval when the component 
          unmounts to avoid memory leaks.
        -------------------------------------------- */
     useEffect(() => {
       const headings = [
         'Creative', 'Engineer', 'Designer', 'Developer', 'Artist', 'Student', 
         'Learner', 'Problem Solver', 'Innovator', 'Collaborator', 'Leader', 
         'Mentor', 'Friend', 'Teammate', 'Volunteer', 'Advocate', 'Activist', 
         'Writer', 'Speaker', 'Musician', 'Dancer', 'Athlete', 'Explorer', 
         'Traveler', 'Photographer', 'Reader', 'Linguist', 'Polyglot', 'Human'
       ];
       let i = 0;
   
       // Function to update the heading
       const changeHeading = () => {
         setHeading(headings[i]); // Update heading
         i = i < headings.length - 1 ? i + 1 : 0; // Loop back to start if end reached
       };
   
       const intervalId = setInterval(changeHeading, 1000); // Change heading every 1 second
   
       return () => clearInterval(intervalId); // Cleanup interval on component unmount
     }, []); // Empty dependency array ensures this runs only once on mount
   
     /* --------------------------------------------
        JSX Structure
        - Displays name, rotating heading, profile 
          image, bio, navigation menu, and social 
          media links.
        -------------------------------------------- */
     return (
       <>
         <div className="hero">
           {/* Intro Section */}
           <div className="intro">
             <h1>Bryson Turner</h1> {/* Name */}
             <div className="hero-circle">
               <img height="128" width="128" src={headShot} alt="Bryson Turner" />
             </div>
             <h4>{heading}</h4> {/* Dynamic rotating heading */}
             <p>
             Inquisitive, resourceful, and determined
             </p>
           </div>
   
           {/* Navigation Menu */}
           <div className="menu">
             <a className="menu-item active" href="#education">Education</a>
             <a className="menu-item" href="#experience">Experience</a>
             <a className="menu-item" href="#projects">Projects</a>
           </div>
   
           {/* Social Media Links */}
           <div className="social">
             <a href="https://github.com/Bryse88" target="_blank" rel="noopener noreferrer">
               <img className="g" src={githubLogo} alt="GitHub Link" />
             </a>
             <a href="https://www.linkedin.com/in/bryson-turner/" target="_blank" rel="noopener noreferrer">
               <img className="l" src={linkedinLogo} alt="LinkedIn Link" />
             </a>
             <a href="https://www.instagram.com/bryse_t/" target="_blank" rel="noopener noreferrer">
               <img className="i" src={instagramLogo} alt="Instagram Link" />
             </a>
           </div>
         </div>
       </>
     );
   }
   