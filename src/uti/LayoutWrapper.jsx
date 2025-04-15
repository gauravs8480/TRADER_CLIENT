import React from 'react';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="mobile-s:bg-green-500  px-5 md:px-16 lg:px-30 xl:px-45 3xl:px-62 4xl:px-100 mobile-m:bg-gray-600 mobile-l:bg-amber-600 md:bg-green-500 2xl:bg-pink-500 lg:bg-red-500 xl:bg-blue-500  bg-black w-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;