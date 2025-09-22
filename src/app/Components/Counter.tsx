"use client";
import React from "react";
import { Briefcase, Calendar, Sun, DollarSign } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: <Briefcase size={50} color="#F9820C " />,
    number: 250,
    suffix: "+",
    text: "Commercial projects",
  },
  {
    icon: <Calendar size={50} color="#F9820C " />,
    number: 7,
    suffix: "+",
    text: "Years",
  },
  {
    icon: <Sun size={50} color="#F9820C " />,
    number: 160,
    suffix: "+ MWp",
    text: "Installation experience",
  },
  {
    icon: <DollarSign size={50} color="#F9820C " />,
    number: 110,
    suffix: " Cr",
    text: "Saving annually",
  },
];

const Counter: React.FC = () => {
  return (
    <div className="w-full bg-gray-100 py-8 overflow-x-auto scrollbar-hide">
      <div className="flex gap-8 md:justify-center md:flex-nowrap px-4 md:px-0 min-w-max">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex flex-col items-center justify-center text-center  p-4 md:p-6 min-w-[180px] "
          >
            <div className="mb-2">{stat.icon}</div>
            <h3 className="text-2xl md:6xl font-bold text-[#03306D]">
              <CountUp end={stat.number} duration={2} />
              {stat.suffix}
            </h3>
            <p className="text-sm md:text-lg text-black mt-1">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
