"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Our Firm" },
  { href: "/our-attorneys", label: "Our Attorneys" },
  { href: "/law-firm-services", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="bg-gray-50 fixed top-15 md:top-5 left-0 right-0 z-10 m-2">
        <div className="justify-between px-4 mx-auto  lg:max-w-7xl md:items-center md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block ">
            {/* LOGO */}
            <Link href="/" className="flex ">
              <Image
                src="/kkubani&cologo.png"
                alt="Kk Ubani & Co Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />

              <h2 className="text-2xl lg:text-4xl text-blue-900 font-bold cursor-pointer ">
                K.K. Ubani & Co.
              </h2>
            </Link>

            {/* HARMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden">
              <button
                className="p-2 text-lg text-black rounded-md outline-none focus: border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <X size={30} className="text-black/60" />
                ) : (
                  <Menu size={30} className="text-black/60" />
                )}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-orange-100 border-orange-500 md:hover:text-orange-600 md:hover:bg-transparent transition-colors"
                  >
                    <Link href={link.href} passHref>
                      <p onClick={() => setNavbar(!navbar)}>{link.label}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
