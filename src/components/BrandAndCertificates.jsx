import React, { useRef, useEffect, useState } from "react";
import { brandLogos } from "../constants";
import { gsap } from "gsap";

const BrandAndCertificates = () => {
  const stripRef = useRef(null);
  const animationRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images before starting animation
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = brandLogos.length;
    
    const preloadImages = () => {
      brandLogos.forEach(item => {
        const img = new Image();
        img.src = item.logo;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          console.error(`Failed to load image: ${item.logo}`);
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
      });
    };
    
    preloadImages();
  }, []);

  // Start animation only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;
    
    // Clear any existing animations to prevent conflicts
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const strip = stripRef.current;
    if (!strip) return;

    // Important: use modifiers instead of onRepeat for truly infinite animation
    animationRef.current = gsap.to(strip, {
      x: "-50%", // Animate to half width (one set)
      duration: 15,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          // Keep position within bounds for continuous looping
          // When reaching -50%, reset to 0% immediately to create seamless loop
          return `${gsap.utils.wrap(0, -50, parseFloat(x))}%`;
        }
      },
      force3D: true
    });

    // Clean up function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [imagesLoaded]);

  const handleMouseEnter = () => {
    if (animationRef.current) {
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
          className="flex whitespace-nowrap w-[200%]" // Important: set explicit width to 200%
          style={{
            willChange: "transform",
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
       {brandLogos.map((item, index) => (
            <img
              key={`third-${index}`}
              src={item.logo}
              alt={`Brand logo ${item.id || index}`}
              className="w-20 h-20 object-contain mx-4 brightness-0 invert"
              loading="eager"
              decoding="async"
            />
          ))}

{brandLogos.map((item, index) => (
            <img
              key={`-${index}`}
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