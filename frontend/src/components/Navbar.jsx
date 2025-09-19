import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Features', 'Testimonials', 'FAQs'];
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      navLinks.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section && scrollPos >= section.offsetTop) {
          setActiveLink(link);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (link) => {
    const section = document.getElementById(link.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(link);
    }
  };

  return (
    <nav
      className="
        fixed top-6 left-0 right-0 z-50
        flex justify-between items-center 
        px-6 md:px-10
      "
    >
      <div className="flex items-center gap-2.5 text-2xl font-semibold">
        <img className="w-[120px]" src={logo} alt="logo" />
      </div>

      <div
        className="
          p-1.5 rounded-full 
          bg-white/10 border border-black/5
          backdrop-blur-md
        "
      >
        <ul className="flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollToSection(link)}
                className={`
                  block rounded-full px-5 py-2.5 text-sm
                  transition-all duration-300
                  ${
                    activeLink === link
                      ? "bg-white text-black font-medium shadow-md"
                      : "text-black/80 hover:text-black"
                  }
                `}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => scrollToSection("FAQs")}
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
