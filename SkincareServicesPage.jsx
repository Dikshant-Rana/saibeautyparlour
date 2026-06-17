import NavBar from './NavBar';
import Footer from './Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SkincareServicesPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const skincareServices = [
        { name: "Cleansing", desc: "Refreshing deep facial cleanse.", price: "NPR 1,000" },
        { name: "Anti-Aging Facial", desc: "Luxurious facial infused with collagen to reduce fine lines.", price: "From NPR 4,500" },
        { name: "Anti-Acne Facial", desc: "Targeted treatment to clear breakouts and soothe skin.", price: "From NPR 3,000" },
        { name: "Hydra Facial", desc: "Deep cleanse, extract, and hydrate for an unmistakable glow.", price: "From NPR 4,000" },
        { name: "Whitening Facial", desc: "Brightening treatment for an even skin tone.", price: "From NPR 3,500" }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header */}
            <NavBar forceScrolled={true} />

            <main className="pt-28 pb-24 px-6 sm:px-6 max-w-5xl mx-auto">
                {/* Hero Section */}
                <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#c85a9f] mb-4">Skin Care Expert</h4>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Skincare Treatments</h1>
                        <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-lg font-light leading-relaxed">
                            Rejuvenate and nourish your skin with our professional facial treatments and advanced skincare therapies.
                        </p>
                    </div>
                    <div className="aspect-[1] w-full rounded-2xl overflow-hidden shadow-2xl relative">
                        <img
                            src="/image/skincare.png"
                            alt="Skincare Treatments"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>

                {/* Services List */}
                <div className="border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-serif font-bold text-black mb-12 text-center">Our Skincare Services</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                        {skincareServices.map((service, idx) => (
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
                    <h2 className="text-2xl font-serif font-bold mb-6">Ready for radiant skin?</h2>
                    <Link to="/contact" className="inline-block px-4 sm:px-8 py-3.5 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wide rounded-sm transition-colors whitespace-nowrap">
                        Book Skincare Appointment
                    </Link>
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default SkincareServicesPage;