"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaHandshake,
  FaArrowUp,
  FaTools,
  FaIndustry,
  FaProjectDiagram,
  FaChargingStation,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Acquisition",
      desc: "Comprehensive site acquisition services ensuring prime locations for telecom and infrastructure projects.",
      img: "/power.jpg",
      icon: <FaHandshake size={24} className="text-white" />,
    },
    {
      title: "Upgradation & Expansion",
      desc: "Upgrade and expand your existing infrastructure with our expert planning and execution.",
      img: "/power.jpg",
      icon: <FaArrowUp size={24} className="text-white" />,
    },
    {
      title: "Repair & Maintenance",
      desc: "Efficient repair and maintenance to maximize uptime and extend asset lifespan.",
      img: "/power.jpg",
      icon: <FaTools size={24} className="text-white" />,
    },
    {
      title: "Fabrication of BW Material & Canopies",
      desc: "Custom fabrication of BW material, canopies, HT material, and safety structures for Indus Towers.",
      img: "/power.jpg",
      icon: <FaIndustry size={24} className="text-white" />,
    },
    {
      title: "Project Management & Security",
      desc: "End-to-end project management and on-site security ensuring timely and secure operations.",
      img: "/power.jpg",
      icon: <FaProjectDiagram size={24} className="text-white" />,
    },
    {
      title: "Vehicle Charging & Swapping Station",
      desc: "Cutting-edge EV charging and swapping station solutions for a sustainable future.",
      img: "/power.jpg",
      icon: <FaChargingStation size={24} className="text-white" />,
    },
  ];

  // Animation variants for fade-up
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={service.img}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute bottom-0 right-0 bg-[#f6a235] p-3 rounded-tl-lg flex items-center justify-center">
                  {service.icon}
                </div>
              </div>
              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore Button */}
        <div className="mt-10">
          <Link
            href="/service"
            className="inline-block bg-[#f6a235] hover:bg-[#c74c17] text-white px-6 py-3 rounded-md font-medium transition"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
