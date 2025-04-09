import React from 'react';
import { certficate1 } from '../assets';

const CourseCompletionCertificate = () => {
  return (
    <div className=" mt-20  md:items-start flex flex-col md:flex-col lg:flex-row items-center justify-start lg:justify-start gap-12 md:gap-20 lg:gap-20 xl:gap-20 bg-black px-4 sm:px-8">
      {/* Right Text Content (Above on mobile/tablet, Right on desktop) */}
      <div className="2xl:max-w-lg max-w-md text-left order-1 2xl:mt-7 md:order-1 xl:mx-5 lg:order-2 2xl:order-2 2xl:ml-auto 2xl:translate-x-10">
        <p className="uppercase 2xl:text-[15px] text-xs md:text-sm md:font-medium text-gray-300 tracking-wide mb-2">
          CERTIFICATE
        </p>
        <h1 className="text-2xl 2xl:text-[45px] md:text-4xl lg:text-[40px] font-semibold leading-tight">
          Earn your<br />
          <span className="2xl:text-[45px] text-white">completion certificate</span>
        </h1>

        <p className="text-gray-300 text-[13px] lg:text-[15px] mt-5 mb-6 leading-relaxed">
          A perfect addition to your trading portfolio and a confidence booster when approaching prop firms. 
          Proof that you've put in the work and mastered what it takes to get funded.
        </p>

        <button className="2xl:text-[15px] text-[13px] bg-yellow-400 lg:text-[15px] text-black font-semibold  px-2 py-2 md:px-6 md:py-2 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
          Enroll now
        </button>
      </div>

      {/* Certificate with static yellow background */}
      <div className="bg-yellow-400 rounded-3xl p-2 lg:mt-15 xl:mt-0 xl:p-8 lg:p-10 shadow-lg flex items-center justify-center order-2 md:order-2 lg:order-1">
        <img
          src={certficate1}
          alt="Certificate"
          className="rounded-xl w-full max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default CourseCompletionCertificate;