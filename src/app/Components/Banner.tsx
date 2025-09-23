"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: "url('/final.jpg')",
          backgroundSize: "cover",
        }}
      >
        {/* Dark overlay */}
        {/* <div className="absolute inset-0 bg-black/50" /> */}

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
              Your Trusted Solar Energy Partner
            </h1>
            <p className="text-white text-base sm:text-lg md:text-md mb-6">
              From residential rooftops to large commercial systems, our expert
              team delivers sustainable, reliable solar power.
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

      {/* ABOUT SECTION */}
      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#F9820C] leading-snug">
              About Us
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              Gayatri Construction Company (GCC) is a leading civil and
              telecommunication network company with a significant presence in
              Madhya Pradesh, Chhattisgarh, Maharashtra, Delhi NCR, and
              Chandigarh. Founded in 2017, Gayatri Construction has grown from a
              small entity to a reputable firm. We have worked with major
              organizations such as Sun Mobility Pvt. Ltd., Bharti Airtel Ltd.,
              Accent Telecom Infrastructure Pvt Ltd, TVS, Vertive, Shreenath
              Logistic and Supply, Kamlesh Kumar Bansal, and as a subcontractor
              for Jio and Indus Towers Ltd.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              We are registered partners with the Public Works Department
              (License No. EC170033941) and the Electricity Board (License No.
              10/7444) in Madhya Pradesh, Chandigarh, and Delhi NCR.
            </p>

            <Link href="/contact">
              <button className="inline-block bg-[#F9820C] hover:bg-[#000000] text-white px-6 py-3 rounded-md font-bold transition">
                GET A QUOTE
              </button>
            </Link>
          </motion.div>

          {/* Right Image */}
          {/* Static image on mobile, animated on md+ */}
          <div className="flex justify-center md:hidden">
            {/* Mobile: no animation */}
            <img
              src="/pg.jpg"
              alt="soalr"
              className="rounded-md shadow-md w-full max-w-[600px] h-[300px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>

          <motion.div
            // Desktop animation only
            className="hidden md:flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/pg.jpg"
              alt="solar"
              className="rounded-md shadow-md w-full max-w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
