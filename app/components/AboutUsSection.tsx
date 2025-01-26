import React from 'react';
import Image from 'next/image';

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="relative">
            <Image
              src="/about-us.jpg" // Replace with your image path
              alt="About Us"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 mb-6">
              At BuildMaster, we are committed to delivering exceptional construction services with a focus on quality, safety, and innovation. With over 25 years of experience, we have built a reputation for excellence in residential, commercial, and industrial projects.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">25+ Years of Experience</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Certified and Licensed Professionals</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-700">Commitment to Safety and Sustainability</span>
              </li>
            </ul>
            <a
              href="/about"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;