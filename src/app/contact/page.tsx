"use client";

import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
  });
  const [status, setStatus] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.mobile.trim()) {
      setError("Please fill in your mobile number.");
      return;
    } else {
      setError("");
    }

    setStatus("Sending...");
    setShowMessage(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", mobile: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred. Please try again.");
    }

    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <section className="relative w-full h-96 md:h-[500px] bg-gray-800">
        <Image
          src="/pg.jpg"
          alt="Services Banner"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
        </div>
      </section>
      <div className="justify-between md:px-8 px-4 mt-10 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
          <div className="w-full md:w-1/2 md:px-6 md:m-5">
            <h2 className="text-3xl font-semibold mb-9 text-center">
              Contact Us
            </h2>

            {showMessage && (
              <div className="mb-4 p-3 text-white rounded-md text-center transition-opacity bg-green-600 animate-fade">
                {status}
              </div>
            )}

            {error && (
              <div className="mb-4 p-3 text-white bg-red-500 rounded-md text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
              />
              <input
                type="text"
                name="mobile"
                placeholder="Your Mobile Number"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Your Message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100"
              ></textarea>
              <button
                type="submit"
                className="w-full p-3 bg-[#F9820C] text-white rounded-md hover:bg-black"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="w-full md:w-1/2">
            <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.657218480835!2d77.05630497540484!3d28.42959829326745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1907e786f627%3A0x3a018b67571a0ec7!2sSaavi%20Hotel%20Sector%2046!5e0!3m2!1sen!2sin!4v1738749967763!5m2!1sen!2sin"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen={true}
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
          </div>
        </div>

        <div className="mt-6 flex md:px-20 flex-col md:flex-row md:py-20 mb-6">
          <div className="flex basis-1/3 items-center mt-3 md:justify-center space-x-3 text-gray-700">
            <div className="bg-[#F9820C] p-4 text-white rounded-full text-2xl">
              <FaPhoneAlt />
            </div>
            <span>+91-9630095045,+91-7000909594</span>
          </div>
          <div className="flex items-center basis-1/3 space-x-3 mt-3 md:justify-center text-gray-700">
            <div className="bg-[#F9820C] p-4 text-white rounded-full text-2xl">
              <FaEnvelope />
            </div>
            <span>gayatriconstruction.com</span>
          </div>
          <div className="flex items-center basis-1/3 space-x-3 mt-3 justify-center text-gray-700">
            <div className="bg-[#F9820C] p-4 text-white rounded-full text-2xl">
              <FaMapMarkerAlt />
            </div>
            <span>
              Ward No. 14, Mahaveer Colony, Palera, Dist. Tikamgarh (M.P.) -
              472221
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
