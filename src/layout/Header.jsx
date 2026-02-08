/** @format */

import React from "react";
import { RiMenu4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import noclogo from "../assets/images/noclogo.jpg";

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
            <img src={noclogo} alt="" className="h-full rounded-lg" />

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
                className="text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              />
            </div>

            <div
              className={`h-screen w-2/3 absolute top-16 right-0 backdrop-blur-3xl bg-gray-50/90 shadow-xl md:hidden transition-transform duration-300 ease-in-out 
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
              <div className="text-center text-2xl font-bold text-cyan-600">
                Explore
              </div>
              <div className="px-3 py-3.5 space-y-1.5">
                {menu.map((m) => (
                  <a
                    key={m.label}
                    href={m.href}
                    className="flex items-center space-x-3 px-3 py-3 rounded-md text-gray-700 hover:bg-blue-50 hover:text-cyan-600 transition-colors duration-200"
                  >
                    <span className="font-medium">{m.label}</span>
                  </a>
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
