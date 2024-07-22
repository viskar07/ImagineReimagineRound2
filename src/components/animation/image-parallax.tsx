'use client'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';

interface ParallaxImageWrapperProps {
  image: string;
  children?: ReactNode;
}

const ParallaxImageWrapper: React.FC<ParallaxImageWrapperProps> = ({ image, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to vertical translate value
  const translateYValue = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const translateY = useSpring(translateYValue, {
    damping: 10,
    stiffness: 100,
  });

  return (
    <div className='relative overflow-hidden w-full h-full ' ref={containerRef}>
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '130%', // Scale the image larger than the container
          width: '100%',
          y: translateY, // Apply the vertical translation
        }}
        className='absolute top-0 left-0 opacity-90'
      />
      {/* Adding any additional children */}
      {children && <div className='relative z-10'>{children}</div>}
      {/* Adding a large content area to allow scrolling */}
      <div style={{ height: '200%' }} />
    </div>
  );
}

export default ParallaxImageWrapper;
