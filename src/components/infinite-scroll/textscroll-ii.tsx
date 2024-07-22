
import React from "react";
import { InfiniteMoving } from "./wrapper";
import star from '/public/images/star.png'
import Image from "next/image";


export function TextScroll2() {
    return (
        <div className="h-[120px]   flex  items-center justify-center relative overflow-hidden">
            <InfiniteMoving
                items={testimonials}
                direction="left"
                speed="normal"
            >
                {testimonials.map((item, idx) =>
            item.type === "text" ? (
              <li
                className=" max-w-full w-[100px] group hover:bg-yellow hover:border-none hover:scale-105 transition-transform  h-[100px] border relative bg-black  ml-4 flex items-center "
                key={idx}
              >
                <div className="text-[80px] w-full h-full flex group-hover:hover-stroke text-black justify-center items-center  text-stroke  font-gasoek">
                  {item.title}
                </div>
              </li>
            ) : (
              <li
                className=" max-w-full w-[140px] h-[100px] relative bg-black   flex justify-center ml-3 items-center "
                key={idx}
              >
                <Image 
                  src={item.title}
                  width={80}
                  height={100}
                  alt="star"
                  className="animate-spin-slow"
                />
  
              </li>
            )
          )}
            </InfiniteMoving>
           
        </div>
    );
}

const testimonials = [
    {
        title: '/images/star.png',
        type: 'SVG'
    },
    {
        title: 'K',
        type: 'text'
    },
    {
        title: 'E',
        type: 'text'
    },
    {
        title: 'E',
        type: 'text'
    },
    {
        title: 'P',
        type: 'text'
    },
    {
        title: '/images/star.png',
        type: 'SVG'
    },
    {
        title: 'G',
        type: 'text'
    },
    {
        title: 'O',
        type: 'text'
    },
    {
        title: 'I',
        type: 'text'
    },
    {
        title: 'N',
        type: 'text'
    },
    {
        title: 'G',
        type: 'text'
    },

];



        