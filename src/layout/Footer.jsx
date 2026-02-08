/** @format */

import React from "react";
import { FaCcVisa, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from "../assets/images/noclogo.jpg";

const Footer = () => {
  return (
    <div className="bg-cyan-600 flex flex-col">
      {/* Footer */}
      <footer className="text-gray-300">
        <div className="w-full md:max-w-6xl lg:max-w-7xl mx-auto px-4 py-11">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-7">
            {/* Info of company*/}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={logo}
                  alt=""
                  className="w-14 rounded-xl bg-white"
                />
                <span className="font-bold text-xl text-white">
                  NextOnline Course
                </span>
              </div>
              <p className="text-sm">
                Empowering learners worldwide with high-quality online courses.
                Learn new skills, advance your career, and achieve your goals.
              </p>
              <div className="space-y-2">
                <div>
                  <span>learningonline@edu.center.com</span>
                </div>
                <div>
                  <span>+123-987-654-321</span>
                </div>
                <div>912 Learning Course St, Online City</div>
              </div>
            </div>
            {/* End of Info of company */}

            {/* Quiuk Link */}
            <div className="space-y-4">
              <h3 className="text-lg text-white font-bold mb-3.5">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Instuctor</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            {/* End of Quick Links */}

            {/* Categories */}
            <div className="space-y-4">
              <h3 className="text-lg text-white font-bold mb-3.5">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Mobile Development</a>
                </li>
                <li>
                  <a href="#">Data Science</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
              </ul>
            </div>
            {/* End of Categories */}

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg text-white font-bold mb-3.5">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Term of Service</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-3">
                <h4 className="font-bold text-white">
                  Subscribe to Newsletter
                </h4>
                <div className="flex flex-col sm:flex-row gap-2 mt-1">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="text-sm bg-cyan-800 items-center px-4 py-2 rounded-sm focus:outline-none"
                  />
                  <button className="bg-cyan-500 font-bold px-4 py-2 text-sm text-white rounded-sm hover:bg-cyan-600 duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            {/* End of Supported */}
          </div>
        </div>
      </footer>

      <div className="border-t border-slate-400 py-4 text-white">
        <div className="text-sm px-2 w-full gap-8 text-center md:max-w-6xl lg:max-w-7xl mx-auto grid md:grid-cols-3 md:gap-1 lg:grid-cols-2 xl:grid-cols-3 items-center lg:gap-16">
          <p>&copy; 2026 NextOnline Courses. All rights reserved.</p>
          <ul className="flex items-center justify-center space-x-2 lg:space-x-4 text-white">
            <li className="bg-cyan-800 rounded-full p-3 text-lg md:text-sm lg:text-lg hover:cursor-pointer hover:bg-cyan-900 duration-300">
              <FiFacebook />
            </li>

            <li className="bg-cyan-800 rounded-full p-3 text-lg md:text-sm lg:text-lg hover:cursor-pointer hover:bg-cyan-900 duration-300">
              <FiTwitter />
            </li>

            <li className="bg-cyan-800 rounded-full p-3 text-lg md:text-sm lg:text-lg hover:cursor-pointer hover:bg-cyane-900 duration-300">
              <FaInstagram />
            </li>

            <li className="bg-cyan-800 rounded-full p-3 text-lg md:text-sm lg:text-lg hover:cursor-pointer hover:bg-cyan-900 duration-300">
              <FaLinkedinIn />
            </li>

            <li className="bg-cyan-800 rounded-full p-3 text-lg md:text-sm lg:text-lg hover:cursor-pointer hover:bg-cyan-900 duration-300">
              <FiYoutube />
            </li>
          </ul>

          <ul className="flex items-center justify-center space-x-2 lg:space-x-4">
            <h4 className="text-sm text-gray-200">We Accept:</h4>

            <li className="bg-cyan-800 rounded-md text-sm md:text-xs lg:text-sm px-3 py-1 font-bold text-white hover:cursor-pointer">
              VISA
            </li>

            <li className="bg-cyan-800 rounded-md text-sm md:text-xs lg:text-sm px-3 py-1 font-bold text-white hover:cursor-pointer">
              MC
            </li>

            <li className="bg-cyan-800 rounded-md text-sm md:text-xs lg:text-sm px-3 py-1 font-bold text-white hover:cursor-pointer">
              AMEX
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
