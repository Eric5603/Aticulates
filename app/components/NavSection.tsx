"use client";

import React, { useState } from "react";
import Link from "next/link";

const StickyHeader: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">BuildMaster</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6 text-sm font-medium text-gray-700">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center hover:text-blue-600 transition-colors"
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "services" && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <Link href="/services/construction" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Construction</Link>
                  <Link href="/services/renovation" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Renovation</Link>
                  <Link href="/services/design" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Design & Planning</Link>
                  <Link href="/services/maintenance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Maintenance</Link>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("projects")}
                className="flex items-center hover:text-blue-600 transition-colors"
              >
                Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "projects" && (
                <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md py-2">
                  <Link href="/projects/residential" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Residential</Link>
                  <Link href="/projects/commercial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Commercial</Link>
                  <Link href="/projects/industrial" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Industrial</Link>
                  <Link href="/projects/infrastructure" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Infrastructure</Link>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href="/safety" className="hover:text-blue-600 transition-colors">Safety</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            <Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>

            {/* Get a Quote Button */}
            <Link
              href="/get-a-quote"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-gray-700 focus:outline-none focus:ring md:hidden"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="absolute top-0 left-0 z-40 h-screen w-64 bg-white p-4 shadow-lg">
            <button
              className="mb-4 rounded-md p-2 text-gray-700 focus:outline-none focus:ring"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="space-y-4">
              {/* Services Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("services-mobile")}
                  className="flex items-center w-full text-gray-700 hover:text-blue-600"
                >
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openDropdown === "services-mobile" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/services/construction" className="block text-gray-700 hover:text-blue-600">Construction</Link>
                    <Link href="/services/renovation" className="block text-gray-700 hover:text-blue-600">Renovation</Link>
                    <Link href="/services/design" className="block text-gray-700 hover:text-blue-600">Design & Planning</Link>
                    <Link href="/services/maintenance" className="block text-gray-700 hover:text-blue-600">Maintenance</Link>
                  </div>
                )}
              </div>

              {/* Projects Dropdown */}
              <div>
                <button
                  onClick={() => toggleDropdown("projects-mobile")}
                  className="flex items-center w-full text-gray-700 hover:text-blue-600"
                >
                  Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {openDropdown === "projects-mobile" && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link href="/projects/residential" className="block text-gray-700 hover:text-blue-600">Residential</Link>
                    <Link href="/projects/commercial" className="block text-gray-700 hover:text-blue-600">Commercial</Link>
                    <Link href="/projects/industrial" className="block text-gray-700 hover:text-blue-600">Industrial</Link>
                    <Link href="/projects/infrastructure" className="block text-gray-700 hover:text-blue-600">Infrastructure</Link>
                  </div>
                )}
              </div>

              {/* Other Links */}
              <Link href="/safety" className="block text-gray-700 hover:text-blue-600">Safety</Link>
              <Link href="/about" className="block text-gray-700 hover:text-blue-600">About Us</Link>
              <Link href="/careers" className="block text-gray-700 hover:text-blue-600">Careers</Link>
              <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
              <Link
                href="/get-a-quote"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-center"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default StickyHeader;