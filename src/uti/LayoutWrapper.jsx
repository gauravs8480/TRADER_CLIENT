import React from 'react';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="bg-black px-1 md:px-16 lg:px-30 xl:px-45 3xl:px-62  w-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;