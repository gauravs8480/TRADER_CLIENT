import React from 'react';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <nav className="absolute d top-0 left-0 right-0 w-full h-[70px] md:h-[80px]  flex items-center justify-between px-4 sm:px-8 bg-transparent z-10">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[60px] h-[60px] object-contain sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] md:ml-[25px] lg:ml-[80px] -ml-1 xl:ml-31"
      />

      {/* Enroll Button */}
      <button className="bg-yellow-400 text-[13px] sm:text-base md:text-[13px] lg:text-md px-3 py-2 rounded-b-lg shadow-md hover:bg-yellow-500 transition-all  md:mr-[50px] lg:mr-[105px] mr-3 xl:mr-37 ">
        Enroll Now
      </button>
    </nav>
  );
};

export default NavBar;