"use client";
import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Free In-Home Solar Consultation",
    description:
      "A Gayatri Solar consultant surveys your home, answers all your questions, and creates a custom digital design showing exactly how your rooftop solar system will look.",
  },
  {
    number: "02",
    title: "Personalised Solar Proposal & Dedicated Project Manager",
    description:
      "Based on your energy needs, our team prepares a tailored solar proposal. A dedicated Project Manager guides you through every step and keeps you updated in real time.",
  },
  {
    number: "03",
    title: "Paperwork & Government Subsidy Assistance",
    description:
      "We handle all the paperwork, approvals and subsidy applications for a smooth and hassle-free experience with your local DISCOM and government agencies.",
  },
  {
    number: "04",
    title: "Professional, Safe & Timely Installation",
    description:
      "Once you confirm the order, our trained engineers deliver your rooftop solar system and install it neatly and professionally — prioritising safety and cleanliness.",
  },
  {
    number: "05",
    title: "Grid Connection & Net Metering",
    description:
      "We coordinate with your DISCOM to connect the system to the electricity grid and install a new bi-directional (net) meter for seamless energy flow.",
  },
  {
    number: "06",
    title: "Power Up & Start Saving",
    description:
      "Switch on your Gayatri Solar system to enjoy reduced electricity bills, energy independence and long-term savings from clean solar power.",
  },
  {
    number: "07",
    title: "Regular Deep Cleaning & Preventive Maintenance",
    description:
      "We schedule quarterly deep cleaning and preventive health checks for five years to keep your solar system performing at its best.",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative w-full bg-cover bg-center overflow-hidden">
      {/* background */}
      <div
        className="absolute inset-0 z-0 bg-[url('/images/bg-timeline.jpg')] bg-cover bg-center 
        contrast-90 brightness-50"
      />
      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#F9820C]">
          Our Process
        </h2>
        <h5 className="text-sm md:text-md text-black mb-8">
          Switching to solar may feel overwhelming, but Gayatri Solar makes it
          simple. Here’s how we do it
        </h5>

        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Marker */}
              <div className="relative z-20 flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-[#03306D] bg-white/10 shadow-lg flex items-center justify-center font-bold text-lg text-black">
                {step.number}
              </div>

              {/* Vertical line */}
              {i < steps.length - 1 && (
                <div
                  className={`absolute hidden md:block w-0.5 bg-[#03306D] ${
                    i % 2 === 1 ? "right-8" : "left-8"
                  } top-16 h-full`}
                />
              )}

              {/* Card */}
              <div
                className={`mt-4 md:mt-0 md:mx-6 flex-1 rounded-xl border-2 border-[#03306D]
                bg-white/10 backdrop-blur-md shadow-xl p-6 
                ${i % 2 === 1 ? "text-right" : "text-left"}`}
              >
                <h3 className="text-lg md:text-xl font-bold text-[#F9820C] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-black">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
