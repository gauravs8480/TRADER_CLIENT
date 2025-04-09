import React from 'react';
import { certficate1 } from '../assets';

const CourseCompletionCertificate = () => {
  return (
    <div className="bg-black text-white px-4 sm:px-8 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* TEXT SECTION - on top for mobile, right for large screens */}
        <div className="max-w-lg w-full text-left order-1 lg:order-2">
          <p className="uppercase text-xs md:text-sm text-gray-300 tracking-wide mb-2">
            CERTIFICATE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
            Earn your<br />
            <span className="text-white">completion certificate</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-5 mb-6 leading-relaxed">
            A perfect addition to your trading portfolio and a confidence booster when approaching prop firms. 
            Proof that you've put in the work and mastered what it takes to get funded.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Enroll now
          </button>
        </div>

        {/* IMAGE SECTION - on bottom for mobile, left for large screens */}
        <div className="bg-yellow-400 rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg w-full max-w-xl order-2 lg:order-1">
          <img
            src={certficate1}
            alt="Certificate"
            className="rounded-xl w-full object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default CourseCompletionCertificate;
