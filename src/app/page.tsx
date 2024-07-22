"use client";
import React, { useEffect, useState } from 'react'

import Hero from '@/components/hero'
import ContentSection from '@/components/content'
import Carousel from '@/components/carousel'
import AnimatedTextSection from '@/components/animated-text'
import GoodiesSection from '@/components/goodies'
import AccordionsCardSection from '@/components/accordions-cards'
import BrandAnimatedSection from '@/components/brand-animation'
import AnimatedFooter from '@/components/animated-footer'
import { InfiniteMovingCardsDemo } from '@/components/infinite-scroll/textscroll'
import { TextScroll2 } from '@/components/infinite-scroll/textscroll-ii'
import { TextScroll3 } from '@/components/infinite-scroll/textscroll-iii'
import { TextScroll4 } from '@/components/infinite-scroll/imagescroll-iv'
import RevelSection from '@/components/revel'
import Navbar from '@/components/navigation'
import ScreenImage from '@/components/screen-image'
import CustomCursor from '@/components/animation/cursor'
import Footer from '@/components/footer'
import LoadingScreen from '@/components/animation/loadingscreen'

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

 

  return (
    <>
      {loading ? (
        <LoadingScreen onLoadComplete={() => setLoading(false)} />
      ) : (
        <>
          <CustomCursor />
          <Navbar />
          <Hero />
          <InfiniteMovingCardsDemo />
          <ContentSection />
          <TextScroll2 />
          <ScreenImage image='/images/screen/image1.jpg' />
          <Carousel />
          <AnimatedTextSection />
          <GoodiesSection />
          <ScreenImage image='/images/screen/image2.jpg' />
          <TextScroll3 />
          <TextScroll4 />
          <AccordionsCardSection />
          <RevelSection />
          <BrandAnimatedSection />
          <AnimatedFooter />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
