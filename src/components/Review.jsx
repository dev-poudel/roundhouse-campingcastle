import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";

const reviews = [
  {
    name: "Arbin Acharya",
    image: "./bu.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
  {
    name: "Hari Bahadur",
    image: "./bu.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Shyam prasad",
    image: "./bu.png",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
  },
];

const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear", // Ensures smooth transitions
  };

  return (
    <div className="bg-[#CECECE] p-10 text-center mt-5">
      <h2 className="text-3xl font-semibold text-[#E1971B]">Guest Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-5 mx-auto max-w-3xl">
            <div className="flex justify-center items-center">
              <FaQuoteLeft className="text-3xl text-[#295757] mb-7 font-bold" />
              <h1 className="text-5xl font-bold mx-2 font-playfair">
                What people say about us
              </h1>
              <FaQuoteRight className="text-3xl text-[#295757] mt-7 font-bold " />
            </div>
            <p className="mt-4 text-black text-2xl">{review.review}</p>
            <div className="flex justify-center gap-1 my-8 space-x-3">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 text-2xl" />
              ))}
            </div>
            <div className="flex flex-col items-center mt-8">
              <img
                src={review.image}
                alt={review.name}
                className="h-28 w-28 rounded-full  shadow-lg"
              />
              <h3 className="mt-2 font-semibold text-2xl">{review.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
