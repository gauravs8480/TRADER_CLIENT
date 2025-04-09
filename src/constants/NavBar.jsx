import React from 'react';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-[70px] md:h-[80px]  flex items-center justify-between px-4 sm:px-8 bg-transparent z-10">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-[60px] h-[60px] object-contain sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] md:ml-[-40px] ml-35 xl:ml-35"
      />

      {/* Enroll Button */}
      <button className="bg-yellow-400 text-sm sm:text-base md:text-md px-3 py-2 rounded-b-lg shadow-md hover:bg-yellow-500 transition-all md:mr-[-15px] mr-42 xl:mr-42 ">
        Enroll Now
      </button>
    </nav>
  );
};

export default NavBar;