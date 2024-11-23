import React, { useState, useEffect } from 'react';
import Splash from './Splash';
import Hero from './Hero';
import Content from './Content';
import './App.css';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFadeOut = () => {
    setShowMainContent(true);
  };
  
  // Function to handle mousemove event
  const moveCircle = (e) => {
    const circle = document.getElementById('circle');
    if(circle) {
      circle.style.left = e.pageX + 'px';
      circle.style.top = e.pageY + 'px';
    }
  };

  // Attach mousemove event listener on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 4500); // Adjust time as needed

    document.addEventListener('mousemove', moveCircle);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousemove', moveCircle);
    };
  }, []);

  return (
    <>
      {showSplash ? (
        <Splash />
          ) : (
        <div className="main fade-in">
          <Hero />
          <Content />
          <div id="circle" className="circle"></div>
        </div>
        
      )}
    </>
  );
}