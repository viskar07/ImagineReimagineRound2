'use client'
import Image from "next/image";
import React, { useRef } from "react";
import dottedLine from "/public/svgs/dotted-line.svg";
import { goodies } from "@/lib";
import { useInView,motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

const lineVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1 }
};

const GoodiesSection = () => {

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <section className="w-full h-full flex p-2 flex-col items-center   bg-imagePattern bg-cover bg-no-repeat">
      <div className="w-full h-[200px] p-2 md:p-0 flex sm:flex-row flex-col gap-6 items-end justify-between mt-40 max-w-6xl relative">
      <div className="absolute bg-goodiesYellow w-full h-[1000px] right-0 left-0 top-0 bottom-0"></div>
      <div className="flex justify-start flex-col">
        <motion.p
          ref={ref}
          className="text-[40px] md:text-[51px] text-yellow font-gasoek"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          MORE THAN
        </motion.p>
        <div className="flex justify-start items-center -mt-7">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={lineVariants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Image
              src={dottedLine}
              width={200}
              height={0.5}
              alt="svg"
              className="opacity-50"
            />
          </motion.div>
          <motion.p
            className="text-[40px] md:text-[51px] text-yellow font-gasoek"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            FASHION
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end">
        <motion.p
          className="text-[18px] font-light tracking-[5px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          WE'RE WORKING ON
        </motion.p>
        <motion.p
          className="text-[18px] font-semibold tracking-[5px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, delay: 1 }}
        >
          A STYLISH SET OF NEW GOODIES
        </motion.p>
        <motion.p
          className="text-[18px] font-light tracking-[5px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          WHICH WILL BE
        </motion.p>
        <motion.p
          className="text-[18px] font-light tracking-[5px]"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          DROPPING AT A RANDOM TIME
        </motion.p>
      </div>
    </div>

      <div className="w-full h-full max-w-6xl flex-col md:flex-row flex justify-center mt-20 ">
        <div className="relative w-full md:w-1/3 h-full flex flex-col border-y-borderColor border-y border-r border-r-borderColor items-center ">
          <div className="absolute bg-funkeyYellow w-full h-full opacity-25 -z-10 " />
          <Image
            src={goodies[0].image}
            width={380}
            height={100}
            alt="image"
            className="my-10"
          />
          <p className="text-[36px] w-20 flex leading-10 mb-5 justify-center text-center text-yellow font-gasoek">
            {goodies[0].title}
          </p>
          <div className="flex flex-col items-center mb-10">
            <p className="text-[#B0B0AC] tracking-widest ">
              {goodies[0].subtitle}
            </p>
            <p className="text-[#B0B0AC] tracking-widest">
              {goodies[0].subtitle2}
            </p>
          </div>
        </div>

        <div className=" relative w-full md:w-1/3 h-full flex border border-borderColor flex-col items-center ">
          <div className="absolute bg-largeCupYellow w-full h-full opacity-25 -z-10 " />

          <Image
            src={goodies[1].image}
            width={230}
            height={100}
            alt="image"
            className="my-10"
          />
          <p className="text-[36px] mb-5  text-yellow font-gasoek">
            {goodies[1].title}
          </p>
          <div className="flex flex-col items-center mb-10">
            <p className="text-[#B0B0AC] tracking-widest">
              {goodies[1].subtitle}
            </p>
            <p className="text-[#B0B0AC] tracking-widest">
              {goodies[1].subtitle2}
            </p>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-full  border-y-borderColor border-y border-l border-l-borderColor flex flex-col items-center ">
          <div className="absolute bg-dribbleYellow w-full h-full opacity-25 -z-10 " />

          <Image
            src={goodies[2].image}
            width={330}
            height={100}
            alt="image"
            className="my-9"
          />
          <p className="text-[36px] mb-5 w-20 flex leading-10 justify-center text-center text-yellow font-gasoek">
            {goodies[2].title}
          </p>
          <div className="flex flex-col items-center mb-10">
            <p className="text-[#B0B0AC] tracking-widest">
              {goodies[2].subtitle}
            </p>
            <p className="text-[#B0B0AC] tracking-widest ">
              {goodies[2].subtitle2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
// boboac 16
export default GoodiesSection;
