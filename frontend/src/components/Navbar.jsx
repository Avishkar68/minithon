// import React from "react";
// const Navbar = () => {
//   return (
//     <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] max-w-5xl bg-white/20 backdrop-blur-md rounded-xl shadow-lg px-8 py-4 flex justify-between items-center z-50">
//       {/* Logo */}
//       <div className="text-white text-xl font-comfortaa tracking-wider">
//         GradNest
//       </div>

//       {/* Menu */}
//       <ul className="flex space-x-6 text-white font-medium">
//         <li className="hover:text-gray-300 cursor-pointer transition">Home</li>
//         <li className="hover:text-gray-300 cursor-pointer transition">About</li>
//         <li className="hover:text-gray-300 cursor-pointer transition">Unit</li>
//         <li className="hover:text-gray-300 cursor-pointer transition">News</li>
//         <li className="hover:text-gray-300 cursor-pointer transition">Promo</li>
//         <li className="hover:text-gray-300 cursor-pointer transition">Contact</li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';

const Navbar = () => {
  // In a real app, you'd use NavLink from react-router-dom for the active state.
  const [activeLink, setActiveLink] = useState('Home');
  const navLinks = ['Home', 'About', 'Unit', 'News', 'Promo', 'Contact'];

  return (
    <nav
      className="
        fixed top-6 left-0 right-0 z-50
        flex justify-between items-center 
        px-6 md:px-10
      "
    >
      {/* ## Left Section: Logo ## */}
      <div className="flex items-center gap-2.5 text-2xl font-semibold">
        <div
          className="
            text-white 
            text-xl font-comfortaa tracking-wider 
            [text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]
          "
        >
          GradNest
        </div>
      </div>

      {/* ## Middle Section: Navigation Links with Glass Effect ## */}
      <div
        className="
          p-1.5 rounded-full 
          bg-white/10 border border-white/15 
          backdrop-blur-md
        "
      >
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                className={`
                  block rounded-full px-5 py-2.5 text-sm
                  transition-all duration-300
                  ${
                    activeLink === link
                      ? 'bg-white text-black font-medium shadow-md' // Active link style
                      : 'text-gray-200 hover:text-white' // Inactive link style
                  }
                `}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ## Right Section: Action Buttons ## */}
      <div className="flex items-center gap-4">
        <button
          className="
            px-7 py-3 rounded-full text-sm font-medium 
            bg-white text-black shadow-lg
            transition-transform duration-200 hover:scale-105
          "
        >
          Contact
        </button>
        <button
          className="
            px-7 py-3 rounded-full text-sm font-medium 
            bg-zinc-900 text-white
            transition-transform duration-200 hover:scale-105
          "
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;