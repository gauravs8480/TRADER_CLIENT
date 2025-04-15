import React from "react";

 import { certficate1 } from '../assets';


 const CourseCompletionCertificate = () => {
  return (
    <div className="bg-black text-white pt-16 pb-15">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-12 lg:gap-y-0 gap-x-12 lg:gap-x-10 2xl:gap-x-80 xl:gap-x-30 4xl:px-50">
        {/* TEXT SECTION - Moved up with margin-top */}
        <div className=" max-w-lg w-full text-left order-1 lg:order-2 lh:-mt-2 lg:pl-2 ">
          <p className=" uppercase text-xs md:text-sm text-gray-300 tracking-wide mb-2">
            CERTIFICATE
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight">
            Earn your<br />
            <span className="text-white">completion certificate</span>
          </h1>
          <p className="text-gray-300 text-[14px] lg:text-[15px] mt-5 mb-6 leading-relaxed">
            A perfect addition to your trading portfolio and a <br />
            confidence booster when approaching prop firms. <br />
            Proof that you've put in the work and mastered <br />
            what it takes to get funded.
          </p>
          <button className="bg-yellow-400 text-black text-[15px] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Enroll now
          </button>
        </div>

        {/* IMAGE SECTION */}
        <div className="bg-yellow-400 rounded-3xl  mobile-s:p-4 p-8 shadow-lg w-full max-w-xl order-2 lg:order-1">
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