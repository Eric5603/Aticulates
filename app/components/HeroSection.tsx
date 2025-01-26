"use client";

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Building Your Dreams, <br />
              <span className="text-blue-600">One Brick at a Time</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We specialize in delivering high-quality construction services for residential, commercial, and industrial projects. With decades of experience, we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <a
                href="/get-a-quote"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Get a Free Quote
              </a>
              <a
                href="/projects"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                View Our Projects
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative">
            <Image
              src="/construction-hero.jpg" // Replace with your image path
              alt="Construction Site"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Years of Experience</p>
                  <p className="text-xl font-bold text-gray-900">25+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Services Section */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Residential Construction</h3>
            <p className="text-gray-600">Custom homes, renovations, and extensions tailored to your needs.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Projects</h3>
            <p className="text-gray-600">Office buildings, retail spaces, and industrial facilities.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Design & Planning</h3>
            <p className="text-gray-600">Innovative designs and detailed project planning.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Infrastructure Development</h3>
            <p className="text-gray-600">Roads, bridges, and public utilities for modern cities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;