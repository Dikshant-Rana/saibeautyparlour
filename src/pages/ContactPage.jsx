import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiMail, FiClock, FiNavigation, FiMessageSquare, FiCheck, FiSend } from 'react-icons/fi';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa6';

const ContactPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Our salon location (from the Google Maps embed)
    const SALON_LOCATION = {
        lat: 27.1640703012098,
        lng: 84.97641705488469,
        name: 'Sai Beauty Parlour, Airport Road, Gadhimai'
    };

    // Open Google Maps directions
    const handleGetDirection = () => {
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=27.1640703012098,84.97641705488469&travelmode=driving`;
        window.open(mapsUrl, '_blank');
    };

    // Open Google Maps location
    const handleViewInGoogleMaps = () => {
        const mapsUrl = `https://www.google.com/maps/search/Sai+Beauty+Parlour+Airport+Road+Gadhimai/@${SALON_LOCATION.lat},${SALON_LOCATION.lng},15z`;
        window.open(mapsUrl, '_blank');
    };

    // Call handler
    const handleCall = () => {
        window.location.href = 'tel:+977-9811168383';
    };

    // WhatsApp handler
    const handleWhatsApp = () => {
        const phoneNumber = '9811168383';
        const message = 'Hi, I would like to inquire about your services!';
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    };

    // Form handlers
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Send message to WhatsApp
        const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nPreferred Date: ${formData.date}\nMessage: ${formData.message}`;
        window.open(`https://wa.me/977981168383?text=${encodeURIComponent(message)}`, '_blank');
        setFormSubmitted(true);
        setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Header */}
            <NavBar forceScrolled={true} />

            

            {/* Book Appointment Section */}
            <section className="w-full bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Contact Us</p>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Appointment</h2>
                        <p className="text-gray-600 text-base max-w-2xl mx-auto">
                            Fill out the form below or reach us directly via phone or WhatsApp
                        </p>
                    </div>

                    {/* Quick Contact Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={handleCall}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                        >
                            <FiPhone className="w-5 h-5" />
                            Call Now
                        </button>
                        <button
                            onClick={handleWhatsApp}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            WhatsApp Us
                        </button>
                    </div>

                    {/* Form and Contact Info Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                        {/* Left Column - Form */}
                        <div className="bg-gray-50 rounded-xl p-8">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                            
                            {formSubmitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6 flex items-start gap-4 text-center justify-center">
                                    <div>
                                        <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mx-auto mb-3">
                                            <FiCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <h4 className="font-bold text-green-900 mb-1">Message Sent!</h4>
                                        <p className="text-green-700 text-sm">We'll respond shortly on WhatsApp</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    {/* Full Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-black mb-1">Full Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="Enter your name"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm text-black"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-black mb-1">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="your@email.com"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm text-black"
                                        />
                                    </div>

                                    {/* Phone and Service Row */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-black mb-1">Phone *</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="+977 XXXXXXXXXX"
                                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm text-black"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="block text-sm font-semibold text-black mb-1">Service</label>
                                            <select
                                                id="service"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2.5 border-2 border-gray-300 rounded-lg hover:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm bg-white text-black"
                                            >
                                                <option value="">Select a service</option>
                                                <option value="Hair">Hair Styling</option>
                                                <option value="Makeup">Makeup Application</option>
                                                <option value="Skincare">Skincare Treatments</option>
                                                <option value="Nails">Nails & Spa Services</option>
                                                <option value="Wedding">Wedding Packages</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Preferred Date */}
                                    <div>
                                        <label htmlFor="date" className="block text-sm font-semibold text-black mb-1">Preferred Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm text-black"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-black mb-1">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Tell us about your needs..."
                                            rows="4"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all text-sm resize-none text-black"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <FiSend className="w-5 h-5" />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Right Column - Contact Info */}
                        <div className="space-y-4">
                            {/* Visit Us Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FiMapPin className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Visit Us</h4>
                                        <p className="text-gray-600 text-sm">
                                            Airport Road, Gadhimai<br />
                                            Simara
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Call Us Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FiPhone className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                                        <a href="tel:+977-9811168383" className="text-gray-600 text-sm hover:text-gray-900">
                                            +977 9811168383
                                        </a>
                                        <p className="text-gray-500 text-xs mt-1">Tap to call</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email Us Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FiMail className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                                        <a href="mailto:saiparlor83@gmail.com" className="text-gray-600 text-sm hover:text-gray-900">
                                            saiparlor83@gmail.com
                                        </a>
                                        <p className="text-gray-500 text-xs mt-1">Send email</p>
                                    </div>
                                </div>
                            </div>

                            {/* Opening Hours Card */}
                            <div className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <FiClock className="w-6 h-6 text-gray-800" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Opening Hours</h4>
                                        <p className="text-gray-600 text-sm">
                                            Mon - Fri: 8:00 AM - 7:00 PM<br />
                                            Saturday: 9:00 AM - 7:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Find Us Here - Map Section */}
                    <div className="mt-16 border-t border-gray-200 pt-12">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">Find Us Here</h3>
                        
                        <div className="rounded-xl overflow-hidden shadow-lg bg-gray-100">
                            <iframe
                                className="w-full"
                                style={{ height: '550px' }}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1929.0435906384753!2d84.9748934253547!3d27.16398715831672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb554ae39ecdad%3A0x328354b8b4919a97!2sSai%20Beauty%20Parlour!5e0!3m2!1sen!2snp!4v1777033716402!5m2!1sen!2snp"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Location Map"
                            ></iframe>
                        </div>

                        {/* Map Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-4">
                            <button
                                onClick={handleGetDirection}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                            >
                                <FiSend className="w-5 h-5" />
                                Get Direction
                            </button>
                            <button
                                onClick={handleViewInGoogleMaps}
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg transition-all duration-300 cursor-pointer"
                            >
                                <FiMapPin className="w-5 h-5" />
                                View in Google Maps
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Connect with Us Section */}
            <section className="w-full bg-gradient-to-r from-yellow-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Connect With Us</h2>
                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                        Join our growing community on social media for daily beauty inspiration and exclusive updates
                    </p>

                    <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4">
                        <a href="https://www.facebook.com/saibeautiparlour.simara" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                            <FaFacebook className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/saibeautiparlour/?hl=en" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>Instagram</span>
                        </a>
                        <a href="https://wa.me/9811168383" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                            <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>WhatsApp</span>
                        </a>
                        <a href="https://www.tiktok.com/@saibeautyparlour" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-black hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                            <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
                            <span>TikTok</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default ContactPage;