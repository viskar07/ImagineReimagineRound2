'use client'
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

const FullPageLoader = ({ onLoadComplete }: { onLoadComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const simulateLoading = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 1;
        setPercentage(progress);

        if (progress === 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => {
            onLoadComplete();
            setLoading(false);
          }, 2000); // Fade-out duration
        }
      }, 10); // Speed of loading animation
    };

    simulateLoading();
  }, [onLoadComplete]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black flex flex-col justify-center items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-4/5 max-w-sm h-2  rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-yellow"
          style={{ width: `${percentage}%` }}
          initial={{ width: '0%' }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
      <motion.p
        className="mt-4 text-4xl font-gasoek text-yellow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {percentage}%
      </motion.p>
    </motion.div>
  );
};

export default FullPageLoader;
