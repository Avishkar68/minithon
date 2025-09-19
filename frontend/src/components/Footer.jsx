import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-serif mb-4">PEACEREST</h2>
          <p>
            Inspired to offer the most fulfilling luxury living,
            PeaceRest is built for your perfect holiday experience.
          </p>
        </div>

        {/* Discover */}
        <div>
          <h4 className="text-white font-semibold mb-4">Discover</h4>
          <ul className="space-y-2">
            <li>Rooms</li>
            <li>Suites</li>
            <li>Accommodations</li>
            <li>Experiences</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p>Email: booking@peacerest.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Location: NY, USA</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © 2024 PEACEREST. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
