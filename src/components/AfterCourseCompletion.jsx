import React from "react";
import { AfterCourseCard, AfterCourseCard2 } from "../constants";

const AfterCourseCompletion = () => {
  return (
    <div className="bg-black text-white pt-15">
      {/* Heading */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          AFTER THE COURSE
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          After the{" "}
          <span className="text-yellow-400">course</span> You'll be able to...
        </h1>
        <p className="text-gray-300 text-[13px] md:font-medium lg:text-[15px]">
          This isn't just another trading course - it's your
          <br className="block lg:hidden"></br> path to funding and consistency
        </p>
      </div>

      {/* Card Sections */}
      <div className="flex flex-col lg:flex-row lg:justify-between">
        {/* Card Section 1 */}
        <div className="flex  flex-col lg:gap-4 ">
          {AfterCourseCard2.map((card) => (
            <div
              key={card.id}
              className="   w-[375px] h-[341px] lg:w-[565px] lg:h-[500px] 3xl:w-[690px] 3xl:h-[650px] rounded-[20px] shadow-lg overflow-hidden relative bg-white hover:bg-yellow-400 transition-colors duration-300 flex-shrink-0 mb-5"
            >
              {/* Image Section */}
              <div className="h-[235px] lg:h-[350px] 3xl:h-[400px] overflow-hidden px-2 pt-2 lg:px-3 lg:pt-3 3xl:px-4 3xl:pt-4">
                <img
                  src={card.image}
                  alt={`Card image ${card.id}`}
                  className="w-full h-full lg:object-cover rounded-[20px]"
                  draggable={false}
                />
              </div>

              {/* Text Section */}
              <div className="w-full h-[200px] px-2 bg-opacity-90 text-black lg:px-4 3xl:px-5 flex flex-col">
                <h2 className="text-[21px] pt-2 lg:text-[26px] 3xl:text-[30px] lg:pt-5 3xl:pt-6 font-semibold">
                  {card.title}
                </h2>
                <p className="text-[12px] pt-2 lg:text-[16px] 3xl:text-[20px] lg:pt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Card Section 2 */}
        <div className="flex flex-col gap-4  lg:justify-end lg:mt-40 3xl:mt-65 mb-5">
          {AfterCourseCard.map((card) => (
            <div
              key={card.id}
              className="w-[375px] h-[341px]  lg:w-[565px] lg:h-[500px] 3xl:w-[690px] 3xl:h-[650px] rounded-[20px] shadow-lg overflow-hidden relative bg-white hover:bg-yellow-400 transition-colors duration-300 flex-shrink-0 mb-5"
            >
              {/* Image Section */}
              <div className="h-[235px] lg:h-[350px] 3xl:h-[400px] overflow-hidden px-4 pt-4 lg:px-3 lg:pt-3 3xl:px-4 3xl:pt-4">
                <img
                  src={card.image}
                  alt={`Card image ${card.id}`}
                  className="w-full h-full lg:object-cover rounded-[20px]"
                  draggable={false}
                />
              </div>

              {/* Text Section */}
              <div className="w-full h-[200px] px-2 bg-opacity-90 text-black lg:px-4 3xl:px-5 flex flex-col">
                <h2 className="text-[21px] pt-2 lg:text-[26px] 3xl:text-[30px] lg:pt-5 3xl:pt-6 font-semibold">
                  {card.title}
                </h2>
                <p className="text-[12px] pt-2 lg:text-[16px] 3xl:text-[20px] lg:pt-2">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterCourseCompletion;