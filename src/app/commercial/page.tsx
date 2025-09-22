"use client";

import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import Link from "next/link";
import Counter from "../Components/Counter";
import { motion, Variants } from "framer-motion";
import Installation from "../Components/Installation";
import Commercialfaqs from "../Components/Commercialfaqs";

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

  return (
    <>
      <Header />
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/pg.jpg')",
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
          99 out of 100 commercial rooftops remain unused. Installing solar
          panels with Gayatri Solar can reduce your electricity bills by over
          70%. We provide customized rooftop solutions — from net-metered
          systems to captive power plants — for all your energy needs.
        </p>
      </motion.section>
      <Installation />
      <Counter />
      <Contact />
      <Commercialfaqs />
      <Footer />
    </>
  );
};

export default Commercial;
