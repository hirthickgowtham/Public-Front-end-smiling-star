// PopInBounce.jsx
import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';

const PopInBounce = ({
  children,
  scaleFrom = 0.5,  // Starting scale
  duration = 2,
  delay = 0,
  bounce = 0.4,      // Bounciness (0 to 1)
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <M.div
      ref={ref}
      initial={{ opacity: 0, scale: scaleFrom }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.34, 1.56, 0.64, 1], // bounce easing
        type: 'spring',
        bounce: bounce,
      }}
      style={{ width: '100%' }}
    >
      {children}
    </M.div>
  );
};

export default PopInBounce;
