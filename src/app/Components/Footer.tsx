"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { MdEmail, MdCall } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative text-black">
      {/* Top CTA Section overlapping footer */}

      {/* Footer Section */}
      <div className="bg-gray-100 pt-20 md:pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="My Logo"
                    width={150}
                    height={40}
                    priority
                  />
                </Link>
              </div>
            </div>
            <p className="text-black text-sm mb-4">
              Delivering Reliable and Efficient Solar Power Systems for Every
              Need.
            </p>
            <p className="text-black text-sm mb-1 flex items-center gap-2">
              <MdEmail size={25} className="text-black" />
              gayatriconstruction.com
            </p>
            <div className="flex items-start gap-2">
              <MdCall size={24} className="text-black mt-1" />
              <div className="flex flex-col text-black text-sm">
                <span>+91-9630095045</span>
                <span>+91-7000909594</span>
                <span>+91-731-4946594</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2 text-black text-sm">
              <li>
                <Link href="/about" className="hover:text-[#e0561b]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-[#e0561b]">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/service" className="hover:text-[#e0561b]">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#e0561b]">
                  Recent Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e0561b]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-black mb-4">Services</h4>
            <ul className="space-y-2 text-black text-sm">
              <li>Acquisition</li>
              <li>Solar Installation</li>
              <li>Battery Materials</li>
              <li>Solar Equipment</li>
              <li>Charge Controllers</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-black mb-4">Contact</h4>
            <h5>Head Office:</h5>
            <p className="text-black text-sm mb-4">
              Ward No. 14, Mahaveer Colony, Palera, Dist. Tikamgarh (M.P.) -
              472221
            </p>
            <h5>Branch Office:</h5>
            <p className="text-black text-sm mb-4">
              26, A Diamond Garage, Dewas Naka, Indore
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="p-2 bg-[#F9820C]  text-white rounded-full hover:bg-black"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#F9820C]  text-white rounded-full hover:bg-black"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#F9820C]  text-white rounded-full hover:bg-black"
              >
                <FaYoutube />
              </Link>
              <Link
                href="#"
                className="p-2 bg-[#F9820C]  text-white rounded-full hover:bg-black"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
