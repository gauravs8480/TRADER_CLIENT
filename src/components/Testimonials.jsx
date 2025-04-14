import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import TestimonialsReview, { TestimonialsReview2, TestimonialsReview3 } from "../constants";

// Testimonial Card Component
const TestimonialCard = ({ review }) => (
  <div className="flex flex-col bg-white text-black rounded-2xl shadow-lg py-5 px-4 min-h-[250px] lg:h-[250px] lg:w-[350px] 3xl:w-[400px]">
    <div className="flex-1">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < review.stars ? "text-black" : "text-gray-300"}
            style={{ fontSize: "1.2rem", padding: "2px" }}
          />
        ))}
      </div>
      <p className="lg:text-[15px] leading-relaxed text-left mb-4">{review.testimonial}</p>
    </div>
    <div className="mt-auto flex items-center justify-between border-t pt-2 border-amber-400">
      <div className="flex items-center">
        <div className="w-10 h-10 overflow-hidden bg-gray-300 rounded-full mr-2">
          <img src={review.image} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <p className="font-semibold lg:text-[20px] text-black">{review.name}</p>
      </div>
      <p className="text-[15px] text-gray-600">{review.title}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  const duplicate = (arr) => [...arr, ...arr];

  useEffect(() => {
    const animateCol = (ref, dir = "up") => {
      const timeline = gsap.timeline({ repeat: -1 });
      const from = dir === "up" ? 0 : -50;
      const to = dir === "up" ? -50 : 0;

      timeline.fromTo(
        ref.current,
        { yPercent: from },
        {
          yPercent: to,
          duration: 25,
          ease: "none",
        }
      );

      // Hover slowdown
      const container = ref.current.parentNode;
      const slowDown = () => timeline.timeScale(0.3);
      const speedUp = () => timeline.timeScale(1);

      container.addEventListener("mouseenter", slowDown);
      container.addEventListener("mouseleave", speedUp);

      return () => {
        container.removeEventListener("mouseenter", slowDown);
        container.removeEventListener("mouseleave", speedUp);
        timeline.kill();
      };
    };

    const cleanups = [
      animateCol(col1Ref, "up"),
      animateCol(col2Ref, "down"),
      animateCol(col3Ref, "up"),
    ];

    return () => cleanups.forEach((cleanup) => cleanup && cleanup());
  }, []);

  return (
    <div className="bg-black text-white py-16 px-4 ">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest">Testimonials</p>
        <h1 className="text-3xl lg:text-5xl font-semibold py-6">
          What they <span className="text-yellow-400">say</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Top Shadow */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-hidden">
          {/* Column 1 */}
          <div className="h-[600px] overflow-hidden">
            <div ref={col1Ref} className="flex flex-col gap-6 will-change-transform">
              {duplicate(TestimonialsReview).map((review, i) => (
                <TestimonialCard key={`col1-${i}`} review={review} />
              ))}
            </div>
          </div>

          {/* Column 2 (scrolls down, fixed spacing) */}
          <div className="hidden lg:block h-[600px] overflow-hidden">
            <div
              ref={col2Ref}
              className="flex flex-col-reverse gap-6 flex-nowrap will-change-transform"
            >
              {duplicate(TestimonialsReview2).map((review, i) => (
                <TestimonialCard key={`col2-${i}`} review={review} />
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div className="hidden lg:block h-[600px] overflow-hidden">
            <div ref={col3Ref} className="flex flex-col gap-6 will-change-transform">
              {duplicate(TestimonialsReview3).map((review, i) => (
                <TestimonialCard key={`col3-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default Testimonials;