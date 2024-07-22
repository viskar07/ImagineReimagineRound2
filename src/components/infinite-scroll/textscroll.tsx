"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMoving } from "./wrapper";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[96px]  bg-yellow flex  items-center justify-center relative overflow-hidden">
      <InfiniteMoving
        items={testimonials}
        direction="left"
        speed="slow"
      >
        
         {testimonials.map((item, idx) => (
          <li
            className="w-[550px] max-w-full relative rounded-2xl  md:w-[990px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.title}
          >
            <blockquote>
          
             
              <div className="relative z-20  w-full flex flex-row items-center">
                
                  <div className="text-[30px] md:text-[80px] flex  text-black font-gasoek">
                    {item.title}
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </InfiniteMoving>
    </div>
  );
}

const testimonials = [
  {
    title:'WE WARE COOL STUFF',
    type:'text'
  },
  {
    title:'WE WARE COOL STUFF',
    type:'text'
  },
  {
    title:'WE WARE COOL STUFF',
    type:'text'
  },
];
