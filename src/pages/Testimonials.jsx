import React from "react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials = ({ dark }) => {
  return (
    <div id="testimonials" className="p-5 ">
      <div className={`text-center text-4xl ${dark && "text-white"}`}>
        <span className="font-bold me-2">Client</span>
        <span>Success Stories</span>
        <p className="text-center text-sm md:text-lg text-gray-500">
          Trusted by Buyers and Sellers
          <br /> Across the City
        </p>
      </div>

      <div className="flex justify-center overflow-scroll gap-10 mt-10">
        {testimonialsData.map((person, index) => (
          <div
            className={`min-w-80 max-w-80 flex flex-col items-center gap-y-5 p-10 shadow-md border border-black rounded-sm   ${dark ? "border-white " : " border-black "}`}
            key={index}
          >
            <img src={person.image} className="rounded-full size-20" />
            <div>
              <p className="text-lg">{person.name}</p>
              <p className="text-gray-500 text-sm text-center">
                {person.title}
              </p>
            </div>

            <div className="flex gap-1">
              {Array.from({ length: person.rating }, () => (
                <img key={Math.random()} src={assets.star_icon} />
              ))}
            </div>

            <p className="text-center text-sm text-gray-600">{person.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
