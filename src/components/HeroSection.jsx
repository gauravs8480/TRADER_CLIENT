import React from "react";
import { candlestick, video1 } from "../assets";
import NavBar from "../constants/NavBar";

const HeroSection = () => {
  return (
    <>
  
    <NavBar />

      <div className="relative w-full h-screen pt-[70px] md:pt-[80px] flex flex-col overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video.
        </video>

        {/* Content Container */}
       
<div
  className="
  lg:flex-col xl:flex-row xl:gap-x-55 2xl:gap-x-80 relative z-20 flex flex-col items-center justify-start
  h-full w-full sm:px-6 pt-10 md:pt-1 lg:mt-2  2xl:mt-50 mt-12
  md:mx-16 lg:ml-[-20px]  md:ml-[-12px] xl:mx-40 2xl:mx-40 
"
>


          {/* Hero Content */}
          <div className=" max-w-[90%] sm:max-w-[80%] md:max-w-[500px] lg:max-w-[1500px] xl:text-left lg:text-center text-center text-white">
            <h1 className="text-3xl 2xl:text-[63px] 3xl:text-8xl lg:text-5xl sm:text-4xl md:text-5xl xl:text-[60px] font-bold mb-2 sm:mb-3">
              Master Trading
            </h1>
            <h1 className="text-3xl 2xl:text-[63px] 3xl:text-8xl lg:text-5xl sm:text-4xl md:text-5xl xl:text-[60px] font-bold mb-2 sm:mb-3">
              & Get Funded
            </h1>
            <h1 className="text-3xl 2xl:text-[63px] 3xl:text-8xl lg:text-5xl sm:text-4xl md:text-5xl xl:text-[60px] font-bold mb-4 sm:mb-6">
              by <span className="text-yellow-400">RAKESH VERMA</span>
            </h1>
            <p className="2xl:text-[15px] text-[13px] font-semibold lg:font-semibold lg:text-[12px] sm:text-base md:text-sm xl:font-semibold mb-4 sm:mb-6">
              Build solid trading skills, get funded and trade with serious
              traders.
            </p>
          </div>

          {/* Card Section */}
          <div
            className="
            w-[90%] sm:w-[70%] md:w-[60%] lg:w-[230px]
            bg-white/10 backdrop-blur-md p-4 rounded shadow-lg
            flex flex-col items-center text-center mt-6 md:-mt-3 
          "
          >
            <p className="lg:text-left lg:text-[12px]  text-[13px] font-semibold sm:text-sm md:text-base text-white">
              Get daily setups, live membership & network with funded traders.
            </p>
            <div className="lg:justify-start flex justify-center w-full">
              <button className="mt-4 lg:text-[13px] bg-yellow-400 text-sm sm:text-base px-4 py-2 rounded shadow-md hover:bg-yellow-500 transition-all">
                Join our Discord
              </button>
            </div>
          </div>
        </div>

        {/* Candlestick Image */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150px] h-20 z-20 flex justify-center rounded-full animate-pulse">
          <img src={candlestick} alt="Candlestick" className="object-contain" />
        </div>
      </div>
   
 
    </>
  );
};

export default HeroSection;