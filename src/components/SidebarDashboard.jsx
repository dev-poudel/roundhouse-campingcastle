import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/roundlogo.png";

const SidebarDashboard = () => {
  return (
    <div className="w-64 h-screen text-black p-5">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-6">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <div>
          <h3 className="font-bold text-xl">ROUNDHOUSE</h3>
          <p>Camping Castle</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-3">
        <NavLink
          to="gallery"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-black"
          }
        >
          Gallery
        </NavLink>
        <NavLink
          to="rooms"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-black"
          }
        >
          Rooms
        </NavLink>
        <NavLink
          to="customers"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-black"
          }
        >
          Customer Details
        </NavLink>
        <NavLink
          to="review"
          className={({ isActive }) =>
            isActive ? "text-blue-400 font-bold" : "text-black"
          }
        >
          Review
        </NavLink>
      </nav>
    </div>
  );
};

export default SidebarDashboard;
