import PropTypes from 'prop-types';

function Canvas({ w, h, children, bgColor = 'transparent' }) {
  // Calculate a larger viewBox to accommodate the expanding circles
  const padding = 50; // Adjust this value based on the maximum expected ripple size
  const viewBoxW = w + padding * 2;
  const viewBoxH = h + padding * 2;
  const viewBox = [-padding, -padding, viewBoxW, viewBoxH].join(' ');

  const styles = {
    display: 'block',
    backgroundColor: bgColor,
    maxWidth: '400px', // You might want to adjust this to better fit the expanded view
    width: '100vh',
    height: '100vh',
    margin: '0 auto',
  };

  return (
    <svg version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={ viewBox }
      style={ styles }>
      { children }
    </svg>
  );
}

Canvas.propTypes = {
  h: PropTypes.number.isRequired,
  w: PropTypes.number.isRequired,
  children: PropTypes.node,
  bgColor: PropTypes.string,
};

export default Canvas;
