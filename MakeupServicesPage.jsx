import NavBar from './NavBar';
import Footer from './Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MakeupServicesPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const makeupServices = [
        {
            name: "Everyday Makeup",
            price: "From NPR 800",
            desc: "Natural, everyday look perfect for work or casual outings"
        },
        {
            name: "Party Makeup",
            price: "From NPR 1,500",
            desc: "Glamorous makeup for parties, events, and special occasions"
        },
        {
            name: "Bridal Makeup",
            price: "From NPR 3,000",
            desc: "Complete bridal makeup with trial session included"
        },
        {
            name: "Engagement Makeup",
            price: "From NPR 2,000",
            desc: "Perfect makeup for your engagement ceremony"
        },
        {
            name: "Photoshoot Makeup",
            price: "From NPR 2,500",
            desc: "Professional makeup designed for photography and videography"
        },
        {
            name: "Makeup Lessons",
            price: "From NPR 1,500",
            desc: "Learn professional makeup techniques with personalized training"
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <NavBar forceScrolled={true} />

            <main className="pt-28 pb-24 px-6 sm:px-6 max-w-5xl mx-auto">
                {/* Hero Section */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#c85a9f] mb-4">Makeup Artist</h4>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Makeup Application</h1>
                        <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-lg font-light leading-relaxed">
                            Enhance your natural beauty with our professional makeup services for any occasion, from everyday looks to glamorous events.
                        </p>
                    </div>
                    <div className="aspect-[1] w-full rounded-2xl overflow-hidden shadow-2xl relative">
                        <img
                            src="/image/sai3.jpg"
                            alt="Makeup Application Services"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>

                {/* Services List */}
                <div className="border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-serif font-bold text-black mb-12 text-center">Our Makeup Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                        {makeupServices.map((service, idx) => (
                            <div key={idx} className="group flex flex-col items-start justify-start border-b border-transparent hover:border-gray-200 pb-4 transition-colors">
                                <div className="w-full flex justify-between items-baseline mb-2 gap-3">
                                    <h3 className="text-lg font-medium text-gray-900">{service.name}</h3>
                                    <span className="text-sm font-semibold text-pink-600 shrink-0">{service.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm font-light w-full">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 pt-16 border-t border-gray-200 text-center">
                    <h2 className="text-2xl font-serif font-bold mb-6">Ready to look stunning?</h2>
                    <Link to="/contact" className="inline-block px-4 sm:px-8 py-3.5 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wide rounded-sm transition-colors whitespace-nowrap">
                        Book Makeup Appointment
                    </Link>
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MakeupServicesPage;
