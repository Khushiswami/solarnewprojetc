"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/solar.png"
                alt="My Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-black hover:text-[#000089] font-medium text-[16px]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-[#000089] font-medium text-[16px]"
            >
              About Us
            </Link>
            <Link
              href="/service"
              className="text-black hover:text-[#000089] font-medium text-[16px]"
            >
              Services
            </Link>
            <Link
              href="/calculator"
              className="text-black hover:text-[#000089] font-medium text-[16px]"
            >
              Calculator
            </Link>
          </div>

          <div className="hidden md:flex">
            <Link
              href="/calculator"
              className="bg-[#000089] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium transition"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black hover:text-[#000089] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="block text-black hover:text-[#000089] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-black hover:text-[#000089] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/service"
              className="block text-black hover:text-[#000089] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/calculator"
              className="block text-gray-700 hover:text-[#000089] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              href="/contact"
              className="block bg-[#000089] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium text-center transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact Button
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
