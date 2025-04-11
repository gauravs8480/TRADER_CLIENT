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

// Array of certificate imports
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

const Certificates = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    // Clear any existing animations to prevent conflicts
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      // Pre-calculate total width - important for performance
      const singleSetWidth = track.offsetWidth / 2;

      // Create and store the timeline
      const tl = gsap.to(track, {
        x: `-${singleSetWidth}px`,
        duration: 8,
        ease: "none", // "none" is more performant than "linear"
        repeat: -1,
        force3D: true,
        overwrite: true,
        onRepeat() {
          // Reset position to start on each repeat - prevents jump
          gsap.set(track, { x: "0px" });
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

  // Hover Handlers with smooth transition
  const handleMouseEnter = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        timeScale: 0.3,
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

      {/* Certificate Strip */}
      <div
        className="relative overflow-hidden w-full mx-auto h-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient Shadows */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none"></div>

        {/* Moving Certificates */}
        <div
          ref={trackRef}
          className="flex items-center gap-6"
          style={{
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: 1000,
            transform: "translateZ(0)"
          }}
        >
          {/* First set of certificates */}
          {certificates.map((cert, index) => (
            <img
              key={`first-${index}`}
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg"
              loading="eager"
              decoding="async"
            />
          ))}
          
          {/* Second set of certificates (pre-rendered for seamless loop) */}
          {certificates.map((cert, index) => (
            <img
              key={`second-${index}`}
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg"
              loading="eager"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;