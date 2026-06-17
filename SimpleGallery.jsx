import React, { useState, useEffect } from 'react';

const SimpleGallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Simple image list - all your available images
    const images = [
        'latest1.jpg', 'latest2.jpg', 'latest3.jpg', 'latest4.jpg', 
        'latest5.jpg', 'latest6.jpg', 'latest7.jpg', 'latest8.jpg',
        'latest9.jpg', 'latest10.jpg', 'latest11.jpg', 'latest12.jpg',
        'latest13.jpg', 'latest14.jpg', 'latest15.jpg', 'latest16.jpg',
        'latest17.jpg', 'hair.jpg', 'mehandi1.jpg', 'nails.jpg',
        'parlour_frontimg.jpeg', 'party.jpg', 'sai1.jpg', 'sai3.jpg',
        'skincare.png'
    ];

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxOpen) return;

            if (e.key === 'Escape') {
                closeLightbox();
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
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
    };

    const goToPreviousImage = () => {
        const prevIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(prevIndex);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Simple Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <h1 className="text-3xl font-bold text-gray-900">Gallery</h1>
                    <p className="text-gray-600 mt-2">Our beautiful collection</p>
                </div>
            </header>

            {/* Simple Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((imageName, index) => (
                        <div
                            key={index}
                            className="aspect-square bg-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={`/image/${imageName}`}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </main>

            {/* Simple Lightbox */}
            {lightboxOpen && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToPreviousImage();
                        }}
                        className="absolute left-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            goToNextImage();
                        }}
                        className="absolute right-4 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div
                        className="max-w-4xl max-h-full flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={`/image/${images[currentImageIndex]}`}
                            alt={`Gallery image ${currentImageIndex + 1}`}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 px-4 py-2 rounded-full text-white text-sm">
                        {currentImageIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SimpleGallery;