'use client'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion';
import React, { useRef } from 'react';

const ScreenImage = ({ image }: { image: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to vertical translate value
  const translateYValue = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateY = useSpring(translateYValue, {
    damping: 10,
    stiffness: 100,
    // delay: 0.2 // Add delay here
  });

  return (
    <div className='relative overflow-hidden h-screen my-40' ref={containerRef}>
      <motion.div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '130vh', // Scale the image larger than the container
          width: '100%',
          y: translateY, // Apply the vertical translation
        }}
        className='absolute top-0 left-0'
      />
      {/* Adding a large content area to allow scrolling */}
      <div style={{ height: '200vh' }} />
    </div>
  );
}

export default ScreenImage;
