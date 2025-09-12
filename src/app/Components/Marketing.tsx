"use client"; // IMPORTANT: enables client-side features like Framer Motion

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Marketing = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#000089] leading-snug">
            Marketing Network
          </h2>
          <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

          <p className="text-gray-700 mb-4 leading-relaxed text-base">
            Our marketing strategy aims to achieve the best results for our
            clients by providing unmatched quality of service. We are committed
            to customer satisfaction through our dedicated team efforts.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed text-base">
            Our reputation for customer service is built on a solid foundation
            of teamwork. The collective efforts of our associates, operations
            personnel, and document staff ensure reliable service every step of
            the way.
          </p>

          <Link href="/contact">
            <button className="inline-block bg-[#000089] hover:bg-[#000000] text-white px-6 py-3 rounded-md font-bold transition">
              GET A QUOTE
            </button>
          </Link>
        </div>

        {/* Right Image with animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 100 }} // start 100px to the right
          whileInView={{ opacity: 1, x: 0 }} // slide to position
          viewport={{ once: true }} // animate only once
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="/about.jpg"
            alt="EPACK Prefab Industrial Building"
            className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Marketing;
