"use client";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const AnimatedFooter: React.FC = () => {
  return (
    <div className="w-full h-screen hidden md:flex bg-yellow  flex-col overflow-hidden none-trigger"  >
      <div className="w-full h-full -mb-8">

        <Helmet>
          <script src="/script/box-2d.js" />
          <script src="/script/gravity.js" />
        </Helmet>
        <iframe
          src="/script/index.html"
          className="h-[650px] w-full -mt-10 "
        />

      </div>

      <div className="w-screen overflow-hidden h-[260px] -mb-10 flex justify-center items-center ">
        <p className="text-[40px] md:text-[169px] black-stroke text-center font-gasoek">
          GET IN TOUCH!
        </p>
      </div>
    </div>
  );
};

export default AnimatedFooter;
