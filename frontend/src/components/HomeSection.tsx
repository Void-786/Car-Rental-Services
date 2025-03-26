import React, { useState, useEffect } from 'react';
import '../styles/homeSection.css';

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/src/assets/images/carousel/taj-photo-yamuna-river-scaled.webp',
      title: 'Timeless',
      subtitle: 'Wonder',
      // car: 'Mercedes-Maybach S-Class',
      description: 'Witness the breathtaking Taj Mahal, a monument of eternal love where marble dances with sunlight and history whispers tales of devotion along the sacred Yamuna River.'
    },
    {
      image: '/src/assets/images/carousel/ram-temple-1.webp',
      title: 'Royal ',
      subtitle: 'Rajasthan',
      // car: 'Rolls-Royce Phantom',
      description: 'Immerse yourself in the vibrant culture of Rajasthan, where magnificent palaces rise from golden sands, colorful festivals ignite your senses, and ancient traditions bring history to life.'
    },
    {
      image: '/src/assets/images/carousel/Varanasi-Ghats.jpg',
      title: "Nature's ",
      subtitle: 'Retreat',
      // car: 'Bentley Flying Spur',
      description: 'Experience the mystical charm of Varanasi\'s ancient ghats, where sacred ceremonies illuminate the Ganges at dawn and dusk, connecting souls to traditions thousands of years old in India\'s spiritual heart.'
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;