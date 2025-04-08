import React from 'react';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <nav className="  absolute top-0 left-0 w-full h-[70px] flex items-center justify-between px-4 sm:px-8  lg:mx-[-60px] bg-transparent  z-10">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="  xl:mx-55 2xl:mx-65  lg:mx-30  w-[60px] h-[60px] object-contain sm:w-[80px] md:mx-35 sm:h-[80px]"
      />

      {/* Enroll Button */}
      <button className=" xl:mx-33   2xl:text-[15px] 2xl:mx-35 lg:mx-25 bg-yellow-400 w-30 h-12 rounded-b-lg text-sm  sm:text-md px-4 py-2 rounded shadow-md hover:bg-yellow-500 transition-all">
        Enroll Now
      </button>
    </nav>
  );
};

export default NavBar;