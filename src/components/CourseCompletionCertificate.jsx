import React from "react";
import { AfterCourseCard, AfterCourseCard2 } from "../constants";


const Card = ({ card }) => (
  <div className="mx-auto border-2 border-red-300 w-[360px] h-[330px] lg:w-[500px] lg:h-[500px] 3xl:w-[590px] 3xl:h-[600px] rounded-[20px] shadow-lg overflow-hidden relative bg-white hover:bg-yellow-400 transition-colors duration-300 mb-5">
    <div className="h-[235px] lg:h-[350px] 3xl:h-[400px] overflow-hidden px-4 pt-4">
      <img
        src={card.image}
        alt={`Card image ${card.id}`}
        className="w-full h-full object-cover rounded-[20px]"
        draggable={false}
      />
    </div>
    <div className="w-full h-[200px] px-4 text-black flex flex-col">
      <h2 className="text-[21px] pt-2 lg:text-[26px] 3xl:text-[30px] font-semibold">
        {card.title}
      </h2>
      <p className="text-[12px] lg:text-[16px] 3xl:text-[20px] pt-2">
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
        <p className="text-xs lg:text-[15px] font-medium uppercase tracking-widest">
          AFTER THE COURSE
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          After the <span className="text-yellow-400">course</span> You'll{" "}
          <br className="lg:hidden" /> be able to...
        </h1>
        <p className="text-gray-300 text-[13px] md:font-medium lg:text-[15px]">
          This isn't just another trading course - it's your
          <br className="block lg:hidden" /> path to funding and consistency
        </p>
      </div>

      {/* Grid for Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-8 lg:px-15 3xl:px-25 4xl:px-50">
        {/* Grid Cell 1 - Always first (Think and Trade) */}
        <Card card={AfterCourseCard2[0]} />

        {/* Grid Cell 2 - Always second (Trade with Confidence) */}
        <Card card={AfterCourseCard[0]} />

        {/* Grid Cell 3 - Optional Second of Left Column */}
        {AfterCourseCard2[1] && <Card card={AfterCourseCard2[1]} />}

        {/* Grid Cell 4 - Optional Second of Right Column */}
        {AfterCourseCard[1] && <Card card={AfterCourseCard[1]} />}
      </div>
    </div>
  );
};

export default AfterCourseCompletion;