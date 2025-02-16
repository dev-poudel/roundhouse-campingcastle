import React from "react";
import bgImage from "../assets/body.png";

const Hero = () => {
  return (
    <div
      className="bg-cover bg-center h-[80vh] w-full bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="flex items-center justify-center h-full" id="home">
        <div className="text-white px-6 w-full max-w-[1450px]">
          <div className="flex flex-col justify-center items-start">
            {/* First Section - Large Text with Responsive Font */}
            <div className="mb-4 text-left max-w-[90%] md:pt-30">
              <p className="font-bold text-[clamp(32px,5vw,64px)] leading-tight font-playfair">
                WELCOME TO ROUNDHOUSE
                <br />
                CAMPING CASTLE
              </p>
            </div>

            {/* Second Section - Smaller Text with Responsive Font */}
            <div className="mb-6 text-left max-w-[90%]">
              <p className="text-[clamp(18px,3vw,32px)] font-open-sans leading-relaxed">
                “Experience your cozy stay with us “
                <br />
              </p>
            </div>

            {/* Button Section with margin-top */}
            <div className="self-start mt-2">
              <button className="px-8 py-3 bg-[#E1971B] text-white rounded-2xl hover:bg- transition duration-300 w-auto font-semibold font-montserrat">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
