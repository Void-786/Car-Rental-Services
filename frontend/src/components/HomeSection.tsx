import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/homeSection.css';

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1920&q=100',
      title: 'daddy',
      subtitle: 'is here',
      car: 'Mercedes-Maybach S-Class',
      description: 'Welcome to our limousine rental website! We offer luxury transportation services for any occasion, from weddings and proms to corporate events and airport transfers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1920&q=100',
      title: 'Experience',
      subtitle: 'Luxury Travel',
      car: 'Rolls-Royce Phantom',
      description: 'Experience unmatched comfort and sophistication with our premium fleet of luxury vehicles.'
    },
    {
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1920&q=100',
      title: 'Premium',
      subtitle: 'Fleet Service',
      car: 'Bentley Flying Spur',
      description: 'Our professional chauffeurs ensure a seamless and elegant journey for all your transportation needs.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-section">
      <div className="best-selling-packages">
        <h2>Best Selling Packages</h2>
      </div>

      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="text-content">
                <h1>
                  {slide.title}
                  <span className="subtitle">{slide.subtitle}</span>
                </h1>
                <p>{slide.description}</p>
                <button className="open-fleet-btn">Open Fleet</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;