import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";

const Review = () => {
  return (
    <div className="bg-[#CECECE] p-10 text-center mt-5 ">
      <h2 className="text-3xl font-semibold text-[#E1971B] text">
        Guest Review
      </h2>
      <div className="flex justify-center items-center mt-2">
        <FaQuoteLeft className="text-xl text-[#295757] mb-7" />
        <h1 className="text-3xl font-bold mx-2 font-playfair">
          What people say about us
        </h1>
        <FaQuoteRight className="text-xl text-[#295757] mt-7" />
      </div>
      <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex justify-center gap-1 my-4">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            <FaStar className="text-yellow-500 text-xl" />
          </span>
        ))}
      </div>
      <div className="flex flex-col items-center mt-4">
        <img
          src="./bu.png"
          alt="User"
          className="h-16 w-16 rounded-full border-2 border-white shadow-lg"
        />
        <h3 className="mt-2 font-semibold text-lg font-playfair">
          Arbin Acharya
        </h3>
        <div className="flex gap-1 mt-2">
          <span className={`h-2 w-2 bg-[#295757] rounded-full`}></span>
          <span className={`h-2 w-2 bg-[#295757] rounded-full`}></span>
          <span className={`h-3 w-3  bg-[#295757] rounded-full`}></span>
          <span className={`h-2 w-2 bg-[#295757] rounded-full`}></span>
          <span className={`h-2 w-2 bg-[#295757] rounded-full`}></span>
        </div>
      </div>
    </div>
  );
};

export default Review;
