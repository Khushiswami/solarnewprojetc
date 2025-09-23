// components/TripleBottomAccordion.tsx
"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

const items: AccordionItem[] = [
  {
    id: 1,
    title: "How Does an On-Grid Solar System Work?",
    content:
      "An on-grid solar system generates electricity from sunlight and supplies it directly to your home or business. Excess power is fed back to the grid, reducing your electricity bills through net metering.",
  },
  {
    id: 2,
    title: "Advantages of Off-Grid Solar",
    content:
      "Off-grid solar systems provide complete energy independence, making them ideal for remote areas with no grid access. They ensure an uninterrupted power supply through battery storage, reduce electricity costs over time, and promote clean, renewable energy use. Additionally, off-grid solar systems can be customized to meet your exact energy needs and are environmentally friendly, helping reduce your carbon footprint.",
  },

  {
    id: 3,
    title: "Overview of Off-Grid Solar Systems",
    content:
      "Off-grid solar systems operate independently of the public electricity grid, storing power in batteries for use anytime. They are ideal for remote areas or homes seeking energy independence.",
  },
];

export default function Offgrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 p-4 md:px-15">
      <h1 className="text-2xl text-center font-semibold mb-6 text-[#F9820C] md:text-3xl">
        Frequently Asked Questions
      </h1>

      {/* <h1 className="text-3xl font-semibold mb-6">
        How we approach the triple bottom line
      </h1> */}
      <div className="space-y-2 md:px-10">
        {items.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-black font-bold text-2xl">
                  {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                </span>
                <span className="text-gray-900 text-lg md:text-xl ">
                  {item.title}
                </span>
              </div>
              <span
                className={`flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full border border-black ${
                  openIndex === index ? "bg-black" : "bg-white"
                }`}
              >
                {openIndex === index ? (
                  <MinusIcon className="h-3 w-4 sm:h-5 sm:w-5 text-white" />
                ) : (
                  <PlusIcon className="h-4 w-4 sm:h-5 sm:w-5 text-black" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="pb-4 text-gray-800 text-base tracking-wider md:text-md ">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
