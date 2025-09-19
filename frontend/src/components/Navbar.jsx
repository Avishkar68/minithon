import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/40 z-50 fixed w-full backdrop-blur-lg text-white px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-serif tracking-widest">
          <Link to="/">PEACEREST</Link>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 text-sm font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              HOME
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              ROOMS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-gray-300"
              }
            >
              CONTACT
            </NavLink>
          </li>
        </ul>

        {/* Reservation Button */}
        <Link to="/rooms">
          <button className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition">
            View Rooms
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
