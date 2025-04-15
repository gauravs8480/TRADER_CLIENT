import React, { useEffect, useState } from "react";
import { certficate1 } from "../assets";

// Updated data with unique IDs
const AfterCourseCard = [
  {
    id: "right-1",
    image: certficate1,
    title: "Trade with confidence",
    description: "Master risk management and execution to take high probability trades",
  },
  {
    id: "right-2",
    image: certficate1,
    title: "Manage your profit and taxes",
    description: "Learn how to handle payouts efficiently and legally as a prop trader.",
  },
];

const AfterCourseCard2 = [
  {
    id: "left-1",
    image: certficate1,
    title: "Think and trade like professional",
    description: "Develop the mindset and discipline needed for long term success.",
  },
  {
    id: "left-2",
    image: certficate1,
    title: "Stay Consistently profitable",
    description: "Avoid common mistakes and build a sustainable trading career.",
  },
];

const Card = ({ card, activeCardId, setActiveCardId }) => {
  const isActive = activeCardId === card.id;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setActiveCardId(card.id);
      }}
      className={`mobile-s:h-[370px] s:w-[344px] h-[330px] md:w-[400px] md:h-[340px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 3xl:w-[590px] 3xl:h-[550px]
        rounded-[20px] shadow-lg overflow-hidden relative 
        ${isActive ? "bg-yellow-400" : "bg-white hover:bg-yellow-400"} 
        transition-colors duration-300 flex-shrink-0 mb-5 4xl:mb-10`}
    >
      {/* Image */}
      <div className="h-[235px] lg:h-[250px] xl:h-[350px] 3xl:h-[400px] overflow-hidden px-4 pt-4 xl:px-6 xl:pt-6 3xl:px-4 3xl:pt-4 4xl:pt-6 4xl:px-6">
        <img
          src={card.image}
          alt={`Card image ${card.id}`}
          className="w-full h-full lg:object-cover rounded-[20px]"
          draggable={false}
        />
      </div>

      {/* Text */}
      <div className="w-full h-[200px] px-4 bg-opacity-90 text-black xl:px-6 3xl:px-5 flex flex-col">
        <h2 className="pt-2.5 mobile-s:pt-4 mobile-s:leading-[1] text-[21px] lg:text-[26px] 3xl:text-[30px] lg:pt-5 3xl:pt-6 font-semibold">
          {card.title}
        </h2>
        <p className="text-[12px] lg:text-[16px] mobile-s:pt-4 3xl:text-[20px] lg:pt-2">
          {card.description}
        </p>
      </div>
    </div>
  );
};

const AfterCourseCompletion = () => {
  const [activeCardId, setActiveCardId] = useState(null);

  useEffect(() => {
    const handleOutsideClick = () => setActiveCardId(null);
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

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
      <div className="grid grid-cols-1 xl:grid-cols-2 md:px-30 lg:px-50 xl:px-15 xl:gap-x-20 2xl:gap-x-5 3xl:px-25 4xl:px-65">
        {/* Column 1 */}
        <div className="flex flex-col lg:gap-4">
          {AfterCourseCard2.map((card, index) => (
            <div key={card.id} className={index === 0 ? "order-1 lg:order-1" : "order-3 lg:order-3"}>
              <Card card={card} activeCardId={activeCardId} setActiveCardId={setActiveCardId} />
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col lg:gap-4 lg:justify-end xl:mt-40 3xl:mt-65 mb-5 4xl:pr-2">
          {AfterCourseCard.map((card, index) => (
            <div key={card.id} className={index === 0 ? "order-2 lg:order-2" : "order-4 lg:order-4"}>
              <Card card={card} activeCardId={activeCardId} setActiveCardId={setActiveCardId} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AfterCourseCompletion;