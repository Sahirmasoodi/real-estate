import React from "react";
import { about, assets } from "../assets/assets";

const About = ({dark}) => {
  return (
    <div
      id="about"
      className="mb-10 md:mb-20 flex flex-col justify-center md:gap-10 items-center">
      
      <div className={`text-center text-4xl ${dark && 'text-white'}`}>
        <span className="font-bold me-2">About</span>
        <span>Our Brokerage</span>
        <p className="text-center text-sm md:text-lg text-gray-500">
          Helping Buyers & Sellers  
          <br className="md:hidden block" /> Find the Perfect Property
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 p-10 md:p-0 items-center justify-center">
        <div>
          <img className="w-80 md:w-96 " src={assets.brand_img} />
        </div>

        <div>
          <div className="grid grid-cols-2 grid-rows-2 gap-x-10 gap-y-8 md:gap-15">
            {about.map((grid,index) => (
                <div key={index}>
                  <p className="font-bold text-4xl">{grid.num}</p>
                  <p className="text-gray-500 text-sm md:text-[16px]">
                    {grid.task}
                  </p>
                </div>
            ))}
          </div>

          <p className="mt-5 text-justify md:w-96 text-gray-500 text-sm md:text-[16px] ">
            We are a professional real estate brokerage dedicated to connecting clients with the best properties on the market.  
            Whether you are buying, selling, or renting, our experienced brokers guide you through every step of the process.  
            Your dream property is just one call away!
          </p>

        </div>
      </div>
    </div>
  );
};

export default About;
