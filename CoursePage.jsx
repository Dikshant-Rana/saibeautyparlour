import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    FiBook, FiUsers, FiStar, FiActivity,
    FiBriefcase, FiCheckCircle
} from 'react-icons/fi';

// WhatsApp Message Handler
const openWhatsApp = (message) => {
    const phoneNumber = '9841234567'; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
};

const CoursePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [openFAQ, setOpenFAQ] = useState(null);

    // Courses Data
    const broadCourses = [
        {
            id: 1,
            name: "Basic Beautician Course",
            duration: "2 Months",
            image: "./image/parlour_frontimg.jpeg",
            description: "Perfect starting point for beginners who want to build a strong foundation in beauty.",
            skills: [
                "Basic skincare and facial treatments",
                "Threading and waxing techniques",
                "Manicure and pedicure",
                "Simple and effective makeup application"
            ],
            whatsappMsg: "Hi, I'm interested in the Basic Beautician Course (2 Months). Please share the details, fees, and next batch date."
        },
        {
            id: 2,
            name: "Advanced Beautician Course",
            duration: "3 Months",
            image: "./image/sai3.jpg",
            description: "Designed for those ready to take their skills to a professional level.",
            skills: [
                "Advanced facial therapies and treatments",
                "Bridal and occasion makeup",
                "Hair spa and deep conditioning treatments",
                "Basic salon management and client handling"
            ],
            whatsappMsg: "Hi, I'm interested in the Advanced Beautician Course (3 Months). Please share the details, fees, and next batch date."
        },
        {
            id: 3,
            name: "Diploma in Beautician Course",
            duration: "6 Months",
            image: "./image/parlour_frontimg.jpeg",
            description: "Our flagship complete program that covers both basic and advanced skills in depth.",
            skills: [
                "Full range of basic and advanced beauty skills",
                "Professional client consultation and skin/hair analysis",
                "Salon hygiene, safety standards, and best practices",
                "Building a strong personal portfolio"
            ],
            whatsappMsg: "Hi, I'm interested in the Diploma in Beautician Course (6 Months). Please share the details, fees, and next batch date."
        },
        {
            id: 4,
            name: "Abroad Special Course",
            duration: "3 Months",
            image: "./image/sai1.jpg",
            description: "Comprehensive international beauty standards course designed to prepare you for global salon opportunities.",
            skills: [
                "Precision Hair Cutting and Layering Techniques",
                "Professional Blow Dry and Hair Setting Methods",
                "Classic and Volume Eyelash Extension Application",
                "Complete Manicure & Pedicure Procedures with Nail Care",
                "Expert Eyebrow Threading and Facial Hair Removal",
                "Everyday Self Makeup and Grooming Skills",
                "Natural Makeup Looks and Beginner Makeup Artistry"
            ],
            whatsappMsg: "Hi, I'm interested in the Abroad Special Course (3 Months). Please share the details, fees, and next batch date."
        }
    ];

    const specializedCourses = [
        {
            id: 4,
            name: "Professional Nail Course",
            duration: "1 Month",
            image: "./image/sai3.jpg",
            skills: [
                "Gel polish application and nail extensions",
                "Acrylic and sculpting techniques",
                "Creative nail art and designs",
                "Nail care and aftercare guidance"
            ],
            whatsappMsg: "Hi, I'm interested in the Professional Nail Course (1 Month). Please share the details, fees, and next batch date."
        },
        {
            id: 5,
            name: "Haircut and Styling Course",
            duration: "2 Months",
            image: "./image/parlour_frontimg.jpeg",
            skills: [
                "Precision basic and advanced haircuts",
                "Hair coloring and highlighting methods",
                "Professional blow-dry and styling techniques",
                "Current trending looks and updos"
            ],
            whatsappMsg: "Hi, I'm interested in the Haircut and Styling Course (2 Months). Please share the details, fees, and next batch date."
        },
        {
            id: 6,
            name: "Professional Makeup Course",
            duration: "1.5 Months",
            image: "./image/sai3.jpg",
            skills: [
                "Everyday, evening, and party makeup",
                "Bridal and HD makeup techniques",
                "Contouring, highlighting, and color theory",
                "Airbrush and flawless professional finishes"
            ],
            whatsappMsg: "Hi, I'm interested in the Professional Makeup Course (1.5 Months). Please share the details, fees, and next batch date."
        }
    ];

    // Trainers Data
    const trainers = [
        {
            name: "Aarfa Poudel",
            role: "Creative Director & Lead Trainer",
            exp: "12+ years",
            bio: "Specialist in bridal and fashion makeup with international experience.",
            image: "./image/sai3.jpg"
        },
        {
            name: "Priya Sharma",
            role: "Hair Styling Specialist",
            exp: "10+ years",
            bio: "Expert in precision cutting and color techniques. Trained at international salons.",
            image: "./image/parlour_frontimg.jpeg"
        },
        {
            name: "Meera Kapoor",
            role: "Skincare & Facial Expert",
            exp: "8+ years",
            bio: "Certified aesthetician specializing in advanced facial therapies.",
            image: "./image/sai3.jpg"
        }
    ];

    // Why Choose Academy
    const whyChoose = [
        {
            icon: <FiBook className="w-8 h-8" />,
            title: "Practical training in a real working salon",
            desc: "Learn on actual clients in our active salon environment"
        },
        {
            icon: <FiUsers className="w-8 h-8" />,
            title: "Small batches for personal attention",
            desc: "Maximum 8-10 students per batch ensuring quality training"
        },
        {
            icon: <FiStar className="w-8 h-8" />,
            title: "Experienced beauticians as trainers",
            desc: "Learn from 8-12+ years of industry experience"
        },
        {
            icon: <FiActivity className="w-8 h-8" />,
            title: "Strong focus on hands-on practice",
            desc: "70% practical, 30% theory for skill mastery"
        },
        {
            icon: <FiBriefcase className="w-8 h-8" />,
            title: "Career guidance and job placement support",
            desc: "Help finding employment or starting freelance work"
        },
        {
            icon: <FiCheckCircle className="w-8 h-8" />,
            title: "Professional certification upon completion",
            desc: "Recognized certificates valid across salons"
        }
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Priya Sharma",
            role: "Basic Beautician Graduate",
            text: "This course completely transformed my skills. Having no prior experience, I was intimidated—but the hands-on practice gave me the confidence to start my own freelance business immediately after graduation.",
            image: "./image/sai3.jpg",
            rating: 5
        },
        {
            name: "Neha Kapoor",
            role: "Advanced Course Graduate",
            text: "The trainers were incredibly supportive and the practical focus helped me understand client-handling so much better. I got placed within 2 weeks of completing the course!",
            image: "./image/parlour_frontimg.jpeg",
            rating: 5
        },
        {
            name: "Anjali Mishra",
            role: "Diploma Graduate",
            text: "Six months felt like the perfect duration to truly master the craft. The certificate opened doors to premium salons, and I've been offered a senior position.",
            image: "./image/sai3.jpg",
            rating: 5
        }
    ];

    // Gallery Items
    const galleryItems = [
        { id: 1, image: "./image/training1.jpg" },
        { id: 2, image: "./image/training2.jpg" },
        { id: 3, image: "./image/training3.jpg" },
        { id: 4, image: "./image/training4.jpg" },
        { id: 5, image: "./image/training5.jpg" },
        { id: 6, image: "./image/training6.jpg" },
        { id: 7, image: "./image/parlour_frontimg.jpeg" },
        { id: 8, image: "./image/sai3.jpg" }
    ];

    // FAQ Data
    const faqs = [
        {
            q: "Do I need prior experience to join these courses?",
            a: "No! All our courses welcome beginners. We provide foundational training and gradually progress to advanced techniques."
        },
        {
            q: "What is the payment structure?",
            a: "We offer both full payment and flexible installment options. Early bird discounts are available for new batches."
        },
        {
            q: "Will I get a certification?",
            a: "Yes! Upon successful completion, you'll receive our professionally recognized certification that's valid in salons across the country."
        },
        {
            q: "What are the job placement opportunities?",
            a: "We provide job placement assistance and connect successful graduates with partner salons and freelance opportunities."
        },
        {
            q: "Are the classes small batches?",
            a: "Yes, we maintain small batch sizes (maximum 8-10 students) to ensure personalized attention and hands-on practice."
        },
        {
            q: "Can I practice on real clients?",
            a: "Absolutely! All our training happens inside our working salon, so you get hands-on practice on real clients from day one."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-pink-100 selection:text-pink-900">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 bg-white text-black z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Placeholder */}
                        <div className="flex-shrink-0 flex items-center">
                            <span className="font-serif text-2xl font-bold italic">Logo</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center">
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
                                    <div className="py-2">
                                        <Link to="/course" className="block px-5 py-2.5 text-sm text-pink-600 bg-gray-50 font-medium transition-colors">Courses</Link>
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
                            <div className="px-3 py-1 space-y-1 dropdown-container">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsServicesOpen((prev) => !prev);
                                        setIsResourcesOpen(false);
                                    }}
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
                            <div className="px-3 py-1 space-y-1 dropdown-container">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsResourcesOpen((prev) => !prev);
                                        setIsServicesOpen(false);
                                    }}
                                    className="w-full flex justify-between items-center py-2 text-base font-medium text-pink-600 bg-pink-50 px-2 rounded-md -ml-2"
                                >
                                    <span>Resources</span>
                                    <svg className={`h-4 w-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isResourcesOpen && (
                                    <div className="ml-3 mt-1 space-y-1">
                                        <Link to="/course" className="block px-3 py-1.5 text-sm text-pink-600 font-medium bg-gray-50 rounded-md">Courses</Link>
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

            <main className="pt-16">
                {/* ========== HERO SECTION ========== */}
                <section className="relative w-full min-h-[85vh] flex flex-col justify-center items-center py-24 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="./image/parlour_frontimg.jpeg"
                            alt="Beauty Training Academy"
                            className="w-full h-full object-cover opacity-35"
                        />

                    </div>

                    <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-pink-600/20 backdrop-blur-sm border border-pink-600/40 text-pink-100 text-xs font-semibold uppercase tracking-wider mb-10">
                            Master Professional Beauty Skills
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                            Master Professional <br className="hidden sm:block" />Beauty Skills with Expert Training
                        </h1>

                        <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            Hands-on practical training inside our working salon | Certified programs with real career support
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => {
                                    document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="px-8 py-4 bg-white text-pink-600 font-bold text-sm rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
                                Browse All Courses
                            </button>
                            <button
                                onClick={() => openWhatsApp("Hi, I'm interested in your beauty training programs. Please share details and upcoming batch information.")}
                                className="px-8 py-4 bg-pink-600 text-white font-bold text-sm rounded-lg hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                                Enquire on WhatsApp
                            </button>
                        </div>
                    </div>
                </section>

                {/* ========== WHY CHOOSE SECTION ========== */}
                <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">Why Choose Our Beauty Academy</h2>
                            <p className="text-gray-600 text-base font-light max-w-2xl mx-auto">Warm, inviting training with a focus on real-world skills and career growth</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyChoose.map((item, idx) => (
                                <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-pink-200 hover:shadow-lg transition-all">
                                    <div className="mb-4 text-gray-800">{item.icon}</div>
                                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h3>
                                    <p className="text-sm text-gray-600 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== BROAD CATEGORY COURSES ========== */}
                <section id="courses" className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gray-900">Our Training Programs</h2>
                            <p className="text-gray-600 text-base font-light">Comprehensive programs designed for every learning level</p>
                        </div>

                        {/* Broad Category Programs */}
                        <div className="mb-24">
                            <h3 className="text-2xl font-serif font-bold mb-12 text-gray-900 flex items-center gap-3">
                                <span className="w-1 h-8 bg-pink-600 rounded-full"></span>
                                Broad Category Programs
                            </h3>

                            <div className="grid grid-cols-1 gap-16">
                                {broadCourses.map((course, idx) => (
                                    <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
                                        {/* Image Side */}
                                        <div className={`relative ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                                            <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                                                <img
                                                    src={course.image}
                                                    alt={course.name}
                                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                                />

                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                                            <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold mb-4">
                                                Duration: {course.duration}
                                            </div>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 font-serif">{course.name}</h3>
                                            <p className="text-gray-600 text-sm mb-6 leading-relaxed font-light">{course.description}</p>

                                            <div className="mb-8">
                                                <p className="text-xs uppercase tracking-widest font-bold text-gray-700 mb-4">What You Will Learn:</p>
                                                <ul className="space-y-3">
                                                    {course.skills.map((skill, sidx) => (
                                                        <li key={sidx} className="flex items-start gap-3">
                                                            <span className="text-pink-600 font-bold mt-0.5">•</span>
                                                            <span className="text-sm text-gray-700 font-light">{skill}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button
                                                onClick={() => openWhatsApp(course.whatsappMsg)}
                                                className="w-full py-3.5 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                                                Enroll via WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Specialized Training Programs */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold mb-12 text-gray-900 flex items-center gap-3">
                                <span className="w-1 h-8 bg-pink-600 rounded-full"></span>
                                Specialized Training Programs
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {specializedCourses.map((course, idx) => (
                                    <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
                                        {/* Image */}
                                        <div className="relative h-64 overflow-hidden bg-gray-100">
                                            <img
                                                src={course.image}
                                                alt={course.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />

                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <div className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold mb-3">
                                                {course.duration}
                                            </div>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3 font-serif">{course.name}</h4>

                                            <div className="mb-6">
                                                <p className="text-xs uppercase tracking-widest font-bold text-gray-700 mb-3">Learn:</p>
                                                <ul className="space-y-2">
                                                    {course.skills.map((skill, sidx) => (
                                                        <li key={sidx} className="flex items-start gap-2.5">
                                                            <span className="text-pink-600 font-bold text-lg leading-none">✓</span>
                                                            <span className="text-xs text-gray-700 font-light leading-snug">{skill}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <button
                                                onClick={() => openWhatsApp(course.whatsappMsg)}
                                                className="w-full py-3 bg-pink-600 text-white font-bold text-sm rounded-lg hover:bg-pink-700 transition-all">
                                                Enroll via WhatsApp
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ========== GALLERY SECTION ========== */}
                <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gray-900">Gallery – Training in Action</h2>
                            <p className="text-gray-600 text-base font-light">Real moments from our training sessions and student achievements</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {galleryItems.map((item) => (
                                <div key={item.id} className="aspect-square rounded-lg overflow-hidden bg-gray-200 group cursor-pointer">
                                    <img
                                        src={item.image}
                                        alt={`Training moment ${item.id}`}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== MEET TRAINERS SECTION ========== */}
                <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gray-900">Meet Our Trainers</h2>
                            <p className="text-gray-600 text-base font-light">Expert instructors with years of industry experience</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {trainers.map((trainer, idx) => (
                                <div key={idx} className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all">
                                    {/* Image */}
                                    <div className="h-64 overflow-hidden bg-gray-200">
                                        <img
                                            src={trainer.image}
                                            alt={trainer.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif">{trainer.name}</h3>
                                        <p className="text-sm text-pink-600 font-bold mb-1">{trainer.role}</p>
                                        <p className="text-xs text-gray-500 font-light mb-4">Experience: {trainer.exp}</p>
                                        <p className="text-sm text-gray-700 font-light leading-relaxed">{trainer.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== TESTIMONIALS SECTION ========== */}
                <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gray-900">What Our Students Say</h2>
                            <p className="text-gray-600 text-base font-light">Genuine testimonials from our graduates</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all">
                                    {/* Stars */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21 12 17.27z" />
                                            </svg>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-700 font-light leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                                    {/* Author */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-pink-600"
                                        />
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                                            <p className="text-xs text-gray-600 font-light">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== FAQ SECTION ========== */}
                <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gray-900">Frequently Asked Questions</h2>
                            <p className="text-gray-600 text-base font-light">All your questions answered</p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all">
                                    <button
                                        onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <h4 className="font-bold text-gray-900 text-base">{faq.q}</h4>
                                        <svg
                                            className={`w-5 h-5 text-pink-600 transition-transform ${openFAQ === idx ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openFAQ === idx && (
                                        <div className="px-6 pb-5 border-t border-gray-100">
                                            <p className="text-gray-700 text-sm font-light leading-relaxed">{faq.a}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ========== FINAL CTA SECTION ========== */}
                <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-pink-700 text-white">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Start Your Beauty Career?</h2>
                        <p className="text-pink-100 text-lg mb-10 font-light max-w-2xl mx-auto leading-relaxed">Join our next batch and transform your passion into a thriving career. Limited spots available!</p>

                        <button
                            onClick={() => openWhatsApp("Hi, I want to enroll in a beauty training course. Please guide me on the best option, fees, and upcoming batches.")}
                            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-pink-600 font-bold rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl text-lg">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" /></svg>
                            Enroll via WhatsApp Now
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full bg-[#0a0a0a] text-white pt-20 pb-8 px-6 sm:px-6 lg:px-8 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div>
                            <span className="font-serif text-3xl font-bold italic">Logo</span>
                        </div>

                        <div>
                            <h4 className="font-bold text-sm mb-4">Navigation</h4>
                            <div className="space-y-3">
                                <Link to="/" className="text-xs text-gray-400 hover:text-white transition-colors block">Home</Link>
                                <Link to="/about" className="text-xs text-gray-400 hover:text-white transition-colors block">About us</Link>
                                <Link to="/gallery" className="text-xs text-gray-400 hover:text-white transition-colors block">Gallery</Link>
                                <Link to="/course" className="text-xs text-gray-400 hover:text-white transition-colors block">Courses</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-sm mb-4">Services</h4>
                            <div className="space-y-3">
                                <Link to="/services/hair" className="text-xs text-gray-400 hover:text-white transition-colors block">Hair Styling</Link>
                                <Link to="/services/makeup" className="text-xs text-gray-400 hover:text-white transition-colors block">Makeup</Link>
                                <Link to="/services/skincare" className="text-xs text-gray-400 hover:text-white transition-colors block">Skincare</Link>
                                <Link to="/services/nails-spa" className="text-xs text-gray-400 hover:text-white transition-colors block">Nails & Spa</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-sm mb-4">Connect</h4>
                            <div className="space-y-3">
                                <button
                                    onClick={() => openWhatsApp("Hi, I'd like to get more information about your services.")}
                                    className="text-xs text-gray-400 hover:text-white transition-colors block text-left">WhatsApp</button>
                                <Link to="/contact" className="text-xs text-gray-400 hover:text-white transition-colors block">Contact</Link>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-400">&copy; 2024 Beauty Academy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CoursePage;
