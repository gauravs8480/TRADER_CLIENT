import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-400 pt-15 text-center'>

<h1 className=" lg:text-[45px] text-[26px] font-semibold mb-8 3xl:text-[45px]">
Unlock funding and trade Like a pro{" "}
        
      </h1>

      <p className="  text-black text-[13px] md:font-medium lg:text-[15px] ">
        Pass Challenges and get funded with a elite community
       
      </p>
      
      <div className="   lg:w-full  flex flex-col  lg:flex-row justify-center items-center gap-y-10 lg:gap-x-10 pt-10 pb-15 ">
        <button className="w-[200px] text-yellow-400 bg-black text-sm lg:text-[15px] font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-md lg:rounded-lg shadow-md cursor-pointer transition duration-300">
          Enroll now
        </button>
        <button className="w-[200px] text-yellow-400 bg-black text-sm lg:text-[15px] font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-md lg:rounded-lg shadow-md cursor-pointer transition duration-300">
        Lets talk
        </button>


      </div>


    </div>
  )
}

export default Footer