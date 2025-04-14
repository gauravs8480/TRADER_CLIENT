import React, { useState } from "react";
import { courseSyllabus } from "../constants";

const CourseSyllabus = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="text-white pt-16 bg-black">
      {/* Header Section */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] font-medium uppercase tracking-widest">
          SYLLABUS
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          Overview of the <span className="text-yellow-400">course</span>
        </h1>
      </div>

      {/* Syllabus */}
      <div className="bg-black  lg:p-5 mx-auto lg:max-w-[800px] 3xl:max-w-4xl 4xl:max-w-5xl">
        {courseSyllabus.map((course) => {
          const isOpen = openIndexes.includes(course.id);
          return (
            <div key={course.id} className="mb-5 relative transition-all">
              {/* Button */}
              <button
                onClick={() => handleToggle(course.id)}
                className={`w-full ${
                  isOpen
                    ? "bg-yellow-400 rounded-t-2xl"
                    : "bg-yellow-300 rounded-2xl"
                } text-black font-semibold py-2 px-4 lg:px-6    flex flex-col lg:flex-row items-start lg:items-center justify-between focus:outline-none hover:bg-yellow-400 transition-all duration-300`}
              >
                <div className="w-full text-left lg:flex lg:items-center  ">
                  <p className="h-[50px] w-[50px]  bg-black text-white text-center justify-center items-center rounded-full pt-3 mt-3  text-[20px] font-bold mb-1 lg:hidden">
                    {course.id}
                  </p>
                  <span className=" hidden 4xl:w-[75px] 4xl:h-[75px]       3xl:w-[60px] 3xl:h-[60px] lg:flex w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] text-[15px] lg:text-[20px] bg-black text-white rounded-full items-center justify-center lg:mr-5  4xl:mr-8 4xl:ml-6 ">
                    {course.id}
                  </span>
                  <div className="  lg:-mt-2">
                    <p className="text-[25px] lg:text-[25px] 3xl:text-[30px] 4xl:text-[32px] font-semibold  mt-5">
                      {course.title}
                    </p>
                    <p className="text-[15px]  lg:text-[18px]  3xl:text-[20px]  4xl:text-[22px] font-semibold text-gray-800 leading-[1.1] mb-3 lg:mb-5">
                      {course.teaser || "No teaser available"}
                    </p>
                  </div>
                </div>
                <span className="absolute  top-7 right-5 lg:right-4 lg:top-3 lg:static lg:mr-1 4xl:mr-6 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black"
                  >
                    <line
                      x1="12"
                      y1="5"
                      x2="12"
                      y2="19"
                      className="transition-transform duration-300"
                      transform={isOpen ? "rotate(90 12 12)" : "rotate(0 12 12)"}
                    />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              {/* Description */}
              <div
                className={`bg-yellow-300 text-black overflow-hidden transition-all duration-800 ease-in-out ${
                  isOpen ? "rounded-b-2xl max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="divide-y divide-black">
                  {course.descriptionLines.map((line, index) => (
                    <div
                      key={index}
                      className="   py-5 4xl:px-10  text-[15px] lg:py-4 px-4 lg:px-6 flex justify-between text-sm lg:text-[20px] 4xl:py-6 4xl:text-[22px]"
                    >
                      <p className="text-left">{line.text}</p>
                      <span className="text-right text-gray-700  ">{line.timeStamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enroll Button */}
      <div className="w-full pt-6 flex justify-center lg:pt-8">
        <button className="bg-yellow-400 text-black text-sm lg:text-[15px] font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
          Enroll now
        </button>
      </div>
    </div>
  );
};
                                                                                                                                                                                                                                                                                                                                                                                                          
export default CourseSyllabus;