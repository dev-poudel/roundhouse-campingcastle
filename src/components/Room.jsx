import React from "react";
import Card from "./Card";
import hotel from "../assets/Rectangle 15.png";
import hotel1 from "../assets/hotel1.png";
import hotel2 from "../assets/hotel2.png";
import { FaArrowRight } from "react-icons/fa6";

const Room = () => {
  return (
    <div className=" md:mt-15 mt-5">
      <div className="max-w-[1450px] mx-auto md:px-6 px-3">
        <div className="flex md:justify-center md:items-center flex-col">
          <p className="font-Open Sans text-[#E1971B] text-[34px]">
            Rooms&suite
          </p>
          <h1 className="text-[48px] font-bold font-playfair Display leading-12">
            Discovery our luxury rooms
          </h1>
        </div>
        <div className="flex md:gap-20 gap-5 flex-wrap">
          <Card hotel={hotel} />
          <Card hotel1={hotel2} />
          <Card hotel2={hotel2} />
        </div>
      </div>
    </div>
  );
};

export default Room;
