import React from "react";
import { subscriptionPlans } from "../constants";
import { subcheck, subicon } from "../assets";

const Subscription = () => {
  return (
    <div className="bg-black text-white py-15 px-1">
      {/* Header */}
      <div className="text-center px-3 lg:-ml-2 text-white py-6 mobile-s:py-8 ">
        <p className="text-xs lg:text-[15px] font-medium uppercase tracking-widest">
          SUBSCRIPTION
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold pt-6  ">
          Which one is right <br className="lg:hidden" />{" "}
          <span className="text-yellow-400">for you</span>
        </h1>
      </div>


      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-y-12   4xl:gap-y-20  gap-x-4    mobile-s:px-2 mobile-m:px-3 px-4 4xl:max-w-[1800px] mx-auto  ">
        {subscriptionPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`w-full lg:px-5 lg:py-10   h-[480px] mobile-s:w-[300px]  mobile-m:w-[310px]  mobile-l:w-[350px]  lg:w-[450px] lg:h-[500px] border-2 mobile-l:border-white mobile-m:border-red-600 mobile-s:border-blue-600  p-6 4xl:px-15  4xl:py-15  4xl:h-[720px]  4xl:w-[680px]  3xl:w-[580px] 3xl:h-[650px]  mobile-s:h-[480px]  3xl:px-10  3xl:py-10  rounded-lg shadow-lg border-2transition-all duration-300 ${
              index % 2 === 0
                ? " mobile-s:ml-0 lg:ml-[100px] 3xl:ml-[50px] 4xl:ml-[140px]"
                : " mobile-s:ml-0  lg:ml-[30px] 3xl:ml-[30px] 4xl:ml-[30px]"
            }`}
          >
            {/* icon & Price */}
            <div className="flex justify-between ">
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
            <p className="mb-4 mt-4 lg:text-[15px] 3xl:text-[20px] ">{plan.description}</p>

            {/* Feature List */}
            <ul className="text-sm  font-semibold lg:text-[16px] 3xl:text-[20px] text-white space-y-2 lg:space-y-5  mb-4 ">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 ">
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
            <div className="flex justify-center ">
              <button className="bg-white w-[200px] lg:w-full text-black 4xl:mt-10 mt-5 3xl:mt-5 3xl:py-4 3xl:px-8 3xl:text-[20px] py-2 px-4 rounded-md font-semibold cursor-pointer transition-all">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>



    </div>
  );
};

export default Subscription;