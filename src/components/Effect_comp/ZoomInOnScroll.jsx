import React, { useRef } from 'react';
import { motion as M, useInView } from 'framer-motion';

/**
 * ZoomInOnScroll - Zooms in and fades in content when it comes into view.
 *
 * @param {ReactNode} children - The content to animate.
 * @param {Object} props - Optional customization.
 */
const ZoomInOnScroll = ({
  children,
  duration = 0.8,
  delay = 0,
  scaleFrom = 0.8
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <M.div
      ref={ref}
      initial={{ opacity: 0, scale: scaleFrom }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </M.div>
  );
};

export default ZoomInOnScroll;
