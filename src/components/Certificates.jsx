import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import {
  certficate1,
  certficate2,
  certficate3,
  certficate4,
  certficate5,
  certficate6,
  certficate7,
  certficate8,
  certficate9,
} from "../assets";

const Certificates = () => {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const certificates = [
    certficate1,
    certficate2,
    certficate3,
    certficate4,
    certficate5,
    certficate6,
    certficate7,
    certficate8,
    certficate9,
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    animationRef.current = gsap.to(slider, {
      xPercent: -50,
      duration: 30,
      ease: "linear",
      repeat: -1,
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
    <div className="bg-black text-white pt-15 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          LEARN. EXECUTE. WIN.
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          Results that speak louder{" "}
          <span className="text-yellow-400">than words</span>
        </h1>
      </div>

      {/* Scrolling Certificates */}
      <div
        className="relative overflow-hidden w-full mx-auto h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Shadows */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Content */}
        <div
          ref={sliderRef}
          className="flex w-max gap-6 px-2"
          style={{ willChange: "transform" }}
        >
          {[...certificates, ...certificates].map((cert, i) => (
            <img
              key={i}
              src={cert}
              alt={`Certificate ${i + 1}`}
              loading="lazy"
              className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;