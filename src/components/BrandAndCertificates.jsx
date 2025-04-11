import React, { useRef, useLayoutEffect } from "react";
import { brandLogos } from "../constants";
import { gsap } from "gsap";

const BrandAndCertificates = () => {
  const stripRef = useRef(null);
  const tlRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const strip = stripRef.current;
      if (!strip || strip.children.length === 0) {
        console.error("Error: stripRef is not connected or has no children!");
        return;
      }

      // Clone logos for seamless loop using DOM nodes (lighter than innerHTML)
      const images = [...strip.children];
      images.forEach((image) => {
        const clone = image.cloneNode(true);
        strip.appendChild(clone);
      });

      // GPU acceleration
      gsap.set(strip, { force3D: true });

      // Calculate the total width for animation (half for one cycle)
      const totalWidth = strip.scrollWidth / 2;
      console.log("Total scrollable width:", totalWidth);

      // Lightweight GSAP animation
      const tl = gsap.to(strip, {
        x: `-${totalWidth}`, // Move left by half the total width
        duration: 20, // Duration of the animation
        ease: "linear", // Simple linear motion
        repeat: -1, // Infinite loop
      });

      tlRef.current = tl;
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  const handleMouseEnter = () => {
    if (tlRef.current) {
      tlRef.current.timeScale(0.7); // Slow on hover
    }
  };

  const handleMouseLeave = () => {
    if (tlRef.current) {
      tlRef.current.timeScale(1); // Normal speed
    }
  };

  return (
    <div className="bg-black flex flex-col justify-center items-center gap-y-5 pt-15 pb-5 sm:pt-20 sm:pb-10">
      {/* Title */}
      <div className="text-white pb-2 text-center text-xs 2xl:text-[15px] md:text-[15px] font-semibold tracking-wide">
        FUNDED WITH PROP FIRMS WORLDWIDE
      </div>

      {/* Logo Strip */}
      <div
        className="relative w-full h-20 overflow-hidden flex items-center rounded-lg shadow-2xl"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Logo Strip */}
        <div
          ref={stripRef}
          className="flex whitespace-nowrap will-change-transform"
          style={{ transform: "translateZ(0)" }} // GPU acceleration
        >
          {brandLogos.map((item, index) => (
            <img
              key={index}
              src={item.logo}
              alt={`Brand logo ${item.id || index}`}
              className="w-20 h-20 object-contain mx-4 brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAndCertificates;