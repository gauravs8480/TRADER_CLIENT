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
    const track = trackRef.current;
    if (!track || track.children.length === 0) {
      console.error("Error: trackRef is not connected or has no children!");
      return;
    }

    // Duplicate content once for a lightweight seamless loop
    const images = [...track.children];
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      track.appendChild(clone);
    });

    // Calculate the total width for animation (half for one cycle)
    const totalWidth = track.scrollWidth / 2;
    console.log("Total scrollable width:", totalWidth);

    // Lightweight GSAP animation
    animationRef.current = gsap.to(track, {
      x: `-${totalWidth}px`, // Move left by half the total width
      duration: 30, // Duration of the animation
      ease: "linear", // Simple linear motion
      repeat: -1, // Infinite loop
      force3D: true, // Enable GPU acceleration
    });

    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  // Hover Handlers
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(0.3); // Slow down on hover
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(1); // Resume normal speed
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
          style={{ willChange: "transform" }}
        >
          {certificates.map((cert, index) => (
            <img
              key={index}
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;