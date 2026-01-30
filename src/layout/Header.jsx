/** @format */

import React from "react";
import { HiOutlineHome, HiOutlineInformationCircle } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/images/eteclogo.jpg";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="bg-gray-50/70 sticky top-0 z-50 backdrop-blur-3xl ">
      <nav className=" shadow-lg">
        <div className="w-full md:max-w-6xl lg:max-w-7xl mx-auto px-4 md:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <img src={logo} alt="" className="h-full" />

            {/* Nav Links */}
            <div className="hidden md:block">
              <ul className="flex space-x-9">
                <li>
                  <Link
                    to={"/"}
                    className="flex items-center gap-1.5 text-lg font-medium"
                  >
                    <HiOutlineHome className="text-xl" />
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/about"}
                    className="flex items-center gap-1.5 text-lg font-medium"
                  >
                    <IoPersonOutline className="text-xl" />
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/services"}
                    className="flex items-center gap-1.5 text-lg font-medium"
                  >
                    <LuSettings className="text-xl" />
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/contact"}
                    className="flex items-center gap-1.5 text-lg font-medium"
                  >
                    <MdOutlineMailOutline className="text-xl" />
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/info"}
                    className="flex items-center gap-1.5 text-lg font-medium"
                  >
                    <HiOutlineInformationCircle className="text-xl" />
                    Info
                  </Link>
                </li>
              </ul>
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
              <ul className="px-3 py-3.5 space-y-1.5">
                <li className="text-center py-3 font-bold text-3xl text-blue-900">
                  Menu
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 py-1.5 px-2 hover:bg-gray-200 duration-150 transition-all block"
                  >
                    <HiOutlineHome className="text-xl" />
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/about"}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 py-1.5 px-2 hover:bg-gray-200 duration-150 transition-all block"
                  >
                    <IoPersonOutline className="text-xl" />
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/services"}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 py-1.5 px-2 hover:bg-gray-200 duration-150 transition-all block"
                  >
                    <LuSettings className="text-xl" />
                    Services
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/contact"}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 py-1.5 px-2 hover:bg-gray-200 duration-150 transition-all block"
                  >
                    <MdOutlineMailOutline className="text-xl" />
                    Contact
                  </Link>
                </li>

                <li>
                  <Link
                    to={"/info"}
                    className="flex items-center gap-3 text-xl font-medium text-gray-800 py-1.5 px-2 hover:bg-gray-200 duration-150 transition-all block"
                  >
                    <HiOutlineInformationCircle className="text-xl" />
                    Info
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
