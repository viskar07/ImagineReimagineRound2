"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleBurgerMenu = () => {
    setBurgerMenuActive(!burgerMenuActive);
  };

  useEffect(() => {
    if (burgerMenuActive) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [burgerMenuActive]);

  return (
    <div
      className={`relative z-50 w-full bg-yellow ${
        burgerMenuActive ? "h-screen" : "h-0"
      } transition-all duration-500`}
    >
      <div
        className={`absolute z-50 mx-5 md:mx-10 md:py-2  flex w-full items-center justify-between ${
          burgerMenuActive ? "mt-8" : "-mt-4"
        }`}
      >
        <Image
          src={"/svgs/bewakoof.svg"}
          width={200}
          height={100}
          alt="Logo"
          className={`${burgerMenuActive ? "hidden" : "block"} w-40 h-28 md:w-[200px] md:h-[100px]`}
        />

        <div
          className="absolute right-20 cursor-pointer"
          onClick={toggleBurgerMenu}
        >
          <p className="font-gasoek md:w-44 text-xl md:text-2xl -mr-10 text-transparent hover-stroke2">
            WHOS THIS?
          </p>
        </div>
      </div>
      <div
        className={`absolute h-full w-full ${
          burgerMenuActive ? "block" : "hidden"
        }`}
      >
        <div className="absolute w-full h-full">
          <video
            className="absolute w-full h-full object-contain"
            src={"/videos/bewakoof.mp4"}
            ref={videoRef}
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
