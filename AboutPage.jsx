import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-black font-sans">
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
                            <Link to="/about" className="text-sm font-medium text-pink-600 py-5">About us</Link>
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
                                    className="text-sm font-medium hover:text-pink-600 transition-colors flex items-center py-5"
                                >
                                    Resources
                                    <svg className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''} group-hover:rotate-180`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl transition-all duration-200 z-50 ${isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} group-hover:opacity-100 group-hover:visible`}>
                                    <div className="py-2">
                                        <Link to="/course" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Courses</Link>
                                        <Link to="/gallery" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Gallery</Link>
                                        <Link to="/contact" className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors">Contact</Link>
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
                            <Link to="/about" className="block px-3 py-2 text-base font-medium text-pink-600 bg-pink-50">About us</Link>
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
                                    className="w-full flex justify-between items-center py-2 text-base font-medium hover:bg-gray-50"
                                >
                                    <span>Resources</span>
                                    <svg className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isResourcesOpen && (
                                    <div className="ml-3 mt-1 space-y-1">
                                        <Link to="/course" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Courses</Link>
                                        <Link to="/gallery" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Gallery</Link>
                                        <Link to="/contact" className="block px-3 py-1.5 text-sm hover:bg-gray-50 text-gray-700">Contact</Link>
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
            <main className="pt-0">
                {/* Hero Section - Premium & Elegant */}
                <section className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center overflow-hidden mt-16">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="./image/parlour_frontimg.jpeg"
                            alt="Sai Beauty Academy"
                            className="w-full h-full object-cover"
                        />
                        {/* Warm overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
                        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Our Story & Vision
                        </h1>

                        {/* Pink accent line */}
                        <div className="flex justify-center mb-6">
                            <div className="h-1 w-16 bg-pink-600"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                            Crafting beauty professionals with passion, artistry, and a commitment to excellence.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="w-full bg-white text-black py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-2">
                                <p className="text-sm font-bold uppercase tracking-widest text-pink-600">Our Journey</p>
                            </div>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Where tradition meets innovation
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                Founded in 2016, Sai Beauty Academy was born from a vision to create a sanctuary where aspiring beauty professionals could master their craft with integrity and elegance. What started as a small studio has blossomed into a premier destination for comprehensive beauty education.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                                We believe beauty education goes beyond techniques—it's about empowering individuals to discover their unique artistic voice and build fulfilling careers that celebrate creativity, confidence, and connection with clients.
                            </p>
                            <p className="text-gray-600 text-base leading-relaxed italic">
                                Every student who walks through our doors isn't just learning beauty—they're learning to transform lives, starting with their own.
                            </p>
                        </div>

                        {/* Right: Image */}
                        <div className="relative">
                            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="./image/sai_interior2.jpeg"
                                    alt="Academy Studio"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-100 rounded-full opacity-40 z-0"></div>
                        </div>
                    </div>
                </section>

                {/* Founder Section - PREMIUM & PROMINENT */}
                <section className="w-full bg-gradient-to-br from-amber-50 via-white to-amber-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
                        {/* Left: Large Founder Portrait */}
                        <div className="lg:col-span-2 flex justify-center">
                            <div className="relative w-full max-w-sm">
                                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src="./image/sanu1.jpg"
                                        alt="Sanu Lama - Founder"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>
                        </div>

                        {/* Right: Founder Info */}
                        <div className="lg:col-span-3">
                            <div className="mb-2">
                                <p className="text-xs font-bold uppercase tracking-widest text-pink-600">Founder & Visionary</p>
                            </div>

                            {/* Name */}
                            <h2 className="font-serif text-5xl font-bold text-gray-900 mb-2">
                                Sanu Lama
                            </h2>
                            <p className="text-lg text-gray-600 font-semibold mb-8">
                                Beauty Artist & Educator
                            </p>

                            {/* Founder Bio */}
                            <p className="text-gray-700 text-base leading-relaxed mb-8">
                                With over 15 years of experience in professional beauty services and education, Aarfa has made it her life's mission to elevate beauty education in Nepal. Her journey began in a small salon chair, where she discovered her passion for transforming clients' confidence through beauty. Today, she leads a thriving academy dedicated to nurturing the next generation of beauty professionals.
                            </p>

                            {/* Vision Statement - Beautiful Quote Box */}
                            <div className="bg-white rounded-lg p-8 mb-8 border-l-4 border-pink-600 shadow-sm">

                                <p className="font-serif text-2xl text-gray-900 mb-4 leading-relaxed">
                                    Beauty is not just about appearance—it's about empowering individuals to feel confident, capable, and celebrated.
                                </p>

                            </div>

                            {/* Qualifications & Achievements */}
                            <div className="space-y-4">
                                <h3 className="font-semibold text-gray-900 text-lg">Credentials & Achievements</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <span className="text-pink-600 text-2xl flex-shrink-0">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">15+ Years Experience</p>
                                            <p className="text-sm text-gray-600">Professional beauty industry</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-pink-600 text-2xl flex-shrink-0">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Certified Educator</p>
                                            <p className="text-sm text-gray-600">International beauty standards</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-pink-600 text-2xl flex-shrink-0">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Award-Winning Work</p>
                                            <p className="text-sm text-gray-600">Multiple beauty industry accolades</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="text-pink-600 text-2xl flex-shrink-0">✓</span>
                                        <div>
                                            <p className="font-semibold text-gray-900">Bridal Specialist</p>
                                            <p className="text-sm text-gray-600">Expertise in wedding beauty</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Instructors Section */}
                <section className="w-full bg-white text-black py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                    <div className="max-w-6xl mx-auto">
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <p className="text-xs font-bold uppercase tracking-widest text-pink-600 mb-4">Expert Team</p>
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Meet Our Expert Instructors
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Passionate professionals committed to nurturing your creative journey
                            </p>
                        </div>

                        {/* Instructors Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Instructor 1 */}
                            <div className="text-center">
                                <div className="mb-2 relative">
                                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                                        <img
                                            src="./image/sai3.jpg"
                                            alt="Deepa Sharma"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                                    Deepa Sharma
                                </h3>
                                <p className="text-sm font-semibold text-pink-600 mb-2 uppercase tracking-wide">
                                    Senior Hair Colorist
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    With 8 years of specialized expertise in color theory and advanced techniques, Deepa brings artistry and precision to every strand.
                                </p>
                            </div>

                            {/* Instructor 2 */}
                            <div className="text-center">
                                <div className="mb-2 relative">
                                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                                        <img
                                            src="./image/sai3.jpg"
                                            alt="Nisha Adhikari"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                                    Nisha Adhikari
                                </h3>
                                <p className="text-sm font-semibold text-pink-600 mb-2 uppercase tracking-wide">
                                    Skincare Specialist
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Dedicated to holistic skin wellness, Nisha combines scientific knowledge with personalized care techniques.
                                </p>
                            </div>

                            {/* Instructor 3 */}
                            <div className="text-center">
                                <div className="mb-2 relative">
                                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                                        <img
                                            src="./image/sai3.jpg"
                                            alt="Anita Thapa"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                                    Anita Thapa
                                </h3>
                                <p className="text-sm font-semibold text-pink-600 mb-2 uppercase tracking-wide">
                                    Makeup Artist
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A creative visionary who teaches makeup as an art form, enhancing natural beauty with confidence and flair.
                                </p>
                            </div>

                            {/* Instructor 4 */}
                            <div className="text-center">
                                <div className="mb-2 relative">
                                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                                        <img
                                            src="./image/sai3.jpg"
                                            alt="Sunita Gurung"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                                    Sunita Gurung
                                </h3>
                                <p className="text-sm font-semibold text-pink-600 mb-2 uppercase tracking-wide">
                                    Hair Care Expert
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Specializing in hair health and restoration, Sunita brings therapeutic knowledge to every treatment and lesson.
                                </p>
                            </div>

                            {/* Instructor 5 */}
                            <div className="text-center">
                                <div className="mb-2 relative">
                                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                                        <img
                                            src="./image/sai3.jpg"
                                            alt="Priya Magar"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                                    Priya Magar
                                </h3>
                                <p className="text-sm font-semibold text-pink-600 mb-2 uppercase tracking-wide">
                                    Salon Manager & Trainer
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Bringing real-world salon experience and business acumen to educate students about professional excellence.
                                </p>
                            </div>

                            {/* Instructor 6 */}
                            <div className="text-center">
                                <div className="mb-2 relative">
                                    <div className="aspect-square rounded-lg overflow-hidden shadow-lg border-4 border-gray-100">
                                        <img
                                            src="./image/sai3.jpg"
                                            alt="Aarav Singh"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-1">
                                    Aarav Singh
                                </h3>
                                <p className="text-sm font-semibold text-pink-600 mb-2 uppercase tracking-wide">
                                    Bridal Specialist
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Wedding beauty expert dedicated to creating brides' dream looks with meticulous attention to detail.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="w-full bg-gradient-to-r from-yellow-50 to-green-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to begin your beauty journey?
                        </h2>
                        <p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
                            Join our community of passionate beauty professionals and discover your artistic potential.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <Link
                                to="/contact"
                                className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-300"
                            >
                                Enroll Now
                            </Link>
                            <button className="px-8 py-4 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold rounded-lg transition-colors duration-300">
                                Book a Campus Tour
                            </button>
                        </div>
                    </div>
                </section>

                {/* Connect with Us Section */}
                <section className="w-full bg-gradient-to-r from-yellow-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">Stay Connected</h2>
                        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                            Follow us on social media for daily beauty tips, exclusive offers, and behind-the-scenes content
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                <span>Facebook</span>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.35.013 7.022.074 5.644.135 4.417.42 3.328 1.51c-1.09 1.09-1.375 2.317-1.436 3.694C1.83 6.53 1.817 6.936 1.817 10.183c0 3.247.013 3.653.074 4.981.061 1.377.346 2.604 1.436 3.694 1.09 1.09 2.317 1.375 3.694 1.436 1.328.061 1.734.074 4.981.074 3.247 0 3.653-.013 4.981-.074 1.377-.061 2.604-.346 3.694-1.436 1.09-1.09 1.375-2.317 1.436-3.694.061-1.328.074-1.734.074-4.981 0-3.247-.013-3.653-.074-4.981-.061-1.377-.346-2.604-1.436-3.694-1.09-1.09-2.317-1.375-3.694-1.436C15.42 2.176 15.014 2.163 11.767 2.163zM12 7.215a4.785 4.785 0 100 9.57 4.785 4.785 0 000-9.57zm0 7.422a2.637 2.637 0 110-5.274 2.637 2.637 0 010 5.274zm4.846-7.854a1.004 1.004 0 100 2.008 1.004 1.004 0 000-2.008z" /></svg>
                                <span>Instagram</span>
                            </a>
                            <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                                <span>WhatsApp</span>
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 bg-black hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" /></svg>
                                <span>TikTok</span>
                            </a>
                        </div>
                    </div>
                </section>
            </main>

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

export default AboutPage;
