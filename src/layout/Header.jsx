/** @format */

import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo1 from "../assets/images/logo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menu = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Info", href: "/info" },
  ];

  return (
    <div className="bg-gray-50/70 sticky top-0 z-50 backdrop-blur-3xl ">
      <nav className=" shadow-lg">
        <div className="w-full md:max-w-6xl lg:max-w-[93%] mx-auto px-4 md:px-16">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img src={logo1} alt="" className="h-full rounded-lg" />

            {/* Nav Links */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {menu.map((m) => (
                <NavLink
                  key={m.label}
                  to={m.href}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 border-b-2  transition-all duration-300 ${
                      isActive
                        ? " border-b-cyan-600 text-cyan-600 hover:text-cyan-700 hover:border-b-cyan-700"
                        : "border-b-transparent text-gray-700 hover:text-cyan-600 hover:border-b-cyan-500"
                    }`
                  }
                >
                  <span className="font-medium">{m.label}</span>
                </NavLink>
              ))}
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden h-16 flex items-center">
              <RiMenu4Line
                className="text-2xl cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>

            {/* Mobile Menu */}
            <div
              className={`fixed top-0 right-0 h-screen w-2/3 bg-gray-50/90 backdrop-blur-3xl shadow-xl md:hidden transform transition-transform duration-300 ease-in-out
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="flex justify-between items-center px-4 py-5 border-b border-gray-200">
                <span className="text-2xl font-bold text-cyan-600">
                  Explore
                </span>
                <button
                  className="text-2xl text-gray-700"
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className="px-3 py-4 space-y-2 flex flex-col">
                {menu.map((m) => (
                  <NavLink
                    key={m.label}
                    to={m.href}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-cyan-600 transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-100 text-cyan-700 font-semibold"
                          : ""
                      }`
                    }
                    onClick={() => setMenuOpen(false)} // close menu on click
                  >
                    {m.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
