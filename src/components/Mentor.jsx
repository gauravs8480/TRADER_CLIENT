import React from "react";
import { MentorPic } from "../assets";
import { FaInstagram, FaDribbble } from "react-icons/fa";

const Mentor = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-between items-center   py-16 gap-12 ">
      
      {/* Left Text Section */}
      <div className="w-full lg:w-[60%] flex flex-col gap-6">
        <div>
          <p className="lg:text-[15px] text-gray-300">KNOW YOUR MENTOR</p>
          <h2 className="text-4xl font-semibold mt-1 lg:text-[40px]">Rakesh Verma</h2>
          <p className="text-white font-medium mt-1 lg:text-[15px]">Forex trader & Mentor</p>
        </div>

        <div className="text-sm text-gray-300 space-y-4 leading-relaxed lg:text-[15px]">
          <p>
            Rakesh Verma is a trader with over 5 years of experience in the financial markets and
            currently a 7-figure funded prop firm trader. His journey reflects real results, having
            secured multiple payouts from some of the biggest prop firms in the industry.
          </p>
          <p>
            Through this course, he shares exactly what helped him get funded and stay consistent –
            no fluff, no empty promises. His goal is simple: help aspiring traders achieve funding,
            trade confidently, and become part of a community built for serious traders.
          </p>
        </div>

        <div className="flex gap-4 text-white text-3xl mt-4 lg:text-[30px]">
          <FaInstagram />
          <FaDribbble />
        </div>

        <p className="italic text-white font-medium mt-4 lg:text-[40px]">Rakesh Verma</p>
      </div>

      {/* Right Image Section */}
      <div className="w-full lg:w-[70%] 2xl:w-[50%] flex justify-center">
        <img
          src={MentorPic}
          alt="Mentor"
          className="w-full max-w-sm object-cover"
        />
      </div>
    </div>
  );
};

export default Mentor;