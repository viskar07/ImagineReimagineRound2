'use client'
import { useAnimate, useInView } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const BrandAnimatedSection = () => {
  const [scope, animate] = useAnimate();
  const ref = useRef(null)

  useEffect(() => {
    const animation = async () => {
      const scaleAnimation = {
        scale: [1, 1.1, 1.05, 1],
        backgroundColor: ['#000000', '#666666', '#4c4c4c','#000000',]
      };
      const duration = 0.1; // Duration for each scale animation
      const delayIncrement = 0; // Delay between each div's animation

      while (true) { // Infinite loop for continuous animation
        await animate('.repel9', scaleAnimation, { duration, ease: 'easeInOut' });
        await animate('.repel8', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement });
        await animate('.repel7', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 2 });
        await animate('.repel6', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 3 });
        await animate('.repel5', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 4 });
        await animate('.repel4', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 5 });
        await animate('.repel3', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 6 });
        await animate('.repel2', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 7 });
        await animate('.repel1', scaleAnimation, { duration, ease: 'easeInOut', delay: delayIncrement * 8 });
      }
    }
    animation();
  }, [animate, scope]);

  return (
    <section className='relative w-full h-[380px] flex justify-center items-center overflow-hidden my-20' ref={scope} >
      <div className="repel1 absolute w-[1450px] h-[1450px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 1 }} />
      <div className="repel2 absolute w-[1300px] h-[1300px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 2 }} />
      <div className="repel3 absolute w-[1150px] h-[1150px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 3 }} />
      <div className="repel4 absolute w-[1000px] h-[1000px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 4 }} />
      <div className="repel5 absolute w-[850px] h-[850px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 5 }} />
      <div className="repel6 absolute w-[700px] h-[700px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 6 }} />
      <div className="repel7 absolute w-[550px] h-[550px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 7 }} />
      <div className="repel8 absolute w-[400px] h-[400px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 8 }} />
      <div className="repel9 absolute w-[250px] h-[250px] rounded-full flex justify-center items-center" style={{ border: '15px solid #FFD700', backgroundColor: '#000000', zIndex: 9 }}>
        <Image 
          src={'/svgs/logo.svg'}
          width={100}
          height={100}
          alt='logo'
        />
      </div>
    </section>
  )
}

export default BrandAnimatedSection
