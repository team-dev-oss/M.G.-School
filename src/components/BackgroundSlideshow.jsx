"use client"
import React, { useEffect, useState } from 'react';

const BackgroundSlideshow = ({ settings }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        (prevSlide + 1) % settings.background_slideshow_gallery.length
      );
    }, settings.background_slideshow_slide_duration);

    return () => clearInterval(interval);
  }, [settings.background_slideshow_gallery.length, settings.background_slideshow_slide_duration]);

  const kenBurnsClass = settings.background_slideshow_ken_burns === 'yes'
    ? `ken-burns-${settings.background_slideshow_ken_burns_zoom_direction}`
    : '';

  return (
    <div className="absolute inset-0 overflow-hidden opacity-50">
      {settings.background_slideshow_gallery.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-${settings.background_slideshow_transition_duration} ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          } ${kenBurnsClass}`}
          style={{
            backgroundImage: `url(${slide.url})`,
            zIndex: index === currentSlide ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundSlideshow;
