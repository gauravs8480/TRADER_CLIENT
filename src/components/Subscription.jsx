import React, { useState, useEffect } from "react";
import { subscriptionPlans } from "../constants";
import { subcheck, subicon } from "../assets";

const Subscription = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleOutsideTap = () => setActiveCard(null);
    document.addEventListener("click", handleOutsideTap);
    return () => document.removeEventListener("click", handleOutsideTap);
  }, []);

  return (
    <div className="bg-black text-white py-15 px-1">
      {/* Header */}
      <div className="text-center px-3 lg:-ml-2 text-white py-6 mobile-s:py-8">
        <p className="text-xs lg:text-[15px] font-medium uppercase tracking-widest">
          SUBSCRIPTION
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold pt-6">
          Which one is right <br className="lg:hidden" />
          <span className="text-yellow-400">for you</span>
        </h1>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-8 lg:gap-y-12 3xl:gap-y-15 4xl:gap-y-20 gap-x-4 mobile-s:px-2 mobile-m:px-3 px-4 4xl:max-w-[1800px] mx-auto">
        {subscriptionPlans.map((plan, index) => (
          index < 2 ? (
            <div
              key={plan.id}
              onClick={(e) => {
                e.stopPropagation();
                setActiveCard(plan.id);
              }}
              className={`
                w-full 
                mobile-s:w-[300px] 
                mobile-m:w-[310px] 
                mobile-l:w-[350px] 
                lg:w-[450px] 
                h-[480px] 
                lg:h-[500px]
                3xl:w-[580px] 3xl:h-[650px] 
                4xl:w-[680px] 4xl:h-[720px]
                p-6 lg:px-5 lg:py-10 xl:py-12
                3xl:px-10 3xl:py-10 
                4xl:px-15 4xl:py-15 
                rounded-lg shadow-lg 
                transition-all duration-300 
                border-2
                ${activeCard === plan.id ? "border-yellow-400" : "hover:border-yellow-400 border-transparent"}
                mobile-m:mx-auto
                ${index % 2 === 0
                  ? "mobile-s:ml-0 2xl:ml-[90px] 3xl:ml-[70px] 4xl:ml-[140px] xl:ml-[40px]"
                  : "mobile-s:ml-0 2xl:ml-[10px] 3xl:ml-[10px] 4xl:ml-[30px] xl:ml-[10px]"
                }
              `}
            >
              {/* Card content */}
              <CardContent plan={plan} />
            </div>
          ) : null
        ))}
      </div>

      {/* Center the third card separately */}
      <div className="flex justify-center mt-8">
        {subscriptionPlans[2] && (
          <div
            onClick={(e) => {
              e.stopPropagation();
              setActiveCard(subscriptionPlans[2].id);
            }}
            className={`
              w-full 
              mobile-s:w-[300px] 
              mobile-m:w-[310px] 
              mobile-l:w-[350px] 
              lg:w-[450px] 
              h-[480px] 
              lg:h-[500px]
              3xl:w-[580px] 3xl:h-[650px] 
              4xl:w-[680px] 4xl:h-[720px]
              p-6 lg:px-5 lg:py-10 xl:py-12
              3xl:px-10 3xl:py-10 
              4xl:px-15 4xl:py-15 
              rounded-lg shadow-lg 
              transition-all duration-300 
              border-2
              ${activeCard === subscriptionPlans[2].id ? "border-yellow-400" : "hover:border-yellow-400 border-transparent"}
              mobile-m:mx-auto
            `}
          >
            {/* Card content */}
            <CardContent plan={subscriptionPlans[2]} />
          </div>
        )}
      </div>
    </div>
  );
};

// Extracted CardContent for DRYness
const CardContent = ({ plan }) => (
  <>
    {/* Icon & Price */}
    <div className="flex justify-between">
      <div className="w-10 h-10 3xl:w-15 3xl:h-15 4xl:h-20 4xl:w-20 bg-white rounded-full">
        <img
          src={subicon}
          className="object-contain w-full h-full"
          alt="icon"
        />
      </div>
      <p className="flex items-center justify-center text-black m-0.5 px-0.5 py-0.5 bg-white rounded-sm lg:text-[15px] 3xl:text-[18px] font-sm lg:h-[35px] 4xl:h-[55px] 4xl:rounded-lg 4xl:px-3 4xl:py-3 4xl:mt-3">
        {plan.price}
      </p>
    </div>

    {/* Title & Description */}
    <h2 className="text-[25px] lg:text-[30px] 3xl:text-[40px] font-bold text-yellow-300 mt-5">
      {plan.title}
    </h2>
    <p className="mb-4 mt-4 lg:text-[15px] 3xl:text-[20px]">
      {plan.description}
    </p>

    {/* Feature List */}
    <ul className="text-sm font-semibold lg:text-[16px] 3xl:text-[20px] text-white space-y-2 lg:space-y-5 mb-4">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center gap-2">
          <div className="w-6 h-6 3xl:w-8 3xl:h-8 rounded-full">
            <img
              src={subcheck}
              className="object-contain w-full h-full rounded-full"
              alt="check"
            />
          </div>
          {feature}
        </li>
      ))}
    </ul>

    {/* CTA Button */}
    <div className="flex justify-center">
      <button className="bg-white w-[200px] lg:w-full text-black 4xl:mt-10 mt-5 3xl:mt-5 3xl:py-4 3xl:px-8 3xl:text-[20px] py-2 px-4 rounded-md font-semibold cursor-pointer transition-all">
        {plan.buttonText}
      </button>
    </div>
  </>
);

export default Subscription;