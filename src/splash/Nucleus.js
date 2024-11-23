import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenMax, { Sine } from 'gsap';

class Nucleus extends Component {
  constructor(props) {
    super(props);
    this.circleRef = React.createRef(); // Create a ref using React.createRef()
  }

  componentDidMount() {
    const { r } = this.props;

    TweenMax.fromTo(this.circleRef.current, 1, {
      attr: { r: r },
    }, {
      attr: { r: r / 8 },
      ease: Sine.easeInOut,
      yoyo: true,
      repeat: -1,
    });
  }

  render() {
    const { x, y, r, fill } = this.props;

    return (
      <circle ref={this.circleRef} // Update the ref usage here
        cx={x} cy={y}
        r={r}
        fill={fill} />
    );
  }
}

Nucleus.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  r: PropTypes.number.isRequired,
  fill: PropTypes.string.isRequired,
};

export default Nucleus;
