import React, { useState, useEffect } from "react";
import discounts from "../assets/timer.png";

const Discounts = () => {
  const targetDate = new Date("2025-12-31T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - new Date().getTime());
    }, 1000);

    if (timeLeft <= 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timeLeft, targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div
      className="bg-cover bg-center md:h-[60vh] h-auto w-full bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${discounts})` }}
    >
      <div className="text-white max-w-[1450px]px] mx-auto px-4 py-10 md:py-15 text-center">
        <div className="flex flex-col justify-center items-center space-y-2">
          <span className="text-lg md:text-[30px] font-thin">
            Offers & Discounts
          </span>
          <h1 className="font-playfair font-bold text-2xl md:text-4xl lg:text-5xl">
            Limited Time Holiday Sale
          </h1>
          <p className="text-sm md:text-[30px] md:pt-2 font-Open Sans">
            Only Exclusive 25% Discounts on Stays
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center space-x-3 md:space-x-4 text-white text-lg md:text-3xl font-bold font-playfair mt-6 md:mt-10">
          {[
            { label: "days", value: days },
            { label: "hours", value: hours },
            { label: "minutes", value: minutes },
            { label: "seconds", value: seconds },
          ].map((item, index) => (
            <React.Fragment key={item.label}>
              {index !== 0 && <div className="text-xl md:text-2xl">:</div>}
              <div className="p-2 md:p-4 rounded-lg text-center space-y-5">
                <span className="block text-2xl md:text-[48px]">
                  {item.value}
                </span>
                <span className="block text-sm md:text-[48px] font-bold">
                  {item.label}
                </span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discounts;
