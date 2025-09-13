"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FaBolt,
  FaCalendarAlt,
  FaTools,
  FaGlobe,
  FaTree,
  FaRoad,
} from "react-icons/fa";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { FaCalendarCheck, FaRupeeSign } from "react-icons/fa";
import Contact from "../Components/Contact";

export default function Calculator() {
  const [pincode, setPincode] = useState("");
  const [bill, setBill] = useState(500);

  const [results, setResults] = useState<null | {
    systemSize: string;
    roofSize: string;
    monthlySavings: string;
    yearlySavings: string;
    totalCost: string;
    subsidy: string;
    netCost: string;
    lifetimeSavings: string;
    roi: string;
    minDownPayment: string;
    netDownPayment: string;
    emi: string;
    co2Mitigated: string;
    treesPlanted: string;
    distance: string;
  }>(null);

  // 🟩 Region Data
  const regionData = [
    {
      state: "Indore (MP)",
      pincodeStart: 452000,
      pincodeEnd: 452999,
      averageTariff: 7.5,
      irradianceFactor: 1.15,
      maxSubsidy: 62880,
    },
    {
      state: "Bhopal (MP)",
      pincodeStart: 462000,
      pincodeEnd: 462999,
      averageTariff: 7.5,
      irradianceFactor: 1.1,
      maxSubsidy: 62880,
    },
    {
      state: "Delhi",
      pincodeStart: 110000,
      pincodeEnd: 110099,
      averageTariff: 8.5,
      irradianceFactor: 0.95,
      maxSubsidy: 62880,
    },
  ];

  // 🟩 Bill Slabs
  const billSlabs = [
    { min: 500, max: 1000, factor: 1, subsidyFactor: 0.3 },
    { min: 1500, max: 3000, factor: 1.2, subsidyFactor: 0.28 },
    { min: 3000, max: 5000, factor: 1.4, subsidyFactor: 0.26 },
    { min: 5000, max: 6500, factor: 1.6, subsidyFactor: 0.25 },
    { min: 6500, max: 7500, factor: 1.8, subsidyFactor: 0.23 },
    { min: 7500, max: 10000, factor: 2.0, subsidyFactor: 0.2 },
  ];

  // 🟩 Main Calculation
  const calculateResults = () => {
    const userPincode = Number(pincode);
    const region = regionData.find(
      (r) => userPincode >= r.pincodeStart && userPincode <= r.pincodeEnd
    );
    if (!region) return;

    // Bill Slab
    const slab = billSlabs.find((s) => bill >= s.min && bill <= s.max);
    if (!slab) return;

    // Dynamic Calculations
    const systemSize =
      (bill / region.averageTariff) * region.irradianceFactor * slab.factor;

    const roofSize = systemSize * 80; // sq.ft per kW
    const monthlySavings = bill * 0.52 * slab.factor;
    const yearlySavings = monthlySavings * 12;
    const totalCost = systemSize * 40000;

    const subsidy = Math.min(totalCost * slab.subsidyFactor, region.maxSubsidy);

    const netCost = totalCost - subsidy;

    setResults({
      systemSize: `${systemSize.toFixed(1)} kW`,
      roofSize: `${roofSize.toFixed(0)} sq.ft`,
      monthlySavings: `₹${monthlySavings.toFixed(0)}`,
      yearlySavings: `₹${yearlySavings.toFixed(0)}`,
      totalCost: `₹${totalCost.toFixed(0)}`,
      subsidy: `₹${subsidy.toFixed(0)}`,
      netCost: `₹${netCost.toFixed(0)}`,
      lifetimeSavings: `₹${(yearlySavings * 25).toFixed(0)}`,
      roi: "19.22% p.a.",
      minDownPayment: `₹${subsidy.toFixed(0)}`,
      netDownPayment: "₹0",
      emi: `₹${(netCost / 60).toFixed(0)}`,
      co2Mitigated: "2,540 Kg",
      treesPlanted: "85",
      distance: "22,680 Kms",
    });
  };

  // 🟩 Run on pincode or bill change
  useEffect(() => {
    if (pincode) calculateResults();
  }, [bill, pincode]);

  return (
    <>
      <Header />
      <section className="relative w-full h-96 md:h-[500px] bg-gray-800">
        <Image
          src="/banner.jpg"
          alt="Services Banner"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Cut Costs, Cut Carbon
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Save Money Save the Planet
          </p>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-white mt-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Calculate Your Solar Savings Now!
            </h2>
            <p className="text-gray-600 mt-2">
              Unlock savings, build that dream fund, and start ticking off your
              checklist.
            </p>

            <div className="mt-6 space-y-5 bg-gray-50 p-5 rounded-md">
              <div>
                <label className="block text-black font-medium mb-1">
                  Pin code
                </label>
                <input
                  type="text"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Enter pin code"
                  className="w-full border rounded-lg px-4 py-2 text-black focus:ring-2 focus:ring-[#000080] focus:outline-none"
                />
              </div>

              {/* Electricity Bill */}
              <div>
                <label className="block text-black font-medium mb-2">
                  Avg electricity bill{" "}
                  <span className="text-gray-400">
                    (Min ₹500 - Max ₹10,000)
                  </span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="10000"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full"
                />
                <p className="mt-2 text-black font-semibold">₹{bill}</p>
              </div>
            </div>

            {/* Content boxes */}
            <div className=" mx-auto p-6 bg-white  mt-6">
              <h2 className="text-2xl font-bold mb-2 text-[#000080] text-left">
                Calculate Your Solar Savings with the Gayatri Construction Solar
                Calculator
              </h2>

              <p className="text-black">
                Curious how much you can save by switching to solar? The Gayatri
                Construction Solar Calculator estimates your rooftop solar
                potential, system size, tentative installation cost, and
                long-term savings — all in just a few clicks.
              </p>

              <h2 className="text-2xl font-bold mb-2 text-[#000080] mt-6">
                Why Use the GAYATRI CONSTRUCTION Solar Panel Calculator?
              </h2>
              <p className="text-black">
                It uses accurate, region-specific data to give you a clear
                picture of your savings and investment.
              </p>
              <ul className="list-disc list-inside space-y-1 text-black">
                <li>
                  <strong>Estimate Savings:</strong> Know how much you can save
                  on electricity each month and over 25 years
                </li>
                <li>
                  <strong>Choose the Right System Size:</strong> Get the ideal
                  solar panel capacity for your rooftop
                </li>
                <li>
                  <strong>Calculate Investment and ROI:</strong> Understand your
                  return on investment and when you’ll break even
                </li>
                <li>
                  <strong>Check Roof Space Requirements:</strong> See how much
                  area you will need for panels
                </li>
              </ul>
              <h2 className="text-2xl font-bold mb-2 text-[#000080] text-left mt-6">
                How it Works ?
              </h2>
              <p className="text-black mb-4">
                Planning your rooftop solar system has never been easier. In
                just a few quick steps, the Gayatri Construction Solar
                Calculator gives you accurate estimates of your solar potential,
                costs, savings, and environmental benefits.
              </p>

              <ul className="list-disc list-inside space-y-1 text-black">
                <li>
                  <strong>Enter Your Pin Code:</strong> Instantly get
                  location-specific tariff and sunlight data for accurate
                  calculations.
                </li>
                <li>
                  <strong>Enter Your Average Electricity Bill:</strong> Input
                  your monthly bill to find the ideal solar system size for your
                  home.
                </li>
                <li>
                  <strong>View Your Personalized Solar Plan:</strong> See your
                  required system size, shadow-free roof space, monthly and
                  yearly savings, estimated installation cost, and the
                  government subsidy you qualify for.
                </li>
                <li>
                  <strong>Check ROI and Finance Options:</strong> Understand
                  your projected return on investment, lifetime savings, down
                  payment, EMI, and tenure if you choose loan or financing.
                </li>
                <li>
                  <strong>See Your Environmental Impact:</strong> Track how much
                  CO₂ you will offset — plus the equivalent trees planted or
                  distance driven saved.
                </li>
              </ul>

              <p className="text-black mt-4">
                With just a few clicks, the Gayatri Construction Solar
                Calculator empowers you to make informed decisions, lower your
                energy bills, and contribute to a greener planet.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center text-center w-full">
            {results && (
              <div className="w-full bg-white rounded-2xl p-18 shadow  border border-[#000080] ">
                {/* System Size */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Required System Size
                </h3>
                <div className="grid border-1 border-gray-200 p-3 rounded-2xl  mb-3 grid-cols-1 md:grid-cols-2">
                  {/* System Size Box */}
                  <div className="flex items-center gap-4 p-4 bg-white  border-r border-gray-500">
                    <FaBolt className="text-gray-500 text-2xl mb-1 mx-auto" />
                    <div>
                      <p className="text-black">System Size</p>
                      <p className="font-semibold text-[#000080]">
                        {results.systemSize}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded">
                    <FaTools className="text-gray-500 text-2xl mb-1 mx-auto" />
                    <div>
                      <p className="text-black">Roof Size</p>
                      <p className="font-semibold text-[#000080]">
                        {results.roofSize}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solar Savings */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Your Solar Savings
                </h3>

                <div className="grid border-1 border-gray-200 p-3 rounded-2xl  mb-3 grid-cols-1 md:grid-cols-2">
                  {/* System Size Box */}
                  <div className="flex items-center gap-4 p-4 bg-white  border-r border-gray-500">
                    <FaRupeeSign className="text-gray-500 text-2xl mb-1 mx-auto" />

                    <div>
                      <p className="text-black">Monthly</p>
                      <p className="font-semibold text-[#000080]">
                        {results.monthlySavings}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded">
                    <FaCalendarCheck className="text-gray-500 text-2xl mb-1 mx-auto" />

                    <div>
                      <p className="text-black">Yearly</p>
                      <p className="font-semibold text-[#000080]">
                        {results.yearlySavings}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Investment */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Your Investment
                </h3>
                <div className="bg-white p-4 rounded shadow text-center mb-4">
                  <p>
                    Total Cost of Plant:{" "}
                    <span className="font-semibold">{results.totalCost}</span>
                  </p>
                  <p>
                    Subsidy:{" "}
                    <span className="font-semibold">{results.subsidy}</span>
                  </p>
                  <p>
                    Net Cost:{" "}
                    <span className="font-semibold">{results.netCost}</span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-black">Lifetime Savings</p>
                      <p className="font-semibold text-[#000080]">
                        {results.lifetimeSavings}
                      </p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-black">ROI</p>
                      <p className="font-semibold text-[#000080]">
                        {results.roi}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Environmental */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Your Solar Saves More <br /> Than Money
                </h3>
                <div className="bg-white p-4 rounded shadow grid grid-cols-3 gap-4 text-center">
                  <div>
                    <FaGlobe className="text-gray-500 text-2xl mb-1 mx-auto" />
                    <p className="text-black text-sm">CO₂ Mitigated</p>
                    <p className="font-semibold">{results.co2Mitigated}</p>
                  </div>
                  <div>
                    <FaTree className="text-gray-500 text-2xl mb-1 mx-auto" />
                    <p className="text-black text-sm">Trees Planted</p>
                    <p className="font-semibold">{results.treesPlanted}</p>
                  </div>
                  <div>
                    <FaRoad className="text-gray-500 text-2xl mb-1 mx-auto" />
                    <p className="text-black text-sm">Distance Offset</p>
                    <p className="font-semibold">{results.distance}</p>
                  </div>
                </div>
              </div>
            )}

            <Image
              src="/power.jpg"
              alt="Solar Savings"
              width={350}
              height={300}
              className="rounded-lg shadow-md mt-6"
            />

            {/* Journey Section */}
            <div className="mt-10 w-full max-w-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-8">
                Your Journey with SolarSquare
              </h3>

              <div className="flex flex-col items-center">
                <FaBolt className="text-[#000080] text-2xl mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Calculate Your Savings
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Use our Solar Calculator to check your investment, ROI, and
                  savings in seconds.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <FaCalendarAlt className="text-[#000080] text-2xl mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Book a Free Consultation
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Our experts visit at your convenience for a detailed
                  consultation.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <FaTools className="text-[#000080] text-2xl mb-2" />
                <h4 className="font-semibold text-gray-800">
                  Quick & Safe Installation
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Get our cyclone-proof system installed in just 8 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </>
  );
}
