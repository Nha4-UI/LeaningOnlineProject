/** @format */

import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationCrosshairs,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import groupPic from "../assets/images/group.jpg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import Aos from "aos";
import "aos/dist/aos.css";
import { ChevronRight } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const formRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a6kj6wc",
        "template_krh438a",
        formRef.current,
        "HOG-9Pqkpnurjz6Gn",
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been sent successfully.",
            confirmButtonColor: "#3b82f6",
          });
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Failed to send the message. Please try again.",
            confirmButtonColor: "#ef4444",
          });
        },
      );
  };
  const center = {
    lat: 11.603273,
    lng: 104.909089,
  };
  return (
    <div className="w-[90%] p-6 m-4 md:max-w-6xl lg:max-w-7xl shadow-lg mx-auto md:my-4 md:p-8 rounded-2xl">
      <div
        className="bg-gray-50 w-full rounded-lg overflow-hidden"
        data-aos="zoom-in"
      >
        <div style={{ position: "relative", width: "100%", height: "400px" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${groupPic})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px)",
              zIndex: 0,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
            data-aos="fade-up"
          >
            <h1 className="font-bold text-3xl text-blue-500">Contact Us</h1>
            <p className="text-sm font-medium text-gray-100">
              We would love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 p-1 md:px-2 md:py-2 gap-11 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 md:w-[90%] mx-auto">
          <div data-aos="fade-right" className="px-3 py-2">
            <h1 className="text-blue-500 font-bold text-4xl">Get in touch</h1>
            <p className="text-sm mt-3 text-gray-600">
              We'd love to hear from you! Please fill out the form below and
              we'll get back to you as soon as possible.
            </p>
            <div className="border-t-2 border-b-2 border-gray-300 mt-6 py-6 px-3">
              {/* Location */}
              <div className="flex gap-4 items-center mb-2">
                <div className="bg-purple-500 h-8 w-8 flex items-center justify-center rounded-full text-white">
                  <FaLocationDot className="" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Location</h4>
                  <span className="text-sm">
                    123 Main Street, City, Country
                  </span>
                </div>
              </div>

              {/* Email us */}
              <div className="flex gap-4 items-center mb-2">
                <div className="bg-green-400 h-8 w-8 flex items-center justify-center rounded-full text-white">
                  <MdAttachEmail />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email us</h4>
                  <span className="text-sm">contact@example.com</span>
                </div>
              </div>

              {/* Call us */}
              <div className="flex gap-4 items-center">
                <div className="bg-red-400 h-8 w-8 flex items-center justify-center rounded-full text-white">
                  <IoCallSharp />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Call us</h4>
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div
              className="mt-3 flex flex-col items-center md:flex-none md:items-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h1 className="font-bold text-gray-800">
                Follow Our Social media
              </h1>
              <div className="flex gap-2 mt-2">
                <div className="bg-blue-400 h-8 w-8 flex items-center justify-center rounded-full text-white">
                  <FaFacebookF />
                </div>
                <div className="bg-red-400 h-8 w-8 flex items-center justify-center rounded-full text-white">
                  <FaInstagram />
                </div>
                <div className="bg-gray-400 h-8 w-8 flex items-center justify-center rounded-full text-white">
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-gray-50 p-8 rounded-lg shadow-lg mx-auto"
          >
            {/* Form will go here */}
            <h1 className="font-bold text-blue-500 text-4xl">Send a message</h1>
            <p className="text-sm my-3 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              officiis harum vitae voluptate error voluptatem quos? Culpa id.
            </p>

            <div>
              <form action="" ref={formRef} onSubmit={submit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 text-xs font-medium gap-y-2 ">
                  <div className="flex flex-col">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3 text-sm font-medium">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="px-4 bg-gray-100 py-1.5 rounded-md"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full font-medium bg-linear-to-l from-cyan-400 to-blue-500 text-white px-4 py-2 cursor-pointer rounded-md hover:scale-[1.02] duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div
          data-aos="fade-up"
          className="bg-slate-300/20 shadow-sm mt-12 md:px-10 py-8 rounded-xl text-center"
        >
          <div className="mb-8 text-center">
            <h1 className="uppercase text-5xl font-extrabold text-transparent bg-linear-to-b from-cyan-400 to-blue-500 bg-clip-text">
              Location
            </h1>
            <span className="font-medium mt-2 flex justify-center gap-2 items-center text-cyan-500">
              <FaLocationCrosshairs />
              Phnom Penh, Cambodia
            </span>
          </div>
          <div className="shadow-[0_0_15px_cyan] border-2 border-blue-400 h-100 w-full overflow-hidden rounded-2xl">
            <LoadScript googleMapsApiKey="AIzaSyDckyeNoVj2mN--WPTQ3S8LItZBmCVa2cs">
              <GoogleMap
                mapContainerStyle={{
                  width: "100%",
                  height: "400px",
                }}
                center={center}
                zoom={20}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>

        <div
          className="py-10 md:px-6 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="bg-blue-300 w-full text-center p-12 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <div className="absolute -bottom-40 right-0 w-64 h-64 bg-sky-500 rounded-full shadow-2xl -mr-32 -mt-32" />
              <div className="absolute -top-40 left-0 w-64 h-64 bg-indigo-500 rounded-full shadow-2xl -ml-32 -mb-32" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
              Need Help Right Away?
            </h2>
            <p className="text-gray-100 mb-7 text-sm md:text-lg max-w-xl mx-auto">
              Our team is here 24/7 to support you whenever you need us.
            </p>
            <button className="bg-white text-blue-500 px-6 py-3 md:px-7 md:py-3 rounded-xl font-bold text-sm md:text-lg hover:scale-x-105 transition-all duration-200 flex items-center gap-2 mx-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
