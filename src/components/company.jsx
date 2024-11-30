'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const images = [
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
  '/8.png',
  '/9.png',
  '/10.png',
  '/11.png',
  '/12.png',
  '/13.png',
  '/14.png',
  '/15.png',
  '/16.png',
  '/17.png',
  '/18.png',
  '/19.png',
  '/20.png',
  '/21.png',
  '/22.png',
  '/23.png',
  '/24.png',
  '/25.png',
  '/26.png',
  '/27.png',
  '/28.png',
  '/29.png',
  '/30.png',
  '/31.png',
  '/32.png',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(5); // Default for larger screens
  const carouselContentRef = useRef(null);
  const totalItems = images.length;

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1); // Show 1 image at a time on mobile
      } else {
        setItemsPerView(5); // Show 5 images at a time on larger screens
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const updateCarousel = (index) => {
    if (carouselContentRef.current) {
      const offset = -index * 100 / itemsPerView;
      carouselContentRef.current.style.transform = `translateX(${offset}%)`;
    }
  };

  const handleNext = () => {
    if (currentIndex < totalItems - itemsPerView) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      updateCarousel(newIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      updateCarousel(newIndex);
    }
  };

  return (
    <div className="md:my-7 overflow-hidden relative">
      {/* <h2 className="text-center text-2xl font-bold tracking-tight text-black sm:text-4xl">
        Our Images{" "}
        <span className="text-red-700 font-bold text-3xl md:text-4xl">
          Carousel
        </span>
      </h2> */}
      <div className="relative ">
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-gray-300"
          disabled={currentIndex === 0}
          style={{ marginLeft: '-20px' }} // Adjust margin to bring button closer
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <Carousel className="relative w-5/6 overflow-hidden mx-auto">
          <CarouselContent ref={carouselContentRef} className="flex transition-transform duration-300">
            {images.map((src, index) => (
              <CarouselItem key={index} className={`flex-shrink-0 ${itemsPerView === 1 ? 'basis-full' : 'basis-1/5'} h-24 md:h-32 lg:h-40 relative`}>
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 border border-gray-300"
          disabled={currentIndex >= totalItems - itemsPerView}
          style={{ marginRight: '-20px' }} // Adjust margin to bring button closer
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
