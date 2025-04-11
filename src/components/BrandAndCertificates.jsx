import React, { useRef, useEffect, useState } from "react";
import { brandLogos } from "../constants";
import { gsap } from "gsap";

const BrandAndCertificates = () => {
  const stripRef = useRef(null);
  const animationRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = brandLogos.length;

    brandLogos.forEach((item) => {
      const img = new Image();
      img.src = item.logo;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) setImagesLoaded(true);
      };
      img.onerror = () => {
        loadedCount++;
        console.error(`Failed to load image: ${item.logo}`);
        if (loadedCount === totalImages) setImagesLoaded(true);
      };
    });
  }, []);

  // Start animation after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    if (animationRef.current) animationRef.current.kill();

    const strip = stripRef.current;
    if (!strip) return;

    // Infinite scrolling animation
    animationRef.current = gsap.to(strip, {
      xPercent: -50, // Move the strip left by 50% of its width
      duration: 15, // Duration of the animation
      ease: "none", // Linear animation for smooth scrolling
      repeat: -1, // Infinite repetition
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Seamlessly wrap the xPercent value
      },
    });

    return () => animationRef.current?.kill();
  }, [imagesLoaded]);

  const handleMouseEnter = () => {
    animationRef.current?.timeScale(0.5); // Slow down animation on hover
  };

  const handleMouseLeave = () => {
    animationRef.current?.timeScale(1); // Resume normal speed on mouse leave
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
          className="flex whitespace-nowrap w-[200%]"
          style={{ willChange: "transform" }}
        >
          {Array(2) // Render two sets of logos for seamless looping
            .fill(brandLogos)
            .flat()
            .map((item, index) => (
              <img
                key={index}
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