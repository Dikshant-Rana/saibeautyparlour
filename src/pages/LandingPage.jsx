import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiInfo, FiShoppingBag, FiBook, FiImage, FiMail, FiScissors, FiDroplet, FiMic, FiZap, FiHeart, FiSearch, FiPhone } from 'react-icons/fi';
import { FaPaintbrush, FaSpa, FaRing, FaGraduationCap, FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa6';
import ServiceSlider from '../components/ServiceSlider';
import GallerySlider from '../components/GallerySlider';



const LandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [hasInteractedWithVideo, setHasInteractedWithVideo] = useState(false);
    const [isVideoFullscreen, setIsVideoFullscreen] = useState(false);
    const [stats, setStats] = useState({ years: 0, clients: 0, professionals: 0 });
    const [heroSlide, setHeroSlide] = useState(0);
    const [heroTextVisible, setHeroTextVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const heroTimerRef = useRef(null);
    const serviceSliderRef = useRef(null);
    const videoRef = useRef(null);
    const videoContainerRef = useRef(null);
    const statsRef = useRef(null);

    // Hero slider data
    const heroSlides = [
        {
            image: '/images/parlour_frontimg.jpeg',
            alt: 'Sai Beauty Parlour',
            heading: <>Transform <br />yourself at Sai<br />Beauty Parlour</>,
            paragraph: 'We bring out your natural radiance with expert care and premium treatments. Step into our sanctuary and experience the transformation you deserve.',
        },
        {
            image: '/images/team1.jpg',
            alt: 'Beauty Training Courses',
            heading: <>Master the Art of<br />Professional<br />Beauty</>,
            paragraph: 'Enroll in our industry-leading beauty training courses. From basic techniques to advanced artistry, learn hands-on from experienced professionals in a real salon environment.',
        },
        {
            image: '/images/training1.jpg',
            alt: 'Certificate Distribution',
            heading: <>Certified<br />Excellence in<br />Beauty</>,
            paragraph: 'Graduate with a professionally recognized certificate that opens doors to your dream career. Our accredited programs prepare you for success in the beauty industry.',
        },
    ];

    // Hero auto-slide with crossfade
    useEffect(() => {
        const startTimer = () => {
            heroTimerRef.current = setInterval(() => {
                setHeroTextVisible(false);
                setTimeout(() => {
                    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
                    setHeroTextVisible(true);
                }, 600);
            }, 6000);
        };
        startTimer();
        return () => clearInterval(heroTimerRef.current);
    }, []);

    const goToHeroSlide = (index) => {
        if (index === heroSlide) return;
        clearInterval(heroTimerRef.current);
        setHeroTextVisible(false);
        setTimeout(() => {
            setHeroSlide(index);
            setHeroTextVisible(true);
            heroTimerRef.current = setInterval(() => {
                setHeroTextVisible(false);
                setTimeout(() => {
                    setHeroSlide((prev) => (prev + 1) % heroSlides.length);
                    setHeroTextVisible(true);
                }, 600);
            }, 6000);
        }, 600);
    };

    const scrollServices = () => {
        // Since we're using Embla carousel now, we'll simulate the scroll
        // by triggering the next slide programmatically
        if (serviceSliderRef.current && serviceSliderRef.current.scrollNext) {
            serviceSliderRef.current.scrollNext();
        }
    };

    // Close dropdowns when clicking outside (for touch devices)
    useEffect(() => {
        const handleClickOutside = (event) => {
            if ('ontouchstart' in window) {
                // Only run on touch devices
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

    // Animate stats numbers when section comes into view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate the numbers
                        const animateStats = () => {
                            let currentYears = 0;
                            let currentClients = 0;
                            let currentProfessionals = 0;
                            const duration = 2000; // 2 seconds
                            const steps = 60;
                            const stepDuration = duration / steps;
                            const startTime = Date.now();

                            const interval = setInterval(() => {
                                const elapsed = Date.now() - startTime;
                                const progress = Math.min(elapsed / duration, 1);

                                currentYears = progress * 15;
                                currentClients = progress * 5000;
                                currentProfessionals = progress * 8;

                                setStats({
                                    years: Math.floor(currentYears),
                                    clients: Math.floor(currentClients),
                                    professionals: Math.floor(currentProfessionals),
                                });

                                if (progress >= 1) {
                                    clearInterval(interval);
                                    // Set exact final values
                                    setStats({
                                        years: 15,
                                        clients: 5000,
                                        professionals: 8,
                                    });
                                }
                            }, stepDuration);
                        };

                        animateStats();
                        // Unobserve to prevent animation from running again
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the section is visible
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    // Scroll detection for transparent navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Video fullscreen detection
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsVideoFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
    }, []);

    // Pause video when out of view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (videoRef.current) {
                        if (!entry.isIntersecting) {
                            // Video is completely out of view, pause it
                            videoRef.current.pause();
                            setIsVideoPlaying(false);
                        }
                    }
                });
            },
            { threshold: 0 } // Trigger when completely out of section
        );

        if (videoContainerRef.current) {
            observer.observe(videoContainerRef.current);
        }

        return () => {
            if (videoContainerRef.current) {
                observer.unobserve(videoContainerRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans">
            {/* Header */}
            <NavBar />

            {/* Main Content */}
            <main className="pt-0 bg-white">
                {/* Hero Section - Slider */}
                <section className="relative w-full h-screen min-h-[500px] flex flex-col items-center justify-center px-4 overflow-hidden">
                    {/* Background Images - crossfade */}
                    {heroSlides.map((slide, idx) => (
                        <div
                            key={idx}
                            className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in-out"
                            style={{ opacity: heroSlide === idx ? 1 : 0 }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.alt}
                                className="w-full h-full object-cover"
                            />
                            {/* Dark overlay for text readability */}
                            <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply"></div>
                        </div>
                    ))}

                    {/* Text Content - fade transition */}
                    <div
                        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-600 ease-in-out"
                        style={{
                            opacity: heroTextVisible ? 1 : 0,
                            transform: heroTextVisible ? 'translateY(0)' : 'translateY(18px)',
                            transition: 'opacity 0.6s ease, transform 0.6s ease',
                        }}
                    >
                        <div className="mb-6 w-full max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white/90 drop-shadow-sm mb-4 leading-tight">
                                {heroSlides[heroSlide].heading}
                            </h1>
                        </div>

                        <p className="text-white/90 drop-shadow-sm text-base sm:text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed px-4">
                            {heroSlides[heroSlide].paragraph}
                        </p>

                        <div className="flex justify-center items-center gap-4">
                            <Link to={heroSlide === 1 ? "/about" : heroSlide === 2 ? "/course?enroll=true" : "/contact"} className="px-6 py-2.5 bg-white text-gray-900 text-sm font-semibold rounded-md hover:bg-gray-100 transition-colors shadow-sm">
                                {heroSlide === 1 ? "Meet the team" : heroSlide === 2 ? "Enroll now" : "Book now"}
                            </Link>
                            <Link to={heroSlide === 1 ? "/gallery" : heroSlide === 2 ? "/course" : "/services/hair"} className="px-6 py-2.5 border border-white/60 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors">
                                {heroSlide === 1 ? "View our work" : heroSlide === 2 ? "See courses" : "Our services"}
                            </Link>
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                        {heroSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToHeroSlide(idx)}
                                className={`transition-all duration-300 rounded-full cursor-pointer ${heroSlide === idx
                                    ? 'w-8 h-2.5 bg-white'
                                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
                                    }`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </section>
            </main>

            {/* Welcome Section */}
            <section className="w-full bg-white text-black py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-gray-900 mb-4">Welcome</h4>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-gray-900 leading-tight max-w-lg">
                            Where beauty becomes
                            an art
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                            At Sai Beauty Parlour, we believe every person deserves to feel
                            radiant. Our skilled professionals combine traditional techniques with
                            modern innovation to deliver results that speak for themselves.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link to="/about" className="flex items-center px-6 py-2 border border-gray-300 text-gray-900 text-sm font-semibold hover:bg-gray-50 rounded transition-colors group">
                                Learn more
                                <svg className="ml-1.5 w-4 h-4 text-gray-900 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2">
                        <div className="aspect-[4/3] sm:aspect-square bg-gray-100 rounded-sm overflow-hidden">
                            <img src="/images/parlour_frontimg.jpeg"
                                alt="Aarfa Beauty Parlour Front"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section - full bleed white background */}
            <section className="w-full bg-white text-black py-20 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-4">Services</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">What we do best for you</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                            At Sai Beauty Parlour, we understand that beauty is personal. Each service is tailored to bring out your best self.
                        </p>
                    </div>

                    <ServiceSlider ref={serviceSliderRef} />

                    <div className="mt-16 text-center flex justify-center items-center gap-4">
                        <button className="px-6 py-2.5 border border-gray-200 rounded text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer">
                            Services
                        </button>
                        <button
                            onClick={scrollServices}
                            className="flex items-center justify-center px-4 py-2.5 border border-gray-200 rounded hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
                            aria-label="Scroll services"
                        >
                            <span className="text-gray-500 text-[10px] tracking-widest">ARROW &gt;</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Gallery Section */}
            <section className="w-full bg-gradient-to-br from-amber-50 via-white to-amber-50 text-black pt-24 sm:pt-32 pb-8 sm:pb-16 border-t border-gray-200">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden">
                    {/* Left Text */}
                    <div className="lg:col-span-4 z-10">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 tracking-tight text-gray-900">Our gallery</h2>
                        <p className="text-xs sm:text-sm text-gray-600 max-w-sm">
                            A glimpse into the work we do every day at Aarfa Beauty Home.
                        </p>
                    </div>

                    {/* Gallery Slider */}
                    <GallerySlider />
                </div>
                <div className="mt-10 text-center flex justify-center items-center w-full">
                    <Link to="/gallery" className="inline-flex items-center px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-900 text-xs font-bold rounded transition-colors tracking-wide group">
                        See More
                        <svg className="ml-1.5 w-4 h-4 text-gray-900 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </section>

            {/* Testimonial & Stats Section */}
            <section className="w-full bg-white text-black py-20 pb-32 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Top part: Video & Quote */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-12 md:mb-16">
                        {/* Video side */}
                        <div ref={videoContainerRef} className="relative aspect-square md:aspect-[4/5] bg-gray-200 rounded-sm overflow-hidden group">
                            <video
                                ref={videoRef}
                                className={`absolute inset-0 w-full h-full ${isVideoFullscreen ? 'object-contain' : 'object-cover'} ${!hasInteractedWithVideo ? 'cursor-pointer' : ''}`}
                                loop
                                playsInline
                                controls={hasInteractedWithVideo}
                                poster="/images/testimonial.png"
                                onPause={() => setIsVideoPlaying(false)}
                                onPlay={() => setIsVideoPlaying(true)}
                                onClick={() => {
                                    if (!hasInteractedWithVideo && videoRef.current) {
                                        videoRef.current.play();
                                        setIsVideoPlaying(true);
                                        setHasInteractedWithVideo(true);
                                    }
                                }}
                            >
                                <source src="/images/testimonial.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Play Button Overlay */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out pointer-events-none ${hasInteractedWithVideo ? 'hidden' : 'opacity-100 group-hover:bg-black/20'}`}
                            >
                                <div className={`w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform ${hasInteractedWithVideo ? 'pointer-events-none' : 'pointer-events-auto'}`}
                                    onClick={(e) => {
                                        e.stopPropagation(); // to avoid double firing since parent also has onClick
                                        if (videoRef.current) {
                                            videoRef.current.play();
                                            setIsVideoPlaying(true);
                                            setHasInteractedWithVideo(true);
                                        }
                                    }}
                                >
                                    <svg className="w-5 h-5 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Quote side */}
                        <div className="flex flex-col justify-center">
                            {/* 5 Stars */}
                            <div className="flex text-black mb-6 gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-gray-900 mb-8 leading-relaxed">
                                "The team here knows their craft. I walked in uncertain and left feeling like the best version of myself."
                            </h3>

                            <div className="flex items-center gap-4">
                                <div>
                                    <p className="font-bold text-sm text-gray-900">Dr. Sandhya Bajracharya</p>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-0.5">Client</p>
                                </div>
                                <div className="h-8 w-px bg-gray-300 mx-2"></div>
                                <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-gray-900">
                                    <FaPaintbrush className="w-4 h-4" />
                                    Makeup Service
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom part: Stats */}
                    <div className="flex flex-col gap-6 lg:gap-8 mt-8" ref={statsRef}>
                        <div className="w-full max-w-2xl">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-gray-900 leading-tight">
                                Years of beauty, countless<br className="hidden sm:block" /> transformations
                            </h2>
                        </div>
                        <div className="w-full">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8">
                                <div className="border-l-[1px] border-gray-200 pl-6 md:pl-8 py-2 flex flex-col justify-center">
                                    <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-sans tracking-tighter">{stats.years}+</p>
                                    <p className="text-sm md:text-base font-serif font-bold text-gray-900">Years in business</p>
                                </div>
                                <div className="border-l-[1px] border-gray-200 pl-6 md:pl-8 py-2 flex flex-col justify-center">
                                    <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-sans tracking-tighter">{stats.clients.toLocaleString()}+</p>
                                    <p className="text-sm md:text-base font-serif font-bold text-gray-900">Happy clients served</p>
                                </div>
                                <div className="border-l-[1px] border-gray-200 pl-6 md:pl-8 py-2 flex flex-col justify-center">
                                    <p className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 font-sans tracking-tighter">{stats.professionals}+</p>
                                    <p className="text-sm md:text-base font-serif font-bold text-gray-900">Skilled professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Training Teaser Section */}
            <section className="w-full bg-gradient-to-br from-amber-50 via-white to-amber-50 text-black py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-24">
                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-gray-900 leading-tight">
                            Master the Art with<br />
                            Sai Beauty Training
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                            Learn professional techniques from our expert team in a hands-on environment. Certified courses in hairstyling, makeup artistry, skincare, and beauty therapy. Limited seats available each batch.
                        </p>

                        <div className="flex items-center gap-4">
                            <Link to="/course" className="inline-flex items-center px-6 py-2.5 bg-white text-gray-900 text-sm font-semibold rounded-md border border-gray-900 hover:bg-gray-50 transition-colors shadow-sm">
                                Explore Courses
                                <svg className="ml-1.5 w-4 h-4 text-gray-900 group-hover:text-gray-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Image Content */}
                    <div className="w-full md:w-1/2">
                        <div className="aspect-[4/3] sm:aspect-square bg-gray-100 rounded-sm overflow-hidden">
                            <img src="/images/course1.jpg"
                                alt="Sai Beauty Training Session"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* Our People Section */}
            <section className="w-full bg-white text-black py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <p className="text-xs font-bold text-gray-900 mb-2">Team</p>
                        <div className="inline-block pr-16 mb-4">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-none pb-1">Our people</h2>
                        </div>
                        <p className="text-sm text-gray-600">Meet the artists who make Aarfa Beauty Home what it is.</p>
                    </div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 mb-20">
                        {/* Member 1 */}
                        <div>
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                                <img src="/images/sanu1.jpg"
                                    alt="Aarfa Poudel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-0.5">Sanu Lama</h4>
                            <p className="text-base text-gray-600 mb-4">Founder & stylist</p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                Sanu Lama built this salon on the belief that beauty work is honest work.
                            </p>
                            <div className="flex gap-3 text-gray-800">
                                {/* Facebook */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Instagram */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {/* TikTok */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </div>
                        </div>
                        {/* Member 2 */}
                        <div>
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                                <img src="/images/sai3.jpg"
                                    alt="Deepa Sharma"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-0.5">Deepa Sharma</h4>
                            <p className="text-base text-gray-600 mb-4">Senior colorist</p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                With over six years of experience, Deepa transforms hair with precision and care.
                            </p>
                            <div className="flex gap-3 text-gray-800">
                                {/* Facebook */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Instagram */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {/* TikTok */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </div>
                        </div>
                        {/* Member 3 */}
                        <div>
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                                <img src="/images/sai3.jpg"
                                    alt="Nisha Adhikari"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-0.5">Nisha Adhikari</h4>
                            <p className="text-base text-gray-600 mb-4">Skincare specialist</p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                Nisha's approach to skincare is thoughtful, treating each client as an individual.
                            </p>
                            <div className="flex gap-3 text-gray-800">
                                {/* Facebook */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Instagram */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {/* TikTok */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </div>
                        </div>
                        {/* Member 4 */}
                        <div>
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                                <img src="/images/sai3.jpg"
                                    alt="Anita Thapa"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-0.5">Anita Thapa</h4>
                            <p className="text-base text-gray-600 mb-4">Makeup artist</p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                Anita knows how to enhance your features for any moment that matters.
                            </p>
                            <div className="flex gap-3 text-gray-800">
                                {/* Facebook */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Instagram */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {/* TikTok */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </div>
                        </div>
                        {/* Member 5 */}
                        <div>
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                                <img src="/images/sai3.jpg"
                                    alt="Sunita Gurung"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-0.5">Sunita Gurung</h4>
                            <p className="text-base text-gray-600 mb-4">Hair care expert</p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                Sunita specializes in treatments that restore health and shine to your hair.
                            </p>
                            <div className="flex gap-3 text-gray-800">
                                {/* Facebook */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Instagram */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {/* TikTok */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </div>
                        </div>
                        {/* Member 6 */}
                        <div>
                            <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-4">
                                <img src="/images/sai3.jpg"
                                    alt="Priya Magar"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-gray-900 text-xl mb-0.5">Priya Magar</h4>
                            <p className="text-base text-gray-600 mb-4">Salon manager</p>
                            <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                Priya ensures every client leaves feeling valued and cared for.
                            </p>
                            <div className="flex gap-3 text-gray-800">
                                {/* Facebook */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                                {/* Instagram */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                                </svg>
                                {/* TikTok */}
                                <svg className="w-4 h-4 cursor-pointer hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            {/* Ready to Book Section */}
            <section className="w-full bg-gradient-to-br from-amber-50 via-white to-amber-50 text-black py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">Ready to book?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base font-medium">
                        Schedule your appointment today and let us bring out your best.
                    </p>
                    <div className="flex justify-center items-center gap-4 mb-16">
                        <Link to="/contact" className="px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white text-xs font-bold rounded transition-colors tracking-wide">
                            Book now
                        </Link>
                        <button className="px-6 py-2.5 border border-gray-300 hover:bg-gray-50 text-gray-900 text-xs font-bold rounded transition-colors tracking-wide cursor-pointer">
                            Call us
                        </button>
                    </div>

                    {/* Image Placeholder */}
                    <div className="w-full aspect-video bg-zinc-800 rounded-sm overflow-hidden relative group">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                            <img src="/images/sai_interior.jpeg"
                                alt="Sai Beauty Parlour Front View"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* FAQs Section */}
            <section className="w-full bg-white text-black py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900">FAQs</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-sm font-medium">
                            Find answers to common questions about our services and salon.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 w-full mb-20 px-4">
                        {/* FAQ 1 */}
                        <div className="text-center flex flex-col items-center">
                            <svg className="w-6 h-6 mb-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">How do I book?</h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">Call us directly or visit our salon in Hetauda to schedule your appointment.</p>
                        </div>
                        {/* FAQ 2 */}
                        <div className="text-center flex flex-col items-center">
                            <svg className="w-6 h-6 mb-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">What's your cancellation policy?</h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">We ask for 24 hours notice if you need to reschedule or cancel.</p>
                        </div>
                        {/* FAQ 3 */}
                        <div className="text-center flex flex-col items-center">
                            <svg className="w-6 h-6 mb-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Do you offer bridal packages?</h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">Yes, we specialize in complete bridal beauty services tailored to your vision.</p>
                        </div>
                        {/* FAQ 4 */}
                        <div className="text-center flex flex-col items-center">
                            <svg className="w-6 h-6 mb-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Are your products organic?</h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">We use quality products chosen for their effectiveness and care for your skin.</p>
                        </div>
                        {/* FAQ 5 */}
                        <div className="text-center flex flex-col items-center">
                            <svg className="w-6 h-6 mb-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">Can I request a specific stylist?</h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">Absolutely. Let us know your preference when booking and we'll arrange it.</p>
                        </div>
                        {/* FAQ 6 */}
                        <div className="text-center flex flex-col items-center">
                            <svg className="w-6 h-6 mb-4 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <h4 className="font-bold text-gray-900 mb-2 text-sm">What payment methods do you accept?</h4>
                            <p className="text-[10px] text-gray-500 leading-relaxed max-w-[200px]">We accept cash and digital payments for your convenience.</p>
                        </div>
                    </div>

                    <div className="text-center flex flex-col items-center">
                        <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Still have questions?</h3>
                        <p className="text-gray-600 text-[11px] mb-6">Reach out to us anytime.</p>
                        <Link to="/contact" className="px-6 py-2 border border-gray-300 rounded text-xs font-semibold hover:bg-gray-50 hover:border-gray-400 text-gray-800 transition-colors">
                            Contact us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Connect with Us Section */}
            <section className="w-full bg-gradient-to-r from-yellow-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Stay Connected</h2>
                    <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
                        Explore our social media. Follow us to watch our team in action and view our real results.
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

export default LandingPage;
