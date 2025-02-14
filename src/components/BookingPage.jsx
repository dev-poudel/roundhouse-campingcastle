import React from "react";
import { useRooms } from "../context/RoomContext";
import Navbar from "./Navbar";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Fotter";
import Sidebar from "./Sidebar";
import Card from "./Card";

const BookingPage = () => {
  const { rooms } = useRooms();

  if (!rooms) {
    return <p>Loading rooms...</p>;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="flex flex-wrap md:flex-nowrap px-5 md:px-40 gap-28 mb-5 mt-10">
        {/* Sidebar: Stacked on mobile, side-by-side on larger screens */}
        <Sidebar />

        {/* Room Cards: Responsive layout for cards */}
        <div className="flex flex-wrap gap-16 w-full md:w-auto">
          {rooms.map((room) => (
            <Card key={room.id} {...room} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
