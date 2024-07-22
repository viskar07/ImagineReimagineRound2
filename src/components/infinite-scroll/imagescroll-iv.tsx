import React from "react";
import { InfiniteMoving } from "./wrapper";
import star from "/public/images/star.png";
import Image from "next/image";

export function TextScroll4() {
  return (
    <div className="h-[700px]  w-full flex  items-center justify-center relative overflow-hidden">
        <div className="absolute w-full h-full mb-10 bg-scrollRadial   z-50"></div>
      <InfiniteMoving items={testimonials} direction="right" speed="normal">
        {testimonials.map((item, idx) => (
          <li
            className=" max-w-full w-[300px] h-full relative bg-black  flex justify-center ml-3 z-10 items-center "
            key={idx}
          >
            <Image
              src={item.title}
              width={300}
              height={400}
              alt="star"
              className=""
            />
          </li>
        ))}
      </InfiniteMoving>
    </div>
  );
}

const testimonials = [
  {
    title: "/images/models/bewakoof-1.webp",
    type: "SVG",
  },
  {
    title: "/images/models/bewakoof-2.webp",
    type: "SVG",
  },
  {
    title: "/images/models/bewakoof-3.webp",
    type: "SVG",
  },
  {
    title: "/images/models/bewakoof-4.webp",
    type: "SVG",
  },
  {
    title: "/images/models/model.webp",
    type: "SVG",
  },
  {
    title: "/images/models/model2.webp",
    type: "SVG",
  },
  {
    title: "/images/models/model3.webp",
    type: "SVG",
  },
];
