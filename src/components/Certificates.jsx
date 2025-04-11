import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";

// Importing certificate images
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
  certficate11,
  certficate12,
  certficate13,
  certficate14,
  certficate15,
  certficate16,
  certficate17,
  certficate18,
  certficate19,
} from "../assets";

// Array of certificates
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
  certficate11,
  certficate12,
  certficate13,
  certficate14,
  certficate15,
  certficate16,
  certficate17,
  certficate18,
  certficate19,
];

const Certificates = ({ animationDuration = 10 }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    const totalImages = certificates.length;

    const preloadImages = () => {
      certificates.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
        img.onerror = () => {
          loadedCount++;
          console.error(`Failed to load image: ${src}`);
          if (loadedCount === totalImages) {
            setImagesLoaded(true);
          }
        };
      });
    };

    preloadImages();
  }, []);

  // Start animation after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    // Clear previous animations
    if (animationRef.current) {
      animationRef.current.kill();
    }

    const track = trackRef.current;
    if (!track) return;

    animationRef.current = gsap.to(track, {
      x: "-50%", // Move the strip by 50% of its width
      duration: animationDuration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${gsap.utils.wrap(0, -50, parseFloat(x))}%`,
      },
      force3D: true,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [imagesLoaded, animationDuration]);

  // Handle hover
  const handleMouseEnter = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        timeScale: 0.3,
        duration: 0.3,
        ease: "power1.out",
      });
    }
  };

  const handleMouseLeave = () => {
    if (animationRef.current) {
      gsap.to(animationRef.current, {
        timeScale: 1,
        duration: 0.3,
        ease: "power1.in",
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
          className="flex items-center gap-6 w-[200%]"
          style={{
            willChange: "transform",
            transform: "translateZ(0)",
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

          {/* Second set of certificates (duplicate for seamless loop) */}
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