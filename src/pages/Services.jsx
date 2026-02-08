import React, { useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { IoColorFilterOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { SiUpcloud } from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import { VscDebugBreakpointData } from "react-icons/vsc";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  const service = [
    {
      id: 1,
      icon: <FaCode className="w-12 h-12" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies and best practices.",
      features: [
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance",
        "Secure & Scalable",
      ],
      color: "from-red-500 to-cyan-500",
    },
    {
      id: 2,
      icon: <IoPhonePortraitOutline className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android devices.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      color: "from-blue-300 to-blue-400",
    },
    {
      id: 3,
      icon: <IoColorFilterOutline className="w-12 h-12" />,
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive user interfaces that provide exceptional user experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 4,
      icon: <SlGraph className="w-12 h-12" />,
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions to grow your online presence and reach your audience.",
      features: [
        "SEO Strategy",
        "Content Marketing",
        "Social Media",
        "Analytics",
      ],
      color: "from-pink-500 to-emerald-500",
    },
    {
      id: 5,
      icon: <MdOutlineSecurity className="w-12 h-12" />,
      title: "Cybersecurity",
      description:
        "Protect your business with comprehensive security solutions and risk management.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Data Protection",
        "Compliance",
      ],
      color: "from-amber-500 to-blue-500",
    },
    {
      id: 6,
      icon: <SiUpcloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and services for modern business needs.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Auto Scaling",
        "24/7 Support",
      ],
      color: "from-green-500 to-blue-500",
    },
  ];

  return (
    <div className="w-[90%] p-6 m-4 md:max-w-6xl lg:max-w-7xl shadow-2xl mx-auto md:my-4 md:px-12 rounded-2xl">
      <div className="w-full bg-gray-50 rounded-2xl overflow-hidden">
        <div className="relative">
          <div
            data-aos="zoom-in"
            className="text-white md:h-[500px] rounded-lg shadow h-[350px] object-cover"
            style={{
              backgroundImage: `url("https://media.licdn.com/dms/image/v2/D4D12AQGJBYuJsYY2OQ/article-cover_image-shrink_720_1280/B4DZV_iPueHABk-/0/1741601439731?e=2147483647&v=beta&t=Cif1nos3N6niwSfKtlSpvFYCfRBI-mt_ePOw6oSaQDA")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "top",
            }}
          ></div>
          <div
            data-aos="fade-up"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
          >
            <h1 className="font-bold md:text-6xl text-4xl">Our Services</h1>
            <p className="md:text-2xl text-white text-sm">
              Comprehensive solutions tailored to help your business thrive in
              the digital age.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1px-2 py-1 gap-6 md:px-5 md:py-6 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:px-8 lg:py-6 lg:gap-8">
            {service.map((s, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 120}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 will-change-transform"
              >
                {/* card header */}
                <div className={`bg-gradient-to-r ${s.color} p-8 text-white`}>
                  <div className="flex items-center justify-center text-center mb-4 ">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl text-center text-white font-bold">
                    {s.title}
                  </h3>
                </div>

                {/* card body */}
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-6 sm:text-base">
                    {s.description}
                  </p>

                  <ul className="space-y-5">
                    {s.features.map((feature, index) => (
                      <li
                        key={index}
                        data-aos="fade-right"
                        data-aos-delay={index * 80}
                        className="flex items-start"
                      >
                        <VscDebugBreakpointData className="w-4 h-4 mr-3 mt-0.5 text-red-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600 sm:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* button */}
                  <button
                    data-aos="zoom-in-up"
                    className={`bg-gradient-to-r ${s.color} font-semibold text-white w-full mt-6 py-3 px-6 rounded-xl hover:opacity-85 transition-opacity duration-300`}
                  >
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="zoom-in-up"
          className="bg-gradient-to-t from-cyan-300 to-blue-400 rounded-lg shadow-lg text-white mt-8"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
            <h2
              data-aos="fade-down"
              className="text-3xl sm:text-4xl font-bold mb-4 "
            >
              Ready to Get Started?
            </h2>
            <p
              data-aos="fade-up"
              className="text-lg sm:text-xl mb-8 opacity-90"
            >
              Let's discuss how we can help transform your business
            </p>
            <button className="cursor-pointer hover:scale-105 transition-all duration-300 bg-white text-blue-600 font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full text-base sm:text-lg shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
