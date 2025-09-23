"use client";

import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Partners from "../Components/Partners";
import Faqs from "../Components/Faqs";
import Offgrid from "../Components/Offgrid";
import OffGridSolarSection from "../Components/Offgriddata";
import OnGriddata from "../Components/Ongriddata";

const Ongridsolar = () => {
  return (
    <>
      <Header />
      <section className="relative w-full h-96 md:h-[500px] overflow-hidden">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/ongrid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content over video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            On-Grid Solar System
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Independent, reliable solar power for your home
          </p>
        </div>
      </section>

      {/* new section with data */}
      <OnGriddata />
      {/* end new section */}
      <Offgrid />

      <Partners />
      <Footer />
    </>
  );
};

export default Ongridsolar;
