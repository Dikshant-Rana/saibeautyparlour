import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    image: "/images/sai3.jpg",
    alt: "Hair styling work"
  },
  {
    id: 2,
    image: "/images/latest3.jpg",
    alt: "Skincare treatment"
  },
  {
    id: 3,
    image: "/images/latest19.jpg",
    alt: "Makeup application"
  },
  {
    id: 4,
    image: "/images/latest20.jpg",
    alt: "Nail art design"
  },
  {
    id: 5,
    image: "/images/latest21.jpg",
    alt: "Bridal makeup"
  },
  {
    id: 6,
    image: "/images/latest18.jpg",
    alt: "Spa treatment"
  }
];

const GallerySlider = React.forwardRef((props, ref) => {
  const autoplayRef = useRef(null);
  const inactivityTimerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: false,
      containScroll: false,
      slidesToScroll: 1,
      duration: 30,             // smooth animation over 30ms
    },
    [
      Autoplay({
        delay: 4000,            // 4 seconds per slide
        stopOnInteraction: false, // we'll handle this manually
        stopOnMouseEnter: false,
        playOnInit: true,
        stopOnFocusIn: false,
      }),
    ]
  );

  // Get autoplay plugin reference and track slide changes
  useEffect(() => {
    if (emblaApi) {
      autoplayRef.current = emblaApi.plugins().autoplay;

      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      };

      emblaApi.on('select', onSelect);
      onSelect(); // Set initial index

      return () => emblaApi.off('select', onSelect);
    }
  }, [emblaApi]);

  const resetInactivityTimer = useCallback(() => {
    // Clear existing timer
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    // Resume autoplay after 1 second of inactivity
    inactivityTimerRef.current = setTimeout(() => {
      if (autoplayRef.current) {
        autoplayRef.current.play();
      }
    }, 1000);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      // Stop autoplay when user manually navigates
      if (autoplayRef.current) {
        autoplayRef.current.stop();
      }

      // Scroll to previous slide
      emblaApi.scrollPrev();

      // Reset the inactivity timer
      resetInactivityTimer();
    }
  }, [emblaApi, resetInactivityTimer]);

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

  // Expose scroll functions to parent component
  React.useImperativeHandle(ref, () => ({
    scrollNext,
    scrollPrev
  }));

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="lg:col-span-8 relative">
      {/* Slider Container */}
      <div 
        className="relative overflow-hidden" 
        ref={emblaRef}
      >
        <div className="flex">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[60%] lg:w-[65%] flex-none rounded-sm overflow-hidden aspect-[4/5] relative mr-4 sm:mr-6"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Navigation Arrows - positioned over entire slider */}
        {/* Prev Arrow */}
        <div
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors z-10"
          onClick={scrollPrev}
        >
          <FiChevronLeft className="w-4 h-4 text-white" />
        </div>

        {/* Next Arrow */}
        <div
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 flex items-center justify-center cursor-pointer hover:bg-black/60 transition-colors z-10"
          onClick={scrollNext}
        >
          <FiChevronRight className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-end mt-8 gap-2 pr-4 lg:pr-12">
        {galleryItems.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${index === selectedIndex ? 'bg-black' : 'border border-gray-600 bg-transparent'
              }`}
          />
        ))}
      </div>
    </div>
  );
});

GallerySlider.displayName = 'GallerySlider';

export default GallerySlider;