import React from "react";
import { subscriptionPlans } from "../constants";
import { subcheck, subicon } from "../assets";

const Subscription = () => {
  return (
    <div className="bg-black text-white py-15  px-1">


<div className="text-center  px-3 lg:-ml-2   text-white py-6 ">
        <p className="text-xs lg:text-[15px] 2xl:text-[15px] font-medium uppercase tracking-widest">
     SUBSCRIPTION
        </p>
        <h1 className="text-[26px] lg:text-[45px] font-semibold pt-6">
          Which one is right <br className="lg:hidden" /> <span className="text-yellow-400">for you</span>
        </h1>
      </div>



      <div className="flex flex-wrap justify-between gap-6">
        {subscriptionPlans.map((plan) => (
          <div
            key={plan.id}
            className={`w-[370px] h-[400px] lg:w-[400px] lg:h-[400px] 3xl:w-[550px] 3xl:h-[550px]   4xl:w-[600px] 4xl:h-[600px]      lg:mr-10 lg:ml-10    3xl:mr-17 3xl:ml-17 4xl:mr-30 4xl:ml-30     p-6 rounded-lg shadow-lg bg-transparent  border-2 border-transparent hover:border-yellow-400 transition-all duration-300`}
          >
            {/* Title Section */}
            <div className="flex justify-between">
              <div className="w-10 h-10 bg-white rounded-full">
                <img
                  src={subicon}
                  className="object-contain w-full h-full"
                  alt=""
                />
              </div>
              {/* Price Section */}
              <p className="text-black px-2 py-2  bg-white rounded-md lg:text-[15px] 3xl:text-[26px] font-sm mb-4">
                {plan.price}
              </p>
            </div>
            <h2 className="text-xl lg:text-[30px] 3xl:text-[50px] font-bold  text-yellow-300">
              {plan.title}
            </h2>
<p className="mb-4 lg:text-[15px] 3xl:text-[20px] ">{plan.description}</p>
            {/* Features List */}
            <ul className="text-sm lg:text-[16px] 3xl:text-[20px] text-white0 space-y-2 mb-4 ">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2  ">
              <div className="w-6 h-6 3xl:w-10 3xl:h-10  rounded-full">
                <img
                  src={subcheck}
                  className="object-contain w-full h-full rounded-full  "
                  alt=""
                />
              </div>      {feature}
                </li>
              ))}
            </ul>

            {/* Button Section */}
            <div className="flex justify-center">
            <button className="bg-white  w-[200px] lg:w-full text-black mt-10 lg:mt-10  3xl:mt-20 4xl:mt-30 py-2 px-4 rounded-md font-semibold cursor-pointer transition-all">
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