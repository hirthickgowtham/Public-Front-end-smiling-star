import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';

/**
 * FadeInOnScroll - A reusable wrapper component that applies a fade-in animation when in view.
 *
 * @param {ReactNode} children - The content to animate.
 * @param {Object} props - Optional motion props like duration, delay, etc.
 */
const FadeInOnScroll = ({ children, duration = 1.5, delay=0.2, yOffset = 50 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <M.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </M.div>
  );
};

export default FadeInOnScroll;
