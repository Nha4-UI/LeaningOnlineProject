/** @format */

import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-50 flex flex-col">
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-11">
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-7">
            {/* Info of company*/}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src="src/assets/images/EtecLogo.jpg"
                  alt=""
                  className="w-14 rounded-xl"
                />
                <span className="font-bold text-2xl text-white uppercase">
                  Etec center
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
                    className="text-sm bg-gray-800 items-center px-4 py-2 rounded-sm focus:outline-none"
                  />
                  <button className="bg-blue-500 font-bold px-4 py-2 text-sm text-white rounded-sm hover:bg-blue-600 duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
