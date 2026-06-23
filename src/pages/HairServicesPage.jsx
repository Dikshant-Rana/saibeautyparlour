import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HairServicesPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    const hairServices = [
        {
            name: "Haircut",
            subcategory: true,
            items: [
                { name: "Step Cut", desc: "Layered step cut for added volume and texture.", price: "NPR 800" },
                { name: "V Cut", desc: "Classic V-shaped haircut.", price: "NPR 600" },
                { name: "Thai Cut", desc: "Trendy Thai style haircut.", price: "NPR 1,000" },
                { name: "U Cut", desc: "Simple and elegant U-shaped cut.", price: "NPR 500" },
                { name: "Straight Cut", desc: "Clean and neat straight trim.", price: "NPR 400" }
            ]
        },
        {
            name: "Hair Color",
            subcategory: true,
            items: [
                { name: "Global Hair Color", desc: "Full coverage root-to-tip hair coloring.", price: "From NPR 4,500" },
                { name: "Highlights", desc: "Foil highlights for added dimension.", price: "From NPR 3,500" },
                { name: "Balayage / Ombre", desc: "Hand-painted color technique.", price: "From NPR 5,500" },
                { name: "Root Touch-up", desc: "Cover grays and regrowth.", price: "From NPR 1,500" }
            ]
        },
        {
            name: "Hair Straightening",
            subcategory: true,
            items: [
                { name: "Normal Straightening", desc: "Long-lasting sleek, straight hair.", price: "From NPR 5,000" },
                { name: "Keratin Straightening", desc: "Frizz control, repair and smoothening.", price: "From NPR 6,000" },
                { name: "Nanoplasty", desc: "Loosen tight curls for manageable hair.", price: "From NPR 4,000" },
                { name: "Botox Straight", desc: "Silky, pin-straight rebonding treatment.", price: "From NPR 5,500" }
            ]
        },
        {
            name: "Hair Perm",
            subcategory: true,
            items: [
                { name: "Tight Perm", desc: "Traditional tight curly perm.", price: "From NPR 4,000" },
                { name: "Loose Perm", desc: "Relaxed bouncy curls.", price: "From NPR 5,500" },
                { name: "Wavy Perm", desc: "Modern, soft wave perm.", price: "From NPR 5,500" }
            ]
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
                        <h4 className="text-xs font-bold uppercase tracking-widest text-[#c85a9f] mb-4">Hair Care Specialist</h4>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-6 text-gray-900">Hair Styling & Care</h1>
                        <p className="text-gray-500 max-w-lg mx-auto md:mx-0 text-lg font-light leading-relaxed">
                            Transform your hair with our expert styling, cutting, coloring, and treatment services. From everyday looks to special occasions.
                        </p>
                    </div>
                    <div className="aspect-[1] w-full rounded-2xl overflow-hidden shadow-2xl relative">
                        <img
                            src="/images/hair.jpg"
                            alt="Hair Styling Services"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/5"></div>
                    </div>
                </div>

                {/* Services List */}
                <div className="border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-serif font-bold text-black mb-12 text-center">Our Hair Services</h2>
                    <div className="space-y-16">
                        {hairServices.map((category, idx) => (
                            <div key={idx}>
                                <h3 className="text-2xl font-serif font-semibold text-gray-800 mb-8 pb-2 border-b border-gray-100">{category.name}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                                    {category.items.map((service, serviceIdx) => (
                                        <div key={serviceIdx} className="group flex flex-col items-start justify-start border-b border-transparent hover:border-gray-200 pb-4 transition-colors">
                                            <div className="w-full flex justify-between items-baseline mb-2 gap-3">
                                                <h4 className="text-lg font-medium text-gray-900">{service.name}</h4>
                                                <span className="text-sm font-semibold text-pink-600 shrink-0">{service.price}</span>
                                            </div>
                                            <p className="text-gray-500 text-sm font-light w-full">{service.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-24 pt-16 border-t border-gray-200 text-center">
                    <h2 className="text-2xl font-serif font-bold mb-6">Ready to transform your hair?</h2>
                    <Link to="/contact" className="inline-block px-4 sm:px-8 py-3.5 sm:py-3 bg-pink-500 hover:bg-pink-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wide rounded-sm transition-colors whitespace-nowrap">
                        Book Hair Appointment
                    </Link>
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HairServicesPage;