import React, { useState } from "react";

const categories = ["All", "Rooms", "Garden/Green", "Bonfire/BBQ Area", "Night View"];

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
    <div className="text-center mt-5 sm:ml-9 sm:mr-9 px-4">
      <h2 className="font-semibold text-xl text-[#E1971B] font-playfair">Photo / Gallery</h2>
      <h1 className="font-extrabold text-3xl text-[#000] font-playfair">Discover our luxury rooms</h1>
      <div className="flex justify-center space-x-2 flex-wrap mt-4 text-lg">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg  text-sm sm:text-base${
              selectedCategory === category ? "bg-gray-300" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filteredItems.map((item, index) => (
          <img key={index} src={item.image} alt={item.category} className="w-full rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
