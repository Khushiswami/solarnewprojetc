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

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Zig />
      <Marketing />
      <Services />
      <Whychoose />
      <Faqs />
      <Footer />
    </>
  );
}
