import React, { useRef, useState } from "react";
import { video1 } from "../assets";

const CourseIntro = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bg-black text-white text-center pt-15 md:py-30 flex flex-col items-center">
      <h1 className="lg:text-[45px] text-[26px] font-semibold mb-8 3xl:text-[45px]">
        What makes this course{" "}
        <span className="text-yellow-400">different ?</span>
      </h1>

      <p className="text-gray-300 text-[13px] md:font-medium lg:text-[15px]">
        This isn't just another trading course - it's your
        <br className="block lg:hidden" />
        path to funding and consistency
      </p>
      <p className="2xl:text-[15px] text-gray-300 text-[13px] md:font-medium lg:text-[15px]">
        Learn from real prop firm trader.
      </p>
      <p className="2xl:text-[15px] text-gray-300 text-[13px] md:font-medium mb-10 lg:text-[15px]">
        Join a thriving discord community of serious traders.
      </p>

      {/* Video Section */}
      <div className="relative flex justify-center items-center mx-auto mb-8">
        <video
          ref={videoRef}
          className="
            rounded-2xl md:rounded-[15px] shadow-lg object-cover
            mobile-s:w-[320px] mobile-s:h-[220px]
            mobile-m:w-[340px]
            mobile-l:w-[350px] mobile-l:h-[250px]
            w-[360px] h-[250px]
            sm:w-[450px]
            md:w-[600px]
            lg:w-[900px] lg:h-[500px]
            2xl:w-[1200px] 2xl:h-[640px]
            4xl:w-[1600px] 4xl:h-[900px]
          "
          style={{
            maxWidth: "100%",
            maxHeight: "1000px",
            pointerEvents: "none", // Prevents user interaction
          }}
          onContextMenu={(e) => e.preventDefault()} // Blocks right-click
          onEnded={handleVideoEnd}
          poster="your-thumbnail-image-url.jpg"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay */}
        {!isPlaying && (
          <div
            className="absolute flex items-center justify-center md:w-14 md:h-14 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500 transition duration-300"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={handlePlay}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-8 h-8 text-black"
            >
              <path d="M6.79 4.093A.5.5 0 0 1 7.5 4.5v7a.5.5 0 0 1-.75.433l-4.5-3.5a.5.5 0 0 1 0-.866l4.5-3.5z" />
            </svg>
          </div>
        )}
      </div>

      {/* Enroll Now Button */}
      <button className="text-black bg-yellow-400 text-[15px] h-[30px] w-[80px] lg:h-[30px] font-semibold lg:w-[95px] 3xl:h-[40px] 3xl:w-[100px] 3xl:text-[20px] lg:text-[15px] rounded-md shadow-md hover:bg-yellow-500 transition-all">
        Enroll
      </button>
    </div>
  );
};

export default CourseIntro;