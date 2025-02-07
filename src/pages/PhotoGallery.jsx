import React, { useState } from "react";

const categories = ["All", "Rooms", "Garden/Green", "Bonfire/BBQ Area", "Night View"];

const galleryItems = [
  { category: "Rooms", image: "./bu.png" },
  { category: "Garden/Green", image: "./bu.png" },
  { category: "Night View", image: "./bu.png" },
  { category: "Rooms", image: "./bu.png" },
  { category: "Bonfire/BBQ Area", image: "./bu.png" },
  { category: "Garden/Green", image: "./bu.png" },
];

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="text-center m-16">
      <h2 className="font-semibold text-xl text-[#295757] font-playfair">Photo / Gallery</h2>
      <h1 className="font-extrabold text-3xl text-[#000] font-playfair">Discover our luxury rooms</h1>
      <div className="flex justify-center space-x-4 mt-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg border border-gray-300 ${
              selectedCategory === category ? "bg-gray-300" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        {filteredItems.map((item, index) => (
          <img key={index} src={item.image} alt={item.category} className="w-full rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
