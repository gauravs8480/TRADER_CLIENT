import React, { useState } from "react";
import { faqdata } from "../constants";

const CourseFaq = () => {
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
      <div className="text-center mb-10 px-4 lg:px-24">
        <p className="text-xs lg:text-[16px] font-medium uppercase tracking-widest">
          FAQ
        </p>
        <h1 className="text-[26px] lg:text-[50px] font-semibold py-6">
          Question & <span className="text-yellow-400">Answer</span>
        </h1>
        <p className="text-xs lg:text-[16px] font-medium uppercase tracking-widest">
          lorem ipsum
        </p>
      </div>

      {/* FAQ Items */}
      <div className="bg-black mx-auto lg:max-w-3xl 3xl:max-w-4xl px-4 lg:px-6 space-y-5 lg:space-y-6">
        {faqdata.map((faq) => {
          const isOpen = openIndexes.includes(faq.id);
          return (
            <div key={faq.id} className="relative transition-all">
              {/* Question Button */}
              <button
                onClick={() => handleToggle(faq.id)}
                className={`w-full ${
                  isOpen
                    ? "bg-yellow-400 rounded-t-2xl"
                    : "bg-yellow-300 rounded-2xl"
                } text-black font-semibold py-5 lg:py-6 4xl:py-8 px-4 lg:px-6 flex items-center justify-between focus:outline-none hover:bg-yellow-400 transition-all duration-300`}
              >
                <span className="text-left text-[15px] lg:text-[20px]   font-semibold">
                  {faq.question}
                </span>
                <span className="ml-4">
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

              {/* Answer Content */}
              <div
                className={`bg-yellow-300 text-black overflow-hidden transition-all duration-700 ease-in-out ${
                  isOpen ? "rounded-b-2xl max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="text-left px-4 py-4 lg:py-8 lg:px-6 text-sm lg:text-[20px] ">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Enroll Button */}
      <div className="w-full pt-10 lg:pt-14 flex justify-center pb-12 lg:pb-16">
        <button className="bg-yellow-400 text-black text-sm lg:text-[17px] font-semibold px-6 py-3 lg:px-8 lg:py-4 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
          Enroll now
        </button>
      </div>
    </div>
  );
};

export default CourseFaq;