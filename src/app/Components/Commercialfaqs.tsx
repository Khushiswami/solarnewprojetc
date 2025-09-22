"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Commercial Solar FAQs
const faqData = [
  {
    q: "What are the benefits of installing solar panels on commercial rooftops?",
    a: "You can significantly reduce electricity bills by over 70%, save on long-term energy costs, claim tax benefits, and contribute to a greener environment.",
  },
  {
    q: "Can solar panels be installed on any type of rooftop?",
    a: "Yes! Gayatri Solar provides solutions for RCC terraces, metallic sheet roofs, and even limited rooftop spaces with customized mounting structures.",
  },
  {
    q: "How long does a commercial solar system last?",
    a: "Solar panels are a long-term investment, typically lasting over 25 years with minimal maintenance required.",
  },
  {
    q: "Do you offer net-metered or captive solar systems?",
    a: "Yes, we provide both net-metered commercial rooftop systems and captive power plants to meet different energy requirements.",
  },
  {
    q: "Is maintenance required after installation?",
    a: "Yes, periodic maintenance is recommended, and Gayatri Solar offers full-service support to ensure optimal performance and longevity of your system.",
  },
];

export default function CommercialSolarFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className=" mx-auto px-4 py-12 md:mx-10">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="space-y-4">
        {faqData.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center py-3 px-4 bg-white rounded-md shadow-md font-medium text-left text-gray-900 hover:bg-gray-100 transition"
            >
              {item.q}
              <span className="text-2xl leading-none text-[#F9820C]">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {openIndex === i && (
              <div className="px-4 pt-2 pb-4 text-gray-600 text-base">
                {item.a}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
