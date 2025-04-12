import React from 'react';

const LayoutWrapper = ({ children }) => {
  return (
    <div className="  px-1 md:px-16 lg:px-30 xl:px-45 3xl:px-62 4xl:px-100   bg-black   w-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;