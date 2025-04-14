import React from "react";
import { MentorPic, MentorPic2 } from "../assets";
import { FaInstagram, FaDribbble } from "react-icons/fa";

const Mentor = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row justify-between 3xl:px-20 4xl:px-50 items-center   pt-15 gap-12 ">
      
      {/* Left Text Section */}
      <div className="w-full lg:w-[130%] flex flex-col gap-6">
        <div>
          <p className=" text-[13px] lg:text-[15px]  text-gray-300 mb-4 ">KNOW YOUR MENTOR</p>
          <h2 className= "   lg:text-[45px] text-[26px] font-medium   mt-1  mb-3  " >Rakesh Verma</h2>
          <p className="  font-semibold  text-white  mt-1 lg:text-[15px]">Forex trader & Mentor</p>
        </div>

        <div className=" text-[14.8px] text-gray-300  leading-relaxed lg:text-[15px] ">
          <p className="mb-4  ">
            Rakesh Verma is a trader with over 5 years of experience  in the financial markets and <br className="hidden lg:block" ></br> 
            currently a 7-figure funded prop firm trader. His journey reflects real results, having <br className="hidden lg:block" ></br>
            secured multiple payouts from some of the biggest prop firms in the industry.<br className="hidden lg:block" ></br>
          </p>
          <p className=" text-[14.8px]" >
            Through this course, he shares exactly what helped him  get funded and stay consistent –<br className="hidden lg:block" ></br>
            no fluff, no empty  promises. His goal is simple: help aspiring traders achieve funding,<br className="hidden lg:block" ></br>
            trade confidently, and become part  of a community built for serious traders.<br className="hidden lg:block" ></br>
          </p>
        </div>

        <div className=" lg:text-[30px] flex gap-4 text-white text-3xl mt-4  ">
          <FaInstagram />
          <FaDribbble />
        </div>

        <p className=" lg:text-[35px]  text-[26px] text-white font-medium -mt-2 font-saint  ">Rakesh Verma</p>
      </div>

      {/* Right Image Section */}
      <div className="   sm:w-full rounded-2xl  -mt-2 lg:w-[70%] 2xl:w-[50%] flex justify-center ">
      <img
  src={MentorPic2}
  alt="Mentor"
  className="w-full   mobile-s:max-h-[200px]  mobile-s:max-w-[200px]   lg:max-h-[1000px]  max-w-xs  lg:max-w-sm object-cover"
  style={{ height: "436px",width: "420px"
   }} // Explicitly increase the height
/>
      </div>
    </div>
  );
};

export default Mentor;