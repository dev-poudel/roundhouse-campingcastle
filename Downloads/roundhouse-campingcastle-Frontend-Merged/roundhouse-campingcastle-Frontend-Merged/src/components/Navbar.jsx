import React, { useState } from "react";
import logo from "../assets/roundlogo.png";
import { Link, useNavigate } from "react-router-dom"; // Make sure to import navigate

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // Track if button is clicked

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate(); // Hook to handle navigation

  const handleBookNowClick = () => {
    navigate("/bookrooms"); // Navigate to the 'bookrooms' page
    setTimeout(() => setIsClicked(false), 300); // Reset the state after 300ms
  };
  return (
    <nav className="navbar-container flex justify-between items-center py-4 bg-white shadow-md font-montserrat w-full overflow-hidden max-w-[1450px] mx-auto md:px-5 xl:px-10">
      {/* Logo and hotel name */}
      <div className="flex items-center justify-center gap-20">
        <Link
          to="/"
          className="flex items-center xl:space-x-8 md:space-x-3 space-x-3 font-playfair"
        >
          <img src={logo} alt="Royal Luxury Hotel Logo" className="h-21 w-21" />
          <span className="text-xl font-Open Sans">
            <h3 className="font-bold text-2xl lg:">ROUNDHOUSE</h3>
            Camping Castle
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex xl:space-x-16 md:space-x-5 text-xl font-bold">
          <li>
            <Link to="/" href="#home" className="hover:text-[#2A5657]">
              Home
            </Link>
          </li>
          <li>
            <a href="#rooms" className="hover:text-[#2A5657]">
              Rooms
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-[#2A5657]">
              Gallery
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#2A5657]">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#2A5657]">
              Contact
            </a>
          </li>
          <li>
            <a href="#offer" className="hover:text-[#2A5657]">
              Offer
            </a>
          </li>
        </ul>
      </div>

      {/* Book Now button (hidden on small screens) */}
      <div className="hidden lg:block">
        <button
          onClick={handleBookNowClick} // Trigger click handler
          className={`bg-[#E1971B] text-white font-bold px-14 py-5 rounded-2xl transition duration-200 text-2xl ${
            isClicked ? "bg-[#244c4b]" : "" // Change color when clicked
          }`}
        >
          Book Now
        </button>
      </div>

      {/* Mobile Navigation Menu (Hamburger & Close Button) */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-[#2A5657] focus:outline-none pr-2"
        >
          {isOpen ? (
            // Close (X) Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Royal Luxury Hotel Logo" className="h-12" />
            <span className="text-sm">
              <h3 className="font-bold text-xl">Round House</h3>
              Camping Castle
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="text-[#2A5657] focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col space-y-6 text-lg px-8 py-10">
          <li>
            <Link
              to="/"
              href="#home"
              className="hover:text-[#2A5657]"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#rooms"
              className="hover:text-[#2A5657]"
              onClick={toggleMenu}
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-[#2A5657]"
              onClick={toggleMenu}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-[#2A5657]"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-[#2A5657]"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#offer"
              className="hover:text-[#2A5657]"
              onClick={toggleMenu}
            >
              Offer
            </a>
          </li>
        </ul>

        {/* Book Now button inside Mobile Menu */}
        <div className="px-8">
          <button
            onClick={handleBookNowClick} // Trigger click handler
            className={`w-full bg-[#E1971B] text-white font-bold px-5 py-3 rounded-2xl transition duration-200 ${
              isClicked ? "bg-[#244c4b]" : ""
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
