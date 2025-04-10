import React, { useEffect, useRef } from "react";
import { brandLogos } from "../constants";
import { gsap } from "gsap";

const BrandAndCertificates = () => {
  const stripRef = useRef(null);
  const tlRef = useRef(null);

  useEffect(() => {
    const strip = stripRef.current;

    // Duplicate logos for seamless loop
    const cloned = strip.innerHTML;
    strip.innerHTML += cloned;

    const totalWidth = strip.scrollWidth / 2;

    const tl = gsap.to(strip, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "linear",
      repeat: -1,
    });

    tlRef.current = tl;

    return () => tl.kill();
  }, []);

  const handleMouseEnter = () => {
    tlRef.current?.timeScale(.7); // Slow on hover
  };

  const handleMouseLeave = () => {
    tlRef.current?.timeScale(1); // Normal speed
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center gap-y-5 pt-15 pb-5 sm:pt-20 sm:pb-10">
      {/* Title */}
      <div className="text-white  pb-2  text-center text-xs 2xl:text-[15px] md:text-[15px] font-semibold tracking-wide">
        FUNDED WITH PROP FIRMS WORLDWIDE
      </div>

      {/* Logo Strip */}
      <div
        className="relative w-[100%] h-20 overflow-hidden flex items-center rounded-lg shadow-2xl" // Increased shadow and opacity
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Fades without blur */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Logo Strip */}
        <div ref={stripRef} className="flex whitespace-nowrap will-change-transform">
          {brandLogos.map((item, index) => (
            <img
              key={index}
              src={item.logo}
              alt={`Brand logo ${item.id || index}`}
              className="w-20 h-20 object-contain mx-4 brightness-0 invert" // Increased gap to mx-16 (64px total)
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAndCertificates;