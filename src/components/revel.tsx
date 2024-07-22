'use client'
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import { CoolMode } from "./animation/coolmode";

const RevelSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Transform scroll progress to rotation and translation values
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]); // Rotate wheel
  const doorTranslation = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']); // Translate left door
  const doorTranslation2 = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Translate right door

  return (
    <section className="w-full h-screen relative overflow-hidden my-20" ref={containerRef}>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 z-10">
        <h1 className="hover-stroke text-xl md:text-7xl  font-gasoek">Fashion Finds</h1>
        <h1 className="text-yellow text-xl md:text-7xl   font-gasoek"> Sale of the Season!</h1>
        <CoolMode  options={{particle:'/images/smile.png'}}>
          <button className="z-40 p-4 mt-10 rounded-full text-2xl font-gasoek bg-yellow opacity-90 black-stroke  animate-bounce ">UPTO 50% OFF</button>
        </CoolMode>

      </div>

        {/* Left Door Image with Attached Wheel */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{ x: doorTranslation, willChange: 'transform' }}

        >
          {/* Wheel Image */}
          <motion.img
            src="/images/wheel.avif"
            width={200}
            height={200}
            alt="wheel"
            className=" z-20 bg-cover bg-no-repeat md:block hidden"
            style={{ rotate: rotation, willChange: 'transform',  position: 'absolute',  top: '38%',  left:'30%'  , transform: 'translateY(-50%)'
            }}
          />
          {/* Left Door Image */}
          <motion.img
            src="/images/door.avif"
            width={100}
            height={100}
            alt="door"
            className="absolute top-0 w-1/2 h-full bg-cover bg-no-repeat"
          // style={{ x: doorTranslation, willChange: 'transform' }}

          />
        </motion.div>

        {/* Right Door Image */}
        <motion.img
          src="/images/door.avif"
          width={100}
          height={100}
          alt="door"
          className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-no-repeat"
          style={{ x: doorTranslation2, rotate: 180, willChange: 'transform' }}
        />
    </section>
  );
};

export default RevelSection;
