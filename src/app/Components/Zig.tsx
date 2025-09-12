// components/ZigzagSection.tsx
"use client";
import { FC } from "react";
import { motion } from "framer-motion";

const Zig: FC = () => {
  return (
    <section className="w-full md:py-20 bg-white">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        {/* Left Section (Residential) */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 md:-me-16"
        >
          <img
            src="/power.jpg"
            alt="Left"
            className="w-full h-64 md:h-120 object-cover clip-left md:clip-left"
          />
        </motion.div>

        {/* Right Section (Commercial) */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative md:-ml-16"
        >
          <img
            src="/pg.jpg"
            alt="Right"
            className="w-full h-64 md:h-120 object-cover clip-right md:clip-right"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Zig;
