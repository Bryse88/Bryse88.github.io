import Hero from './Hero';
import Content from './Content';
import './App.css';

export default function App() {
  return (
    <div className="page">
      <Hero />
      <Content />
      <footer className="footer">
        <p>bryseturner0130@gmail.com</p>
        <p>&copy; 2026 Bryson Turner</p>
      </footer>
    </div>
  );
}
