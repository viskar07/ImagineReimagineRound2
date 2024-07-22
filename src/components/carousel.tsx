"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import dottedLine from "/public/svgs/dotted-line.svg";
import { glitchImages, SliderData } from "@/lib";
import { AnimatePresence, motion, useAnimate } from "framer-motion";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [scope, animate] = useAnimate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle video play and pause
  const handleVideoPlayback = (currentIndex: number) => {
    if (videoRef.current) {
      videoRef.current.pause();
      if (currentIndex !== -1) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }
  };

  // Update video playback whenever index changes
  useEffect(() => {
    handleVideoPlayback(index);
  }, [index]);

  useEffect(() => {
    const animation = async () => {
      await animate(".glitch-0", { opacity: 1 }, { duration: 0.05 });
      await animate(".glitch-0", { opacity: 0 }, { duration: 0.05 });

      await animate(".glitch-1", { opacity: 1 }, { duration: 0.05 });
      await animate(".glitch-1", { opacity: 0 }, { duration: 0.05 });

      await animate(".glitch-2", { opacity: 1 }, { duration: 0.05 });
      await animate(".glitch-2", { opacity: 0 }, { duration: 0.05 });

      await animate(".glitch-3", { opacity: 1 }, { duration: 0.05 });
      await animate(".glitch-3", { opacity: 0 }, { duration: 0.05 });

      await animate(".glitch-4", { opacity: 1 }, { duration: 0.05 });
      await animate(".glitch-4", { opacity: 0 }, { duration: 0.05 });
    };

    animation();

    return () => {
      handleVideoPlayback(-1);
    };
  }, [index, scope, animate]);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };
  const fadeIn = {
    hidden: { y: -200, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const lineAnimation = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 2 } },
  };

  return (
    <section
      className="w-full h-full flex-col flex justify-center items-center"
      ref={scope}
    >
      <div className="w-full p-2 md:p-0 flex sm:flex-row flex-col gap-6 justify-between max-w-6xl">
        <div className="flex justify-start flex-col">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[40px] md:text-[51px] text-yellow font-gasoek"
          >
            THE GOLDEN
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
              CODE MERCH
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
            THESE ARE OUR
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[18px] font-semibold tracking-[5px]"
          >
            MOST RECENT LIMITED
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[18px] font-light tracking-[5px]"
          >
            ITEM DROPS.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-[18px] font-light tracking-[5px]"
          >
            CURRENTLY N/A.
          </motion.p>
        </div>
      </div>

      {/* Slider */}
      <div className="w-full  h-full max-w-6xl gap-10 flex flex-col mt-10 items-center relative">
        <div className="w-[800px] h-[1067px] ">
          <Image
            src={"/svgs/arrow.svg"}
            width={40}
            height={40}
            alt="Arrow"
            className="absolute right-[10%] top-[50%]"
            onClick={() => setIndex((index + 1) % SliderData.length)}
          />
          <Image
            src={"/svgs/arrow.svg"}
            width={40}
            height={40}
            alt="Arrow"
            className="absolute left-[10%] top-[50%] rotate-180"
            onClick={() =>
              setIndex((index - 1 + SliderData.length) % SliderData.length)
            }
          />

          <div className="w-full h-full relative">
            <AnimatePresence>
              <motion.div
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
                transition={{ opacity: { duration: 0.2 } }}
                className="absolute inset-0 w-full h-full "
              >
                <video
                  ref={videoRef}
                  width={800}
                  height={1067}
                  className="w-full h-full "
                  autoPlay
                  muted
                  controls={false}
                >
                  <source src={SliderData[index].image} type="video/mp4" />
                </video>
                <div className="absolute bottom-20 w-full font-gasoek text-3xl text-center">
                  {SliderData[index].label}
                </div>
                <div className="absolute bottom-4 w-full text-xl text-center">
                  Out of stock
                </div>
              </motion.div>

              {glitchImages.map((items, idx) => (
                <Image
                  src={items}
                  width={800}
                  height={1067}
                  alt="image"
                  key={idx}
                  className={`opacity-0 absolute w-full h-full bg-contain bg-no-repeat glitch-${idx}`}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="w-full h-40 mb-20 flex justify-center items-center gap-8">
          {count.map((_, idx) => (
            <div
              className={`w-7 h-7 border-[3px] ${
                index === idx ? "bg-white" : ""
              }`}
              key={idx}
              onClick={() => setIndex(idx)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

const count = [1, 2, 3, 4, 5];
