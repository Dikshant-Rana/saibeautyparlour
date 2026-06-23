import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Header */}
            <NavBar forceScrolled={true} />

            {/* Main Content */}
            <main className="pt-0">
                {/* Hero Section - Premium & Elegant */}
                <section className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center justify-center overflow-hidden mt-16 ">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/images/team1.jpg"
                            alt="Sai Beauty Academy"
                            className="w-full h-full object-cover"
                        />
                        {/* Warm overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
                        {/* EST Card */}
                        <div className="inline-flex items-center gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-pink-600/20 backdrop-blur-sm border border-pink-600/40 text-pink-100 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
                            Established in 2005
                        </div>

                        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-1 leading-tight">
                            Our Story & Vision
                        </h1>

                        {/* Pink accent line */}
                        <div className="flex justify-center mb-6">
                            <div className="h-1 w-16 bg-pink-600"></div>
                        </div>

                        <p className="text-sm sm:text-lg md:text-xl text-white/90 font-light leading-relaxed">
                            Crafting beauty professionals with passion, artistry, and a commitment to excellence.
                        </p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="w-full bg-white text-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <div className="mb-2">
                                <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-pink-600">Our Journey</p>
                            </div>
                            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-8 leading-tight">
                                Where tradition meets innovation
                            </h2>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                Founded in 2016, Sai Beauty Academy was born from a vision to create a sanctuary where aspiring beauty professionals could master their craft with integrity and elegance. What started as a small studio has blossomed into a premier destination for comprehensive beauty education.
                            </p>
                            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                We believe beauty education goes beyond techniques—it's about empowering individuals to discover their unique artistic voice and build fulfilling careers that celebrate creativity, confidence, and connection with clients.
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed italic">
                                Every student who walks through our doors isn't just learning beauty—they're learning to transform lives, starting with their own.
                            </p>
                        </div>

                        {/* Image */}
                        <div className="relative order-1 lg:order-2">
                            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                                <img
                                    src="/images/sai_interior2.jpeg"
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
                                        src="/images/sanu1.jpg"
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
                            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
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
                            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Meet Our Team
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
                                            src="/images/sai3.jpg"
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
                                            src="/images/sai3.jpg"
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
                                            src="/images/sai3.jpg"
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
                                            src="/images/sai3.jpg"
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
                                            src="/images/sai3.jpg"
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
                                            src="/images/sai3.jpg"
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
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to begin your beauty journey?
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg mb-12 max-w-2xl mx-auto">
                            Join our community of passionate beauty professionals and discover your artistic potential.
                        </p>

                        <div className="flex flex-row justify-center items-center gap-2 sm:gap-4 flex-nowrap">
                            <Link
                                to="/contact"
                                className="px-4 sm:px-8 py-3.5 sm:py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-xs sm:text-base rounded-lg shadow-lg transition-colors duration-300 whitespace-nowrap"
                            >
                                Book Appointment
                            </Link>
                            <Link
                                to="/course"
                                className="px-4 sm:px-8 py-3.5 sm:py-4 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold text-xs sm:text-base rounded-lg transition-colors duration-300 whitespace-nowrap"
                            >
                                Explore Training Courses
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutPage;
