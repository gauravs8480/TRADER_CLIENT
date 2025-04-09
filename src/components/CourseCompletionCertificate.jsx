import React from 'react';
import { certficate1 } from '../assets';

const CourseCompletionCertificate = () => {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-start lg:justify-start gap-12 md:gap-20 lg:gap-30 xl:gap-40">
      {/* Right Text Content (Above on mobile/tablet, Right on desktop) */}
      <div className="max-w-md text-left order-1 md:order-1 lg:order-2">
        <p className="uppercase text-sm font-medium text-gray-300 tracking-wide mb-2">
          CERTIFICATE
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
          Earn your<br />
          <span className="text-white">completion certificate</span>
        </h1>

        <p className="text-gray-300 text-sm lg:text-[15px] mt-5 mb-6 leading-relaxed">
          A perfect addition to your trading portfolio and a confidence booster when approaching prop firms. 
          Proof that you've put in the work and mastered what it takes to get funded.
        </p>

        <button className="bg-yellow-400 lg:text-[15px] text-black font-medium px-6 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
          Enroll now
        </button>
      </div>

      {/* Certificate with static yellow background */}
      <div className="bg-yellow-400 rounded-3xl p-2 lg:p-15 shadow-lg flex items-center justify-center order-2 md:order-2 lg:order-1">
        <img
          src={certficate1}
          alt="Certificate"
          className="rounded-xl w-full max-w-[600px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] object-contain"
        />
      </div>
    </div>
  );
};

export default CourseCompletionCertificate;