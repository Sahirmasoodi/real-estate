import React from "react";
import { assets } from "../assets/assets";

const Footer = ({ dark }) => {
  return (
    <div className={`bg-gray-800 text-gray-400 ${dark && "bg-zinc-900"}`}>

      <div className="p-10 flex flex-col md:flex-row justify-evenly gap-10">

        {/* Logo & About */}
        <div>
          <img src={assets.logo_dark} className="w-40" />

          <p className="mt-5 text-justify text-[15px] w-80">
            We are a professional Dubai-based real estate brokerage connecting
            buyers, sellers, and renters with the best properties in the UAE.
            Your dream home is just a step away.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="font-bold mb-3 text-white">Company</p>

          <ul className="flex flex-col gap-2">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-white">
                Listings
              </a>
            </li>

            <li>
              <a href="#brokers" className="hover:text-white">
                Brokers
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-white">
                Contact Us
              </a>
            </li>

            <li className="hover:text-white cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <p className="font-bold text-white">
            Subscribe to our newsletter
          </p>

          <p>
            Latest Dubai real estate updates, new listings, and market insights
            delivered weekly.
          </p>

          <div>
            <input
              placeholder="Enter your email"
              className="h-9 px-3 rounded-md bg-gray-700 me-3 mb-2 outline-none"
            />

            <button className="bg-gray-500 min-w-24 py-1.5 hover:bg-gray-600 rounded-md text-white">
              Submit
            </button>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="py-4 mx-10 border-t border-gray-700">
        <p className="text-sm text-center">
          Copyright {new Date().getFullYear()} © Sahirmasoodi. All Rights Reserved.
        </p>
      </div>

    </div>
  );
};

export default Footer;
