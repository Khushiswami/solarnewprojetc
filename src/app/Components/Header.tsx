"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaSolarPanel,
  FaBolt,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<"offerings" | "services" | null>(
    null
  );
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const offerings = [
    { name: "Home", href: "/home", icon: <FaHome className="inline mr-2" /> },
    {
      name: "Commercial",
      href: "/commercial",
      icon: <FaBuilding className="inline mr-2" />,
    },
    {
      name: "Housing Societies",
      href: "/housingsocities",
      icon: <FaUsers className="inline mr-2" />,
    },
  ];

  const services = [
    {
      name: "Off Grid Solar",
      href: "/ongridsolar",
      icon: <FaSolarPanel className="inline mr-2" />,
    },
    {
      name: "On Grid Solar",
      href: "/offgridsolar",
      icon: <FaBolt className="inline mr-2" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto px-3 lg:px-8 md:px-7">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="Logo"
                width={80}
                height={20}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div
            className={`hidden md:flex space-x-8 items-center ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {/* Our Offering Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("offerings")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="hover:text-[#F9820C] font-medium text-[16px]">
                Our Offering ▾
              </button>
              {dropdown === "offerings" && (
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg ${
                    scrolled
                      ? "bg-white text-black"
                      : "bg-black/90 text-white backdrop-blur-md"
                  }`}
                >
                  {offerings.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 hover:bg-[#F9820C] hover:text-white`}
                    >
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className="hover:text-[#F9820C] font-medium text-[16px]"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("services")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="hover:text-[#F9820C] font-medium text-[16px]">
                Services ▾
              </button>
              {dropdown === "services" && (
                <div
                  className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg ${
                    scrolled
                      ? "bg-white text-black"
                      : "bg-black/90 text-white backdrop-blur-md"
                  }`}
                >
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 hover:bg-[#F9820C] hover:text-white`}
                    >
                      {item.icon} {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Calculator */}
            <Link
              href="/calculator"
              className="hover:text-[#F9820C] font-medium text-[16px]"
            >
              Calculator
            </Link>
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-[#F9820C] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div
            className={`md:hidden flex items-center ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={`md:hidden fixed inset-0 z-50 pointer-events-none`}>
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Sliding Menu */}
        <div
          className={`absolute top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0 pointer-events-auto" : "-translate-x-full"
          }`}
        >
          <div className="px-4 pt-6 pb-4 space-y-4">
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="text-black mb-4 focus:outline-none"
            >
              ✕
            </button>

            {/* Offering Items */}
            {offerings.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-black hover:text-[#F9820C]"
                onClick={() => setMenuOpen(false)}
              >
                {item.icon} {item.name}
              </Link>
            ))}

            {/* Mobile Services Expandable */}
            <button
              className="w-full flex justify-between items-center py-2 text-black hover:text-[#F9820C] font-medium"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <span>Services</span>
              <span>{mobileServicesOpen ? "▲" : "▼"}</span>
            </button>
            {mobileServicesOpen &&
              services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block ml-4 py-2 text-black hover:text-[#F9820C]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.icon} {item.name}
                </Link>
              ))}

            <Link
              href="/calculator"
              className="block text-black py-2 hover:text-[#F9820C]"
              onClick={() => setMenuOpen(false)}
            >
              Calculator
            </Link>

            <Link
              href="/contact"
              className="block bg-[#F9820C] hover:bg-[#000] text-white px-4 py-2 rounded-md mt-4 text-center font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
