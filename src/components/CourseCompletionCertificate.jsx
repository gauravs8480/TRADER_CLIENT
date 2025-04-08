import React from 'react';
import { certficate1 } from '../assets';

const CourseCompletionCertificate = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20">
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-start lg:justify-start gap-12 md:gap-20 lg:gap-30 xl:gap-40">
        {/* Right Text Content (Above on mobile/tablet, Right on desktop) */}
        <div className="max-w-xl text-left order-1 md:order-1 lg:order-2">
          <p className="uppercase text-md lg:text-[20px] font-medium text-gray-300 tracking-wide mb-2">
            CERTIFICATE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[50px] font-semibold leading-tight">
            Earn your<br />
            <span className="text-white">completion certificate</span>
          </h1>

          <p className="text-gray-300 text-md mt-5 mb-6 leading-relaxed lg:text-[20px]">
            A perfect addition to your trading portfolio and a confidence booster when approaching prop firms. 
            Proof that you've put in the work and mastered what it takes to get funded.
          </p>

          <button className="bg-yellow-400 text-black lg:text-[20px] font-medium px-6 py-2 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Enroll now
          </button>
        </div>

        {/* Certificate with hover effect and animation (Below on mobile/tablet, Left on desktop) */}
        <div className="bg-black hover:bg-yellow-400 transition-all duration-500 ease-in-out rounded-3xl p-2 lg:p-1 xl:p-12 w-full md:w-[70%] lg:w-[51%] shadow-lg flex items-center justify-center order-2 md:order-2 lg:order-1">
          <img
            src={certficate1}
            alt="Certificate"
            className="rounded-xl w-full max-w-[600px] md:max-w-[700px] lg:max-w-[800px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCompletionCertificate;