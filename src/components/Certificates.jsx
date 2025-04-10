import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import {
  certficate1, certficate2, certficate3, certficate4,
  certficate5, certficate6, certficate7, certficate8, certficate9
} from "../assets";

const Certificates = () => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) {
      console.error("Error: trackRef is not connected to any DOM element!");
      return;
    }

    // // Log the DOM element to ensure it's connected
    // console.log("Connected DOM element:", trackRef.current);

    // Duplicate content for seamless animation
    const track = trackRef.current;
    const images = [...track.children];
    images.forEach((image) => {
      const clone = image.cloneNode(true);
      track.appendChild(clone);
    });

    // Calculate the total width for animation
    const totalWidth = track.scrollWidth / 2;
    console.log("Total scrollable width:", totalWidth);

    // GSAP Animation
    animationRef.current = gsap.to(track, {
      x: `-${totalWidth}px`, // Move left by total width
      duration: 30, // Duration of the animation
      ease: "none", // No easing, linear motion
      repeat: -1, // Infinite loop
    });
  }, []);

  // Hover Handlers
  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(0.3); // Slow down animation on hover
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(1); // Resume normal animation speed
    }
  };

  return (
    <div className="bg-black text-white pt-15 overflow-hidden">
      {/* Heading */}  
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">LEARN. EXECUTE. WIN.</p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          Results that speak louder <span className="text-yellow-400">than words</span>
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
          <img src={certficate1} alt="Certificate 1" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate2} alt="Certificate 2" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate3} alt="Certificate 3" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate4} alt="Certificate 4" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate5} alt="Certificate 5" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate6} alt="Certificate 6" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate7} alt="Certificate 7" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate8} alt="Certificate 8" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
          <img src={certficate9} alt="Certificate 9" className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;