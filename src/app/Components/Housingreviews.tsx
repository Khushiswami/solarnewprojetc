// "use client";
// import React, { useState, useEffect } from "react";

// const Housingreviews = () => {
//   const testimonials = [
//     {
//       name: "Ramesh Kumar",
//       position: "President, Green View Apartments",
//       message:
//         '"Switching to solar with Gayatri Solar has drastically reduced our society’s electricity bills. The installation was seamless and the team was very professional."',
//       image: "/power.jpg",
//     },
//     {
//       name: "Anita Sharma",
//       position: "Secretary, Sunrise Heights",
//       message:
//         '"Our residents are thrilled with the clean, renewable energy powering our lifts and common areas. Gayatri Solar made the process simple and hassle-free!"',
//       image: "/power.jpg",
//     },
//     {
//       name: "Vikram Singh",
//       position: "Committee Member, Shanti Nagar Apartments",
//       message:
//         '"The team provided excellent guidance, from government subsidies to financing options. Our break-even period was quicker than expected, and savings are visible immediately."',
//       image: "/power.jpg",
//     },
//     {
//       name: "Priya Mehta",
//       position: "Resident Welfare Officer, Lotus Residency",
//       message:
//         '"Professional, timely, and clean installation. We are now enjoying reliable solar power for all common amenities and contributing to a greener environment."',
//       image: "/power.jpg",
//     },
//     {
//       name: "Sanjay Rao",
//       position: "Chairman, Harmony Apartments",
//       message:
//         '"The zero-investment plan allowed us to switch to solar without upfront costs. Our society is saving money and embracing sustainability with ease."',
//       image: "/power.jpg",
//     },
//   ];

//   // State for items per page depending on screen size
//   const [itemsPerPage, setItemsPerPage] = useState(1);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const updateItemsPerPage = () => {
//       if (window.innerWidth >= 1024) setItemsPerPage(3);
//       else setItemsPerPage(1);
//     };
//     updateItemsPerPage();
//     window.addEventListener("resize", updateItemsPerPage);
//     return () => window.removeEventListener("resize", updateItemsPerPage);
//   }, []);

//   const nextSlide = () => {
//     setCurrent((prev) =>
//       prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
//     );
//   };

//   const prevSlide = () => {
//     setCurrent((prev) =>
//       prev - itemsPerPage < 0
//         ? Math.max(testimonials.length - itemsPerPage, 0)
//         : prev - itemsPerPage
//     );
//   };

//   const visibleTestimonials = testimonials.slice(
//     current,
//     current + itemsPerPage
//   );

//   return (
//     <div className="mt-6 py-12 px-4 sm:px-6 lg:px-8">
//       <h1 className="text-2xl md:text-3xl font-bold text-center text-[#F9820C] mb-5">
//         What Our Housing Society Clients Are Saying
//       </h1>
//       <p className="text-sm md:text-md text-black text-center mb-8 px-8 sm:px-4 md:px-20">
//         Hear from housing societies that have switched to solar with Gayatri
//         Solar. Discover how our solutions save costs, provide reliable energy,
//         and create a greener community.
//       </p>

//       {/* Testimonial Grid */}
//       <div
//         className={`grid ${
//           itemsPerPage === 1 ? "grid-cols-1 max-w-sm" : "grid-cols-3 max-w-6xl"
//         } gap-6 mx-auto`}
//       >
//         {visibleTestimonials.map((testimonial, index) => (
//           <div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
//           >
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-24 h-24 rounded-full object-cover mb-3"
//             />
//             <p className="text-lg text-gray-700 mb-2 sm:text-base md:text-lg lg:text-base">
//               {testimonial.message}
//             </p>
//             <h3 className="text-xl font-semibold text-[#F9820C]">
//               {testimonial.name}
//             </h3>
//             <p className="text-sm text-gray-500">{testimonial.position}</p>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Arrows */}
//       <div className="flex justify-center gap-8 mt-6">
//         <button
//           onClick={prevSlide}
//           className="text-[#F9820C] hover:text-[#03306D] text-3xl focus:outline-none"
//         >
//           &#8592;
//         </button>
//         <button
//           onClick={nextSlide}
//           className="text-[#F9820C] hover:text-[#03306D] text-3xl focus:outline-none"
//         >
//           &#8594;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Housingreviews;
"use client";
import React, { useState, useEffect } from "react";

const Housingreviews = () => {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      position: "President, Green View Apartments",
      message:
        '"Switching to solar with Gayatri Solar has drastically reduced our society’s electricity bills. The installation was seamless and the team was very professional."',
    },
    {
      name: "Anita Sharma",
      position: "Secretary, Sunrise Heights",
      message:
        '"Our residents are thrilled with the clean, renewable energy powering our lifts and common areas. Gayatri Solar made the process simple and hassle-free!"',
    },
    {
      name: "Vikram Singh",
      position: "Committee Member, Shanti Nagar Apartments",
      message:
        '"The team provided excellent guidance, from government subsidies to financing options. Our break-even period was quicker than expected, and savings are visible immediately."',
    },
    {
      name: "Priya Mehta",
      position: "Resident Welfare Officer, Lotus Residency",
      message:
        '"Professional, timely, and clean installation. We are now enjoying reliable solar power for all common amenities and contributing to a greener environment."',
    },
    {
      name: "Sanjay Rao",
      position: "Chairman, Harmony Apartments",
      message:
        '"The zero-investment plan allowed us to switch to solar without upfront costs. Our society is saving money and embracing sustainability with ease."',
    },
    {
      name: "Priya Mehta",
      position: "Resident Welfare Officer, Lotus Residency",
      message:
        '"Professional, timely, and clean installation. We are now enjoying reliable solar power for all common amenities and contributing to a greener environment."',
    },
  ];

  // State for items per page depending on screen size
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else setItemsPerPage(1);
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
      <h1 className="text-2xl md:text-3xl font-bold text-center text-[#F9820C] mb-5">
        Hear From Our Happy Housing Societies{" "}
      </h1>
      <p className="text-sm md:text-md text-black text-center mb-8 px-8 sm:px-4 md:px-20">
        Hear from housing societies that have switched to solar with Gayatri
        Solar. Discover how our solutions save costs, provide reliable energy,
        and create a greener community.
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
            <p className="text-lg text-gray-700 mb-4 sm:text-base md:text-lg lg:text-base">
              {testimonial.message}
            </p>
            <h3 className="text-xl font-semibold text-[#F9820C] mb-1">
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

export default Housingreviews;
