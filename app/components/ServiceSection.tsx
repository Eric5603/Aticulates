'use client';
import React, { useState } from 'react';

// Define types for better type safety and readability
type Service = {
    id: number;
    title: string;
    description: string;
    image: string;
};

type TabContent = {
    title: string;
    description: string;
};

type TabKey = 'residential' | 'commercial' | 'industrial';

const ServiceSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabKey>('residential');

    // Data for cards
    const services: Service[] = [
        {
            id: 1,
            title: 'Construction',
            description: 'Full-service construction from ground-up development to final completion.',
            image: 'https://via.placeholder.com/400x250',
        },
        {
            id: 2,
            title: 'Renovation',
            description: 'Professional renovation services for residential and commercial properties.',
            image: 'https://via.placeholder.com/400x250',
        },
        {
            id: 3,
            title: 'Design & Build',
            description: 'Complete design and build solutions tailored to your specific needs.',
            image: 'https://via.placeholder.com/400x250',
        },
    ];

    // Data for tabs
    const tabContents: Record<TabKey, TabContent> = {
        residential: {
            title: 'Residential Construction',
            description:
                'We specialize in building dream homes with attention to detail and quality craftsmanship. Our services include new home construction, home additions, and complete remodeling services.',
        },
        commercial: {
            title: 'Commercial Construction',
            description:
                'From office buildings to retail spaces, we deliver commercial projects on time and within budget. Our team handles everything from design to final inspections.',
        },
        industrial: {
            title: 'Industrial Construction',
            description:
                'Expert industrial construction services including warehouses, manufacturing facilities, and specialized industrial projects. We prioritize safety and efficiency in all our industrial projects.',
        },
    };

    // Handle tab change
    const handleTabChange = (tab: TabKey) => {
        setActiveTab(tab);
    };

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Cards Section */}
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-56 object-cover"
                            loading="lazy"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs Section */}
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Service Details</h2>
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                {/* Tab Buttons */}
                <div className="flex flex-wrap border-b border-gray-200">
                    {Object.keys(tabContents).map((tab) => (
                        <button
                            key={tab}
                            className={`flex-1 px-6 py-4 font-semibold text-lg text-gray-600 hover:bg-gray-50 transition-colors ${
                                activeTab === tab
                                    ? 'bg-gray-50 text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-600'
                            }`}
                            onClick={() => handleTabChange(tab as TabKey)}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="p-8">
                    <h3 className="text-3xl font-bold mb-6 text-gray-800">{tabContents[activeTab].title}</h3>
                    <p className="text-gray-600 leading-relaxed">{tabContents[activeTab].description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;