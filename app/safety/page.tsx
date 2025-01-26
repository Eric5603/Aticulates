// app/safety/page.tsx
export default function Safety() {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Safety</h1>
  
          {/* Introduction Section */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              At [Your Company Name], safety is our top priority. We are committed to maintaining the highest standards of safety to protect our employees, clients, and the communities we serve. Our comprehensive safety program ensures that every project is executed with the utmost care and adherence to regulatory requirements.
            </p>
            <p className="text-lg text-gray-700">
              We believe that a safe work environment is essential for productivity, quality, and overall success. Our safety culture is built on continuous improvement, employee engagement, and proactive risk management.
            </p>
          </section>
  
          {/* Safety Principles Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Safety Principles</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-4">
              <li>
                <strong>Safety Training:</strong> All employees undergo rigorous safety training programs tailored to their roles. This includes onboarding training, ongoing education, and specialized certifications.
              </li>
              <li>
                <strong>Compliance:</strong> We strictly adhere to local, state, and federal safety regulations. Our policies are regularly reviewed and updated to ensure compliance with the latest standards.
              </li>
              <li>
                <strong>Emergency Protocols:</strong> We have well-defined emergency response plans in place. Regular drills and simulations ensure that our team is prepared to handle any situation effectively.
              </li>
              <li>
                <strong>Risk Assessment:</strong> Every project begins with a thorough risk assessment to identify potential hazards and implement preventive measures.
              </li>
              <li>
                <strong>Personal Protective Equipment (PPE):</strong> We provide all necessary PPE and ensure that it is used correctly at all times.
              </li>
              <li>
                <strong>Incident Reporting:</strong> We encourage a transparent culture where employees can report safety concerns or incidents without fear of retaliation. All reports are investigated promptly, and corrective actions are taken.
              </li>
            </ul>
          </section>
  
          {/* Safety Programs Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Employee Training</h3>
                <p className="text-gray-700">
                  Our training programs cover a wide range of topics, including hazard recognition, equipment safety, and emergency response. We also offer specialized training for high-risk tasks.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Safety Audits</h3>
                <p className="text-gray-700">
                  Regular safety audits are conducted to identify areas for improvement. These audits help us maintain a safe work environment and ensure compliance with safety standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Health & Wellness</h3>
                <p className="text-gray-700">
                  We promote the overall well-being of our employees through health and wellness programs. This includes access to mental health resources, ergonomic assessments, and fitness initiatives.
                </p>
              </div>
            </div>
          </section>
  
          {/* Safety Statistics Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Safety by the Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-gray-900">99.9%</p>
                <p className="text-gray-700">Incident-Free Projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-gray-900">500+</p>
                <p className="text-gray-700">Hours of Safety Training Annually</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold text-gray-900">100%</p>
                <p className="text-gray-700">Compliance with Safety Regulations</p>
              </div>
            </div>
          </section>
  
          {/* Call to Action Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Commitment to Safety</h2>
            <p className="text-lg text-gray-700 mb-6">
              We are dedicated to creating a safe and healthy work environment for everyone. If you have any questions about our safety practices or would like to learn more, please don't hesitate to contact us.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </section>
        </div>
      </div>
    );
  }