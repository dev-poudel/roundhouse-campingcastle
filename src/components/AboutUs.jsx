import React from "react";
import about from "../assets/about.png";

const Aboutus = () => {
  return (
    <div className="bg-[#f8f8f8] pb-5" id="about">
      <div className="w-full flex justify-center max-w-[1450px] mx-auto px-6">
        <div className="w-full">
          <div className="flex flex-col sm:flex-row md:gap-10 gap-6 mt-15 w-full sm:px-0 mt-5">
            {/* Image Section */}
            <div className="sm:w-[35rem] overflow-hidden">
              <img
                src={about}
                alt="image_ab"
                className="w-full sm:h-[38rem] object-cover rounded-xl"
              />
            </div>

            {/* Text Section */}
            <div className="sm:text-left  md:mt-5 text-center">
              <h1 className=" text-[#E1971B] font-Sans font-Regular md:text-[40px] md:mt-6 text-4xl">
                About Us
              </h1>
              <h1 className="font-bold md:text-5xl font-playfair text-4xl leading-tight md:pt-7 p-2">
                "Lorem ipsum dolor sit amet,
                <br />
                consectetur adipisicing."
              </h1>
              <p className="mt-5 text-black md:text-2xl text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                <br />
                sed do eiusmod tempor incididunt ut labore et dolore
                <br /> magna aliqua. 
              </p>

              {/* Stats Section */}
              <div className="">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-18 py-8">
                  {[
                    { value: "50+", label: "Luxury Rooms" },
                    { value: "60k+", label: "Happy Guests" },
                    { value: "99%", label: " Guest Satisfaction" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg">
                      <div className="text-3xl font-regular font-playfair mb-2">
                        {stat.value}
                      </div>
                      <div className="font-regular font-playfair text-3xl">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature Section */}
              <div className="sm:text-left items-center font-playfair">
                <h5 className="  Light italic text-center font-playfair text-black text-2xl">
                  Alexey
                </h5>
                <h1 className="text-center text-black font-playfair">
                  <span className="font-bold text-3xl">
                    {" "}
                    Alexey
                    <span>+</span>
                    HotelOwner
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
