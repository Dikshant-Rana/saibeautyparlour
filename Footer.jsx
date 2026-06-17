import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { MdDirections } from 'react-icons/md';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
    // Open Google Maps directions
    const handleGetDirection = () => {
        const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=27.1640703012098,84.97641705488469&travelmode=driving`;
        window.open(mapsUrl, '_blank');
    };

    return (
        <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-8 px-6 sm:px-6 lg:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Top part of footer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 items-start">
                    {/* Logo */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <div className="flex items-center mb-2 gap-2 -ml-3">
                            <img src="/image/nobg_sailogo.png" alt="Sai Beauty Logo" className="h-12 sm:h-16 w-auto" />
                            <div>
                                <p className="text-md sm:text-xl text-white whitespace-nowrap" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', lineHeight: '1' }}>Sai Beauty Parlour</p>
                                <p className="text-md sm:text-xl text-white" style={{ fontFamily: 'Bricolage Grotesque, sans-serif', lineHeight: '1.5' }}>& Training Center</p>
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">Your premier destination for professional beauty and wellness services, offering expert treatments and industry-leading training courses.</p>
                    </div>

                    {/* Link Columns */}
                    <div className="md:col-span-7 md:ml-8 lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
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
                            <h4 className="font-bold text-sm mb-2">Contact</h4>
                            <div className="text-xs text-gray-400 space-y-3">
                                <div className="flex items-start gap-2">
                                    <FiPhone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <p>+977 9811168383</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <FiMail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <p>saiparlor83@gmail.com</p>
                                </div>
                                <div className="flex items-start gap-2">
                                    <FiMapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                    <p>Airport Road, Gadhimai, Simara</p>
                                </div>
                                <div className="flex items-start gap-2 cursor-pointer text-blue-300 hover:text-blue-200 hover:underline transition-colors" onClick={handleGetDirection}>
                                    <MdDirections className="w-4 h-4 mt-0 flex-shrink-0" />
                                    <p>Get Direction</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Follow us */}
                    <div className="md:col-span-12 lg:col-span-4 pl-0 lg:pl-8 border-t lg:border-t-0 border-white/10 pt-8 lg:pt-0">
                        <h4 className="font-bold text-sm mb-4">Follow us</h4>
                        <div className="grid grid-cols-2 gap-3">
                            <a href="https://www.facebook.com/saibeautiparlour.simara" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                <FaFacebook className="w-4 h-4 text-blue-500" />
                                <span className="text-xs text-white">Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/saibeautiparlour/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                <FaInstagram className="w-4 h-4 text-pink-500" />
                                <span className="text-xs text-white">Instagram</span>
                            </a>
                            <a href="https://wa.me/9811168383" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                <FaWhatsapp className="w-4 h-4 text-green-500" />
                                <span className="text-xs text-white">WhatsApp</span>
                            </a>
                            <a href="https://www.tiktok.com/@saibeautyparlour" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 border border-white/20 rounded hover:bg-white/10 transition-colors">
                                <FaTiktok className="w-4 h-4 text-white" />
                                <span className="text-xs text-white">TikTok</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom part of footer */}
                <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-center items-center gap-4">
                    <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center text-[11px] text-gray-400">
                        <span>&copy; 2026 Sai Beauty Parlour. All rights reserved.</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;