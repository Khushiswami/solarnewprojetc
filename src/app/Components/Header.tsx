// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md fixed top-0 w-full z-50">
//       <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
//         <div className="flex justify-between items-center ">
//           <div className="flex-shrink-0">
//             <Link href="/">
//               <Image
//                 src="/logo.png"
//                 alt="My Logo"
//                 width={105}
//                 height={20}
//                 priority
//               />
//             </Link>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             <Link
//               href="/"
//               className="text-black hover:text-[#F9820C] font-medium text-[16px]"
//             >
//               Our Offering
//             </Link>
//             <Link
//               href="/about"
//               className="text-black hover:text-[#F9820C] font-medium text-[16px]"
//             >
//               About Us
//             </Link>
//             <Link
//               href="/service"
//               className="text-black hover:text-[#F9820C] font-medium text-[16px]"
//             >
//               Services
//             </Link>
//             <Link
//               href="/calculator"
//               className="text-black hover:text-[#F9820C] font-medium text-[16px]"
//             >
//               Calculator
//             </Link>
//           </div>

//           <div className="hidden md:flex">
//             <Link
//               href="/calculator"
//               className="bg-[#F9820C] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium transition"
//             >
//               Contact
//             </Link>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-black hover:text-[#F9820C] focus:outline-none"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {menuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {menuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="px-4 pt-4 pb-6 space-y-2">
//             <Link
//               href="/"
//               className="block text-black hover:text-[#F9820C] font-medium"
//               onClick={() => setMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/about"
//               className="block text-black hover:text-[#F9820C] font-medium"
//               onClick={() => setMenuOpen(false)}
//             >
//               About Us
//             </Link>
//             <Link
//               href="/service"
//               className="block text-black hover:text-[#F9820C] font-medium"
//               onClick={() => setMenuOpen(false)}
//             >
//               Services
//             </Link>
//             <Link
//               href="/calculator"
//               className="block text-gray-700 hover:text-[#F9820C] font-medium"
//               onClick={() => setMenuOpen(false)}
//             >
//               Calculator
//             </Link>
//             <Link
//               href="/contact"
//               className="block bg-[#F9820C] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium text-center transition"
//               onClick={() => setMenuOpen(false)}
//             >
//               Contact Button
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Type the dropdown state correctly
  const [dropdown, setDropdown] = useState<"offerings" | "services" | null>(
    null
  );

  // Dropdown items
  const offerings = [
    { name: "home", href: "/home" },
    { name: "commercial", href: "/commercial" },
    { name: "Housing Socities", href: "/offerings/maintenance" },
  ];

  const services = [
    { name: "Off Grid Solar", href: "/services/consultation" },
    { name: "On Grid Solar", href: "/services/installation" },
  ];

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <Image
                src="/logo.png"
                alt="My Logo"
                width={105}
                height={20}
                priority
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Our Offering dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("offerings")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="text-black hover:text-[#F9820C] font-medium text-[16px]">
                Our Offering ▾
              </button>
              {dropdown === "offerings" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  {offerings.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-black hover:text-[#F9820C]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              className="text-black hover:text-[#F9820C] font-medium text-[16px]"
            >
              About Us
            </Link>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdown("services")}
              onMouseLeave={() => setDropdown(null)}
            >
              <button className="text-black hover:text-[#F9820C] font-medium text-[16px]">
                Services ▾
              </button>
              {dropdown === "services" && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100 text-black hover:text-[#F9820C]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Calculator */}
            <Link
              href="/calculator"
              className="text-black hover:text-[#F9820C] font-medium text-[16px]"
            >
              Calculator
            </Link>
          </div>

          {/* Desktop Contact button */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="bg-[#F9820C] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-black hover:text-[#F9820C] focus:outline-none"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link
              href="/"
              className="block text-black hover:text-[#F9820C] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            {/* Mobile Our Offering */}
            <div>
              <p className="font-medium text-black">Our Offering</p>
              {offerings.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block ml-4 text-black hover:text-[#F9820C]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            {/* Mobile Services */}
            <div>
              <p className="font-medium text-black">Services</p>
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block ml-4 text-black hover:text-[#F9820C]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Link
              href="/calculator"
              className="block text-gray-700 hover:text-[#F9820C] font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Calculator
            </Link>
            <Link
              href="/contact"
              className="block bg-[#F9820C] hover:bg-[#000000] text-white px-4 py-2 rounded-md font-medium text-center transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
