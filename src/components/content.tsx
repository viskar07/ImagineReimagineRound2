import Image from "next/image";
import React from "react";
import dottedLine from "/public/svgs/dotted-line.svg";
import ParallaxImageWrapper from "./animation/image-parallax";
import {motion} from 'framer-motion'

const ContentSection = () => {


  const fadeIn = {
    hidden: { y:-200,opacity: 0 },
    visible: { y:0, opacity: 1, transition: { duration: 1 } }
  };

  const lineAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } }
  };

  return (
    <section className="w-full h-full  flex flex-col my-40 items-center">
      {/* Text Section */}
      <div className="w-full p-2 md:p-0 flex sm:flex-row flex-col gap-6 justify-between max-w-6xl">
      <div className="flex justify-start flex-col">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-[40px] md:text-[51px] text-yellow font-gasoek"
        >
          STANDOUT
        </motion.p>
        <div className="flex justify-start items-center -mt-7">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={lineAnimation}
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
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[40px] md:text-[51px] text-yellow font-gasoek"
          >
            APPAREL
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-end">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-[18px] font-light tracking-[5px]"
        >
          WHEN WE&apos;RE NOT DEVELOPING
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-[18px] font-semibold tracking-[5px]"
        >
          NEW DIGITAL PRODUCTS,
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-[18px] font-light tracking-[5px]"
        >
          WE ARE CREATING
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-[18px] font-light tracking-[5px]"
        >
          STYLISH CLOTHING ITEMS
        </motion.p>
      </div>
    </div>
      {/* Content */}

      <div className="w-full  max-w-6xl h-full  flex  items-center mt-10  flex-col gap-10 ">
        <div className="flex sm:flex-row flex-col w-full h-full md:h-[650px] gap-10 p-2 md:p-0 ">
          <div className="h-[650px] md:h-full w-[385px]   flex flex-col">
            <Image
              src={"/images/content/cap.webp"}
              width={385}
              height={400}
              alt="Cap"
              className="w-full h-[50%] bg-contain"
            />

            <div className="flex gap-2 mt-8 justify-start items-center">
              <div className="w-5 h-5 rounded-full bg-white" />
              <p className="text-[22px] font-extralight">DISCLAIMER</p>
            </div>
            <p className="text-[14px] text-[#FFFDE3] leading-7 tracking-wider mt-3">
              COMMON SIDE EFFECTS OF WEARING THE ITEMS IN <br /> THIS COLLECTION
              INCLUDE FEELING FABULOUS, <br />
              GAINING NEW LEVELS OF MAGNETISM AND <br /> GETTING 50%+ INCREASE
              IN BRAIN FUNCTION AND <br /> CAPACITY!
            </p>

            <p className="text-[#B0B0AC] text-[15px] italic tracking-wide leading-5 mt-4">
              OUR LEGAL TEAM TOLD US TO SPECIFY THAT WAS A JOKE, SO WE KINDLY
              ASK YOU TO TAKE IT AS ONE!
            </p>
          </div>

          <div className="w-full max-w-[740px] h-[650px] md:h-full ">
          <ParallaxImageWrapper image="/images/content/content2.avif"/>

          </div>
        </div>

        <div className="flex w-full h-[550px] gap-10 ">
          <div className="w-full max-w-[740px] h-full ">
          <ParallaxImageWrapper image="/images/content/content3.avif"/>
            

          </div>
          <div className="h-[550px] w-[385px] ">
          <ParallaxImageWrapper image="/images/content/hulk.jpg"/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
