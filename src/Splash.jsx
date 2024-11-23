import './splash/splash.css';
import Canvas from './splash/Canvas';
import Nucleus from './splash/Nucleus';
import Crest from './splash/Crest';

const s = 100;
const center = { x: s / 2, y: s / 2 };
const circleColor = '#fff';
const circleSize = 3;
const amp = 12;
const crests = [
  { count: 8, offset: false },
  { count: 16, offset: false },
  { count: 16, offset: true },
  { count: 16, offset: false },
  { count: 16, offset: true },
  { count: 16, offset: false },
];

const styles = {
  backgroundColor: '#0f172a',
  height: '100vh',
};

const Splash = () => {
  return (
    <div style={styles} className="bg-black vh-100 flex items-center">
      <Canvas w={s} h={s}>
        <Nucleus x={center.x} y={center.y} r={circleSize} fill={circleColor} />
        {crests.map(({ count, offset }, idx) => (
          <Crest key={idx}
            count={count}
            circleSize={circleSize}
            radius={amp + amp * idx}
            center={center}
            offset={offset}
            delay={0.8 * (idx + 1) / crests.length}
            fill={circleColor} />
        ))}
      </Canvas>
    </div>
  );
};

export default Splash;
