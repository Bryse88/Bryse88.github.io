import githubLogo from './assets/github.png';
import linkedinLogo from './assets/ln.png';
import instagramLogo from './assets/insta.png';
import headShot from './assets/Photo.jpg';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [heading, setHeading] = useState('Engineer');
  useEffect(() => {
    const headings = ['Entrepenuer', 'Volunteer', 'Engineer', 'Developer', 'Designer', 'Volunteer', 'Runner', 'Catholic'];
    let i = 0;
    
    const changeHeading = () => {
      setHeading(headings[i]);
      i = i < headings.length - 1 ? i + 1 : 0;
    };

    const intervalId = setInterval(changeHeading, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="intro">
          <h1>Bryson Turner</h1>
          <div className="hero-circle">
            <img height="128" width="128" src={headShot} alt="Bryson Turner"></img>
          </div>
          <h4>{heading}</h4>
          <p>
          Forever Inquisitive - Always Resourceful - Driven to Innovate
          </p>
        </div>
        <div className="menu">
          <a className="menu-item active" href="#education">Education</a>
          <a className="menu-item" href="#experience">Experience</a>
          <a className="menu-item" href="#projects">Projects</a>
        </div>

        <div className="social">
          <a href="https://github.com/Bryse88" target="_blank" rel="noopener noreferrer">
            <img className="g" src={githubLogo} alt="github Link" />
          </a>
          <a href="https://www.linkedin.com/in/bryson-turner/" target="_blank" rel="noopener noreferrer">
            <img className="l" src={linkedinLogo} alt="Linkedin Link" />
          </a>
          <a href="https://www.instagram.com/bryse_t/" target="_blank" rel="noopener noreferrer">
            <img className="i" src={instagramLogo} alt="Instagram Link" />
          </a>
        </div>
      </div>
    </>
  );
}