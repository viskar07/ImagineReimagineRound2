"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import dottedLine from "/public/svgs/dotted-line.svg";
import Lottie from "react-lottie-player";
import { motion, useInView } from "framer-motion";

import { doubt, zip, smart, wink } from "../../public/assets";
import { useScroll, useTransform } from "framer-motion";

type Flip = {
  1: boolean;
  2: boolean;
  3: boolean;
  4: boolean;
};
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const lineVariants = {
  hidden: { x: -200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const AccordionsCardSection = () => {
  // Custom Cursor Functionality
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [flip, setFlip] = useState<Flip>({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  // FlipSTyle

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const flipStyle = {
    1: {
      rotateY: flip[1] ? 180 : 0,
      y: sm,
    },
    2: {
      rotateY: flip[2] ? 180 : 0,
    },
    3: {
      rotateY: flip[3] ? 180 : 0,
    },
    4: {
      rotateY: flip[4] ? 180 : 0,
      y: sm,
    },
  };
  return (
    <section className="w-full hidden md:flex  h-full bg-imagePattern bg-cover bg-no-repeat  flex-col items-center relative ">
      <div className="bg-accordianGlow absolute  w-full h-full top-0 bottom-0 left-0 right-0 -z-10 " />
      <div
        ref={ref}
        className="w-full max-w-6xl flex p-2 md:p-0 sm:flex-row flex-col gap-6 mt-24 justify-between"
      >
        <div className="flex justify-start flex-col">
          <motion.p
            className="text-[40px] md:text-[51px] text-yellow font-gasoek"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            STYLE TRENDS
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
              variants={textVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              OVER THE AGES
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-end">
          <motion.p
            className="text-[18px] font-light tracking-[5px]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            FLIP THE CARDS
          </motion.p>
          <motion.p
            className="text-[18px] font-semibold tracking-[5px]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.8, delay: 1 }}
          >
            AND DELVE INTO
          </motion.p>
          <motion.p
            className="text-[18px] font-light tracking-[5px]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            SOME AMAZING
          </motion.p>
          <motion.p
            className="text-[18px] font-light tracking-[5px]"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={textVariants}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            FASHION CURIOSITIES
          </motion.p>
        </div>
      </div>

      {/* cards */}

      <div
        className="w-full  flex   sm:flex-row flex-col h-[1100px]    mt-20 max-w-6xl gap-20  justify-center "
        ref={containerRef}
      >
        <div className="w-[300px] md:h-full h-  ">
          <motion.div
            onClick={() =>
              setFlip((prevState) => ({ ...prevState, 1: !prevState[1] }))
            }
            style={flipStyle[1]}
            transition={{ ease: "linear", duration: 0.1 }}
            whileHover={{ scale: 1.1 }}
            className={`relative w-full h-[350px]  card-trigger transition-all duration-500  [transform-style:preserve-3d] `}
          >
            <div className="absolute inset-0 w-full h-full bg-black   ">
              <div className=" absolute w-full h-full p-4 ">
                <Image
                  src={"/images/yellow-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <Lottie
                  loop
                  animationData={zip}
                  play
                  style={{ width: 250, height: 250 }}
                />
              </div>
            </div>

            <div className="absolute inset-0  w-full h-full bg-yellow  [transform:rotateY(180deg)] [backface-visibility:hidden]  ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/black-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>

              <div className=" w-full h-full flex flex-col justify-center gap-5  items-center">
                <p className=" font-gasoek text-[30px] text-black">
                  MEDIEVAL
                  <br />
                  MADNESS
                </p>
                <p className=" w-60 text-center text-[#807e71]">
                  MEDIEVAL KNIGHTS WORE COLORFUL SURCOATS OVER THEIR ARMOR,
                  PROVING EVEN IN BATTLE, YOU COULD STILL SLAY.
                </p>
              </div>
            </div>
            {/* ------------------------- */}
          </motion.div>
        </div>

        <div className="w-[300px] h-full flex flex-col gap-20">
          {/*  2 cards */}
          <motion.div
            transition={{ ease: "linear", duration: 0.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              setFlip((prevState) => ({ ...prevState, 2: !prevState[2] }))
            }
            style={flipStyle[2]}
            className=" relative card-trigger w-full h-[350px]  transition-all duration-500  [transform-style:preserve-3d] "
          >
            {/* -------------------- */}

            <div className="absolute inset-0 w-full h-full bg-black   ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/yellow-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <Lottie
                  loop
                  animationData={doubt}
                  play
                  style={{ width: 250, height: 250 }}
                />
              </div>
            </div>

            <div className="absolute inset-0  w-full h-full bg-yellow  [transform:rotateY(180deg)] [backface-visibility:hidden]  ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/black-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>

              <div className=" w-full h-full flex flex-col justify-center gap-5  items-center">
                <p className=" font-gasoek text-[30px] text-black">
                  NO SKIRT -
                  <br />
                  NO STYLE
                </p>
                <p className=" w-60 text-center text-[#807e71]">
                  THE 19TH-CENTURY CRINOLINE SKIRT WAS SO WIDE IT COULD KNOCK
                  OVER FURNITURE, TURNING WOMEN INTO LIVING, BREATHING
                  BULLDOZERS OF STYLE.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ ease: "linear", duration: 0.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              setFlip((prevState) => ({ ...prevState, 3: !prevState[3] }))
            }
            style={flipStyle[3]}
            className=" relative w-full card-trigger h-[350px]  transition-all duration-500 hover:[transform:rotateY(180deg)] [transform-style:preserve-3d] "
          >
            {/* -------------------- */}

            <div className="absolute inset-0 w-full h-full bg-black   ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/yellow-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <Lottie
                  loop
                  animationData={smart}
                  play
                  style={{ width: 250, height: 250 }}
                />
              </div>
            </div>

            <div className="absolute inset-0  w-full h-full bg-yellow  [transform:rotateY(180deg)] [backface-visibility:hidden]  ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/black-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>

              <div className=" w-full h-full flex flex-col justify-center gap-5  items-center">
                <p className=" font-gasoek text-[30px] text-black">
                  ROMAN
                  <br />
                  TIMES
                </p>
                <p className=" w-60 text-center text-[#807e71]">
                  ROMANS WORE SOCKS WITH SANDALS; APPARENTLY, DAD FASHION IS
                  ANCIENT
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4th div */}
        <div className="w-[300px] h-full">
          <motion.div
            transition={{ ease: "linear", duration: 0.1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() =>
              setFlip((prevState) => ({ ...prevState, 4: !prevState[4] }))
            }
            style={flipStyle[4]}
            className=" relative w-full card-trigger h-[350px]  transition-all duration-500  [transform-style:preserve-3d] "
          >
            <div className="absolute inset-0 w-full h-full bg-black   ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/yellow-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <Lottie
                  loop
                  animationData={wink}
                  play
                  style={{ width: 250, height: 250 }}
                />
              </div>
            </div>

            <div className="absolute inset-0  w-full h-full bg-yellow  [transform:rotateY(180deg)] [backface-visibility:hidden]  ">
              <div className=" absolute w-full h-full p-4">
                <Image
                  src={"/images/black-outline.png"}
                  width={300}
                  height={350}
                  alt="outline"
                  className=""
                />
              </div>

              <div className=" w-full h-full flex flex-col justify-center gap-5  items-center">
                <p className=" font-gasoek text-[30px] text-black">
                  EXERCISE
                  <br />
                  MATTERS
                </p>
                <p className=" w-60 text-center text-[#807e71]">
                  ANCIENT GREEKS EXERCISED NAKED; I GUESS THEY BELIEVED IN “NO
                  PAIN, NO PANTS.”
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccordionsCardSection;
