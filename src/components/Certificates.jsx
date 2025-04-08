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
        <p className="text-sm lg:text-[20px] font-medium uppercase tracking-widest">LEARN. EXECUTE. WIN.</p>
        <h1 className="text-4xl md:text-[50px]  font-semibold py-12">
          Results that speak louder <span className="text-yellow-400">than words</span>
        </h1>
      </div>

      {/* Auto Scrolling Images */}
      <div
        ref={wrapperRef}
        className="overflow-hidden w-[85%] mx-auto h-auto min-h-0" // Ensure no height constraint
      >
        <div
          ref={trackRef}
          className="flex flex-row  gap-6 w-max" // Force flex-col for md
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ willChange: "transform" }}
        >
          {[...images, ...images].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Certificate ${i + 1}`}
              className="h-64 md:!h-96 lg:!h-72 object-contain rounded-lg shadow-md"
              style={{ minWidth: "300px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;