import React from "react";
import { useRooms } from "../context/RoomContext"; // Correct import for the custom hook
import Card from "./Card";

const Room = () => {
  const { rooms } = useRooms(); // Get room data from context

  // Slice the first 3 rooms from the rooms array
  const roomsToDisplay = rooms.slice(0, 3);

  return (
    <div className="md:mt-15 mt-5" id="rooms">
      <div className="max-w-[1450px] mx-auto md:px-6  px-3">
        <div className="flex md:justify-center md:items-center flex-col">
          <p className="font-Open Sans text-[#E1971B] text-[34px]">
            Rooms & Suites
          </p>
          <h1 className="text-[48px] font-bold font-playfair leading-12">
            Discover our Luxury Rooms
          </h1>
        </div>
        <div className="flex flex-wrap  gap-16 mt-5">
          {roomsToDisplay.map((room) => (
            <Card key={room.id} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
