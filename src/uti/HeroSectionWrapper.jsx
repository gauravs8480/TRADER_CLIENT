import React, { Children } from 'react';
import HeroSection from '../components/HeroSection';

 // Import your HeroSection component

const HeroSectionWrapper = () => {
  return (
    <div className="    px-1  lg:px-45 3xl:px-62 4xl:px-100  w-full z-20">

 <HeroSection/>
    </div>
  );
};

export default HeroSectionWrapper;