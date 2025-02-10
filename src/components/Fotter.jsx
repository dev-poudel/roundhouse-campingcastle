import React from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import logo from "../assets/roundlogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#6B2620] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="flex flex-wrap justify-between items-start gap-6">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-2 w-full sm:w-auto">
            <div className="flex gap-4 items-center">
              <img src={logo} alt="Roundhouse Logo" className="w-16 h-16" />
              <div>
                <h3 className="font-bold text-2xl">ROUNDHOUSE</h3>
                <span className="text-xl font-regular">Camping Castle</span>
              </div>
            </div>
            <p className="text-sm max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod.
            </p>
          </div>

          {/* Hotel Links */}
          <div className="w-full sm:w-auto">
            <h3 className="md:text-4xl text-2xl font-bold">Hotel</h3>
            <ul className="mt-2 space-y-1 font-thin">
              <div className="flex gap-5">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
              </div>
              <div className="flex gap-5 ">
                <li>
                  <a href="#" className="hover:underline">
                    Rooms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Offer
                  </a>
                </li>
              </div>
              <div className="flex gap-5">
                <li>
                  <a href="#" className="hover:underline">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </div>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full sm:w-auto">
            <h3 className="md:text-4xl text-2xl font-bold">Legal</h3>
            <ul className="mt-2 space-y-1 font-thin">
              <li>
                <a href="#" className="hover:underline">
                  Terms of Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Processing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-[#814141] pt-4 flex flex-wrap justify-between items-center text-sm gap-4">
          <p className="w-full sm:w-auto text-center sm:text-left">
            &copy; 2023 Hotel. All Rights Reserved
          </p>
          <div className="flex space-x-4 justify-center sm:justify-start w-full sm:w-auto">
            <a href="#" className="text-white hover:text-gray-300">
              <SlSocialFacebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
