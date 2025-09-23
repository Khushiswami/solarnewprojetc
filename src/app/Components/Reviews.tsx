"use client";
import React, { useState, useEffect } from "react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Jagriti Awasthi",
      position: "President, Green Housing Society",
      message:
        '"The rooftop solar system installed by this team has drastically cut our society’s electricity bills. Their service was professional and timely!"',
      image: "/test4.jpeg",
    },
    {
      name: "Jayendra Singh",
      position: "Facility Manager, Bright Towers",
      message:
        '"Outstanding solar maintenance service! Our on-grid solar panels are now performing at peak efficiency thanks to their expert care."',
      image: "/test3.jpeg",
    },
    {
      name: "Kratika Rathi",
      position: "Resident, Eco Apartments",
      message:
        '"Exceptional experience with their off-grid solar solutions. Our community now enjoys uninterrupted power and significant savings."',
      image: "/test4.jpeg",
    },
    {
      name: "Shubham Yadav",
      position: "Secretary, Sunview Residency",
      message:
        '"Professional installation and seamless service! They handled our housing society’s entire solar project from design to commissioning flawlessly."',
      image: "/test2.jpeg",
    },
    {
      name: "Pooja Sharma",
      position: "Homeowner, Solar Greens",
      message:
        '"Great team to work with. Their on-grid solar system reduced our power bills by over 50% and their after-sales support is excellent."',
      image: "/test4.jpeg",
    },
    {
      name: "Rahul Verma",
      position: "Founder, Clean Energy Startups",
      message:
        '"The best solar experience I have had! From consultation to installation, everything exceeded expectations and transformed our energy usage."',
      image: "/test3.jpeg",
    },
  ];

  // State for items per page depending on screen size
  const [itemsPerPage, setItemsPerPage] = useState(1); // default mobile
  const [current, setCurrent] = useState(0);

  // Detect screen width on mount & resize
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        // lg screens
        setItemsPerPage(3);
      } else {
        // mobile/tablet
        setItemsPerPage(1);
      }
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(testimonials.length - itemsPerPage, 0)
        : prev - itemsPerPage
    );
  };

  const visibleTestimonials = testimonials.slice(
    current,
    current + itemsPerPage
  );

  return (
    <div className="mt-6 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-center text-[#F9820C] mb-5 md:text-3xl">
        What Our Customers Are Saying
      </h1>
      <p className="text-sm md:text-md text-black text-center mb-8 px-8 sm:px-4 sm:mx-4 md:px-8 md:mx-20">
        Do not just take our word for it—hear from our delighted guests! From
        exceptional service to unforgettable experiences, discover why we are
        the top choice for travelers.
      </p>

      {/* Testimonial Grid */}
      <div
        className={`grid ${
          itemsPerPage === 1 ? "grid-cols-1 max-w-sm" : "grid-cols-3 max-w-6xl"
        } gap-6 mx-auto`}
      >
        {visibleTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <p className="text-lg text-gray-700 mb-2 sm:text-base md:text-lg lg:text-base">
              {testimonial.message}
            </p>
            <h3 className="text-xl font-semibold text-[#F9820C]">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-8 mt-6">
        <button
          onClick={prevSlide}
          className="text-[#F9820C] hover:text-[#03306D] text-3xl focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="text-[#F9820C] hover:text-[#03306D] text-3xl focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Reviews;
