
import React from "react";
import { InfiniteMoving } from "./wrapper";
import star from '/public/images/star.png'
import Image from "next/image";


export function TextScroll3() {
    return (
        <div className="h-[240px]   flex  items-center justify-center relative overflow-hidden">
            <InfiniteMoving
                items={testimonials}
                direction="left"
                speed="slow"
            >
                {testimonials.map((item, idx) =>
            item.type === "black" ? (
              <li
                className=" max-w-full w-full   h-[100px] relative bg-black  ml-4 flex items-center "
                key={idx}
              >
                <div className="text-[240px] w-full h-full flex  text-black justify-center items-center  text-stroke-2  font-gasoek">
                  {item.title}
                </div>
              </li>
            ) : (
                <li
                className=" max-w-full w-full  h-[100px] relative bg-black  ml-4 flex items-center "
                key={idx}
              >
                <div className="text-[240px] w-full h-full flex  text-yellow justify-center items-center    font-gasoek">
                  {item.title}
                </div>
              </li>
            )
          )}
            </InfiniteMoving>
           
        </div>
    );
}

const testimonials = [
    
    {
        title: 'MEET THE MODEL',
        type: 'yellow'
    },
    {
        title: 'MEET THE MODEL',
        type: 'black'
    },
   
];



        