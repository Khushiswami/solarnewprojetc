"use client";

import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Link from "next/link";
import Counter from "../Components/Counter";
import { motion, Variants } from "framer-motion";
import Installation from "../Components/Installation";
import {
  FaSolarPanel,
  FaPiggyBank,
  FaShieldAlt,
  FaHandshake,
  FaCoins,
  FaChartLine,
} from "react-icons/fa";

import Housingcounter from "../Components/Housingcounter";
import Housingfaqs from "../Components/Housingfaqs";
import Housingreviews from "../Components/Housingreviews";

const HousingSocieties = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  // ✅ Benefits of Solar for Housing Societies
  const features = [
    {
      title: "Lower Common Area Costs",
      description:
        "Cut down on monthly electricity bills for lifts, water pumps, lighting, and other shared facilities in your housing society with our rooftop solar solutions.",
      icon: <FaSolarPanel className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Fast ROI & Long-Term Savings",
      description:
        "Recover your solar investment in just a few years and enjoy over 20 years of free, clean energy—ideal for housing societies and residential complexes.",
      icon: <FaPiggyBank className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Reliable Power Supply",
      description:
        "Ensure uninterrupted green energy for essential services with optional battery storage, reducing your dependence on the unreliable power grid.",
      icon: <FaShieldAlt className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Save More with Government Subsidy",
      description:
        "Avail ₹18,000 per kW subsidy (up to ₹90 lakhs) under government solar schemes and significantly reduce your upfront installation costs.",
      icon: <FaHandshake className="text-[#F9820C] text-3xl mb-4" />, // you can also use a govt or rupee icon
    },
    {
      title: "Flexible Financing Options",
      description:
        "Choose from OPEX, CAPEX, or our Zero Investment plans to switch to solar with ease and minimal financial burden.",
      icon: <FaCoins className="text-[#F9820C] text-3xl mb-4" />, // add `import { FaCoins } from "react-icons/fa";`
    },
    {
      title: "Quick Break-Even Period",
      description:
        "Reach break-even in as little as 1–4 years depending on electricity tariffs and your choice of components—start saving sooner.",
      icon: <FaChartLine className="text-[#F9820C] text-3xl mb-4" />,
    },
  ];

  return (
    <>
      <Header />
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/housing.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left w-full max-w-xl sm:max-w-2xl"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Housing Societies Solar Installation in India
            </h1>
            <p className="text-white text-base sm:text-lg md:text-md mb-6">
              Gayatri Solar offers customized solar power solutions for housing
              societies, apartments, and residential complexes across India.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#F9820C] hover:bg-[#000000] text-white px-6 py-3 rounded-md font-bold transition"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* WHAT IS HOUSING SOCIETY SOLAR */}

      {/* BENEFITS SECTION */}
      <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-20">
        <div className=" mx-auto text-center md:px-6">
          <motion.section
            className="max-w-6xl mx-auto px-4 py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-7 leading-snug"
              variants={itemVariants}
            >
              What is{" "}
              <span className="text-[#F9820C]"> Housing Society Solar</span>{" "}
              Installation?
            </motion.h2>

            <p className="text-center mx-auto text-gray-800 md:mx-10">
              Housing society solar installations involve placing solar panels
              on the rooftops or common areas of apartments, residential
              complexes, or gated communities. These systems power lifts, pumps,
              streetlights, clubhouses, and other shared amenities, reducing
              electricity bills by over 70%. Gayatri Solar provides end-to-end
              solar solutions tailored to the needs of residential communities.
            </p>
          </motion.section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
              >
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* banner hosuing */}
      <section className="relative w-full h-80 md:h-96 lg:h-[500px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bannertwo.jpg')" }}
        />
      </section>
      {/* end housing banner */}
      <Housingcounter />
      <Contact />
      <Housingreviews />
      <Housingfaqs />
      <Footer />
    </>
  );
};

export default HousingSocieties;
