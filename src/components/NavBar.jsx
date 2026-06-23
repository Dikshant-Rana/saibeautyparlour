import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiInfo, FiShoppingBag, FiImage, FiScissors, FiDroplet, FiSearch, FiPhone } from 'react-icons/fi';
import { FaPaintbrush, FaSpa, FaRing, FaGraduationCap } from 'react-icons/fa6';

const NavBar = ({ forceScrolled = false }) => {
    const location = useLocation();
    const pathname = location.pathname;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isScrolledState, setIsScrolledState] = useState(false);

    const isScrolled = forceScrolled || isScrolledState;

    // Close dropdowns when clicking outside (for touch devices)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if ('ontouchstart' in window) {
                const dropdown = event.target.closest('.dropdown-container');
                if (!dropdown) {
                    setIsServicesOpen(false);
                    setIsResourcesOpen(false);
                }
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    // Scroll detection for transparent navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolledState(true);
            } else {
                setIsScrolledState(false);
            }
        };

        if (!forceScrolled) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [forceScrolled]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-gray-200 text-gray-900' : 'bg-transparent text-white border-b border-transparent'}`}
                style={isScrolled ? { boxShadow: '0 4px 10px -1px rgba(0, 0, 0, 0.2)' } : {}}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-2">
                        {/* Logo Placeholder */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 ">
                            <img src={isScrolled ? "/images/sai_final_logo.png" : "/images/nobg_sailogo.png"} alt="Sai Beauty Logo" className="h-10 sm:h-14 w-auto transition-all duration-300" />
                            <div>
                                <p className={`text-lg sm:text-xl transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`} style={{ fontFamily: 'Pacifico, cursive', fontWeight: 400 }}>Sai Beauty Parlour</p>
                                <p className={`text-xs sm:text-sm transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>& Training Center</p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex space-x-8 items-center">
                            <Link to="/" className={`text-sm font-medium py-5 transition-colors ${pathname === '/' ? (isScrolled ? 'text-pink-600' : 'text-pink-300') : (isScrolled ? 'text-gray-900 hover:text-pink-600' : 'text-white hover:text-pink-300')}`}>Home</Link>
                            <Link to="/about" className={`text-sm font-medium transition-colors ${pathname === '/about' ? (isScrolled ? 'text-pink-600' : 'text-pink-300') : (isScrolled ? 'text-gray-900 hover:text-pink-600' : 'text-white hover:text-pink-300')}`}>About us</Link>
                            <div className="relative group h-full flex items-center"
                                onMouseEnter={() => !('ontouchstart' in window) && setIsServicesOpen(true)}
                                onMouseLeave={() => !('ontouchstart' in window) && setIsServicesOpen(false)}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsServicesOpen((prev) => !prev);
                                        setIsResourcesOpen(false);
                                    }}
                                    className={`text-sm font-medium transition-colors flex items-center py-5 cursor-pointer ${pathname.startsWith('/services') ? (isScrolled ? 'text-pink-600' : 'text-pink-300') : (isScrolled ? 'text-gray-900 hover:text-pink-600' : 'text-white hover:text-pink-300')}`}
                                >
                                    Services
                                    <svg className={`ml-1 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-xl transition-all duration-200 z-50 ${isServicesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <div className="py-2">
                                        <Link to="/services/hair" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/services/hair' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Hair Styling & Care</Link>
                                        <Link to="/services/skincare" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/services/skincare' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Skincare Treatments</Link>
                                        <Link to="/services/makeup" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/services/makeup' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Makeup Application</Link>
                                        <Link to="/services/nails-spa" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/services/nails-spa' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Nails & Spa Services</Link>
                                        <Link to="/services/wedding" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/services/wedding' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Wedding Packages</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group h-full flex items-center"
                                onMouseEnter={() => !('ontouchstart' in window) && setIsResourcesOpen(true)}
                                onMouseLeave={() => !('ontouchstart' in window) && setIsResourcesOpen(false)}>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsResourcesOpen(!isResourcesOpen);
                                        setIsServicesOpen(false);
                                    }}
                                    className={`text-sm font-medium transition-colors flex items-center py-5 cursor-pointer ${['/course', '/gallery', '/contact'].includes(pathname) ? (isScrolled ? 'text-pink-600' : 'text-pink-300') : (isScrolled ? 'text-gray-900 hover:text-pink-600' : 'text-white hover:text-pink-300')}`}
                                >
                                    Discover
                                    <svg className={`ml-1 h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <div className={`absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl transition-all duration-200 z-50 ${isResourcesOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    <div className="py-2">
                                        <Link to="/course" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/course' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Courses</Link>
                                        <Link to="/gallery" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/gallery' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Gallery</Link>
                                        <Link to="/contact" className={`block px-5 py-2.5 text-sm transition-colors ${pathname === '/contact' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-50 hover:text-pink-600'}`}>Contact</Link>
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Header Actions */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link to="/contact" className={`px-4 py-1.5 text-sm font-medium border transition-colors ${isScrolled ? 'text-gray-900 border-gray-300 hover:bg-gray-50' : 'text-white border-white/30 hover:bg-white/10'}`}>
                                Book
                            </Link>
                            <button className="px-4 py-1.5 text-sm font-medium bg-pink-600 text-white hover:bg-pink-700 transition-colors cursor-pointer">
                                Call
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsMenuOpen((prev) => {
                                        const next = !prev;
                                        if (!next) {
                                            setIsServicesOpen(false);
                                            setIsResourcesOpen(false);
                                        }
                                        return next;
                                    });
                                }}
                                className={`transition-colors focus:outline-none ${isScrolled ? 'text-gray-900 hover:text-pink-600' : 'text-white hover:text-pink-300'}`}
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

                {/* Backdrop for Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/30 z-30"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}

                {/* Mobile Navigation Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed top-0 right-0 w-[300px] h-screen bg-white border-l border-gray-200 text-gray-900 overflow-y-auto z-40">
                        {/* Close Button */}
                        <div className="flex justify-end p-4 border-b border-gray-200">
                            <button
                                type="button"
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-900 hover:text-pink-600 transition-colors cursor-pointer"
                            >
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" className={`flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors ${pathname === '/' ? 'text-pink-600 bg-pink-50' : 'text-gray-900 hover:bg-gray-100'}`}>
                                <FiHome className="w-5 h-5" />
                                <span>Home</span>
                            </Link>
                            <Link to="/about" className={`flex items-center gap-3 px-3 py-2 text-base font-medium rounded-md transition-colors ${pathname === '/about' ? 'text-pink-600 bg-pink-50' : 'text-gray-900 hover:bg-gray-100'}`}>
                                <FiInfo className="w-5 h-5" />
                                <span>About us</span>
                            </Link>
                            <div className="px-3 py-1 space-y-1 dropdown-container">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsServicesOpen((prev) => !prev);
                                        setIsResourcesOpen(false);
                                    }}
                                    className={`w-full flex justify-between items-center py-2 text-base font-medium rounded-md px-3 -ml-3 transition-colors cursor-pointer ${pathname.startsWith('/services') ? 'text-pink-600 bg-pink-50' : 'text-gray-900 hover:bg-gray-100'}`}
                                >
                                    <span className="flex items-center gap-3">
                                        <FiShoppingBag className="w-5 h-5" />
                                        <span>Services</span>
                                    </span>
                                    <svg className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isServicesOpen && (
                                    <div className="ml-3 mt-1 space-y-1">
                                        <Link to="/services/hair" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/services/hair' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FiScissors className="w-4 h-4" />
                                            <span>Hair Styling & Care</span>
                                        </Link>
                                        <Link to="/services/skincare" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/services/skincare' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FiDroplet className="w-4 h-4" />
                                            <span>Skincare Treatments</span>
                                        </Link>
                                        <Link to="/services/makeup" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/services/makeup' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FaPaintbrush className="w-4 h-4" />
                                            <span>Makeup Application</span>
                                        </Link>
                                        <Link to="/services/nails-spa" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/services/nails-spa' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FaSpa className="w-4 h-4" />
                                            <span>Nails & Spa Services</span>
                                        </Link>
                                        <Link to="/services/wedding" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/services/wedding' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FaRing className="w-4 h-4" />
                                            <span>Wedding Packages</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                            <div className="px-3 py-1 space-y-1 dropdown-container">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsResourcesOpen((prev) => !prev);
                                        setIsServicesOpen(false);
                                    }}
                                    className={`w-full flex justify-between items-center py-2 text-base font-medium rounded-md px-3 -ml-3 transition-colors cursor-pointer ${['/course', '/gallery', '/contact'].includes(pathname) ? 'text-pink-600 bg-pink-50' : 'text-gray-900 hover:bg-gray-100'}`}
                                >
                                    <span className="flex items-center gap-3">
                                        <FiSearch className="w-5 h-5" />
                                        <span>Discover</span>
                                    </span>
                                    <svg className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isResourcesOpen && (
                                    <div className="ml-3 mt-1 space-y-1">
                                        <Link to="/course" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/course' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FaGraduationCap className="w-4 h-4" />
                                            <span>Courses</span>
                                        </Link>
                                        <Link to="/gallery" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/gallery' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FiImage className="w-4 h-4" />
                                            <span>Gallery</span>
                                        </Link>
                                        <Link to="/contact" className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-colors ${pathname === '/contact' ? 'text-pink-600 bg-pink-50 font-medium' : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'}`}>
                                            <FiPhone className="w-4 h-4" />
                                            <span>Contact</span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default NavBar;
