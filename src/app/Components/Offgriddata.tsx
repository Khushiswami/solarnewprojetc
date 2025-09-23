"use client";

import React, { useState } from "react";

export default function OffGridSolar() {
  const [activeTab, setActiveTab] = useState("Residential");

  const tabs = ["Residential", "Housing Society", "Commercial"];

  return (
    <section className="w-full px-4 py-10 bg-white md:px-18">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C]">
            What is an Off-Grid Solar System?{" "}
          </h2>
          <p className="leading-relaxed">
            An off-grid solar system is a standalone solar power setup that
            generates and stores electricity independently, without relying on
            the public utility grid. It typically uses solar panels, batteries,
            a charge controller, and an inverter to provide reliable,
            self-sufficient power for homes, remote areas, or businesses.
          </p>
          <p>
            Off-Grid Solar: Independent, uses batteries, fully self-sufficient.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C]">
            What Are the On-Grid Solar System Components?
          </h2>
          <p className="leading-relaxed">
            Did you know? When maintained properly, an on-grid solar system can
            last for 25 years. Contrary to popular belief, cleaning your panels
            with sprinklers can actually damage them. To keep your system
            operating at its peak efficiency, be sure to sign up for
            professional after-sales services.
          </p>
          <p>
            Here’s a breakdown of how every single component in an on-grid solar
            system comes together to power your home:
          </p>

          {/* Components */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">1. Solar Panels</h3>
              <p>
                Solar panels are the most visible part of the solar system.
                Installed on rooftops facing the South, they absorb sunlight and
                convert it into electricity. This electricity is direct current
                (DC), which must be converted to alternating current (AC) using
                a solar inverter to run household appliances.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">2. Solar Inverter</h3>
              <p>
                The solar inverter converts DC into AC. Without it, the
                electricity generated cannot be used in homes. Modern inverters
                also optimize power extraction through MPPT technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">
                3. Solar Module Mounting Structures
              </h3>
              <p>
                These structures hold solar panels securely. They must withstand
                strong winds and last 25 years. The best ones are galvanized to
                prevent rusting. For instance, SolarSquare’s WindPro Mount™ 2.0,
                IIT-Bombay approved, can withstand winds up to 170 kmph and
                resist corrosion for years.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">4. Solar Accessories</h3>
              <p>
                Accessories like AC/DC cables, combiner boxes, earthing strips,
                and MC4 connectors ensure the system runs safely and
                efficiently. For example:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  <b>DC combiner box</b> isolates DC power from panels (can
                  exceed 1000V).
                </li>
                <li>
                  <b>AC combiner box</b> combines AC power from multiple
                  inverters.
                </li>
                <li>
                  <b>Earthing</b> ensures safety for the entire system.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">5. Bi-directional Meter</h3>
              <p>
                Also called a net meter, it records electricity imported from
                and exported to the grid. Your bill is based on net consumption:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Extra power exported reduces your bill by offsetting
                  consumption.
                </li>
                <li>Extra power imported adds to your bill.</li>
              </ul>
            </div>
          </div>

          {/* How it Works */}
          <h2 className="text-2xl md:text-3xl font-bold text-[#F9820C] mt-8">
            How Does an On-grid Solar System Work?
          </h2>
          <p className="leading-relaxed">
            Now you’ve seen how multiple components come together, let’s break
            down the process of sunlight turning into electricity:
          </p>
          <ul className="list-decimal list-inside ml-4 space-y-2">
            <li>
              <b>Solar Energy Capture:</b> Panels absorb sunlight and generate
              DC electricity.
            </li>
            <li>
              <b>DC-to-AC Conversion:</b> Inverter converts DC to AC suitable
              for homes.
            </li>
            <li>
              <b>Net Metering:</b> Bi-directional meter tracks imports and
              exports.
            </li>
            <li>
              <b>Home Usage:</b> Appliances use solar AC power during the day.
            </li>
            <li>
              <b>Export Excess:</b> Surplus power goes to the grid for credits.
            </li>
            <li>
              <b>Import Grid Power:</b> At night, power is drawn from the grid
              if needed.
            </li>
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
