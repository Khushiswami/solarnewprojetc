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
    title: "Why Choose Gayatri Solar as Your Solar Company?",
    content:
      "Gayatri Solar offers reliable solar solutions with expert installation, government subsidy assistance, and long-term maintenance support to maximize your energy savings.",
  },
  {
    id: 2,
    title: "How Does an On-Grid Solar System Work?",
    content:
      "An on-grid solar system generates electricity from sunlight and supplies it directly to your home or business. Excess power is fed back to the grid, reducing your electricity bills through net metering.",
  },
  {
    id: 3,
    title: "Overview of Off-Grid Solar Systems",
    content:
      "Off-grid solar systems operate independently of the public electricity grid, storing power in batteries for use anytime. They are ideal for remote areas or homes seeking energy independence.",
  },
];

export default function Ongrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" mx-auto mt-10 p-4 md:px-15">
      <h1 className="text-2xl font-semibold mb-6 text-[#000080] md:text-3xl">
        What is an Off-Grid Solar System?{" "}
      </h1>
      <p className="text-lg  mb-6 md:text-xl">
        To be a global leader in infrastructure development, setting benchmarks
        in both civil and industrial engineering. We envision a future where our
        work not only supports the foundation of economies but also contributes
        meaningfully to the economic and social progress of the communities we
        serve. Through innovation, sustainability, and unwavering commitment, we
        strive to shape a better world through– “The Triple Bottom Line
        Approach”{" "}
      </p>
      {/* <h1 className="text-3xl font-semibold mb-6">
        How we approach the triple bottom line
      </h1> */}
      <div className="space-y-2">
        {items.map((item, index) => (
          <div key={item.id} className="border-b border-gray-300">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-4 text-left"
            >
              <div className="flex items-center space-x-2">
                <span className="text-blue-500 font-bold text-3xl">
                  {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
                </span>
                <span className="text-gray-900 text-3xl ">{item.title}</span>
              </div>
              <span
                className={`flex items-center justify-center h-8 w-8 rounded-full border border-black ${
                  openIndex === index ? "bg-black" : "bg-white"
                }`}
              >
                {openIndex === index ? (
                  <MinusIcon className="h-10 w-5 text-white" />
                ) : (
                  <PlusIcon className="h-10 w-5 text-black" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p className="pb-4 text-gray-800 text-xl tracking-wider ">
                {item.content}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
