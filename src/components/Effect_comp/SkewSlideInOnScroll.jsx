// SkewSlideInOnScroll.jsx
import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';

const SkewSlideInOnScroll = ({
  children,
  direction = 'left', // 'left' or 'right'
  skewDeg = 10,        // amount of skew in degrees
  distance = 100,      // slide offset
  duration = 0.8,
  delay = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const xOffset = direction === 'left' ? -distance : distance;
  const skewStart = direction === 'left' ? skewDeg : -skewDeg;

  return (
    <M.div
      ref={ref}
      initial={{ opacity: 0, x: xOffset, skewX: skewStart }}
      animate={isInView ? { opacity: 1, x: 0, skewX: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </M.div>
  );
};

export default SkewSlideInOnScroll;
