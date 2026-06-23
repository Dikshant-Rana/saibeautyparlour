import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NailsSpaServicesPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const nailsSpaServices = [
        { name: "Acrylic Nail Extensions", desc: "Long-lasting extensions with custom art.", price: "NPR 2,500" },
        { name: "Gel Nail Extensions", desc: "Flexibility Gloss & Lightweight", price: "NPR 2,500" },
        { name: "Classic Manicure", desc: "Nail shaping, cuticle care, and polish application.", price: "NPR 800" },
        { name: "Luxury Spa Pedicure", desc: "Exfoliating scrub, hydrating mask, and extended massage.", price: "NPR 1,200" },
        { name: "Aromatherapy Full Body Massage", desc: "Deep tissue massage using warm essential oils.", price: "NPR 3,000" },
        { name: "Full Body Waxing", desc: "Smooth and hair-free skin for weeks.", price: "NPR 3,500" },
        { name: "Underarms Waxing", desc: "Gentle hair removal for underarms.", price: "NPR 1,000" },
        { name: "Face Waxing", desc: "Delicate hair removal for the face.", price: "NPR 800" },
        { name: "Arms Waxing", desc: "Full or half arms waxing.", price: "NPR 1,000" },
        { name: "Legs Waxing", desc: "Full or half legs waxing.", price: "NPR 1,200" }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <NavBar forceScrolled={true} />

            <main className="pt-28 pb-24 px-6 sm:px-6 max-w-5xl mx-auto">
                {/* Hero Section */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#c85a9f] mb-4">Nail & Spa Expert</h4>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Nails & Spa Services</h1>
                        <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-lg font-light leading-relaxed">
                            Pamper yourself with our professional nail care and relaxing spa treatments designed to rejuvenate your mind and body.
                        </p>
                    </div>
                    <div className="aspect-[1] w-full rounded-2xl overflow-hidden shadow-2xl relative">
                        <img
                            src="/images/nails.jpg"
                            alt="Nails and Spa Services"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>

                {/* Services List */}
                <div className="border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-serif font-bold text-black mb-12 text-center">Our Nails & Spa Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                        {nailsSpaServices.map((service, idx) => (
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
                    <h2 className="text-2xl font-serif font-bold mb-6">Ready to relax and unwind?</h2>
                    <Link to="/contact" className="inline-block px-4 sm:px-8 py-3.5 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wide rounded-sm transition-colors whitespace-nowrap">
                        Book Nails & Spa Appointment
                    </Link>
                </div>
            </main>
            {/* Footer */}
            <Footer />

        </div>
    );
};

export default NailsSpaServicesPage;
