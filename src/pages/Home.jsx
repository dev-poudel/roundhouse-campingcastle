import React from "react";
import { useRooms } from "../context/RoomContext"; // Use custom hook
import Card from "../components/Card";

const Home = () => {
  const { rooms } = useRooms();

  if (!rooms) {
    return <p>Loading rooms...</p>;
  }

  return (
    <div className="md:mt-15 mt-5" id="rooms">
      <div className="max-w-[1450px] mx-auto md:px-6 px-3">
        <div className="flex md:justify-center md:items-center flex-col text-center">
          <p className="font-Open Sans text-[#E1971B] text-[34px]">
            Rooms & Suites
          </p>
          <h1 className="text-[48px] font-bold font-playfair leading-12">
            Discover our Luxury Rooms
          </h1>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-5">
          {rooms.map((room) => (
            <Card key={room.id} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
