"use client";

import React, { useState } from "react";

export default function OnGriddata() {
  const [activeTab, setActiveTab] = useState("Residential");

  const tabs = ["Residential", "Housing Society", "Commercial"];

  return (
    <section className="w-full px-4 py-10 bg-white md:px-18">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C]">
            What is an On-Grid Solar System?
          </h2>
          <p className="leading-relaxed">
            An on-grid solar system, also called a grid-tied solar system, is
            connected directly to the electricity grid. It generates solar power
            during the day, powers your home, and sends any excess electricity
            back to the grid for credits through net metering. At night or on
            cloudy days, electricity is drawn from the grid as needed.
          </p>
          <p>
            On-grid Solar: Connected to the grid, no batteries required, helps
            reduce electricity bills and ensures clean, renewable energy usage.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C]">
            Components of an On-Grid Solar System
          </h2>
          <p className="leading-relaxed">
            Every on-grid solar system includes several essential components
            that work together to generate and deliver electricity efficiently:
          </p>

          {/* Components */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Solar Panels</h3>
              <p>
                Solar panels absorb sunlight and convert it into direct current
                (DC) electricity. They are typically installed on rooftops
                facing the sun for maximum efficiency.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Solar Inverter</h3>
              <p>
                The inverter converts DC electricity from the panels into
                alternating current (AC), which is suitable for home appliances.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">3. Mounting Structures</h3>
              <p>
                Mounting structures securely hold the solar panels in place,
                ensuring they withstand weather conditions like wind and rain.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Solar Accessories</h3>
              <p>
                Accessories include cables, connectors, combiner boxes, and
                earthing strips to ensure safe and efficient operation of the
                system.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Bi-directional Meter</h3>
              <p>
                Also called a net meter, it measures electricity exported to and
                imported from the grid. Net metering helps reduce electricity
                bills by crediting excess power sent back to the grid.
              </p>
            </div>
          </div>

          {/* How it Works */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C] mt-8">
            How Does an On-Grid Solar System Work?
          </h2>
          <p className="leading-relaxed">
            Here’s a step-by-step process of how sunlight is converted into
            usable electricity in an on-grid system:
          </p>
          <ul className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <b>Solar Energy Capture:</b> Solar panels absorb sunlight and
              generate DC electricity.
            </li>
            <li>
              <b>DC-to-AC Conversion:</b> The inverter converts DC into AC for
              household use.
            </li>
            <li>
              <b>Home Usage:</b> Solar AC power runs your appliances during the
              day.
            </li>
            <li>
              <b>Net Metering:</b> Excess electricity is exported to the grid
              for credits.
            </li>
            <li>
              <b>Grid Backup:</b> At night or when solar production is low,
              electricity is drawn from the grid.
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C] mt-8">
            Advantages of On-Grid Solar
          </h2>
          <ul className="list-disc list-inside ml-4 space-y-2">
            <li>
              Reduces electricity bills by using solar energy and exporting
              excess to the grid.
            </li>
            <li>
              Lower upfront cost compared to off-grid systems as no batteries
              are required.
            </li>
            <li>
              Environmentally friendly, reduces dependence on fossil fuels.
            </li>
            <li>Minimal maintenance required due to fewer components.</li>
          </ul>

          {/* tables */}
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-3xl font-bold text-[#F9820C]">
              Solar Subsidy For On-grid System
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Indian government offers a subsidy when you install an on-grid
              solar system for home. This subsidy remains the same for all
              states in India.
            </p>

            {/* Central Subsidy Table */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm text-black">
                <thead className="bg-gray-100 text-black font-semibold">
                  <tr>
                    <th className="px-4 py-2 border">Solar System Size</th>
                    <th className="px-4 py-2 border">
                      Subsidy Offered Under PM Surya Ghar Muft Bijli Yojana
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">1 kWp</td>
                    <td className="px-4 py-2 border">₹30,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">2 kWp</td>
                    <td className="px-4 py-2 border">₹60,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">3 kWp and higher</td>
                    <td className="px-4 py-2 border">₹78,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-black">
              *Subsidy is capped at ₹78,000 for on-grid rooftop solar systems 3
              kWp or higher.
            </p>

            {/* UP State Subsidy */}
            <p className="text-black">
              Did you know? The state government of UP offers an additional
              subsidy to homeowners on top of the central subsidy.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm text-black">
                <thead className="bg-gray-100 text-black font-semibold">
                  <tr>
                    <th className="px-4 py-2 border">
                      On-grid Solar System Size
                    </th>
                    <th className="px-4 py-2 border">
                      Subsidy (All States Except UP)
                    </th>
                    <th className="px-4 py-2 border">Total Subsidy in UP</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">1 kWp</td>
                    <td className="px-4 py-2 border">₹30,000</td>
                    <td className="px-4 py-2 border">₹45,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">2 kWp</td>
                    <td className="px-4 py-2 border">₹60,000</td>
                    <td className="px-4 py-2 border">₹90,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">3–10 kWp</td>
                    <td className="px-4 py-2 border">₹78,000</td>
                    <td className="px-4 py-2 border">₹1,08,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Price Estimates Section */}
            <h3 className="text-2xl font-bold text-[#F9820C]">
              On-Grid Solar System Price in India in 2025
            </h3>
            <p className="text-gray-700">
              The solar system price in India is not fixed. It changes based on
              city, system size, DISCOM charges, product variant, panel type,
              inverter type, mounting structure, after-sales service, and more.
            </p>

            {/* 2kW Price Table */}
            <h4 className="text-lg font-semibold text-black mt-6">
              2 kW Solar System Price (2025)
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 text-sm text-black">
                <thead className="bg-gray-100 text-gray-900 font-semibold">
                  <tr>
                    <th className="px-4 py-2 border">City</th>
                    <th className="px-4 py-2 border">Price Without Subsidy</th>
                    <th className="px-4 py-2 border">Subsidy</th>
                    <th className="px-4 py-2 border">Price With Subsidy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">Pune</td>
                    <td className="px-4 py-2 border">₹1,75,000</td>
                    <td className="px-4 py-2 border">₹60,000</td>
                    <td className="px-4 py-2 border">₹1,15,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Lucknow (UP)</td>
                    <td className="px-4 py-2 border">₹1,80,000</td>
                    <td className="px-4 py-2 border">₹90,000</td>
                    <td className="px-4 py-2 border">₹90,000</td>
                  </tr>
                  {/* Add other cities similarly */}
                </tbody>
              </table>
            </div>

            {/* Repeat the same table structure for 3 kW, 4 kW, 5 kW */}
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-5 shadow-lg bg-white p-6 rounded-xl self-start">
          <h3 className="text-lg font-semibold text-[#F9820C] mb-4">
            Book a FREE Solar Consultation
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            And save up to ₹78,000 with subsidy
          </p>

          {/* Tabs */}
          <div className="flex space-x-2 mb-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-2 text-sm rounded-md border transition ${
                  activeTab === tab
                    ? "bg-[#Fff] text-[#F9820C]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4">
            {/* Full Name (Always Visible) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Housing Society Extra Field */}
            {activeTab === "Housing Society" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name of Housing Society *
                </label>
                <input
                  type="text"
                  placeholder="Enter your society name"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            )}

            {/* WhatsApp Number (Always Visible) */}
            <div>
              <label className="block text-sm font-medium mb-1">
                WhatsApp number *
              </label>
              <input
                type="text"
                placeholder="Enter your number"
                className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Pin Code (Visible in Residential + Commercial only) */}
            {activeTab !== "Housing Society" && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Pin code *
                </label>
                <input
                  type="text"
                  placeholder="Enter your pincode"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            )}

            {/* AGM Approval Status (Only for Housing Society) */}
            {activeTab === "Housing Society" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  AGM Approval Status *
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {[
                    "We have approval",
                    "We do not have approval",
                    "We want help with approval",
                  ].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className="text-xs border rounded-md px-2 py-2 bg-gray-50 hover:bg-blue-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Monthly Bill (Visible in Residential + Commercial only) */}
            {activeTab !== "Housing Society" && (
              <div>
                <label className="block text-sm font-medium mb-2">
                  What is your average monthly bill? *
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
                      className="text-xs border rounded-md px-2 py-2 bg-gray-50 hover:bg-blue-100"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button className="w-full bg-[#F9820C] text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition">
              Get Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
