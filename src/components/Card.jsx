import React from "react";

import bed from "../assets/bed.png";
import grid from "../assets/grid.png";
import bath from "../assets/bath.png";
import { FaStar } from "react-icons/fa";

const Card = ({ hotel, hotel1, hotel2 }) => {
  return (
    <div className="shadow  mt-10 md:pb-5">
      <img src={hotel} alt="" />
      <img src={hotel1} alt="" />
      <img src={hotel2} alt="" />
      <div className="flex py-2 items-center justify-between pr-2">
        <div>
          <span className="text-[30px] px-2">$399/</span>
          <span>night</span>
        </div>
        <div className="flex items-center gap-2">
          <FaStar className="text-[30px] text-amber-400" />
          <p className="font-regular text-[30px]">5.0</p>
        </div>
      </div>
      <p className="text-[24px] px-2">Deluxe rooms</p>
      <div className="flex gap-7 mb-2 px-2 items-center mt-2">
        <div className="flex gap-2 items-center">
          <img src={bed} alt="" />
          <span className="font-[24px]">1/Bed</span>
        </div>
        <div className="flex gap-2 items-center">
          <img src={bath} alt="" />
          <span>1/shower</span>
        </div>
        <div className="flex gap-2 items-center">
          <img src={grid} alt="" />
          <span>400/sqft</span>
        </div>
      </div>
      <button className="bg-[#E1971B] text-white px-7 py-3 w-[90%] rounded-xl font-semibold ml-2 mt-2 ">
        Book Now
      </button>
    </div>
  );
};

export default Card;
