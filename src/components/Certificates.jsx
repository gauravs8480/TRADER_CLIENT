import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import {
  certficate1, certficate2, certficate3, certficate4,
  certficate5, certficate6, certficate7, certficate8, certficate9
} from "../assets";

const Certificates = () => {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const images = [
    certficate1, certficate2, certficate3, certficate4,
    certficate5, certficate6, certficate7, certficate8, certficate9
  ];

  useEffect(() => {
    if (!trackRef.current) return;

    const totalWidth = trackRef.current.scrollWidth / 2;

    animationRef.current = gsap.to(trackRef.current, {
      x: `-${totalWidth}px`,
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
      }
    });
  }, []);

  const handleMouseEnter = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(0.3); // Slow down
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      animationRef.current.timeScale(1); // Back to normal
    }
  };

  return (
    <div className="bg-black text-white py-10 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">LEARN. EXECUTE. WIN.</p>
        <h1 className="text-2xl 2xl:text-[45px] md:text-[40px] font-semibold py-12">
          Results that speak louder <span className="text-yellow-400">than words</span>
        </h1>
      </div>

      {/* Auto Scrolling Images */}
      <div
        ref={wrapperRef}
        className="relative overflow-hidden w-[100%] mx-auto h-auto min-h-0"
      >
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black/90 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex flex-row gap-6 w-max"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Certificate ${i + 1}`}
              className="h-48 md:h-80 lg:h-60 object-contain rounded-lg shadow-2xl"
              style={{
                minWidth: "300px",
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.6)"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;