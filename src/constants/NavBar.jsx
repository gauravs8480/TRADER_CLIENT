import React from 'react';
import { logo } from '../assets';

const NavBar = () => {
  return (
    <nav className=" 4xl:h-[90px]  fixed  3xl:h-[100px]    top-0 left-0 right-0 w-full lg:h-[70px]   flex items-center justify-between lg:px-8  bg-transparent z-10">
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="  4xl:ml-80    h-[70px] w-[90px]  -ml-1   lg:h-[100px] lg:w-[150px]  3xl:h-[200px] 3xl:ml-40  3xl:w-[200px]   object-contain    lg:ml-[110px]"
      />

      {/* Enroll Button */}
      <button className=" 4xl:mr-93 bg-yellow-400 mr-5 text-[15px] h-[28px] w-[75px]  lg:h-[30px] font-semibold lg:w-[90px]  3xl:mr-55 3xl:h-[40px] 3xl:w-[100px]  3xl:text-[20px]  lg:text-[15px]  rounded-md shadow-md hover:bg-yellow-500 transition-all  lg:mr-[150px]  ">
        Enroll 
      </button>
    </nav>
  );
};

export default NavBar;