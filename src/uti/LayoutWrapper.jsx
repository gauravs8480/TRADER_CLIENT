import React from 'react';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="bg-red-600 border-2 border-yellow-400 px-7 md:px-16 lg:px-30 xl:px-45 w-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;