/**
 * Nucleus.js
 * --------------------------------------------
 * This component renders a central, animated nucleus
 * as part of a dynamic SVG visualization.
 *
 * Key Features:
 * - Smooth radius animation using GSAP's TweenMax.
 * - Real-time updates and infinite looping animation.
 *
 * Purpose:
 * - Enhances the visual design with a pulsating, animated nucleus.
 * - Represents a tech-inspired focal point in the visual design.
 *
 * Props:
 * - x: X-coordinate of the nucleus center.
 * - y: Y-coordinate of the nucleus center.
 * - r: Initial radius of the nucleus.
 * - fill: Fill color of the nucleus.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TweenMax, { Sine } from 'gsap';

class Nucleus extends Component {
  constructor(props) {
    super(props);

    /**
     * Ref for accessing the SVG circle element.
     * @type {React.RefObject<SVGCircleElement>}
     */
    this.circleRef = React.createRef();
  }

  componentDidMount() {
    /**
     * Animation Logic
     * - Pulsates the radius of the nucleus with smooth easing.
     * - Infinite loop with yoyo effect for back-and-forth animation.
     */
    const { r } = this.props;

    TweenMax.fromTo(
      this.circleRef.current,
      1, // Animation duration in seconds.
      {
        attr: { r: r }, // Start with the initial radius.
      },
      {
        attr: { r: r / 8 }, // Animate to a smaller radius.
        ease: Sine.easeInOut, // Smooth easing for a natural effect.
        yoyo: true, // Reverses the animation back to the initial state.
        repeat: -1, // Infinite loop for continuous animation.
      }
    );
  }

  render() {
    const { x, y, r, fill } = this.props;

    return (
      /**
       * Render an SVG circle element for the nucleus.
       */
      <circle
        ref={this.circleRef} // Attach the ref for animation.
        cx={x} // X-coordinate of the circle center.
        cy={y} // Y-coordinate of the circle center.
        r={r} // Initial radius of the circle.
        fill={fill} // Fill color of the circle.
      />
    );
  }
}

/**
 * PropTypes validation for better error handling.
 */
Nucleus.propTypes = {
  x: PropTypes.number.isRequired, // X-coordinate of the nucleus.
  y: PropTypes.number.isRequired, // Y-coordinate of the nucleus.
  r: PropTypes.number.isRequired, // Initial radius of the nucleus.
  fill: PropTypes.string.isRequired, // Fill color of the nucleus.
};

export default Nucleus;
