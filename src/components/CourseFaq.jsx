import React, { useState } from "react";
import { faqdata } from "../constants";

const CourseFaq = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  // Toggle function to open/close each FAQ item
  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="text-white bg-black pt-15">
      {/* Header */}
      <div className="text-center px-3 lg:-ml-2 text-white">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          FAQ
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold pt-6 py-6">
          Question & <span className="text-yellow-400">Answer</span>
        </h1>
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest mb-10">
          lorem ipsum
        </p>
      </div>

      {/* FAQ Items */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqdata.map((faq) => {
          const isOpen = openIndexes.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`mb-5 relative transition-all ${isOpen ? "shadow-lg" : ""}`}
            >
              {/* FAQ Question (Button) */}
              <button
                className={`w-full ${
                  isOpen
                    ? "bg-yellow-400 rounded-t-2xl text-black"
                    : "bg-yellow-300 rounded-2xl text-black"
                } font-semibold py-5 px-5 flex items-center justify-between focus:outline-none hover:bg-yellow-400 transition-all duration-300`}
                onClick={() => handleToggle(faq.id)}
              >
                <span className="text-left lg:text-xl 3xl:text-[25px] 4xl:text-[30px] font-semibold mt-6 mb-6">
                  {faq.question}
                </span>
                <span className="text-xl font-bold">
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
                      className={`transition-transform ${
                        isOpen
                          ? "duration-500 sm:duration-700"
                          : "duration-300 sm:duration-500"
                      }`}
                      transform={isOpen ? "rotate(90 12 12)" : "rotate(0 12 12)"}
                    />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              {/* FAQ Answer */}
              <div
                className={`overflow-hidden bg-yellow-300  text-black px-4 py-3 lg:py-10 4xl:py-12 transition-all duration-500 ease-in-out ${
                  isOpen ? "rounded-b-2xl max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className=" lg:text-2xl">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full pt-6 flex justify-center pb-10 lg:pt-8">
        <button className="bg-yellow-400 text-black text-sm lg:text-[15px] font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
          Enroll now
        </button>
      </div>
    </div>
  );
};

export default CourseFaq;