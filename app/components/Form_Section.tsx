'use client'

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = ''; // Your Supabase URL
const supabaseKey = ''; // Your Supabase anonymous key
const supabaseClient = createClient(supabaseUrl, supabaseKey);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [modal, setModal] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabaseClient
      .from('entries') // Your table name
      .insert([formData]);

    if (error) {
      setModal({ success: false, message: 'There was an error submitting the form. Please try again.' });
    } else {
      setModal({ success: true, message: 'Form submitted successfully!' });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Contact Form Section */}
      <section className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-6">
        <form name="contact" id="contact-form" onSubmit={handleSubmit}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact</h1>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <input
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
              Subject
            </label>
            <div className="relative">
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="">Select a subject</option>
                <option value="quote">Quote</option>
                <option value="project">Project</option>
                <option value="job">Job Offer</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <i className="fas fa-chevron-down"></i>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* Modal Dialog */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h2 className={`text-xl font-bold ${modal.success ? 'text-green-800' : 'text-red-800'}`}>
              {modal.success ? 'Success!' : 'Error'}
            </h2>
            <p className="mt-2">{modal.message}</p>
            <button
              onClick={() => setModal(null)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}