"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

import {
  FaHandshake,
  FaNetworkWired,
  FaArrowUp,
  FaShieldAlt,
  FaBorderStyle,
  FaTools,
  FaIndustry,
  FaTruck,
  FaProjectDiagram,
  FaChargingStation,
  FaGasPump,
  FaBolt,
} from "react-icons/fa";
import Faqs from "../Components/Faqs";

export default function Service() {
  const services = [
    {
      title: "Acquisition",
      desc: "Comprehensive site acquisition services ensuring prime locations for telecom and infrastructure projects.",
      img: "/service 1.png",
      icon: <FaHandshake size={24} className="text-white" />,
    },
    {
      title: "NBS",
      desc: "Network build services (NBS) for seamless telecom expansion with high efficiency and reliability.",
      img: "/service 2.png",
      icon: <FaNetworkWired size={24} className="text-white" />,
    },
    {
      title: "Upgradation & Expansion",
      desc: "Upgrade and expand your existing infrastructure with our expert planning and execution.",
      img: "/service 3.png",
      icon: <FaArrowUp size={24} className="text-white" />,
    },
    {
      title: "Safety Projects",
      desc: "Implement industry-leading safety measures to protect assets, staff, and infrastructure.",
      img: "/service 4.png",
      icon: <FaShieldAlt size={24} className="text-white" />,
    },
    {
      title: "Tower Erection, Tightening & Dismantling",
      desc: "Professional tower erection, tightening, and dismantling services ensuring quality and safety standards.",
      img: "/service 5.png",
      icon: <FaIndustry size={24} className="text-white" />,
    },
    {
      title: "Boundary Wall (Civil & Fabricated)",
      desc: "High-quality civil and fabricated boundary walls designed for durability and security.",
      img: "/service 6.png",
      icon: <FaBorderStyle size={24} className="text-white" />,
    },
    {
      title: "Repair & Maintenance",
      desc: "Efficient repair and maintenance to maximize uptime and extend asset lifespan.",
      img: "/service 7.png",
      icon: <FaTools size={24} className="text-white" />,
    },
    {
      title: "Fabrication of BW Material & Canopies",
      desc: "Custom fabrication of BW material, canopies, HT material, and safety structures for Indus Towers.",
      img: "/service 10.png",
      icon: <FaIndustry size={24} className="text-white" />,
    },
    {
      title: "Transportation",
      desc: "Reliable transportation solutions for materials, equipment, and workforce across project sites.",
      img: "/service 9.png",
      icon: <FaTruck size={24} className="text-white" />,
    },
    {
      title: "Project Management & Security",
      desc: "End-to-end project management and on-site security ensuring timely and secure operations.",
      img: "/service 8.png",
      icon: <FaProjectDiagram size={24} className="text-white" />,
    },
    {
      title: "Vehicle Charging & Swapping Station",
      desc: "Cutting-edge EV charging and swapping station solutions for a sustainable future.",
      img: "/service 1.png",
      icon: <FaChargingStation size={24} className="text-white" />,
    },
    {
      title: "Diesel Filling",
      desc: "On-demand diesel filling services to keep your operations running smoothly without interruptions.",
      img: "/service 1.png",
      icon: <FaGasPump size={24} className="text-white" />,
    },
    {
      title: "New EB with LT & HT, Maintenance, LUPG",
      desc: "Electrical board installations with LT & HT, maintenance, and LUPG for efficient power systems.",
      img: "/service 1.png",
      icon: <FaBolt size={24} className="text-white" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Header />
      {/* banner */}
      <section className="relative w-full h-96 md:h-[500px] bg-gray-800">
        <Image
          src="/pg.jpg"
          alt="Services Banner"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Building stronger foundations for your growth
          </p>
        </div>
      </section>
      {/* end banner */}
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
                  <div className="absolute bottom-0 right-0 bg-[#e0561b] p-3 rounded-tl-lg flex items-center justify-center">
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
        </div>
      </section>
      <Faqs />
      <Footer />
    </>
  );
}
