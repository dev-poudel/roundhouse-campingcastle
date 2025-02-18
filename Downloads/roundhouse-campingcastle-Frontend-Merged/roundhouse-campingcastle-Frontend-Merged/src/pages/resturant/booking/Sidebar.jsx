import React, { useState } from "react";

const Sidebar = ({ onApply }) => {
  const [price, setPrice] = useState(50);
  const [filters, setFilters] = useState({
    roomTypes: { twin: true, single: true, double: false, family: false },
    priceRange: { min: 99, max: 1000 },
    viewType: { garden: true, city: false },
  });

  const handleCheckboxChange = (category, type) => {
    setFilters((prev) => ({
      ...prev,
      [category]: { ...prev[category], [type]: !prev[category][type] },
    }));
  };

  const handlePriceChange = (e, type) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: { ...prev.priceRange, [type]: Number(e.target.value) },
    }));
  };

  return (
    <div className="w-full md:w-64 p-5 shadow-lg h-[50vh] ">
      <div className="flex justify-between items-center shadow-md px-2 rounded-md mb-2">
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        {/* Hide Reset All button on mobile */}
        <button
          onClick={() =>
            setFilters({
              roomTypes: {
                twin: false,
                single: false,
                double: false,
                family: false,
              },
              priceRange: { min: 99, max: 1000 },
            })
          }
          className="text-[#E1971B] text-sm mb-4 md:block hidden"
        >
          Reset All
        </button>
      </div>

      {/* Room Types */}
      <h3 className="font-semibold text-xl mb-2">Room Types</h3>
      {["twin", "single", "double", "family"].map((type) => (
        <label key={type} className="flex items-center space-x-2 mb-2">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={filters.roomTypes[type]}
            onChange={() => handleCheckboxChange("roomTypes", type)}
            className="peer w-4 h-4 rounded-md transition-all duration-200 bg-gray-600"
          />
          {/* Label Text */}
          <span className="capitalize">{type} Room</span>
        </label>
      ))}

      {/* Price Range */}
      <h3 className="font-semibold mt-4 mb-2 text-xl">Price Range</h3>
      <div className="flex space-x-2">
        <input
          type="number"
          value={filters.priceRange.min}
          onChange={(e) => handlePriceChange(e, "min")}
          className="w-20 border rounded p-1"
        />
        <span>—</span>
        <input
          type="number"
          value={filters.priceRange.max}
          onChange={(e) => handlePriceChange(e, "max")}
          className="w-20 border rounded p-1"
        />
      </div>
      {/* <div className="flex flex-col items-center w-72 mx-auto mt-5">
        <input
          type="range"
          min="0"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <div className="mt-2 text-lg font-semibold text-gray-800">
          Price: ${price}
        </div>
      </div> */}
      <button
        // onClick={() => onApply(filters)}
        className="bg-[#E1971B] text-white w-full py-2 mt-4 rounded-2xl font-bold transition"
      >
        Apply
      </button>
    </div>
  );
};

export default Sidebar;
