import React from 'react';

const LayoutWrapper = ({ children }) => {
  return (
    <div className=" px-7 md:px-16 lg:px-30 xl:px-45 w-full">
      {children}
    </div>
  );
};

export default LayoutWrapper;