import React from "react";
import { AfterCourseCard, AfterCourseCard2 } from "../constants";


const Card = ({ card }) => (
  <div className="border-2 border-red-300 mobile-s:h-[370px]  s:w-[344px] h-[330px] lg:w-[500px] lg:h-[500px] 3xl:w-[590px] 3xl:h-[600px] rounded-[20px] shadow-lg overflow-hidden relative bg-white hover:bg-yellow-400 transition-colors duration-300 flex-shrink-0 mb-5">
    {/* Image */}
    <div className="h-[235px] lg:h-[350px] 3xl:h-[400px] overflow-hidden px-4 pt-4 lg:px-6 lg:pt-6 3xl:px-4 3xl:pt-4 4xl:pt-6 4xl:px-6">
      <img
        src={card.image}
        alt={`Card image ${card.id}`}
        className="w-full h-full lg:object-cover rounded-[20px]"
        draggable={false}
      />
    </div>
    {/* Text */}
    <div className="w-full h-[200px] px-4 bg-opacity-90 text-black lg:px-6 3xl:px-5 flex flex-col">
      <h2 className="pt-2.5  mobile-s:pt-4 mobile-s:leading-[1] text-[21px] lg:text-[26px] 3xl:text-[30px] lg:pt-5 3xl:pt-6 font-semibold">
        {card.title}
      </h2>
      <p className="  text-[12px] lg:text-[16px] mobile-s:pt-4  3xl:text-[20px] lg:pt-2">
        {card.description}
      </p>
    </div>
  </div>
);

const AfterCourseCompletion = () => {
  return (
    <div className="bg-black text-white pt-15">
      {/* Heading */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          AFTER THE COURSE
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          After the <span className="text-yellow-400">course</span> You'll <br className="lg:hidden" /> be able to...
        </h1>
        <p className="text-gray-300 text-[13px] md:font-medium lg:text-[15px]">
          This isn't just another trading course - it's your
          <br className="block lg:hidden" /> path to funding and consistency
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-15 3xl:px-25 4xl:px-50">
        {/* Column 1: Think and Trade First */}
        <div className="flex flex-col lg:gap-4">
          {AfterCourseCard2.map((card, index) => (
            <div key={card.id} className={index === 0 ? "order-1 lg:order-1" : "order-3 lg:order-3"}>
              <Card card={card} />
            </div>
          ))}
        </div>

        {/* Column 2: Trade with Confidence First */}
        <div className="flex flex-col lg:gap-4 lg:justify-end lg:mt-40 3xl:mt-65 mb-5 4xl:pr-2">
          {AfterCourseCard.map((card, index) => (
            <div key={card.id} className={index === 0 ? "order-2 lg:order-2" : "order-4 lg:order-4"}>
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterCourseCompletion;