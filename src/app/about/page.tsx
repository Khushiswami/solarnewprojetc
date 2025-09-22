import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import WhyChoose from "../Components/Whychoose";
import Faqs from "../Components/Faqs";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header />
      {/* banner */}
      <section className="relative w-full h-96 md:h-[500px] bg-gray-800">
        <Image
          src="/banner.jpg"
          alt="Services Banner"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About us
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl">
            Reliable Construction, Trusted Connections
          </p>
        </div>
      </section>
      {/* end banner */}
      {/* sections */}

      <section className="bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#F9820C] leading-snug  ">
              About Us{" "}
            </h2>
            <div className="w-20 h-[3px] bg-[#272727] mt-3 mb-6"></div>

            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              Gayatri Construction Company (GCC) is a leading civil and
              telecommunication network company with a significant presence in
              Madhya Pradesh, Chhattisgarh, Maharashtra, Delhi NCR, and
              Chandigarh. Founded in 2017, Gayatri Construction has grown from a
              small entity to a reputable firm. We have worked with major
              organizations such as Sun Mobility Pvt. Ltd., Bharti Airtel Ltd.,
              Accent Telecom Infrastructure Pvt Ltd, TVS, Vertive, Shreenath
              Logistic and Supply, Kamlesh Kumar Bansal, and as a subcontractor
              for Jio and Indus Towers Ltd.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed text-base">
              We are registered partners with the Public Works Department
              (License No. EC170033941) and the Electricity Board (License No.
              10/7444) in Madhya Pradesh, Chandigarh, and Delhi NCR.
            </p>

            <Link href="/contact">
              <button className="inline-block bg-[#F9820C] hover:bg-[#000000] text-white px-6 py-3 rounded-md font-bold transition">
                GET A QUOTE
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="/about.jpg"
              alt="EPACK Prefab Industrial Building"
              className="rounded-md shadow-md w-[600px] h-[400px] object-cover transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* end sections */}
      <WhyChoose />
      <Faqs />
      <Footer />
    </>
  );
};

export default page;
