'use client'
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import clsx from 'clsx';

interface Position {
  x: number;
  y: number;
}

interface Option {
  type: 'Card' | 'Emoji' | 'Slider' | undefined;
}

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const [trigger, setTrigger] = useState<Option>({ type: undefined });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('.card-trigger')) {
        setTrigger({ type: 'Card' });
      } else if ((e.target as Element).closest('.emoji-trigger')) {
        setTrigger({ type: 'Emoji' });
      } else if ((e.target as Element).closest('.none-trigger')) {
        setTrigger({ type: 'Slider' });
      } else {
        setTrigger({ type: undefined });
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);

  return (
    <motion.div
      className={clsx(
        'fixed z-50 top-0 left-0 pointer-events-none hidden md:block ',
        {
          'w-20 h-10 border-2 flex justify-center backdrop-blur-md items-center': trigger.type === 'Card',
          ' hidden': trigger.type === 'Slider',
          'w-6 h-6 rounded-full bg-white': !trigger.type
        }
      )}
      style={{ x: smoothX, y: smoothY }}
    >
        {trigger.type==='Card' ?(
            <p className='text-xl font-gasoek  text-center w-full text-white'>FLIP</p>
        ) : ('')
        
        }
    </motion.div>
  );
};

export default CustomCursor;
