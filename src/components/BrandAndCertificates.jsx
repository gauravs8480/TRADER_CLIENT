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

    // Ensure the track exists and isn't already cloned
    if (!track || track.children.length === 0 || track.dataset.cloned === "true") return;

    // Duplicate logos for seamless scrolling
    const logos = [...track.children];
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });

    // Mark track as cloned to prevent redundant cloning
    track.dataset.cloned = "true";

    // Calculate width for one scroll cycle
    const totalWidth = track.scrollWidth / 2;

    // Animate the track with GSAP
    animationRef.current = gsap.to(track, {
      x: `-${totalWidth}px`, // Move left by half the total width
      duration: 20, // Adjust speed as desired
      ease: "linear",
      repeat: -1, // Infinite looping
      force3D: true,
    });

    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) animationRef.current.timeScale(0.3); // Slow animation on hover
  };

  const handleMouseLeave = () => {
    if (animationRef.current) animationRef.current.timeScale(1); // Resume animation speed
  };

  return (
    <div className="bg-black text-white pt-15 pb-15 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          FUNDED WITH TOP PROP FIRMS WORLDWIDE
        </p>
      </div>

      {/* Logo Strip */}
      <div
        className="relative overflow-hidden w-full mx-auto h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Shadows */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Moving Logos */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 px-2"
          style={{ willChange: "transform" }}
        >
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Brand Logo ${index + 1}`} // Corrected syntax for string interpolation
              loading="lazy"
              className="h-15 w-20 object-contain rounded-lg shadow-lg brightness-0 invert"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandLogos;