import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import {
  brandlogo1,
  brandlogo2,
  brandlogo3,
  brandlogo4,
  brandlogo5,
  brandlogo6,
  brandlogo7,
} from "../assets";

const BrandLogos = () => {
  const animationRef = useRef(null);
  const sliderRef = useRef(null);

  const brandLogos = [
    brandlogo1,
    brandlogo2,
    brandlogo3,
    brandlogo4,
    brandlogo5,
    brandlogo6,
    brandlogo7,
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    animationRef.current = gsap.to(slider, {
      xPercent: -50,
      duration: 5,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      if (animationRef.current) animationRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.timeScale(0.3);
  };

  const handleMouseLeave = () => {
    if (animationRef.current) animationRef.current.timeScale(1);
  };

  return (
    <div className="bg-black text-white py-10 overflow-hidden">
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          FUNDED WITH TOP PROP FIRMS WORLDWIDE
        </p>
      </div>

      <div
        className="relative overflow-hidden w-full mx-auto h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Shadows */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Slider */}
        <div className="flex w-max" ref={sliderRef} style={{ willChange: "transform" }}>
          {[...brandLogos, ...brandLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              loading="lazy"
              className="h-15 w-20 object-contain mx-3 brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;