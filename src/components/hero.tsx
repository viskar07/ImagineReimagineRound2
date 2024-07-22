import React from 'react'
import Emoji from './animation/hero-emoji'

const Hero = () => {
  return (
    <section className='w-full h-screen bg-imagePattern bg-cover bg-no-repeat relative'>
      <div className="absolute w-full h-full flex justify-center items-center z-10">
        <Emoji />
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center  ">
        <div className="w-[960] h-[500px] flex flex-col justify-start items-center overflow-hidden  border-b border-b-[#FFFFFF33] -mt-16">
          <p className='font-gasoek text-stroke text-center text-[50px]  md:text-[138px] -mb-6 md:-mb-[90px]  mt-16 md:-mt-12 '>THE</p>
          <p className='font-gasoek text-stroke text-center text-[50px]  md:text-[138px] -mb-6 md:-mb-[90px] '>GOLDEN</p>
          <p className='font-gasoek text-stroke text-center text-[50px]  md:text-[138px] -mb-6 md:-mb-[90px] '>CODE</p>
          <p className='font-gasoek text-stroke text-center text-[50px]  md:text-[138px] -mb-6 md:-mb-[90px] '>COLLECTION</p>
        </div>
        <div className=" w-full flex flex-col justify-center items-center mt-5">
          <p className=' font-medium tracking-[8px]'>BY BEWAKOOF</p>
          <p className=' font-extralight tracking-[8px]'>EST 2024</p>
        </div>


      </div>

      <div className="absolute bottom-0 bg-heroGlow z-10 w-full h-screen"></div>
    </section>
  )
}

export default Hero