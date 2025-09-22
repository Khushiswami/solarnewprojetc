// "use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { motion } from "framer-motion";

// const partners = [
//   "/tvs.svg",
//   "/ultra.svg",
//   "/ddecore.png",
//   "/tvs.svg",

//   "/johnson.svg",
//   "/prince.svg",
//   "/tvs.svg",
// ];

// export default function Partners() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 5, // default for desktop
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024, // tablets
//         settings: { slidesToShow: 4 },
//       },
//       {
//         breakpoint: 768, // small tablets / large phones
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 480, // mobile
//         settings: { slidesToShow: 2 },
//       },
//     ],
//   };

//   return (
//     <div className="py-10 bg-gray-100">
//       <motion.h2
//         className="text-3xl font-bold text-center mb-10"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//       >
//         Our Clients
//       </motion.h2>

//       <Slider {...settings}>
//         {partners.map((logo, index) => (
//           <div key={index} className="flex justify-center items-center p-4">
//             <img
//               src={logo}
//               alt={`Partner ${index + 1}`}
//               className="h-16 object-contain"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }
"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const partners = [
  "/tvs.svg",
  "/ultra.svg",
  "/ddecore.png",
  "/tvs.svg",
  "/johnson.svg",
  "/prince.svg",
  "/tvs.svg",
];

export default function Partners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="py-10 bg-gray-100">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Our Clients
      </motion.h2>

      {/* Wrap slider in overflow-hidden container */}
      <div className="max-w-full overflow-hidden px-4">
        <Slider {...settings}>
          {partners.map((logo, index) => (
            <div
              key={index}
              className="flex justify-center items-center"
              style={{ padding: "0 10px", boxSizing: "border-box" }} // prevents overflow
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-16 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
