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

export default function SolarCalculator() {
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

  const regionData = [
    {
      state: "Madhya Pradesh",
      pincodeStart: 450000,
      pincodeEnd: 459999,
      averageTariff: 7.5,
      irradianceFactor: 1.1,
      maxSubsidy: 62880,
    },
    {
      state: "Uttar Pradesh",
      pincodeStart: 200000,
      pincodeEnd: 209999,
      averageTariff: 8.0,
      irradianceFactor: 1.0,
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

  const calculateResults = () => {
    const userPincode = Number(pincode);
    const region = regionData.find(
      (r) => userPincode >= r.pincodeStart && userPincode <= r.pincodeEnd
    );
    if (!region) return;

    const systemSize = (bill / region.averageTariff) * region.irradianceFactor;
    const roofSize = systemSize * 80; // sq.ft per kW
    const monthlySavings = bill * 0.52;
    const yearlySavings = monthlySavings * 12;
    const totalCost = systemSize * 40000;

    // Dynamic Subsidy (capped by regional max subsidy)
    const subsidy = Math.min(totalCost * 0.3, region.maxSubsidy);
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

  // Update results dynamically on bill or pincode change
  useEffect(() => {
    if (pincode) calculateResults();
  }, [bill, pincode]);

  return (
    <>
      <Header />
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
            <div className="max-w-md mx-auto p-6 bg-white  mt-6">
              <h2 className="text-2xl font-bold mb-2 text-[#000080] text-left">
                Calculate Your Solar Savings with the SolarSquare Solar
                Calculator
              </h2>
              <p className="text-black">
                Curious how much you can save by switching to solar? The
                SolarSquare Solar Calculator estimates your rooftop solar
                potential, system size, tentative installation cost, and
                long-term savings — all in just a few clicks.
              </p>
              <h2 className="text-2xl font-bold mb-2 text-[#000080] mt-6">
                Why Use the GAYATRI CONSTRUCTION Solar Panel Calculator?
              </h2>
              <p className="text-black">
                The GAYATRI CONSTRUCTION Solar Panel Calculator makes it easy to
                plan your home solar system. It uses accurate, region-specific
                data to give you a clear picture of your savings and investment.
                You can:
              </p>
              <ul className="list-disc list-inside space-y-2 text-black">
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
                  area you’ll need for panels
                </li>
                <li>
                  <strong>Measure Energy Production:</strong> Find out how much
                  clean energy your system will generate
                </li>
                <li>
                  <strong>Compare Financing Options:</strong> Explore ways to go
                  solar with zero upfront cost
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center text-center w-full">
            {results && (
              <div className="w-full bg-gray-50 rounded-lg p-6 shadow border border-[#000080]">
                {/* System Size */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Required System Size
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
                    <FaBolt className="text-[#000080] text-3xl" />
                    <div>
                      <p className="text-gray-500">System Size</p>
                      <p className="font-semibold">{results.systemSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
                    <FaTools className="text-green-600 text-3xl" />
                    <div>
                      <p className="text-gray-500">Roof Size</p>
                      <p className="font-semibold">{results.roofSize}</p>
                    </div>
                  </div>
                </div>

                {/* Solar Savings */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Your Solar Savings
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-4 bg-white rounded shadow text-center">
                    <p className="text-gray-500">Monthly</p>
                    <p className="font-semibold">{results.monthlySavings}</p>
                  </div>
                  <div className="p-4 bg-white rounded shadow text-center">
                    <p className="text-gray-500">Yearly</p>
                    <p className="font-semibold">{results.yearlySavings}</p>
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
                      <p className="text-gray-500">Lifetime Savings</p>
                      <p className="font-semibold">{results.lifetimeSavings}</p>
                    </div>
                    <div className="p-2 bg-gray-50 rounded">
                      <p className="text-gray-500">ROI</p>
                      <p className="font-semibold">{results.roi}</p>
                    </div>
                  </div>
                </div>

                {/* Environmental */}
                <h3 className="text-2xl font-bold text-center mb-6">
                  Your Solar Saves More <br /> Than Money
                </h3>
                <div className="bg-white p-4 rounded shadow grid grid-cols-3 gap-4 text-center">
                  <div>
                    <FaGlobe className="text-[#000080] text-2xl mb-1 mx-auto" />
                    <p className="text-gray-500 text-sm">CO₂ Mitigated</p>
                    <p className="font-semibold">{results.co2Mitigated}</p>
                  </div>
                  <div>
                    <FaTree className="text-green-600 text-2xl mb-1 mx-auto" />
                    <p className="text-gray-500 text-sm">Trees Planted</p>
                    <p className="font-semibold">{results.treesPlanted}</p>
                  </div>
                  <div>
                    <FaRoad className="text-black text-2xl mb-1 mx-auto" />
                    <p className="text-gray-500 text-sm">Distance Offset</p>
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
              className="rounded-lg shadow-md"
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
      <Footer />
    </>
  );
}
