import { ChevronRight, Subtitles, Target } from "lucide-react";
import React, { useEffect, useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaEyeLowVision, FaGraduationCap, FaStarHalf } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";
import { GoPeople, GoStarFill } from "react-icons/go";
import { IoMdQuote } from "react-icons/io";
import { LiaAwardSolid } from "react-icons/lia";
import { LuStar } from "react-icons/lu";
import { MdOutlineWorkHistory } from "react-icons/md";
import { RiSingleQuotesR } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const [activeTab, setActiveTab] = useState("mission");
  const highlights = [
    {
      id: 1,
      icon: <GoPeople className="w-6 h-6" />,
      bgIcon: "bg-purple-50",
      color: "text-purple-600",
      stat: "50K+",
      label: "Active Students",
      labelColor: "text-purple-600",
    },
    {
      id: 2,
      icon: <FiBookOpen className="w-6 h-6" />,
      bgIcon: "bg-pink-50",
      color: "text-pink-600",
      stat: "100+",
      label: "Courses",
      labelColor: "text-pink-600",
    },
    {
      id: 3,
      icon: <LiaAwardSolid className="w-6 h-6" />,
      bgIcon: "bg-cyan-50",
      color: "text-cyan-600",
      stat: "7+ Years",
      label: "Experience",
      labelColor: "text-cyan-600",
    },
    {
      id: 4,
      icon: <LuStar className="w-6 h-6" />,
      bgIcon: "bg-yellow-50",
      color: "text-yellow-500",
      stat: "4.9/5",
      label: "Student Rating",
      labelColor: "text-yellow-500",
    },
  ];

  const stories = [
    {
      id: 1,
      title: "Graduate Student",
      Subtitles: "Web Development",
      description:
        "The courses at NextOnline Courses taught exactly what employers are looking for. I was able to start my career as a developer only weeks after graduating.",
    },
    {
      id: 2,
      title: "Graduate Student",
      Subtitles: "UX/UI Design",
      description:
        "NextOnline Courses prepared me with real, job-ready skills. Thanks to the practical curriculum, I secured a developer position just weeks after finishing my studies.",
    },
    {
      id: 3,
      title: "Graduate Student",
      Subtitles: "Python for Data Science",
      description:
        "The curriculum at NextOnline Courses is perfectly aligned with industry needs. I landed a job as a developer just weeks after completing the course.",
    },
  ];

  return (
    <div className="w-[90%] p-5 m-4 md:max-w-6xl lg:max-w-7xl shadow-lg mx-auto md:my-4 md:p-8 rounded-2xl">
      <div className="px-5 pt-12" data-aos="fade-down">
        <div className="flex flex-col text-center py-10">
          <span className="bg-gradient-to-r from-cyan-200 to-lime-200 text-sm px-3 py-1 m-auto rounded-2xl font-semibold text-blue-700">
            NextOnline Courses
          </span>
          <h1 className=" text-3xl font-extrabold md:text-6xl w-[80%] m-auto my-4">
            Shaping the Next Generation of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-lime-500">
              IT Professionals
            </span>
          </h1>
          <p className="text-sm md:text-lg text-gray-600">
            Flexible, industry-focused programs designed to equip learners with
            practical IT skills for the digital future.
          </p>
          {/* button */}
          <div
            className="flex m-auto gap-4 mt-8 mb-6 md:mt-12 md:mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <button className="px-4 py-3 text-xs bg-linear-to-r from-cyan-400 to-lime-400 md:px-6 md:py-3 md:text-lg font-bold text-white rounded-tl-xl rounded-br-xl shadow-sm hover:scale-x-105 hover:shadow-lg transition-all duration-300">
              Browser Courses
            </button>{" "}
            <button className="px-4 py-3 text-xs bg-linear-to-r from-cyan-500 to-lime-500 border border-cyan-400 text-transparent bg-clip-text md:px-6 md:py-3 md:text-lg font-bold rounded-bl-xl rounded-tr-xl shadow-sm hover:scale-x-105 hover:shadow-lg transition-all duration-300">
              Our Jorney
            </button>
          </div>
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-gray-50 px-5" data-aos="fade-up" data-aos-delay="200">
        <div className="bg-gray-50 w-full relative">
          <div className="absolute w-full left-0 -top-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:px-8">
              {/* box */}
              {highlights.map((h) => (
                <div
                  data-aos="zoom-in"
                  data-aos-delay="150"
                  className="bg-white shadow-lg border border-gray-100 rounded-lg p-8 flex flex-col items-center justify-center"
                >
                  <div
                    className={`bg ${h.bgIcon} w-12 h-12 flex items-center justify-center text ${h.color} rounded-lg mb-4`}
                  >
                    {h.icon}
                  </div>
                  <h1 className="text-3xl font-bold">{h.stat}</h1>
                  <span className={`font-semibold text ${h.labelColor}`}>
                    {h.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tab section */}
        <div
          className="max-w-5xl pt-230 mx-auto md:px-6 md:pt-120 md:pb-20 lg:pt-60"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-10 bg-gray-100 p-1.5 rounded-xl w-fit mx-auto">
            {["mission", "vision", "story"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 md:px-7 md:py-3 rounded-lg font-medium text-sm capitalize transition-all duration-300 ${
                  activeTab === tab
                    ? "border-b-2 border-cyan-500 bg-gray-200 text-cyan-500 shadow-sm"
                    : "text-green-500 hover:text-cyan-500 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Activetab section */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 min-h-100">
            {activeTab === "mission" && (
              <div
                data-aos="fade-right"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <BiDonateHeart className="text-4xl bg-cyan-100 rounded-xl h-14 w-14 p-3 text-cyan-500" />
                  <h2 className="text-3xl font-bold text-cyan-600">
                    Our Mission
                  </h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed italic">
                  "Empowering minds through accessible and innovative learning,
                  we strive to bring high-quality education to everyone,
                  everywhere. Our mission is to break down barriers to
                  knowledge, unlock individual potential, and create meaningful
                  opportunities for personal growth and professional success."
                </p>
              </div>
            )}
            {activeTab === "vision" && (
              <div
                data-aos="fade-left"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <FaEyeLowVision className="text-4xl bg-green-100 rounded-xl h-14 w-14 p-3 text-green-500" />
                  <h2 className="text-3xl font-bold text-green-600">
                    Our Vision
                  </h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed italic">
                  "Our vision is to be the most trusted hub for digital talent,
                  giving everyone the opportunity to begin from zero and grow
                  into a highly skilled professional. We believe quality
                  technical education should be accessible to all, not limited
                  by background or privilege."
                </p>
              </div>
            )}
            {activeTab === "story" && (
              <div
                data-aos="fade-up"
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                <div className="flex items-center gap-4 mb-8">
                  <MdOutlineWorkHistory className="text-4xl bg-red-100 rounded-xl h-14 w-14 p-3 text-red-500" />
                  <h2 className="text-3xl font-bold text-red-600">Our Story</h2>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed italic">
                  NextOnline Courses was created to bridge the gap between
                  academic knowledge and real-world technology skills. We focus
                  on practical, hands-on training that prepares learners for the
                  demands of the digital industry. From day one, our mission has
                  been to empower future developers and professionals with
                  accessible, high-quality online education.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="py-10 mt-5">
        <div
          className="mx-auto px-4 md:px-8"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1 className="font-bold text-3xl md:text-4xl text-center mb-14 mt-6">
            Success Stories
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            {stories.map((s, i) => (
              <div
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                className="bg-white shadow-sm border border-gray-100 overflow-hidden rounded-xl px-7 py-6 hover:shadow-lg hover:border-b-2 hover:border-b-cyan-300 duration-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center">
                    {" "}
                    <FaGraduationCap className="text-cyan-700 text-3xl" />{" "}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">
                      {s.title}
                    </p>
                    <p className="text-cyan-500 font-medium text-xs">
                      {s.Subtitles}
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-6 italic">"{s.description}"</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-300 text-lg">
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <GoStarFill />
                    <FaStarHalf />
                  </div>
                  <RiSingleQuotesR className="text-cyan-700 text-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto py-10 md:px-6 md:py-20" data-aos="fade-up" data-aos-delay="500">
        <div className="bg-linear-to-l from-cyan-300 to-blue-300 w-full text-center p-12 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute -bottom-40 right-0 w-64 h-64 bg-sky-500 rounded-full shadow-2xl -mr-32 -mt-32" />
            <div className="absolute -top-40 left-0 w-64 h-64 bg-indigo-500 rounded-full shadow-2xl -ml-32 -mb-32" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            Ready to start learning and build your future today?
          </h2>
          <p className="text-gray-100 mb-7 text-sm md:text-lg max-w-xl mx-auto">
            Become part of 50,000+ students growing their skills and stepping
            into the future of tech.
          </p>
          <button className="bg-white text-cyan-500 px-6 py-3 md:px-7 md:py-4 rounded-xl font-bold text-sm md:text-lg hover:scale-x-105 transition-all duration-200 flex items-center gap-2 mx-auto">
            Begin Now <ChevronRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
