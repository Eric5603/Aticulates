// app/careers/page.tsx
'use client'
import React from 'react';

interface JobOpening {
  title: string;
  description: string;
}

interface Benefit {
  description: string;
}

const Careers: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      title: 'Software Engineer',
      description: 'We are looking for a skilled Software Engineer to join our team...',
    },
    {
      title: 'Product Manager',
      description: 'We are seeking an experienced Product Manager to lead our product development...',
    },
  ];

  const benefits: Benefit[] = [
    { description: 'Competitive Salary' },
    { description: 'Health, Dental, and Vision Insurance' },
    { description: '401(k) Retirement Plan' },
    { description: 'Flexible Work Hours' },
    { description: 'Professional Development Opportunities' },
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    alert('Application submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Careers</h1>
        <p className="text-lg text-gray-700 mb-8">
          Join our team and build a rewarding career with BuildMaster. We offer opportunities for growth, learning, and innovation.
        </p>

        {/* Job Openings Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Job Openings</h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 mt-2">{job.description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit.description}</li>
            ))}
          </ul>
        </section>

        {/* How to Apply Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Apply</h2>
          <p className="text-gray-700 mb-4">
            To apply for a position at BuildMaster, please fill out the form below and upload your resume. Our team will review your application and get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                Upload Resume
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="resume"
                type="file"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit Application
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Careers;