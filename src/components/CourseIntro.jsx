import React, { useRef, useState } from "react";
import { video1 } from "../assets";

const CourseIntro = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true); // Hide play button when video starts playing
  };

  const handleVideoEnd = () => {
    setIsPlaying(false); // Show play button when video ends
  };

  return (
    <div className="bg-black text-white text-center py-30 flex flex-col items-center">
      <h1 className="text-4xl font-semibold mb-8 xl:text-[40px]">
        What makes this course{" "}
        <span className="text-yellow-400">different ?</span>
      </h1>

      <p className="font-medium lg:text-[15px] xl:text-[15px]">
        This isn't just another trading course - it's your path to funding and
        consistency
      </p>
      <p className="font-medium lg:text-[15px]  ">Learn from real prop firm trader.</p>
      <p className="font-medium mb-10 lg:text-[15px] ">
        Join a thriving discord community of serious traders.
      </p>

      {/* Video Section */}
      <div className="relative w-full flex justify-center items-center mx-auto mb-8">
        {/* Video with Thumbnail */}
        <video
          ref={videoRef}
          className="w-full h-auto rounded-[60px]  shadow-lg"
          style={{
            maxWidth: "1800px", // Increased max width for xl screens
            maxHeight: "900px", // Proportional max height for xl screens
          }}
          poster="your-thumbnail-image-url.jpg"
          onEnded={handleVideoEnd}
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Smaller Custom Play Button */}
        {!isPlaying && (
          <div
            className="absolute flex items-center justify-center w-14 h-14 bg-yellow-400 rounded-full cursor-pointer hover:bg-yellow-500 transition duration-300"
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
      <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-yellow-500 transition duration-300 lg:text-[15px]">
        Enroll Now
      </button>
    </div>
  );
};

export default CourseIntro;