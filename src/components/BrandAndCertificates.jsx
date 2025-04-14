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

const logos = [
  brandlogo1,
  brandlogo2,
  brandlogo3,
  brandlogo4,
  brandlogo5,
  brandlogo6,
  brandlogo7,
];

const BrandLogos = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const distance = slider.scrollWidth / 2;

    animationRef.current = gsap.to(slider, {
      x: -distance,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % distance),
      },
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
        className="relative overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient shadows for fade effect */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Logo slider */}
        <div className="flex w-max will-change-transform" ref={sliderRef}>
          {[...Array(3)].flatMap(() => logos).map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`logo-${i}`}
              className="h-16 w-20 object-contain mx-6 brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;
