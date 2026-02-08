import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/data";
import { Award, Clock, Globe, Star, Users } from "lucide-react";

const Detail = () => {
  const { id } = useParams();
  console.log(typeof id);

  // const finding = courses.find((e) => e.id == id);
  // console.log(finding);
  const course = courses.find((e) => e.id === Number(id));

  if (!course) return <h1>Not found!</h1>;

  return (
    <div className="w-[90%] p-5 m-4 md:max-w-6xl lg:max-w-7xl shadow-lg mx-auto md:my-2 md:p-12 rounded-2xl">
      <div className="w-full rounded-2xl bg-gray-50 overflow-hidden">
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-[300px] md:h-[500px] object-cover rounded-t-xl "
          />
          <div className="absolute bottom-3 left-3 md:bottom-4 md:left-6">
            <span className="bg-red-600 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-full">
              {course.subtitles}
            </span>
          </div>
        </div>
        <div className="p-4 md:p-8">
          <h2 className="text-lg md:text-3xl font-bold text-slate-900 mb-3">
            {course.title}
          </h2>

          <p className=" text-sm md:text-lg text-slate-700 mb-6">
            {course.description}
          </p>

          <div className="flex items-center gap-6 mb-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-900">
                {course.rating}
              </span>
              <span className="text-slate-600 animate-pulse">rating</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Users className="w-5 h-5" />
              <span>{course.reviews}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-2 mb-4 md:p-6 md:mb-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-slate-600 mb-1">
                  Instructor
                </p>
                <p className="text-sm md:text-xl font-bold text-slate-900">
                  {course.instructor}
                </p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Globe className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                  <p className="text-xs md:text-sm text-slate-700">
                    {course.subtitles}
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-6 h-6 text-slate-600 mx-auto mb-1" />
                  <p className="text-xs md:text-sm text-slate-700">
                    Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div>
              <p className="text-xs md:text-sm text-slate-600">Price</p>
              <span className="text-2xl md:text-4xl font-bold text-cyan-500">
                ${course.price}
              </span>
            </div>
            <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:scale-105 text-white font-bold px-4 py-2 md:px-8 md:py-4 rounded-lg transition-all duration-200 text-lg">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
      {/* {finding["title"]} || {finding["instructor"]} */}
    </div>
  );
};

export default Detail;
