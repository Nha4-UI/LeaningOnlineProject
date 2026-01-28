/** @format */

import React from "react";

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
          <span className="text-sm text-blue-500 font-medium my-1">
            {subtitle}
          </span>
          <p className="line-clamp-1 text-xl font-bold my-1">
            {title}
          </p>
          <span className="text-sm text-gray-600">{instructor}</span>

          <div className="flex items-center justify-between mt-2 my-1">
            <h4 className="font-medium">
              ⭐{rating}{" "}
              <span className="text-sm text-gray-500 font-normal">({reviews})</span>
            </h4>
            <span className="text-lg font-bold text-blue-500">${price}</span>
          </div>
          <button className="w-full bg-blue-500 text-white mt-4 py-3 mb-5 rounded-lg hover:bg-blue-600 transition duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </>
  );
};

export default card;
