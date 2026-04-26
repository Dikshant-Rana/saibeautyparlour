import React, { useCallback, useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const services = [
    {
        id: 1,
        title: "Hair styling and care",
        description: "From cuts to color, we shape your look with precision and artistry.",
        icon: "HAIR STYLING",
        image: "/image/hair.jpg",
        route: "/services/hair"
    },
    {
        id: 2,
        title: "Skincare treatments",
        description: "Nourish your skin with our specialized facials and therapeutic treatments.",
        icon: "SKINCARE",
        image: "/image/skincare.png",
        route: "/services/skincare"
    },
    {
        id: 3,
        title: "Makeup application",
        description: "Enhance your features for any occasion with our expert makeup artists.",
        icon: "MAKEUP",
        image: "/image/sai3.jpg",
        route: "/services/makeup"
    },
    {
        id: 4,
        title: "Nails & spa services",
        description: "Complete nail care from manicures to artistic designs, plus relaxing spa treatments.",
        icon: "NAILS & SPA",
        image: "/image/nails.jpg",
        route: "/services/nails-spa"
    },
    {
        id: 5,
        title: "Wedding packages",
        description: "Complete bridal beauty services for your special day.",
        icon: "BRIDAL",
        image: "/image/sai1.jpg",
        route: "/services/wedding"
    }
];

const ServiceSlider = React.forwardRef((props, ref) => {
    const autoplayRef = useRef(null);
    const inactivityTimerRef = useRef(null);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,               // enables seamless infinite loop
            align: "start",
            skipSnaps: false,
            dragFree: false,
            containScroll: false,     // Allow overflow for better loop spacing
            slidesToScroll: 1,
        },
        [
            Autoplay({
                delay: 2500,            // 1.5 seconds per slide
                stopOnInteraction: false, // we'll handle this manually
                stopOnMouseEnter: false,
                playOnInit: true,
                stopOnFocusIn: false,
            }),
        ]
    );

    // Get autoplay plugin reference
    useEffect(() => {
        if (emblaApi) {
            autoplayRef.current = emblaApi.plugins().autoplay;
        }
    }, [emblaApi]);

    const resetInactivityTimer = useCallback(() => {
        // Clear existing timer
        if (inactivityTimerRef.current) {
            clearTimeout(inactivityTimerRef.current);
        }

        // Resume autoplay immediately
        if (autoplayRef.current) {
            autoplayRef.current.play();
        }
    }, []);

    const scrollNext = useCallback(() => {
        if (emblaApi) {
            // Stop autoplay when user manually navigates
            if (autoplayRef.current) {
                autoplayRef.current.stop();
            }

            // Scroll to next slide
            emblaApi.scrollNext();

            // Reset the inactivity timer
            resetInactivityTimer();
        }
    }, [emblaApi, resetInactivityTimer]);

    // Cleanup timer on unmount
    useEffect(() => {
        return () => {
            if (inactivityTimerRef.current) {
                clearTimeout(inactivityTimerRef.current);
            }
        };
    }, []);

    // Expose scrollNext function to parent component
    React.useImperativeHandle(ref, () => ({
        scrollNext
    }));

    return (
        <div 
            className="relative overflow-hidden" 
            ref={emblaRef}
            onMouseEnter={() => {
                if (autoplayRef.current) {
                    autoplayRef.current.stop();
                }
            }}
            onMouseLeave={() => {
                if (autoplayRef.current) {
                    autoplayRef.current.play();
                }
            }}
        >
            {/* Slides */}
            <div className="flex">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        to={service.route}
                        className="flex-none w-full md:w-[calc(33.333%-2rem)] text-center flex flex-col items-center group mr-8 md:mr-12 cursor-pointer"
                    >
                        <div className="w-full aspect-[1] relative rounded overflow-hidden mb-6 bg-gray-100">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-3 text-gray-900 group-hover:text-pink-600 transition-colors">{service.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed px-4">
                            {service.description}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
});

ServiceSlider.displayName = 'ServiceSlider';

export default ServiceSlider;