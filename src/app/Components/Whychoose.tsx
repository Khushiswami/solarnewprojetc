"use client";
import { FaHardHat, FaBuilding, FaTools, FaClock } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function WhyChoose() {
  // TypeScript-compatible variants
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
        <span className="text-[#F9820C]">Gayatri Construction Company</span> for
        your solar projects
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
            <h3 className="text-xl font-semibold mb-1">Experienced Team</h3>
            <p className="text-gray-600">
              Our skilled engineers, architects, and project managers deliver
              top-quality construction services with precision and expertise.
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
              High-Quality Construction
            </h3>
            <p className="text-gray-600">
              We use premium materials and modern techniques to ensure durable
              and sustainable buildings that last for decades.
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
              Professional Equipment
            </h3>
            <p className="text-gray-600">
              Utilizing advanced machinery and tools, we guarantee efficiency,
              safety, and timely completion of every project.
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
              On-Time Project Delivery
            </h3>
            <p className="text-gray-600">
              We pride ourselves on completing projects within schedule while
              maintaining superior quality standards.
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
  );
}
