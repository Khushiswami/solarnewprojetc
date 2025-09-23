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
  FaBolt,
  FaLeaf,
  FaPiggyBank,
  FaChartLine,
  FaHandshake,
  FaShieldAlt,
  FaWarehouse,
  FaGlobe,
} from "react-icons/fa";
import CommercialSolarFAQs from "../Components/Commercialfaqs";

const Commercial = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // stagger the child animations
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] }, // TypeScript-compatible cubic-bezier
    },
  };
  const features = [
    {
      title: "Lower Electricity Costs",
      description:
        "Slash high commercial tariffs by generating your own clean energy and cut monthly bills significantly.",
      icon: <FaSolarPanel className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Fast ROI & Long-Term Savings",
      description:
        "Recover your investment in just 3–5 years and enjoy free solar power for over two decades.",
      icon: <FaPiggyBank className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Energy Independence",
      description:
        "Reduce dependence on the grid or diesel generators and gain stable, predictable power costs.",
      icon: <FaBolt className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Green & Sustainable Image",
      description:
        "Demonstrate your commitment to sustainability and attract eco-conscious customers and investors.",
      icon: <FaLeaf className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Government Incentives",
      description:
        "Take advantage of subsidies, tax benefits, and net-metering policies to maximize savings.",
      icon: <FaHandshake className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Enhanced Property Value",
      description:
        "Transform unused rooftops into productive assets and increase your property’s valuation.",
      icon: <FaWarehouse className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Reliable Power Supply",
      description:
        "Enjoy uninterrupted energy with optional storage solutions and reduced exposure to outages.",
      icon: <FaShieldAlt className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Scalable & Modular",
      description:
        "Expand your system as your business grows, with minimal disruption to operations.",
      icon: <FaChartLine className="text-[#F9820C] text-3xl mb-4" />,
    },
    {
      title: "Global Impact",
      description:
        "Contribute to lowering carbon emissions and help build a cleaner planet for future generations.",
      icon: <FaGlobe className="text-[#F9820C] text-3xl mb-4" />,
    },
  ];
  return (
    <>
      <Header />
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/ban8.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 w-full">
          {/* Animated container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left w-full max-w-xl sm:max-w-2xl"
          >
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
              Commercial Rooftop Solar Systems in India
            </h1>
            <p className="text-white text-base sm:text-lg md:text-md mb-6">
              Gayatri Solar delivers reliable and efficient commercial rooftop
              solar solutions across India
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
          What is <span className="text-[#F9820C]"> Commercial Rooftop</span>{" "}
          Solar
        </motion.h2>

        <p className="text-center mx-auto text-gray-800 md:mx-10">
          Commercial rooftop solar refers to a solar power system installed on
          the rooftops of business, industrial, or institutional buildings
          (factories, offices, warehouses, hospitals, schools, malls, etc.)
          instead of residential homes. 99 out of 100 commercial rooftops remain
          unused. Installing solar panels with Gayatri Solar can reduce your
          electricity bills by over 70%. We provide customized rooftop solutions
          — from net-metered systems to captive power plants — for all your
          energy needs.
        </p>
      </motion.section>
      <Installation />
      {/* benfits of commercial */}
      <section className="w-full bg-white py-12 px-6 md:px-16 lg:px-20">
        <div className=" mx-auto text-center md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">
            Benefits of <span className="text-[#F9820C]">Commercial Solar</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Commercial rooftop solar helps businesses cut high electricity costs
            while achieving long-term energy savings
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6  hover:bg-gray-100 rounded-2xl shadow-md transition-all duration-300 flex flex-col items-center text-center"
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
      <Counter />
      <Contact />
      <CommercialSolarFAQs />
      <Footer />
    </>
  );
};

export default Commercial;
