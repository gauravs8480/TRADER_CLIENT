import React, { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import gsap from "gsap";
import TestimonialsReview, { TestimonialsReview2, TestimonialsReview3 } from "../constants";

const TestimonialCard = ({ review }) => (
  <div className="flex flex-col bg-white text-black rounded-2xl shadow-lg py-5 px-4 min-h-[250px] lg:h-[250px] lg:w-[350px] xl:w-[320px] 2xl:w-[350px] 3xl:w-[435px] 4xl:w-[550px]">
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
    <div className="mt-auto flex items-center justify-between pt-2">
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

  const duplicate = (arr) => [...arr, ...arr,...arr];

  useEffect(() => {
    const animateCol = (ref, dir = "up") => {
      const container = ref.current;
      const inner = container.querySelector(".inner");
      const itemHeight = inner.offsetHeight / 2;

      const from = dir === "up" ? 0 : -itemHeight;
      const to = dir === "up" ? -itemHeight : 0;

      const timeline = gsap.timeline({ repeat: -1 });
      timeline.fromTo(
        inner,
        { y: from },
        {
          y: to,
          duration: 30,
          ease: "none",
        }
      );

      const slowDown = () => timeline.timeScale(0.3);
      const speedUp = () => timeline.timeScale(1.2);

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
    <div className="bg-black text-white py-16 px-4">
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-widest">Testimonials</p>
        <h1 className="text-3xl lg:text-5xl font-semibold py-6">
          What they <span className="text-yellow-400">say</span>
        </h1>
      </div>

      <div className="max-w-7xl 3xl:max-w-[1400px] mx-auto   xl:ml-3.5 relative 4xl:max-w-[1800px]">
        <div className="absolute top-0 left-0 w-full h-16 4xl:h-24 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 overflow-hidden">
          <div ref={col1Ref} className="h-[600px] 4xl:h-[900px] overflow-hidden">
            <div className="inner flex flex-col gap-6 will-change-transform">
              {duplicate(TestimonialsReview).map((review, i) => (
                <TestimonialCard key={`col1-${i}`} review={review} />
              ))}
            </div>
          </div>

          <div ref={col2Ref} className="hidden lg:block h-[600px] 4xl:h-[900px] overflow-hidden">
            <div className="inner flex flex-col-reverse gap-6 will-change-transform">
              {duplicate(TestimonialsReview2).map((review, i) => (
                <TestimonialCard key={`col2-${i}`} review={review} />
              ))}
            </div>
          </div>

          <div ref={col3Ref} className="hidden xl:block h-[600px] 4xl:h-[900px] overflow-hidden">
            <div className="inner flex flex-col gap-6 will-change-transform">
              {duplicate(TestimonialsReview3).map((review, i) => (
                <TestimonialCard key={`col3-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 4xl:h-50 bg-gradient-to-t from-black/90 to-transparent z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default Testimonials;

//if aninmation got fucked restore previous code here