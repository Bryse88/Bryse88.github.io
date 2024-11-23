import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

function Crest({ count, center, circleSize, offset, radius, delay, fill }) {
  const refs = useRef([]);
  refs.current = refs.current.slice(0, count);

  useEffect(() => {
    const theta = 2 * Math.PI / count;
    const delta = offset ? theta / 2 : 0;

    refs.current.forEach((ref, idx) => {
      if (ref) {
        const { x, y } = getLocation(theta, delta, idx, radius);
        const end = getLocation(theta, delta, idx, radius * 0.5);

        gsap.fromTo(ref, 1, {
          attr: { r: circleSize, cx: x, cy: y },
        }, {
          attr: { r: circleSize / 8, cx: end.x, cy: end.y },
          ease: "sine.inOut",
          delay,
          yoyo: true,
          repeat: -1,
        });
      }
    });
  }, [count, center, circleSize, offset, radius, delay]);

  const nodes = Array(count).fill().map((_, idx) => {
    const { x, y } = getLocation(2 * Math.PI / count, offset ? Math.PI / count : 0, idx, radius);
    return (
      <circle key={idx}
        ref={el => refs.current[idx] = el}
        cx={x} cy={y}
        r={circleSize}
        fill={fill}
        strokeWidth={circleSize * 0.2} />
    );
  });

  return (
    <g transform={`translate(${center.x}, ${center.y})`}>
      {nodes}
    </g>
  );
}

Crest.propTypes = {
  count: PropTypes.number.isRequired,
  circleSize: PropTypes.number.isRequired,
  center: PropTypes.object.isRequired,
  fill: PropTypes.string.isRequired,
  offset: PropTypes.bool.isRequired,
  radius: PropTypes.number.isRequired,
  delay: PropTypes.number.isRequired,
};

export default Crest;

function getLocation(theta, delta, idx, r) {
  const x = r * Math.cos(delta + theta * idx);
  const y = r * Math.sin(delta + theta * idx);
  return { x, y };
}
