import { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/homeSection.css';

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: '/images/luxury-car-1.jpg',
      title: 'Experience Luxury Like Never Before',
      subtitle: 'Premium cars for your premium journey'
    },
    {
      image: '/images/luxury-car-2.jpg',
      title: 'Drive Your Dreams',
      subtitle: 'Exceptional fleet for exceptional people'
    },
    {
      image: '/images/luxury-car-3.jpg',
      title: 'Journey in Style',
      subtitle: 'Where luxury meets performance'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="home-section">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="carousel-content">
              <h1 className="business-intro">{slide.title}</h1>
              <p className="tagline">{slide.subtitle}</p>
              <button className="explore-btn">
                Explore Our Fleet <FaArrowRight className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeSection; 