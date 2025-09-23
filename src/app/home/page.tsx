"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { FaHardHat, FaBuilding, FaTools, FaClock } from "react-icons/fa";
import { motion, Variants } from "framer-motion";
import Partners from "../Components/Partners";
import Faqs from "../Components/Faqs";
import Contact from "../Components/Contact";
import Timeline from "../Components/Timeline";
import Link from "next/link";

// ✅ Define the slide type
interface Slide {
  image: string;
  title: string;
  description: string;
}
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

const slides: Slide[] = [
  {
    image: "/banfour.jpg",
    title: "Clean Solar Energy",
    description: "Harness the power of the sun for your home and business.",
  },
  {
    image: "/banfour.jpg",
    title: "Save Money",
    description: "Lower your energy bills and enjoy renewable energy benefits.",
  },
  {
    image: "/banfour.jpg",
    title: "Sustainable Future",
    description: "Contribute to a greener planet by switching to solar power.",
  },
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/power.jpg')",
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
              Sustainable Future
            </h1>
            <p className="text-white text-base sm:text-lg md:text-md mb-6">
              Contribute to a greener planet by switching to solar power.
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
      {/* why choose us */}
      <motion.section
        className="max-w-6xl mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 leading-snug"
          variants={itemVariants}
        >
          Why choose{" "}
          <span className="text-[#F9820C]">Gayatri Construction Company</span>{" "}
          for your solar projects
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Feature 1 */}
          <motion.div
            className="flex items-start space-x-4"
            variants={itemVariants}
          >
            <FaHardHat className="text-[#F9820C] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Easy Solar Financing Plans
              </h3>
              <p className="text-gray-600">
                Gayatri Solar makes switching to solar simple and affordable
                with flexible EMI and financing options designed to fit your
                budget.,
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="flex items-start space-x-4"
            variants={itemVariants}
          >
            <FaBuilding className="text-[#F9820C] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-1">
                Cyclone-Proof & Safe Rooftop Solar
              </h3>
              <p className="text-gray-600">
                Our expert installations are built to withstand harsh weather
                conditions — tested for winds up to 170 km/h — ensuring your
                rooftop solar remains safe and secure.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="flex items-start space-x-4"
            variants={itemVariants}
          >
            <FaTools className="text-[#F9820C] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-1">
                ₹1 Lakh Roof Leakage Guarantee
              </h3>
              <p className="text-gray-600">
                With Gayatri Solar s chemical anchoring technique, your rooftop
                is protected from leaks. We guarantee up to ₹1 lakh against any
                water leakage caused by our installation.
              </p>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className="flex items-start space-x-4"
            variants={itemVariants}
          >
            <FaClock className="text-[#F9820C] text-3xl flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-1">
                5-Year Professional Maintenance Included{" "}
              </h3>
              <p className="text-gray-600">
                Enjoy worry-free ownership with quarterly deep cleaning,
                preventive health checks, and repairs included for five full
                years.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <button className="px-8 py-3 rounded-lg bg-[#F9820C] text-white font-medium hover:bg-[#000000] transition">
            Explore Our Services
          </button>
        </motion.div>
      </motion.section>
      <Timeline />
      <Contact />
      <Partners />
      <Faqs />
      <Footer />
    </>
  );
};

export default Slider;
