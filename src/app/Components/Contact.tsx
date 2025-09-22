// components/SolarConsultForm.tsx
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#000B57] text-white px-6 py-12">
      <div className="max-w-lg mb-10 lg:mb-0 lg:mr-20">
        <h1 className="text-[32px] lg:text-[44px] font-bold leading-tight mb-4">
          Schedule a <span className="text-[#F9820C]">FREE consultation</span>
          <br /> with us today!
        </h1>
        <p className="text-base text-gray-300">
          Get genuine advice from our solar experts.
          <br />
          No pressure, book only if you are satisfied!
        </p>
      </div>

      <form className="bg-white text-black rounded-xl shadow-md p-8 w-full max-w-md space-y-5">
        <div>
          <label className="block font-medium text-sm mb-1">Full Name *</label>
          <input
            type="text"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">
            WhatsApp number *
          </label>
          <input
            type="tel"
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-2">
            Monthly Electricity Bill *
          </label>
          <div className="grid grid-cols-2 gap-2">
            {[
              "Less than ₹1500",
              "₹1500 – ₹2500",
              "₹2500 – ₹4000",
              "₹4000 – ₹8000",
              "More than ₹8000",
            ].map((option) => (
              <button
                key={option}
                type="button"
                className="bg-gray-100 text-xs border border-gray-300 rounded-md px-2 py-2 hover:bg-blue-100"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block font-medium text-sm mb-1">Pin code *</label>
            <input
              type="text"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium text-sm mb-1">City</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div className="flex items-start space-x-2 text-sm">
          <input type="checkbox" required className="mt-1" />
          <p>
            I agree to Gayatri Solar{" "}
            <a href="#" className="text-[#F9820C] underline">
              terms of service
            </a>{" "}
            &{" "}
            <a href="#" className="text-[#F9820C] underline">
              privacy policy
            </a>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-[#F9820C] text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
