import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string; // You can replace this with an SVG or custom icon component
}

const WhyChooseUsSection: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Experienced Team',
      description: 'Our team has over 25 years of combined experience in the construction industry.',
      icon: '👷', // Replace with an icon or SVG
    },
    {
      id: 2,
      title: 'Quality Assurance',
      description: 'We use only the best materials and follow strict quality control processes.',
      icon: '🏆', // Replace with an icon or SVG
    },
    {
      id: 3,
      title: 'On-Time Delivery',
      description: 'We pride ourselves on completing projects on time and within budget.',
      icon: '⏰', // Replace with an icon or SVG
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="text-5xl mb-6 text-blue-600">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;