/** @format */

import React, { useEffect } from "react";
import {
  IoIosArrowForward,
  IoIosBookmarks,
  IoIosMusicalNote,
  IoIosTimer,
} from "react-icons/io";
import { VscDebugStart } from "react-icons/vsc";
import Card from "../components/card";
import { courses } from "../data/data";
import { BsPeople } from "react-icons/bs";
import { TbCertificate2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { LuCodepen } from "react-icons/lu";
import {
  MdMonochromePhotos,
  MdOutlineBusinessCenter,
  MdPeopleAlt,
} from "react-icons/md";
import { IoColorFilterOutline } from "react-icons/io5";
import { SlGraph } from "react-icons/sl";
import { GiStarsStack } from "react-icons/gi";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const categorie = [
    {
      id: 1,
      icon: <LuCodepen className="text-cyan-500" />,
      title: "Development",
      titleColor: "text-cyan-800",
      coures: "120 Courses",
    },
    {
      id: 2,
      icon: <MdOutlineBusinessCenter className="text-green-500" />,
      title: "Business",
      titleColor: "text-green-800",
      coures: "80 Courses",
    },
    {
      id: 3,
      icon: <IoColorFilterOutline className="text-red-500" />,
      title: "Design",
      titleColor: "text-red-800",
      coures: "60 Courses",
    },
    {
      id: 4,
      icon: <SlGraph className="text-yellow-500" />,
      title: "Marketing",
      titleColor: "text-yellow-800",
      coures: "90 Courses",
    },
    {
      id: 5,
      icon: <MdMonochromePhotos className="text-blue-500" />,
      title: "Photography",
      titleColor: "text-blue-800",
      coures: "40 Courses",
    },
    {
      id: 6,
      icon: <IoIosMusicalNote className="text-purple-500" />,
      title: "Music",
      titleColor: "text-purple-800",
      coures: "60 Courses",
    },
  ];
  return (
    <div className="w-[90%] p-5 m-4 md:max-w-6xl lg:max-w-7xl shadow-lg mx-auto md:my-4 md:p-8 rounded-2xl">
      <div className="bg-gray-50 rounded-xl">
        <div
          data-aos="zoom-in-up"
          className="bg-gradient-to-t from-cyan-400 to-blue-500 w-full flex md:px-8 md:py-7 gap-3 rounded-lg flex-col md:flex-row items-center justify-between px-4 py-11"
        >
          <div className="w-full md:w-full lg:w-3/5">
            <h1
              data-aos="fade-down-right"
              className="text-5xl md:text-7xl font-bold text-gray-50"
            >
              {" "}
              Learn Without Limits
            </h1>

            <p
              data-aos="fade-down-right"
              data-aos-delay="150"
              className="text-lg md:text-xl text-gray-50 mt-4"
            >
              Start, switch, or advance your career with thousands of courses,
              Professional Certificates, and degrees from world-class
              universities and companies.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col md:flex-row gap-4 md:gap-7 mt-6 md:mb-14 items-center"
            >
              <button className="flex items-center gap-1 px-20 md:px-6 py-3 bg-gray-50 text-cyan-500 rounded-md text-lg font-medium hover:bg-gray-200 transition duration-300">
                Get Started
                <IoIosArrowForward className="text-xl" />
              </button>

              <button className="flex items-center gap-1 px-18 md:px-6 py-3 bg-transparent border border-gray-50 text-gray-50 rounded-md text-lg font-medium hover:bg-gray-50 hover:text-cyan-500 transition duration-300">
                <VscDebugStart className="text-xl" />
                Watch Demo
              </button>
            </div>
          </div>

          <div className="w-full md:w-full lg:w-2/5 md:py-11 md:mx-8 md:px-2 mt-8 md:mt-0">
            <div
              data-aos="fade-left"
              className="w-full bg-gray-50 h-full rounded-2xl"
            >
              <div className="py-13 px-11">
                <div
                  data-aos="fade-up"
                  className="flex items-center gap-4 mb-8"
                >
                  <span className="p-2 rounded-full bg-blue-300 text-white text-2xl w-12 h-12 flex items-center justify-center">
                    <IoIosBookmarks className="text-blue-500" />
                  </span>
                  <div>
                    <h4>500+ Courses</h4>
                    <p className="text-sm text-blue-500">Available now</p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  className="flex items-center gap-4 mb-8"
                >
                  <span className="p-2 rounded-full bg-purple-200 text-white text-2xl w-12 h-12 flex items-center justify-center">
                    <MdPeopleAlt className="text-purple-500" />
                  </span>
                  <div>
                    <h4>50K+ Students</h4>
                    <p className="text-sm text-blue-500">Join our community</p>
                  </div>
                </div>

                <div data-aos="fade-up" className="flex items-center gap-4">
                  <span className="p-2 rounded-full bg-cyan-200 text-white text-2xl w-12 h-12 flex items-center justify-center">
                    <GiStarsStack className="text-cyan-500" />
                  </span>
                  <div>
                    <h4>4.8 Rating</h4>
                    <p className="text-sm text-blue-500">From 10K+ reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat Section */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="grid grid-cols-2 py-11 md:grid-cols-4 md:px-6 md:py-7 gap-3"
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-500">50K+</h1>
            <span className="text-sm">Active Students</span>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-500">500+</h1>
            <span className="text-sm">Online Courses</span>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-500">100+</h1>
            <span className="text-sm">Expert Instructors</span>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-500">98%</h1>
            <span className="text-sm">Success Rate</span>
          </div>
        </div>
      </div>

      {/* Explore Categories Section */}
      <div className="px-6 py-4">
        <div className="text-center py-10" data-aos="fade-up">
          <h1 className="text-3xl  md:text-4xl font-bold">
            Explore Top Categories
          </h1>
          <p className="text-sm md:text-lg mt-2 text-gray-700">
            Choose from hundreds of courses across different categories
          </p>
        </div>

        <div className="mx-auto max-w-6xl ">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-6 md:mt-8 mx-auto md:gap-x-7">
            {categorie.map((categorie, i) => (
              <div
                key={i}
                data-aos="flip-left"
                data-aos-delay={i * 80}
                className="text-center flex flex-col items-center justify-center bg-gray-50 shadow-md py-5 rounded-lg  border border-transparent hover:border-blue-500 cursor-pointer duration-200 hover:shadow-lg hover:rounded-lg"
              >
                <h1 className="text-4xl">{categorie.icon}</h1>
                <h2 className={`text-lg font-bold ${categorie.titleColor}`}>
                  {categorie.title}
                </h2>
                <span className="text-sm">{categorie.coures}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Courses Section */}
      <div className="pt-20 mt-14 bg-gray-50 p-6">
        <h1
          className="text-center font-bold text-3xl md:text-4xl"
          data-aos="fade-up"
        >
          Feature Courses
        </h1>
        <p className="text-center mb-10 md:text-lg mt-2.5 text-gray-700">
          Most popular courses chosen by our students
        </p>

        <div className="grid gap-4 md:grid-cols-2 md:mt-10 md:px-2 md:py-3 lg:grid-cols-3 xl:grid-cols-4 mb-6">
          {courses.map((c, i) => (
            <Link to={`/detail/${c["id"]} `}>
              <div data-aos="fade-up" data-aos-delay={i * 100}>
                <Card
                  title={c.title}
                  price={c.price}
                  image={c.image}
                  rating={c.rating}
                  reviews={c.reviews}
                  instructor={c.instructor}
                  subtitle={c.subtitles}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="pt-15">
        <div className="text-center">
          <h1 className="font-bold text-4xl" data-aos="fade-up">
            Why Choose NextOnline Courses?
          </h1>
          <p className="mt-3 text-gray-700" data-aos="fade-up">
            We provide the best learning experience for students worldwide.
          </p>
        </div>

        <div className="px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 md:px-2 md:py-3 mb-6">
            <div
              className="flex flex-col items-center text-center"
              data-aos="zoom-in"
            >
              <BsPeople className="text-5xl bg-blue-200 py-3 rounded-full text-blue-500" />
              <h2 className="font-bold text-lg mt-2">Expert Instructors</h2>
              <p className="mt-1 text-gray-700">
                Learn from industry professionals with years of experience.
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <IoIosTimer className="text-5xl bg-red-200 py-3 rounded-full text-red-500" />
              <h2 className="font-bold text-lg mt-2">Lifetime Access</h2>
              <p className="mt-1 text-gray-700">
                Access your courses anytime, anywhere, on any device.
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <TbCertificate2 className="text-5xl bg-lime-200 py-3 rounded-full text-lime-500" />
              <h2 className="font-bold text-lg mt-2">Certificates</h2>
              <p className="mt-1 text-gray-700">
                Earn certificates upon completion to boost your career.
              </p>
            </div>

            <div
              className="flex flex-col items-center text-center"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <BiSupport className="text-5xl bg-cyan-200 py-3 rounded-full text-cyan-500" />
              <h2 className="font-bold text-lg mt-2">24/7 Support</h2>
              <p className="mt-1 text-gray-700">
                Get help whenever you need it from our support team.
              </p>
            </div>
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="w-full h-76 mt-14 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl p-8 md:p-10 text-center flex flex-col items-center justify-center"
        >
          <h1 className="text-white text-4xl font-bold mb-3">
            Ready to Start Learning?
          </h1>
          <span className="text-white text-lg mb-4">
            Join thousands of students already learning with us on learning
            Online.
          </span>
          <button className="bg-gray-100 py-3 px-5 font-medium text-cyan-600 rounded-lg hover:shadow-xl hover:bg-gray-200 duration-200">
            Get Trail for Free 3days
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
