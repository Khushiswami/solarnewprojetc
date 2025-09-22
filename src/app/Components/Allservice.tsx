"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Allservice() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();

  // state for hover & click
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [swiper, setSwiper] = useState<SwiperType | null>(null); // Store Swiper instance

  const services = [
    {
      title: "Acquisition",
      img: "/service 1.png",
      link: "/service",
    },
    {
      title: "NBS",
      img: "/service 2.png",
      link: "/service",
    },
    {
      title: "Upgradation & Expansion",
      img: "/service 3.png",
      link: "/service",
    },
    {
      title: "Safety Projects",
      img: "/service 4.png",
      link: "/service",
    },
    {
      title: "Tower Erection, Tightening & Dismantling",
      img: "/service 5.png",
      link: "/service",
    },
    {
      title: "Boundary Wall (Civil & Fabricated)",
      img: "/service 6.png",
      link: "/service",
    },
    {
      title: "Repair & Maintenance",
      img: "/service 7.png",
      link: "/service",
    },
    {
      title: "Fabrication of BW Material & Canopies",
      img: "/service 8.png",
      link: "/service",
    },
    {
      title: "Transportation",
      img: "/service 9.png",
      link: "/service",
    },
    {
      title: "Project Management & Security",
      img: "/service 10.png",
      link: "/service",
    },
    {
      title: "Vehicle Charging & Swapping Station",
      img: "/service 1.png",
      link: "/service",
    },
    {
      title: "Diesel Filling",
      img: "/service 1.png",
    },
    {
      title: "New EB with LT & HT, Maintenance, LUPG",
      img: "/service 1.png",
      link: "/service",
    },
  ];

  return (
    <>
      <section className="py-12 px-8 bg-white mx-0 md:mx-1 lg:mx-1 md:px-13">
        <div className="flex items-center justify-between mx-auto mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-[#F9820C] text-center">
            Explore Our Services
          </h2>
          <div className="flex items-center gap-2">
            {/* Prev Button */}
            <button
              ref={prevRef}
              className="bg-[#03306D] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
              onClick={() => swiper?.slidePrev()}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {/* Next Button */}
            <button
              ref={nextRef}
              className="bg-[#03306D] text-white p-2 rounded-full hover:bg-[#163b78] transition-transform duration-200 active:scale-90"
              onClick={() => swiper?.slideNext()}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className=" mt-10 mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={setSwiper} // Store the Swiper instance
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper: SwiperType) => {
              const nav = swiper.params.navigation;
              if (nav && typeof nav !== "boolean") {
                nav.prevEl = prevRef.current;
                nav.nextEl = nextRef.current;
              }
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  className={`relative bg-white rounded-xl overflow-hidden shadow-md cursor-pointer`}
                  onMouseEnter={() => setHoverIndex(i)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => {
                    setActiveIndex(i);
                    service.link && router.push(service.link);
                  }}
                >
                  {/* Image */}
                  <div className="w-full h-70 md:h-80 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title Bar */}
                  <div className="bg-[#03306D] flex items-center justify-between px-4 py-3 relative z-10">
                    <p className="text-white font-semibold text-sm line-clamp-1">
                      {service.title}
                    </p>
                    <div className="bg-white rounded-full p-1">
                      <motion.div
                        key={
                          hoverIndex === i || activeIndex === i
                            ? "chevron"
                            : "arrow"
                        }
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        {hoverIndex === i || activeIndex === i ? (
                          <ChevronRight className="w-4 h-4 text-[#03306D]" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-[#03306D]" />
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoverIndex === i && (
                      <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20"
                        style={{
                          background:
                            "linear-gradient(0deg, rgba(33, 71, 95, 0.8) 0%, rgba(22, 46, 68, 0.8) 100%)",
                        }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-white text-lg font-semibold">
                          {service.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <div className="mt-10 flex justify-center">
        <Link
          href="/service"
          className="inline-block bg-[#F9820C] hover:bg-[#000000] text-white px-6 py-3 rounded-md font-medium transition"
        >
          Explore Services
        </Link>
      </div>
    </>
  );
}
