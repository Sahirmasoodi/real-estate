import React from "react";
import { brokersData } from "../assets/assets";

const Brokers = ({ dark }) => {
  return (
    <div id="brokers" className="py-20 px-5 md:px-10">
      <div className={`text-center text-4xl ${dark && "text-white"}`}>
        <span className="font-bold me-2">Our</span>
        <span>Brokers</span>

        <p className="text-center text-sm md:text-lg text-gray-500 mt-2">
          Meet our professional real estate experts
          <br /> Ready to help you find the best property
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        {brokersData.map((broker) => (
          <div
            key={broker.id}
            className={`p-6 rounded-xl shadow-lg text-center transition-all hover:scale-[101%] ${
              dark
                ? "bg-black text-white border border-gray-700"
                : "bg-blue-50"
            }`}
          >
            <img
              src={broker.image}
              alt={broker.name}
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />

            <h3 className="text-xl font-semibold">{broker.name}</h3>

            <p className="text-gray-500 text-sm">
              Experience: {broker.experience}
            </p>

            <p className="text-gray-500 text-sm mt-1">Area: {broker.area}</p>

            <div className="mt-4 text-sm">
              <p>{broker.phone}</p>
              <p>{broker.email}</p>
            </div>

            <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800">
              Contact Broker
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brokers;
