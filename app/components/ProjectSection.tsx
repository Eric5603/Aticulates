'use client';
import React, { useState } from 'react';

// Define types for better type safety and readability
type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    category: 'residential' | 'commercial' | 'industrial';
};

type TabKey = 'all' | 'residential' | 'commercial' | 'industrial';

const ProjectSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('all');

    // Data for projects
    const projects: Project[] = [
        {
            id: 1,
            title: 'Modern Apartment Complex',
            description: 'A state-of-the-art residential project with luxury amenities.',
            image: 'https://via.placeholder.com/400x250',
            category: 'residential',
        },
        {
            id: 2,
            title: 'Office Tower',
            description: 'A sleek and modern office building designed for productivity.',
            image: 'https://via.placeholder.com/400x250',
            category: 'commercial',
        },
        {
            id: 3,
            title: 'Industrial Warehouse',
            description: 'A large-scale industrial facility built for efficiency and safety.',
            image: 'https://via.placeholder.com/400x250',
            category: 'industrial',
        },
        {
            id: 4,
            title: 'Luxury Villa',
            description: 'A beautifully designed villa with panoramic views.',
            image: 'https://via.placeholder.com/400x250',
            category: 'residential',
        },
        {
            id: 5,
            title: 'Shopping Mall',
            description: 'A bustling commercial space with retail and entertainment options.',
            image: 'https://via.placeholder.com/400x250',
            category: 'commercial',
        },
        {
            id: 6,
            title: 'Manufacturing Plant',
            description: 'A high-tech industrial facility for large-scale production.',
            image: 'https://via.placeholder.com/400x250',
            category: 'industrial',
        },
    ];

    // Filter projects based on the active tab
    const filteredProjects =
        activeTab === 'all'
            ? projects
            : projects.filter((project) => project.category === activeTab);

    // Handle tab change
    const handleTabChange = (tab: TabKey) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Page Header */}
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Projects</h1>

            {/* Tabs for Filtering Projects */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {(['all', 'residential', 'commercial', 'industrial'] as TabKey[]).map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-3 font-semibold text-lg rounded-full transition-colors ${
                            activeTab === tab
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                        onClick={() => handleTabChange(tab)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{project.description}</p>
                            <span
                                className={`inline-block mt-4 px-4 py-1 text-sm font-semibold rounded-full ${
                                    project.category === 'residential'
                                        ? 'bg-blue-100 text-blue-600'
                                        : project.category === 'commercial'
                                        ? 'bg-green-100 text-green-600'
                                        : 'bg-orange-100 text-orange-600'
                                }`}
                            >
                                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;