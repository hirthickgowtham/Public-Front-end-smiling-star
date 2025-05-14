import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';

/**
 * SlideInOnScroll - Slides content in from the left or right when it comes into view.
 *
 * @param {ReactNode} children - The content to animate.
 * @param {'left' | 'right'} direction - Slide direction.
 * @param {number} distance - How far to slide from (default 100).
 * @param {number} duration - Animation duration.
 * @param {number} delay - Animation delay.
 */
const SlideInOnScroll = ({
  children,
  direction = 'left', // or 'right'
  distance = 100,
  duration = 0.8,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Determine x offset based on direction
  const xOffset = direction === 'left' ? -distance : distance;

  return (
    <M.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </M.div>
  );
};

export default SlideInOnScroll;
