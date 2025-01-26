import React from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const FeaturedProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Residential Complex',
      image: '/project1.jpg',
      description: 'A state-of-the-art residential complex with eco-friendly designs.',
    },
    {
      id: 2,
      title: 'Commercial Office Building',
      image: '/project2.jpg',
      description: 'A sleek and modern office space for a leading tech company.',
    },
    {
      id: 3,
      title: 'Industrial Warehouse',
      image: '/project3.jpg',
      description: 'A large-scale warehouse facility with advanced logistics systems.',
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={`/projects/${project.id}`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;