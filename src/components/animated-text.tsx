'use client'

import React from 'react'
import { motion } from 'framer-motion'

const textVariants = {
  hidden: { rotateX: 90, opacity: 0.5 },
  visible: { 
    originY: 0, // Center the origin vertically
    rotateX: 0, 
    opacity: 1, 
    transition: { duration: 1, ease: 'easeOut' } 
  },
  exit: { 
    rotateX: 45, 
    opacity: 0, 
    transition: { duration: 0.8, ease: 'easeIn' } 
  },
}

const AnimatedTextSection = () => {
  return (
    <section className='w-full h-full bg-yellow relative'>
      <div className="absolute w-full h-full top-0 bottom-0 right-0 left-0 bg-textImagePattern blend z-0" />
      <div className="flex flex-col items-center w-full h-full">
        <p className='h-10 w-full'></p>
        <motion.p
          className='z-10 font-gasoek text-[40px] md:text-[159px] text-black'
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }} // Add delay for this text
        >
          WHEN YOUR
        </motion.p>
        <motion.p
          className='z-10 font-gasoek text-[40px]  md:text-[220px] md:-mt-32 text-black'
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }} // Add delay for this text
        >
          STYLE IS
        </motion.p>
        <motion.p
          className='z-10 font-gasoek text-[40px] md:text-[392px] md:-mt-52 text-black'
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5 }} // Add delay for this text
        >
          SLICK
        </motion.p>
        <motion.p
          className='z-10 font-gasoek text-[40px]  md:text-[220px] md:-mt-48 text-black'
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.7 }} // Add delay for this text
        >
          THE VIBES
        </motion.p>
        <motion.p
          className='z-10 font-gasoek text-[40px] md:text-[159px] md:-mt-28 text-black'
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.9 }} // Add delay for this text
        >
          ARE JUST
        </motion.p>
        <motion.p
          className='z-10 font-gasoek text-[40px] md:text-[498px] md:-mt-56 md:-mb-24 text-black'
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 1.1 }} // Add delay for this text
        >
          SICK
        </motion.p>
      </div>
    </section>
  )
}

export default AnimatedTextSection
