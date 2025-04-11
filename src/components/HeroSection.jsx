import React from "react";
import NavBar from "../constants/NavBar";


const HeroSection = () => {
  return (
    <>
    <div className="h-screen ">

      <NavBar />
      <div className=" 4xl:top-[550px]  relative     top-[186px]  lg:top-[290px] 3xl:top-[400px] w-full h-screen/2 lg:pt-0 flex flex-col  ">
        {/* Content Container */}
        <div
          className=" 
            lg:flex-row relative z-20 
            flex flex-col justify-center  items-center lg:justify-between 
          "
        >
          {/* Hero Content */}
          <div
            className=" 
               lg:w-[850px] lg:h-[355px] lg:pt-18  3xl:pt-0  3xl:w-[1000px]
              text-white text-center lg:text-left
            "
          >
            <h1 className="text-[40px] leading-[1.1] lg:text-[70px] font-semibold 3xl:text-[95px] lg:leading-[1.1] 3xl:leading-[1.2]">
              Master Trading <br />
            </h1>
            <h1 className="text-[40px] leading-[1.1] lg:text-[70px] font-semibold 3xl:text-[95px] lg:leading-[1.1] 3xl:leading-[1.2]">
              & Get Funded <br />
            </h1>
            <h1 className=" text-[40px] leading-[1.1]  lg:text-[70px] lg:leading-[1.1] font-semibold 3xl:text-[95px] 3xl:leading-[1.2]">
              by{" "}
              <span className="text-yellow-400 font-normal">RAKESH VERMA</span>
            </h1>
            <p
              className=" mt-6 text-[15px]
            lg:text-[15px] lg:mt-5 font-semibold
           3xl:text-[20px] 3xl:mt-6
              "
            >
              Build solid trading skills, get funded, and trade{" "}
              <span className="sm:hidden">
                <br />
              </span>
              with serious traders.
            </p>


          </div>

          {/* Card Section */}
          <div
            className=" items-center w-[300px] h-[145px] pt-4 lg:pt-0 mt-[100px] 
              lg:w-[350px] lg:h-[130px]  
              bg-white/10 backdrop-blur-sm flex lg:pl-4 lg:items-start flex-col rounded-lg shadow-lg lg:mt-55 3xl:mt-65   3xl:w-[350px] 3xl:h-[155px] 3xl:pl-4 3xl:justify-start 3xl:items-start
            "
          >
            <p
              className="pb-4
                  font-semibold
                 text-white lg:mt-3 lg:text-[15px] lg:pb-4 3xl:text-[20px]
              "
            >
              Get daily setups, live membership
              <br /> & network with funded traders.
            </p>
            <div className="flex justify-center border-amber-400">
              <button
                className=" font-semibold
                  bg-yellow-400  
                  shadow-md hover:bg-yellow-500 transition-all h-10 rounded-md text-[15px] fomt-semibold w-35 3xl:w-[180px] 3xl:h-[42px] 3xl:text-[20px] 3xl:rounded-lg
                "
              >
                Join our Discord
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    
    </>
  );
};

export default HeroSection;
