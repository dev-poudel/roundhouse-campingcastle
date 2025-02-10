import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const categories = [
  "All",
  "Rooms",
  "Garden/Green",
  "Bonfire/BBQ Area",
  "Night View",
];

const galleryItems = [
  { category: "Rooms", image: "./room.png" },
  { category: "Garden/Green", image: "./garden.png" },
  { category: "Night View", image: "./bonfire.png" },
  { category: "Rooms", image: "./room.png" },
  { category: "Bonfire/BBQ Area", image: "./bonfire.png" },
  { category: "Garden/Green", image: "./garden.png" },
];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="text-center mt-5 sm:ml-9 sm:mr-9 max-w-[1450px] mx-auto px-6">
      <div className="items-center justify-center flex ">
        <button
          className="bg-[#CECECE] border-2  border-[#2a5657] px-8 py-2 font-semibold text-xl rounded-3xl flex items-center gap-4 mt-8 
          md:mb-5 mb-2"
        >
          View All Rooms
          <FaArrowRight />
        </button>
      </div>
      <h2 className="font-semibold text-3xl text-[#E1971B] font-playfair">
        Photo / Gallery
      </h2>
      <h1 className="font-extrabold text-4xl text-[#000] font-playfair md:pt-5">
        Discover our luxury rooms
      </h1>
      <div className="flex justify-evenly space-x-2 flex-wrap mt-4 text-lg">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg  text-sm sm:text-xl ${
              selectedCategory === category ? "bg-[#EDE1C1]" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 ">
        {filteredItems.map((item, index) => (
          <img
            key={index}
            src={item.image}
            alt={item.category}
            className="w-full rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
