import React from "react";

const SectionWrapper = ({ children }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-40 2xl:px-100">
      {children}
    </div>
  );
};

export default SectionWrapper;