/** @format */

import React from "react";
import { GiStarFormation } from "react-icons/gi";
import { RiStarFill } from "react-icons/ri";

const card = ({title,image,price,rating,instructor,reviews,subtitle}) => {
  return (
    <>

      {/* Course Card 1 */}
      <div className="bg-gray-50 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition duration-200 h-[450px]">
        <div className="w-full h-2/4">
          <img
            src= {image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-2 h-2/4">
          <span className="text-sm text-cyan-500 font-medium my-1">
            {subtitle}
          </span>
          <p className="line-clamp-1 text-xl font-bold my-1">
            {title}
          </p>
          <span className="text-sm text-gray-600">{instructor}</span>

          <div className="flex items-center justify-between mt-2 my-1">
            <h4 className="font-medium flex justify-center items-center gap-1">
              <RiStarFill className="text-yellow-500"/>{rating}{" "}
              <span className="text-sm text-gray-500 font-normal">({reviews})</span>
            </h4>
            <span className="text-lg font-bold text-cyan-500">${price}</span>
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white mt-4 py-3 mb-5 rounded-lg hover:scale-x-105 transition-all duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default card;
