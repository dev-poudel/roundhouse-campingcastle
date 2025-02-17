import React from "react";
import { useRooms } from "../../../context/RoomContext";
import Navbar from "../../../components/Navbar";
import Header from "../../../components/Header";
// import Hero from "./Hero";
import Footer from "../../../components/Fotter";
import Sidebar from "./Sidebar";
import Card from "../Card";

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
        <Sidebar />

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
