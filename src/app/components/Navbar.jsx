"use client";
// components/Navbar.js
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 backdrop-blur-md ${
        isScrolled ? "bg-blue-500/50 text-white" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 md:px-2">
        <Link href="/">
          <h1 className="relative text-2xl font-bold cursor-pointer">
            VisitBaliNow
          </h1>
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-200 focus:outline-none focus:text-white"
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex md:space-x-2">
            <li>
              <Link href="/">
                <h1 className="flex items-center py-2 px-2 cursor-pointer border-b-2 border-transparent hover:border-white">
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <h1 className="flex items-center py-2 px-2 cursor-pointer border-b-2 border-transparent hover:border-white">
                  About Us
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <h1 className="flex items-center py-2 px-2 cursor-pointer border-b-2 border-transparent hover:border-white">
                  Our Services
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1 className="flex items-center py-2 px-2 cursor-pointer border-b-2 border-transparent hover:border-white">
                  Travel Packages
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1 className="flex items-center py-2 px-2 cursor-pointer border-b-2 border-transparent hover:border-white">
                  Destinations
                </h1>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
