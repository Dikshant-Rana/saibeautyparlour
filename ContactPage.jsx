import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiMail, FiWatch } from 'react-icons/fi';

const ContactPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white text-black z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Placeholder */}
                        <div className="flex-shrink-0 flex items-center">
                            <span className="font-serif text-2xl font-bold italic">Logo</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center h-full">
                            <Link to="/" className="text-sm font-medium hover:text-pink-600 transition-colors">Home</Link>
                            <Link to="/about" className="text-sm font-medium hover:text-pink-600 transition-colors">About us</Link>
                            <div className="relative group h-full flex items-center" onMouseLeave={() => !('ontouchstart' in window) && setIsServicesOpen(false)}>
                                <button
                                    onClick={() => { setIsServicesOpen(!isServicesOpen); setIsResourcesOpen(false); }}
                                    className="text-sm font-medium hover:text-pink-600 transition-colors flex items-center py-5"
                                >
                                    Services
                                    <svg className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''} group-hover:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl transition-all duration-200 z-50 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                                    <div className="py-2">
                                        <Link to="/services/hair" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Hair Styling & Care</Link>
                                        <Link to="/services/skincare" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Skincare Treatments</Link>
                                        <Link to="/services/makeup" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Makeup Application</Link>
                                        <Link to="/services/nails-spa" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Nails & Spa Services</Link>
                                        <Link to="/services/wedding" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Wedding Packages</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center" onMouseLeave={() => !('ontouchstart' in window) && setIsResourcesOpen(false)}>
                                <button
                                    onClick={() => { setIsResourcesOpen(!isResourcesOpen); setIsServicesOpen(false); }}
                                    className="text-sm font-medium text-pink-600 flex items-center py-5"
                                >
                                    Resources
                                    <svg className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''} group-hover:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl transition-all duration-200 z-50 ${isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                                    <div className="py-2">                                        <Link to="/course" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Courses</Link>                                        <Link to="/gallery" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Gallery</Link>
                                        <Link to="/contact" className="block px-5 py-2.5 text-sm text-pink-600 hover:bg-gray-50 transition-colors font-medium">Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Header Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <Link to="/contact" className="px-4 py-1.5 text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
                                Book
                            </Link>
                            <button className="px-4 py-1.5 text-sm font-medium bg-pink-600 text-white hover:bg-pink-700 transition-colors">
                                Call
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-500 hover:text-black focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white border-b border-gray-200">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">Home</Link>
                            <Link to="/about" className="block px-3 py-2 text-base font-medium hover:bg-gray-50">About us</Link>
                            <div className="px-3 py-1 space-y-1">
                                <button
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                    className="w-full flex justify-between items-center py-2 text-base font-medium hover:bg-gray-50"
                                >
                                    <span>Services</span>
                                    <svg className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isServicesOpen && (
                                    <div className="ml-3 mt-1 space-y-1">
                                        <Link to="/services/hair" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Hair Styling & Care</Link>
                                        <Link to="/services/skincare" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Skincare Treatments</Link>
                                        <Link to="/services/makeup" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Makeup Application</Link>
                                        <Link to="/services/nails-spa" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Nails & Spa Services</Link>
                                        <Link to="/services/wedding" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Wedding Packages</Link>
                                    </div>
                                )}
                            </div>
                            <div className="px-3 py-1 space-y-1">
                                <button
                                    onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                                    className="w-full flex justify-between items-center py-2 text-base font-medium text-pink-600 hover:bg-gray-50"
                                >
                                    <span>Resources</span>
                                    <svg className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isResourcesOpen && (
                                    <div className="ml-3 mt-1 space-y-1">                                        <Link to="/course" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Courses</Link>                                        <Link to="/gallery" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Gallery</Link>
                                        <Link to="/contact" className="block px-3 py-1.5 text-sm font-medium text-pink-600 bg-pink-50">Contact</Link>
                                    </div>
                                )}
                            </div>
                            <div className="flex space-x-4 px-3 py-2 mt-2">
                                <Link to="/contact" className="flex-1 px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50">
                                    Book
                                </Link>
                                <button className="flex-1 px-4 py-2 text-sm font-medium bg-pink-600 text-white hover:bg-pink-700">
                                    Call
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="pt-30 pb-16 px-4 sm:px-6 lg:px-8 bg-white text-black min-h-screen">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">Contact Us</p>
                        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Get In Touch</h1>
                        <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
                        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                            We'd love to hear from you. Reach out for appointments or inquiries.
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                        {/* Left Column - Contact Cards */}
                        <div className="space-y-6">
                            {/* Address Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <FiMapPin className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Airport Road, Gadhimai<br /> Simara
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <FiPhone className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            +977 9811168383
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <FiMail className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            saiparlor83@gmail.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                        <FiWatch className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Opening Hours</h3>
                                        <p className="text-gray-600 text-sm">
                                            Sun - Fri: 8:00 AM - 7:00 PM<br />
                                            Saturday: 9:00 AM - 7:00 PM<br />

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Map */}
                        <div className="h-full">
                            <div className="rounded-lg overflow-hidden shadow-lg h-full min-h-[500px] flex items-center justify-center bg-gray-100">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.0435906384753!2d84.9748934253547!3d27.16398715831672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb554ae39ecdad%3A0x328354b8b4919a97!2sSai%20Beauty%20Parlour!5e0!3m2!1sen!2snp!4v1777033716402!5m2!1sen!2snp"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Location Map"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Connect with Us Section */}
            <section className="w-full bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">Connect With Us</h2>
                    <p className="text-pink-100 text-lg mb-10 max-w-2xl mx-auto">
                        Join our growing community on social media for daily beauty inspiration and exclusive updates
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                            <span className="text-white font-semibold">Facebook</span>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.35.013 7.022.074 5.644.135 4.417.42 3.328 1.51c-1.09 1.09-1.375 2.317-1.436 3.694C1.83 6.53 1.817 6.936 1.817 10.183c0 3.247.013 3.653.074 4.981.061 1.377.346 2.604 1.436 3.694 1.09 1.09 2.317 1.375 3.694 1.436 1.328.061 1.734.074 4.981.074 3.247 0 3.653-.013 4.981-.074 1.377-.061 2.604-.346 3.694-1.436 1.09-1.09 1.375-2.317 1.436-3.694.061-1.328.074-1.734.074-4.981 0-3.247-.013-3.653-.074-4.981-.061-1.377-.346-2.604-1.436-3.694-1.09-1.09-2.317-1.375-3.694-1.436C15.42 2.176 15.014 2.163 11.767 2.163zM12 7.215a4.785 4.785 0 100 9.57 4.785 4.785 0 000-9.57zm0 7.422a2.637 2.637 0 110-5.274 2.637 2.637 0 010 5.274zm4.846-7.854a1.004 1.004 0 100 2.008 1.004 1.004 0 000-2.008z" /></svg>
                            <span className="text-white font-semibold">Instagram</span>
                        </a>
                        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                            <span className="text-white font-semibold">WhatsApp</span>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                            <span className="text-white font-semibold">TikTok</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-8 px-6 sm:px-6 lg:px-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    {/* Top part of footer */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
                        {/* Logo */}
                        <div className="md:col-span-3 lg:col-span-2">
                            <span className="font-serif text-3xl font-bold italic">Logo</span>
                        </div>

                        {/* Link Columns */}
                        <div className="md:col-span-6 lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {/* Col 1 */}
                            <div className="flex flex-col space-y-4">
                                <h4 className="font-bold text-sm mb-2">Quick links</h4>
                                <Link to="/" className="text-xs text-gray-400 hover:text-white transition-colors">Home</Link>
                                <Link to="/about" className="text-xs text-gray-400 hover:text-white transition-colors">About us</Link>
                                <Link to="/gallery" className="text-xs text-gray-400 hover:text-white transition-colors">Gallery</Link>
                                <Link to="/contact" className="text-xs text-gray-400 hover:text-white transition-colors">Contact us</Link>
                            </div>
                            {/* Col 2 */}
                            <div className="flex flex-col space-y-4">
                                <h4 className="font-bold text-sm mb-2">Services</h4>
                                <Link to="/services/hair" className="text-xs text-gray-400 hover:text-white transition-colors">Hair styling</Link>
                                <Link to="/services/skincare" className="text-xs text-gray-400 hover:text-white transition-colors">Skin treatments</Link>
                                <Link to="/services/makeup" className="text-xs text-gray-400 hover:text-white transition-colors">Makeup</Link>
                                <Link to="/services/nails-spa" className="text-xs text-gray-400 hover:text-white transition-colors">Nail care</Link>
                                <Link to="/services/wedding" className="text-xs text-gray-400 hover:text-white transition-colors">Wedding packages</Link>
                            </div>
                            {/* Col 3 */}
                            <div className="flex flex-col space-y-4">
                                <h4 className="font-bold text-sm mb-2">Support</h4>
                                <Link to="/contact" className="text-xs text-gray-400 hover:text-white transition-colors">Book appointment</Link>
                                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Gift cards</a>
                                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Beauty tips</a>
                                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Help center</a>
                                <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors">Reviews</a>
                            </div>
                        </div>

                        {/* Follow us */}
                        <div className="md:col-span-3 lg:col-span-4 pl-0 lg:pl-12">
                            <h4 className="font-bold text-sm mb-4">Follow us</h4>
                            <div className="grid grid-cols-2 gap-3">
                                <a href="#" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                    <span className="text-xs text-white">Facebook</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                    <svg className="w-4 h-4 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.35.013 7.022.074 5.644.135 4.417.42 3.328 1.51c-1.09 1.09-1.375 2.317-1.436 3.694C1.83 6.53 1.817 6.936 1.817 10.183c0 3.247.013 3.653.074 4.981.061 1.377.346 2.604 1.436 3.694 1.09 1.09 2.317 1.375 3.694 1.436 1.328.061 1.734.074 4.981.074 3.247 0 3.653-.013 4.981-.074 1.377-.061 2.604-.346 3.694-1.436 1.09-1.09 1.375-2.317 1.436-3.694.061-1.328.074-1.734.074-4.981 0-3.247-.013-3.653-.074-4.981-.061-1.377-.346-2.604-1.436-3.694-1.09-1.09-2.317-1.375-3.694-1.436C15.42 2.176 15.014 2.163 11.767 2.163zM12 7.215a4.785 4.785 0 100 9.57 4.785 4.785 0 000-9.57zm0 7.422a2.637 2.637 0 110-5.274 2.637 2.637 0 010 5.274zm4.846-7.854a1.004 1.004 0 100 2.008 1.004 1.004 0 000-2.008z" /></svg>
                                    <span className="text-xs text-white">Instagram</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                                    <span className="text-xs text-white">WhatsApp</span>
                                </a>
                                <a href="#" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                                    <span className="text-xs text-white">TikTok</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom part of footer */}
                    <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-center items-center gap-4">
                        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center text-[11px] text-gray-400">
                            <span>&copy; 2024 Aarfa Beauty Home. All rights reserved.</span>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                                <a href="#" className="hover:text-white transition-colors">Terms of service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ContactPage;