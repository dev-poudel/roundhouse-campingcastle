import React, { createContext, useContext, useState } from "react";
import hotel1 from "../assets/hotel1.png";
import hotel2 from "../assets/hotel2.png";
import hotel3 from "../assets/hotel2.png";

// Create Context
const RoomContext = createContext();

// RoomProvider Component to wrap the app
export const RoomProvider = ({ children }) => {
  const [rooms] = useState([
    {
      id: 1,
      image: hotel1,
      price: 399,
      title: "Luxury Suite",
      rating: 5.0,
      bedCount: 1,
      bathCount: 1,
      area: 400,
    },
    {
      id: 2,
      image: hotel2,
      price: 299,
      title: "Deluxe Room",
      rating: 4.8,
      bedCount: 1,
      bathCount: 1,
      area: 350,
    },
    {
      id: 3,
      image: hotel3,
      price: 199,
      title: "Standard Room",
      rating: 4.5,
      bedCount: 1,
      bathCount: 1,
      area: 300,
    },
    {
      id: 4,
      image: hotel3,
      price: 199,
      title: "Standard Room",
      rating: 4.5,
      bedCount: 1,
      bathCount: 1,
      area: 300,
    },
  ]);

  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

// Custom Hook to access RoomContext
export const useRooms = () => {
  return useContext(RoomContext);
};
