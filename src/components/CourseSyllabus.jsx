import React, { useState, useRef, useEffect } from "react";
import { courseSyllabus } from "../constants";
import { gsap } from "gsap";

const CourseSyllabus = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track currently open dropdown
  const dropdownRefs = useRef({}); // Store references to dropdowns

  // GSAP Animation Initialization
  useEffect(() => {
    Object.keys(dropdownRefs.current).forEach((key) => {
      const dropdown = dropdownRefs.current[key];
      if (dropdown) {
        gsap.set(dropdown, { maxHeight: 0, opacity: 0, scale: 0.95 }); // Initial state
      }
    });
  }, []);

  const handleOpen = (index) => {
    setOpenIndex(index);
    const dropdown = dropdownRefs.current[index];
    if (dropdown) {
      gsap.killTweensOf(dropdown); // Stop any ongoing animation
      gsap.to(dropdown, {
        maxHeight: "300px", // Adjust to accommodate content
        opacity: 1,
        scale: 1, // Slight scale-up animation
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleClose = (index) => {
    const dropdown = dropdownRefs.current[index];
    if (dropdown) {
      gsap.killTweensOf(dropdown); // Stop any ongoing animation
      gsap.to(dropdown, {
        maxHeight: 0,
        opacity: 0,
        scale: 0.95, // Slight scale-down animation
        duration: 0.3,
        ease: "power2.in",
      });
      setOpenIndex(null); // Reset openIndex after closing
    }
  };

  const handleMouseEnter = (index) => {
    handleOpen(index); // Open dropdown on hover
  };

  const handleMouseLeave = (index) => {
    setTimeout(() => {
      if (openIndex === index) {
        handleClose(index); // Close dropdown after a short delay
      }
    }, 100); // Add a small delay to prevent premature closure
  };

  return (
    <div className="text-white pt-16 bg-black">
      {/* Header Section */}
      <div className="text-center mb-10 px-3 md:px-20">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
          SYLLABUS
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold py-6">
          Overview of the <span className="text-yellow-400">course</span>
        </h1>
      </div>

      {/* Syllabus Content */}
      <div className="bg-black p-4 max-w-2xl mx-auto">
        {courseSyllabus.map((course) => (
          <div
            key={course.id}
            className="mb-2 relative"
            onMouseEnter={() => handleMouseEnter(course.id)}
            onMouseLeave={() => handleMouseLeave(course.id)}
          >
            {/* Course Button */}
            <button
              onClick={() =>
                openIndex === course.id ? handleClose(course.id) : handleOpen(course.id)
              }
              className="w-full bg-yellow-300 text-black font-semibold py-2 px-4 rounded-lg flex items-center justify-between focus:outline-none hover:bg-yellow-400 transition-all duration-300"
            >
              <span className="flex flex-col items-start">
                <span className="flex items-center">
                  <span className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center mr-2">
                    {course.id}
                  </span>
                  {course.title}
                </span>
                <span className="mt-1 text-sm text-gray-800">
                  {course.teaser || "No teaser available"}
                </span>
              </span>
              {/* Toggle Icon */}
              <span className="text-xl font-bold">
                {openIndex === course.id ? "-" : "+"}
              </span>
            </button>

            {/* Full Description Dropdown */}
            <div
              ref={(el) => (dropdownRefs.current[course.id] = el)}
              className="bg-yellow-300 text-black rounded-b-lg mt-1 overflow-hidden"
            >
              {openIndex === course.id && (
                <div className="p-4">
                  {course.descriptionLines.map((line, index) => (
                    <div
                      key={index}
                      className="w-full border-t border-b border-black py-2 flex justify-between items-center"
                    >
                      <p className="text-left p-1">{line.text}</p>
                      <span className="text-right text-gray-700 text-xs">{line.timeStamp}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSyllabus;