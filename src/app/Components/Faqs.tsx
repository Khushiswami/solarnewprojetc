"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // <- import Framer Motion

// Types
type FAQItem = { q: string; a: string };
type FAQCategory =
  | "Acquisition & NBS"
  | "Upgradation & Safety"
  | "Tower & Other Services";

// Data
const faqData: Record<FAQCategory, FAQItem[]> = {
  "Acquisition & NBS": [
    {
      q: "What is site acquisition?",
      a: "We identify and secure optimal locations for infrastructure projects, handling all approvals and documentation.",
    },
    {
      q: "Do you handle legal permits for acquisition?",
      a: "Yes, we manage all legal permits, approvals, and documentation for compliant site acquisition.",
    },
    {
      q: "Can you assess site feasibility?",
      a: "Absolutely! Our team evaluates locations for accessibility, coverage, safety, and regulatory compliance before acquisition.",
    },
    {
      q: "Do you provide transportation for materials and equipment?",
      a: "Yes, we ensure safe and timely transport of materials, equipment, and workforce across project sites.",
    },
    {
      q: "Is site acquisition handled across multiple states?",
      a: "Yes, we operate in Madhya Pradesh, Chhattisgarh, Maharashtra, Delhi NCR, and Chandigarh for seamless acquisition services.",
    },
  ],
  "Upgradation & Safety": [
    {
      q: "What safety projects do you provide?",
      a: "We implement safety measures for towers, electrical systems, and worksites to protect staff and assets.",
    },
    {
      q: "Do you provide project upgradation and expansion?",
      a: "Yes, we manage upgradation and expansion of telecom infrastructure with full compliance and quality assurance.",
    },
    {
      q: "Do you offer safety training for staff?",
      a: "Absolutely! We train construction and telecom staff on safety protocols and best practices.",
    },
  ],
  "Tower & Other Services": [
    {
      q: "Do you handle tower erection, tightening, and dismantling?",
      a: "Yes, our team specializes in safe erection, maintenance, and dismantling of telecom towers.",
    },
    {
      q: "Can you fabricate BW material, canopies, and HT material?",
      a: "Yes, we fabricate Boundary Walls, Canopies, HT materials, and safety structures for Indus Towers.",
    },
    {
      q: "Do you install vehicle charging stations?",
      a: "Yes, we design, install, and maintain EV charging and swapping stations for sustainable operations.",
    },
    {
      q: "Do you provide repair and maintenance services?",
      a: "Yes, we handle repair and maintenance for towers, canopies, and electrical boards (LT & HT).",
    },
    {
      q: "Do you manage diesel filling and new EB installations?",
      a: "Yes, we handle diesel filling, new EB installations, and LT & HT maintenance projects.",
    },
  ],
};

export default function Faqs() {
  const [activeTab, setActiveTab] = useState<FAQCategory>("Acquisition & NBS");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Animated Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          {/* Tabs */}
          <div className="flex justify-center gap-4 border-b pb-4 mb-6 flex-wrap-0">
            {(Object.keys(faqData) as FAQCategory[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-md font-medium transition ${
                  activeTab === tab
                    ? "bg-[#f6a235] text-white"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {faqData[activeTab].map((item: FAQItem, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-2 text-left font-medium text-lg text-gray-900"
                >
                  {item.q}
                  <span className="text-2xl leading-none">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openIndex === i && (
                  <div className="pl-1 pr-6 pt-2 text-gray-600 text-base">
                    {item.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right - Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <Image
              src="/faqsone.jpg"
              alt="FAQ Illustration"
              width={300}
              height={300}
              className="object-cover rounded-md"
              priority
            />
            <div className="absolute -z-10 top-8 right-0 w-64 h-64 bg-blue-100 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
