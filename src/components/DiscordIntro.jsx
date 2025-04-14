import React, { useState } from "react";
import { cardsData } from "../constants";
import LayoutWrapper from "../uti/LayoutWrapper";
const DiscordIntro = () => {
  const [isDragging, setIsDragging] = useState(false); // Track dragging state
  const [startX, setStartX] = useState(0); // Store initial mouse position

  const handleMouseDown = (e) => {
    setIsDragging(true); // Start dragging
    setStartX(e.clientX); // Set the initial mouse position
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const container = document.querySelector(".cards-container");
    const deltaX = e.clientX - startX; // Calculate horizontal movement
    container.scrollLeft -= deltaX; // Scroll the container horizontally
    setStartX(e.clientX); // Update the current mouse position
  };

  const handleMouseUp = () => {
    setIsDragging(false); // Stop dragging
  };

  return (

<>

<LayoutWrapper>

      <div className="text-center  px-3 lg:-ml-2   text-white  ">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
       TRADE .  NETWORK .   ELEVATE
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold pt-6">
          More than just a <br className="lg:hidden" /> <span className="text-yellow-400">discord server.</span>
        </h1>
      </div>
</LayoutWrapper>

    <div className=" bg-black  w-full  pl-1 lg:pl-45 3xl:pl-62 4xl:pl-100">
      
      {/* Header Section */}l




      {/* Draggable Cards Container */}
      <div
        className=" cards-container overflow-x-auto flex gap-6 scrollbar-none "
        style={{
          cursor: isDragging ? "grabbing" : "grab", // Update cursor style
          userSelect: "none", // Disable text selection
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // Stop dragging if the cursor leaves the container
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className=" w-[280px] h-[341px]  lg:w-[350px] lg:h-[425px]     3xl:w-[470px] 3xl:h-[608px] rounded-[20px] shadow-lg overflow-hidden relative bg-white flex-shrink-0"
          >
            {/* Gradient Shadow from Top to Down */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/90 to-transparent z-10 pointer-events-none" />
            {/* Image Section */}
            <div className="w-full h-[235px] lg:h-[300px] 3xl:h-[440px]  overflow-hidden">
              <img
                src={card.image}
                alt={`Card image ${index + 1}`}
                className="w-full h-full  lg:object-cover rounded-[20px]"
                draggable={false} // Disable image dragging
              />
            </div>
            {/* Text Section */}
            <div className="w-full h-[200px] px-2 bg-white bg-opacity-90 text-black lg:px-4  3xl:px-5  flex flex-col ">
              <h2 className=" text-[21px] pt-2 lg:text-[26px]  3xl:text-[30px] lg:pt-3 3xl:pt-6  font-semibold ">{card.title}</h2>
              <p className="text-[12px] pt-2 lg:text-[16px] 3xl:text-[20px] lg:pt-2 ">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
      
<LayoutWrapper>

<div className="w-full pt-6  justify-center  flex  lg:pt-8 3xl:pt-12 ">   

<button className="bg-yellow-400 text-black lg:text-15px  3xl:-ml-60 lg:-ml-45 3xl:text-[20px] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition duration-300">
            Enroll now
          </button>

</div>
</LayoutWrapper>



    </div>
</>


  );
};

export default DiscordIntro;