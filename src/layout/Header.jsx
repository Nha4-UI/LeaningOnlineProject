/** @format */

import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-50/95 sticky top-0 z-50 backdrop-blur-sm ">
      <nav className=" shadow-lg">
        <div className="max-w-7xl mx-auto px-4 ">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img
              src="src/assets/images/EtecLogo.jpg"
              alt=""
              className="h-full"
            />
            <div>
              <ul className="flex space-x-9">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Info</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
