import React, { useRef, useEffect } from "react";
import { brandLogos } from "../constants";
import { gsap } from "gsap";

const BrandAndCertificates = () => {
  const stripRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Clear any existing animations to prevent conflicts
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const ctx = gsap.context(() => {
      const strip = stripRef.current;
      if (!strip) return;

      // Pre-calculate total width - this is critical for performance
      const singleSetWidth = strip.offsetWidth / 2;

      // Create and store the timeline
      const tl = gsap.to(strip, {
        x: `-${singleSetWidth}px`, 
        duration: 20,
        ease: "none", // "none" is more performant than "linear"
        repeat: -1,
        force3D: true, // Force GPU acceleration
        overwrite: true, // Prevent animation stacking
        onRepeat() {
          // Immediately reset to start on repeat for better performance
          gsap.set(strip, { x: "0px" });
        }
      });

      // Store the animation for later reference
      animationRef.current = tl;
    });

    // Clean up function
    return () => {
      ctx.revert();
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      // Use timeScale instead of changing the duration directly
      gsap.to(animationRef.current, {
        timeScale: 0.5,
        duration: 0.3,
        ease: "power1.out"
      });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        timeScale: 1,
        duration: 0.3,
        ease: "power1.in"
      });
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
          className="flex whitespace-nowrap"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: 1000,
            transform: "translateZ(0)" 
          }}
        >
          {/* First set of logos */}
          {brandLogos.map((item, index) => (
            <img
              key={`first-${index}`}
              src={item.logo}
              alt={`Brand logo ${item.id || index}`}
              className="w-20 h-20 object-contain mx-4 brightness-0 invert"
              loading="eager"
              decoding="async"
            />
          ))}
          
          {/* Second set of logos (pre-rendered for seamless loop) */}
          {brandLogos.map((item, index) => (
            <img
              key={`second-${index}`}
              src={item.logo}
              alt={`Brand logo ${item.id || index}`}
              className="w-20 h-20 object-contain mx-4 brightness-0 invert"
              loading="eager"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAndCertificates;