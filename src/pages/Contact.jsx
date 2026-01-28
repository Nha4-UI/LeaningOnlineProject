/** @format */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import groupPic from "../assets/images/Group-P1.jpg";
import { Repeat } from "lucide-react";

const Contact = () => {
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
  return (
    <div className="w-[90%] p-6 m-4 md:max-w-6xl lg:max-w-7xl shadow-2xl mx-auto md:my-4 md:p-8 rounded-2xl">
      <div className="bg-gray-100 w-full rounded-lg overflow-hidden">
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
          >
            <h1 className="font-bold text-3xl text-blue-500">Contact Us</h1>
            <p className="text-sm font-medium text-gray-100">
              We would love to hear from you.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 p-1 md:px-3 md:py-6 gap-11 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:w-[90%] mx-auto">
          <div className="px-3 py-2">
            <h1 className="text-blue-900 font-bold text-4xl">Get in touch</h1>
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

            <div className="mt-3 flex flex-col items-center md:flex-none md:items-start">
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
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg mx-auto">
            {/* Form will go here */}
            <h1 className="font-bold text-blue-800 text-4xl">Send a message</h1>
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
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="px-4 bg-gray-100 py-2.5 rounded-md"
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
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-3 w-full font-medium bg-blue-500 text-white px-4 py-2 cursor-pointer rounded-md hover:bg-blue-600 duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
