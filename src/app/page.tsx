import Image from "next/image";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Zig from "./Components/Zig";
import Service from "./Components/Services";
import Footer from "./Components/Footer";
import Faqs from "./Components/Faqs";
import Whychoose from "./Components/Whychoose";
import Services from "./Components/Services";
import Marketing from "./Components/Marketing";
import Contact from "./Components/Contact";
import WhyChoose from "./Components/Whychoose";
import Allservice from "./Components/Allservice";
import Partners from "./Components/Partners";
import Patners from "./Components/Partners";
import Reviews from "./Components/Reviews";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Allservice />
      <Zig />
      <Marketing />
      {/* <Services /> */}
      <Whychoose />
      <Contact />
      <Partners />
      <Reviews />
      <Faqs />
      <Footer />
    </>
  );
}
