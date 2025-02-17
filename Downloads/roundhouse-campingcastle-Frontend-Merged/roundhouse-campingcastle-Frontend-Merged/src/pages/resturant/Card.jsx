import React from "react";
import { FaStar } from "react-icons/fa";
import bed from "../../assets/bed.png"
import grid from "../../assets/grid.png";
import bath from "../../assets/bath.png";

const Card = ({ image, price, title, rating, bedCount, bathCount, area }) => {
  return (
    <div className="shadow-lg md:pb-5 rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full  object-cover" />
      <div className="p-4">
        <div className="flex py-2 justify-between items-centern pr-2">
          <div>
            <span className="text-[30px] font-bold text-gray-800">
              ${price}/
            </span>
            <span className="text-gray-600">night</span>
          </div>
          <div className="flex items-center gap-2">
            <FaStar className="text-[30px] text-amber-400" />
            <p className="font-medium text-[24px]">{rating}</p>
          </div>
        </div>
        <p className="text-[24px]  mt-2">{title}</p>
        <div className="flex gap-5 mt-3 text-gray-700">
          <div className="flex gap-2 items-center">
            <img src={bed} alt="Bed" className="w-6 h-6" />
            <span>{bedCount}/Bed</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={bath} alt="Shower" className="w-6 h-6" />
            <span>{bathCount}/Shower</span>
          </div>
          <div className="flex gap-2 items-center">
            <img src={grid} alt="Size" className="w-6 h-6" />
            <span>{area}/sqft</span>
          </div>
        </div>
        <button className="bg-[#E1971B] text-white px-7 py-3 w-full rounded-3xl text-md font-semibold mt-5">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Card;
