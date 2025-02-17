import { useState } from "react";

const SliderButton = () => {
  const options = ["Today", "Yesterday", "Week", "Month"];
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative flex bg-[#D2DBFA] p-2 rounded-xl w-[60vw] h-[60px] items-center justify-between">
      {/* Moving Slider */}
      <div
        className="absolute bg-white rounded-xl shadow-md transition-all duration-300"
        style={{
          width: `${100 / options.length}%`,
          height: "90%",
          left: `${(100 / options.length) * selected}%`,
        }}
      />

      {/* Buttons */}
      {options.map((option, index) => (
        <button
          key={index}
          className={`relative z-10 flex-1 text-gray-600 text-lg font-medium transition-all duration-300`}
          onClick={() => setSelected(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default SliderButton;
