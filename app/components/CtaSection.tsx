import React from 'react';
import Link from 'next/link';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="lg:py-14 lg:px-20 p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-between flex-col lg:flex-row"
        >
          {/* Text Content */}
          <div className="block text-center mb-5 lg:text-left lg:mb-0">
            <h2 className="font-manrope text-4xl text-white font-semibold mb-5 lg:mb-2">
              Let’s Build Something Great Together
            </h2>
            <p className="text-xl text-blue-100">
              Whether it’s a dream home, a commercial space, or an industrial project, we’re here to bring your vision to life.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-blue-600 font-semibold py-4 px-8 transition-all duration-500 hover:bg-blue-50 hover:shadow-md"
          >
            Get A Free Quote
            <svg
              width="19"
              height="14"
              viewBox="0 0 19 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                stroke="#2563EB"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;