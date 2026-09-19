import { useState, useEffect } from 'react';

export default function Hero() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const formatTime = () =>
      new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
      });

    setTime(formatTime());
    const intervalId = setInterval(() => setTime(formatTime()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero">
      <div className="clock">{time}</div>

      <h1 className="name">Bryson Turner</h1>

      <div className="social">
        <a href="mailto:bryseturner0130@gmail.com">Email</a>
        <a href="https://github.com/Bryse88" target="_blank" rel="noopener noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/bryson-turner/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.instagram.com/bryse_t/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://brysonturner.substack.com/" target="_blank" rel="noopener noreferrer">Substack</a>
      </div>
    </div>
  );
}
