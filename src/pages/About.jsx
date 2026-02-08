import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import about_1 from "../assets/images/about1.jpg";
import instructor_1 from "../assets/images/instructor1.jpg";
import instructor_2 from "../assets/images/instructor2.jpg";
import instructor_3 from "../assets/images/instructor3.jpg";
import instructor_4 from "../assets/images/instructor4.jpg";
import { BiDonateHeart } from "react-icons/bi";
import {
  FaEyeLowVision,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { GiBookAura, GiTechnoHeart } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import { FaGlobeAsia } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  });
  const values = [
    {
      id: 1,
      icon: <GiTechnoHeart className="w-8 h-8 text-red-500" />,
      iconbg: "bg-red-200",
      txtColor: "text-red-800",
      title: "Passion for Learning",
      desc: "We believe education transforms lives and opens doors to endless possibilities.",
    },
    {
      id: 2,
      icon: <PiStudent className="w-8 h-8 text-cyan-500" />,
      iconbg: "bg-cyan-200",
      txtColor: "text-cyan-800",
      title: "Student-Centered",
      desc: "Every decision we make puts our students first, ensuring the best learning experience.",
    },
    {
      id: 3,
      icon: <GiBookAura className="w-8 h-8 text-green-500" />,
      iconbg: "bg-green-200",
      txtColor: "text-green-800",
      title: "Quality Excellence",
      desc: "We maintain the highest standards in course content, instruction, and support.",
    },
    {
      id: 4,
      icon: <FaGlobeAsia className="w-8 h-8 text-blue-500" />,
      iconbg: "bg-blue-200",
      txtColor: "text-blue-800",
      title: "Global Community",
      desc: "Building a diverse, inclusive community of learners from around the world.",
    },
  ];

  const instructor = [
    {
      id: 1,
      image: instructor_1,
      name: "Pok Panha",
      role: "Web Development",
      contact: [<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />],
    },
    {
      id: 2,
      image: instructor_2,
      name: "Sarah Lee",
      role: "Ux/Ui Designer",
      contact: [<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />],
    },
    {
      id: 3,
      image: instructor_3,
      name: "Jane Smith",
      role: "Pytho for Data Science",
      contact: [<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />],
    },
    {
      id: 4,
      image: instructor_4,
      name: "Emily Davis",
      role: "AI Engineer",
      contact: [<FaFacebookF />, <FaLinkedinIn />, <FaInstagram />],
    },
  ];

  return (
    <div className="w-[90%] p-0 m-4 md:max-w-6xl lg:max-w-7xl lg:px-0 lg:py-0 lg:m-auto lg:my-8 shadow-lg mx-auto md:my-4 md:p-8 rounded-2xl overflow-hidden">
      <div className="relative" data-aos="zoom-in">
        <img
          src={about_1}
          alt=""
          className="w-full h-64 object-cover opacity-75 rounded-lg"
        />
        <div
          className="absolute left-2/4 top-2/4 -translate-x-[50%] -translate-y-[50%] text-center "
          data-aos="fade-up"
        >
          <span className="text-2xl md:text-3xl font-bold text-cyan-500">
            About Us
          </span>
          <p className="text-xs md:text-sm text-cyan-50">
            Our online course is a leading IT training to provide high-quality
            education in web development, mobile applications, and modern
            technology skills.
          </p>
        </div>
      </div>

      {/* Mission and vision section */}
      <div className="px-6 mt-10 md:px-10">
        <div className="grid grid-cols-1 px-3 py-14 gap-9 md:grid-cols-1 lg:grid-cols-2 md:px-8 md:py-10 md:gap-12 bg-gray-50 rounded-lg">
          {/* Mission */}
          <div
            data-aos="fade-right"
            className="bg-white shadow-lg space-y-3 p-8 rounded-2xl"
          >
            <BiDonateHeart className="text-4xl bg-red-200 rounded-full h-14 w-14 p-3 text-red-500" />
            <h1 className="font-bold text-red-800 text-2xl md:text-3xl">
              Our Mission
            </h1>
            <p className="text-lg text-gray-700">
              Empowering minds through accessible and innovative learning, we
              strive to bring high-quality education to everyone, everywhere.
              Our mission is to break down barriers to knowledge, unlock
              individual potential, and create meaningful opportunities for
              personal growth and professional success.
            </p>
          </div>
          {/* Vision */}
          <div
            data-aos="fade-left"
            className="bg-white shadow-lg space-y-3 p-8 rounded-2xl"
          >
            <FaEyeLowVision className="text-4xl bg-cyan-200 rounded-full h-14 w-14 p-3 text-cyan-500" />
            <h1 className="font-bold text-cyan-800 text-2xl md:text-3xl">
              Our Vision
            </h1>
            <p className="text-lg text-gray-700">
              Our vision is to be the most trusted hub for digital talent,
              giving everyone the opportunity to begin from zero and grow into a
              highly skilled professional. We believe quality technical
              education should be accessible to all, not limited by background
              or privilege.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="px-6 my-12 md:px-10">
        <div data-aos="fade-up" className="text-center py-5">
          <h1 className="font-bold text-3xl md:text-4xl mb-2">
            Our Core Values
          </h1>
          <p className="md:text-lg text-gray-700">
            These principles guide everything we do and shape our commitment to
            our students.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-8 lg:py-4">
          {values.map((v, i) => (
            <div
              key={i}
              data-aos="flip-left"
              data-aos-delay={i * 100}
              className="bg-gray-50 flex flex-col gap-3 items-center justify-center px-6 py-8 text-center rounded-xl shadow-lg border hover:bg-white hover:scale-[1.02] border-transparent hover:border-cyan-600 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`text-4xl rounded-full h-14 w-14 p-3 ${v.iconbg} }`}
              >
                {v.icon}
              </div>
              <h3 className={`font-bold text-xl ${v.txtColor}`}>{v.title}</h3>
              <p className=" text-gray-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor */}
      <div className="px-6 my-16 md:px-10">
        <div data-aos="fade-up" className="text-center py-5">
          <h1 className="font-bold text-3xl md:text-4xl mb-2">Meet Our Team</h1>
          <p className="md:text-lg text-gray-700">
            Passionate professionals dedicated to transforming online education.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:px-8 lg:py-4">
          {instructor.map((instructor, i) => (
            <div
              key={i}
              data-aos="zoom-in-up"
              data-aos-delay={i * 100}
              className="bg-white shadow-xl rounded-lg overflow-hidden hover:shadow-2xl duration-200"
            >
              <div className="relative h-[75%]">
                <img
                  src={instructor.image}
                  alt=""
                  className="w-full object-cover h-full"
                />

                <div className="absolute top-full left-2/4 -translate-y-2/4 -translate-x-2/4">
                  <div className="bg-blue-300 w-52 h-20 md:w-46 md:h-15.75 rounded-lg shadow-sm text-white flex flex-col items-center justify-center">
                    <h1 className="font-bold text-white">{instructor.name}</h1>
                    <span className="text-xs font-bold text-yellow-300">
                      {instructor.role}
                    </span>
                  </div>
                </div>
              </div>

              <div className="h-[25%] w-full flex items-center justify-center pt-6">
                <ul className="flex gap-3">
                  {instructor.contact.map((contact) => (
                    <li className="bg-blue-100 h-11 w-11 text-blue-600 text-sm font-bold rounded-full md:h-8 md:w-8 flex items-center justify-center hover:shadow-lg duration-150">
                      {contact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        data-aos="zoom-in"
        className="py-16 bg-gradient-to-r from-blue-300 to-cyan-300 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Start your learning journey today and become part of something
            amazing.
          </p>
          <button
            data-aos="fade-up"
            data-aos-delay="200"
            className="px-8 py-4 bg-white text-cyan-600 rounded-lg font-semibold hover:scale-105 transition-all text-lg"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
