import React, { useRef, useEffect } from "react";
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
  const trackRef = useRef(null);
  const animationRef = useRef(null);

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
    const track = trackRef.current;
    if (!track || track.children.length === 0) {
      console.error("Error: trackRef is not connected or has no children!");
      return;
    }

    // Duplicate content for a seamless loop
    const logos = [...track.children];
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });

    // Calculate the total width for animation (half for one cycle)
    const totalWidth = track.scrollWidth / 2;
    console.log("Total scrollable width:", totalWidth);

    // Create GSAP animation
    animationRef.current = gsap.to(track, {
      x: `-${totalWidth}px`, // Scroll left by half the total width
      duration: 20, // Duration of the animation
      ease: "linear", // Linear scrolling effect
      repeat: -1, // Infinite loop
      force3D: true, // GPU acceleration
    });

    // Cleanup animation on component unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  // Hover Handlers
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(0.3); // Slow down animation on hover
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(1); // Resume normal speed
    }
  };

  return (
    <div className="bg-black text-white pt-15 pb-15 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
    FUNDED WITH TOP PROP FIRMS WORLDWIDE
        </p>
        
      </div>

      {/* Brand Logo Strip */}
      <div
        className="relative overflow-hidden w-full mx-auto h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Shadows */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Brand Logos */}
        <div
          ref={trackRef}
          className="flex items-center gap-6"
          style={{ willChange: "transform" }}
        >
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`}
              className="h-15 w-20 object-contain rounded-lg shadow-lg brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;