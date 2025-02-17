import React from "react";

const Setting = () => {
  const filters = [
    {
      label: "Timeframe",
      options: ["All-time", "Last 30 days", "Last 7 days"],
    },
    { label: "Source", options: ["All", "Web", "Social Media"] },
    { label: "Medium", options: ["All", "Image", "Video"] },
  ];

  return (
    <div className="flex gap-4 mt-10 justify-center items-center">
      {filters.map((filter, index) => (
        <div key={index} className="border-2 p-2 rounded-2xl">
          <label>{filter.label}: </label>
          <select>
            {filter.options.map((option, i) => (
              <option key={i} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default Setting;
