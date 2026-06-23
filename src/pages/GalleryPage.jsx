import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Gallery = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isResourcesOpen, setIsResourcesOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [imageAspectRatio, setImageAspectRatio] = useState(null);

    // Categories Data
    const categories = [
        {
            id: 'SBP',
            title: 'Our Works',
            coverImg: 'latest1.jpg',
            images: ['latest1.jpg', 'latest20.jpg', 'latest21.jpg','latest2.jpg','latest3.jpg',  'new7.jpg', 'latest4.jpg','new3.jpg','new6.jpg','latest5.jpg', 'latest28.jpg', 'sai1.jpg','latest8.jpg', 'latest9.jpg', 'latest10.jpg', 'sai3.jpg', 'latest13.jpg', 'latest12.jpg', 'latest14.jpg', 'latest15.jpg', 'latest16.jpg', 'latest17.jpg', 'latest24.jpg','latest25.jpg', 'new4.jpg', 'latest27.jpg' ,'party.jpg','latest22.jpg']
        },
        {
            id: 'MOT',
            title: 'Events & Memories',
            coverImg: 'team1.jpg',
            images: ['team1.jpg', 'team2.jpg', 'team3.jpg', 'team5.jpg','team37.jpg', 'team38.jpg', 'team16.jpg', 'team18.jpg', 'team19.jpg', 'team20.jpg', 'team24.jpg', 'team25.jpg', 'team26.jpg', 'team27.jpg', 'team29.jpg', 'team30.jpg', 'team31.jpg', 'team32.jpg', 'team33.jpg', 'team34.jpg', 'team35.jpg', 'team36.jpg', 'team39.jpg', 'team40.jpg', 'team41.jpg',  'team9.jpg', 'team10.jpg', 'team11.jpg', 'team12.jpg', 'team13.jpg', 'team14.jpg', 'team15.jpg',]
        }
    ];

    // Handle initial load and browser back/forward (hashchange)
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && categories.some(c => c.id === hash)) {
                setActiveCategory(hash);
            } else {
                setActiveCategory(null);
            }
        };

        // Check hash on initial load
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') {
                setLightboxOpen(false);
            } else if (e.key === 'ArrowLeft') {
                goToPreviousImage();
            } else if (e.key === 'ArrowRight') {
                goToNextImage();
            }
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [lightboxOpen, currentImageIndex]);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const goToNextImage = () => {
        if (!activeData) return;
        const nextIndex = (currentImageIndex + 1) % activeData.images.length;
        setCurrentImageIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        if (!activeData) return;
        const prevIndex = currentImageIndex === 0 ? activeData.images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
    };

    // Touch handlers for swipe navigation
    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            goToNextImage();
        } else if (isRightSwipe) {
            goToPreviousImage();
        }
    };

    const handleImageLoad = (e) => {
        const img = e.target;
        const ratio = img.naturalWidth / img.naturalHeight;
        setImageAspectRatio(ratio);
    };

    const activeData = categories.find(c => c.id === activeCategory);

    const handleCategorySelect = (categoryId) => {
        window.location.hash = categoryId;
    };

    const handleBackToCategories = () => {
        // Clear hash without triggering navigation jump
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
        setActiveCategory(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-black font-sans">
            {/* Header */}
            <NavBar forceScrolled={true} />

            {/* Main Content */}
            <main className="pt-16 min-h-screen">
                {/* Hero */}
                <section className="relative w-full h-[70vh] min-h-[500px] bg-stone-900 flex items-center justify-start overflow-hidden">
                    <div className="absolute inset-0 bg-stone-800">
                        {/* Background Image Placeholder */}
                        <img src="/images/parlour_frontimg.jpeg"
                            alt="Sai Beauty Parlour Front View"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative z-10 px-4 sm:px-8 lg:px-16 w-full max-w-7xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">Gallery</h1>
                        <p className="text-lg md:text-xl text-gray-200 font-medium">Gallery / Photos of Sai Beauty Parlour</p>
                    </div>
                </section>

                {/* Categories or Images */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    {!activeCategory ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            {categories.map((category) => (
                                <div
                                    key={category.id}
                                    onClick={() => handleCategorySelect(category.id)}
                                    className="group cursor-pointer rounded-xl overflow-hidden bg-stone-800 aspect-[16/10] relative shadow-lg hover:shadow-2xl transition-all duration-300 transform"
                                >
                                    {/* Cover Image */}
                                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-102">
                                        <img src={`/images/${category.coverImg}`}
                                            alt={category.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Keep image overlay dark and reveal title on hover */}
                                    <div className="absolute inset-0 transition-colors duration-300 flex items-center justify-center bg-black/20 group-hover:bg-black/30">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white z-10 tracking-wide text-center px-4 transition-opacity duration-300">
                                            {category.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="animate-fade-in text-center md:text-left">
                            <button
                                onClick={handleBackToCategories}
                                className="mb-12 inline-flex items-center text-gray-600 hover:text-black font-semibold transition-colors group"
                            >
                                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Back to Gallery Categories
                            </button>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-gray-900">{activeData.title}</h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {activeData.images.map((imageName, idx) => (
                                    <div
                                        key={idx}
                                        className="aspect-square bg-stone-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group cursor-pointer"
                                        onClick={() => openLightbox(idx)}
                                    >
                                        <img src={`/images/${imageName}`}
                                            alt={`${activeData.title} ${idx + 1}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* See More on Social Media Section */}
                            <section className="w-full bg-gradient-to-r from-yellow-50 to-green-50 py-16 px-4 sm:px-6 lg:px-8 rounded-lg mt-16">
                                <div className="max-w-4xl mx-auto text-center">
                                    <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                        {activeCategory === 'MOT' ? 'Relive Our Special Moments' : 'See More of Our Services'}
                                    </h3>
                                    <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
                                        {activeCategory === 'MOT' 
                                            ? 'Follow us on social media to see more exclusive event photos, team celebrations, and memorable moments'
                                            : 'Follow us on social media for more stunning transformations and exclusive behind-the-scenes content'
                                        }
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
                                        <a href="https://www.tiktok.com/@saibeautyparlour" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-4 sm:px-6 py-3.5 sm:py-3 bg-black hover:bg-gray-800 rounded-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                                            <FaTiktok className="w-5 h-5 sm:w-6 sm:h-6" />
                                            <span>TikTok</span>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}
                </section>
            </main>

            {/* Footer */}
            <Footer />

            {/* Lightbox Modal */}
            {lightboxOpen && activeData && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div
                        className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {/* Previous Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPreviousImage();
                            }}
                            className="absolute left-2 md:-left-16 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Main Image Container */}
                        <div
                            className={`${imageAspectRatio && imageAspectRatio < 1 ? 'max-w-lg max-h-[50vh]' : 'max-w-4xl max-h-[90vh]'} w-full flex items-center justify-center`}
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <img
                                src={`/images/${activeData.images[currentImageIndex]}`}
                                alt={`${activeData.title} ${currentImageIndex + 1}`}
                                onLoad={handleImageLoad}
                                className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNextImage();
                            }}
                            className="absolute right-2 md:-right-16 z-10 w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 px-4 py-2 rounded-full text-white text-sm">
                        {currentImageIndex + 1} / {activeData.images.length}
                    </div>

                    {/* Mobile Swipe Hint */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/70 text-xs md:hidden">
                        Swipe to navigate
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;