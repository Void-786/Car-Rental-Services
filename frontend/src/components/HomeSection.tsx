import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/homeSection.css';

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bookingData, setBookingData] = useState({
    pickupAddress: '',
    dropoffAddress: '',
    pickupDate: '',
    pickupTime: ''
  });

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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking details:', bookingData);
  };

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
                <button className="open-fleet-btn">Open Fleet</button>
              </div>
            </div>
          </div>
        ))}

        <div className="booking-bar">
          <form onSubmit={handleBookingSubmit}>
            <div className="input-group">
              <div className="input-wrapper">
                <FaMapMarkerAlt className="input-icon" />
                <input
                  type="text"
                  placeholder="Pick Up Address"
                  value={bookingData.pickupAddress}
                  onChange={(e) => setBookingData({ ...bookingData, pickupAddress: e.target.value })}
                />
              </div>
              <span className="input-label">From: address, airport, hotel...</span>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <FaMapMarkerAlt className="input-icon" />
                <input
                  type="text"
                  placeholder="Drop Off Address"
                  value={bookingData.dropoffAddress}
                  onChange={(e) => setBookingData({ ...bookingData, dropoffAddress: e.target.value })}
                />
              </div>
              <span className="input-label">Distance, Hourly, Flat Rate</span>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <FaCalendarAlt className="input-icon" />
                <input
                  type="date"
                  value={bookingData.pickupDate}
                  onChange={(e) => setBookingData({ ...bookingData, pickupDate: e.target.value })}
                  placeholder="dd-mm-yyyy"
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-wrapper">
                <FaClock className="input-icon" />
                <input
                  type="time"
                  value={bookingData.pickupTime}
                  onChange={(e) => setBookingData({ ...bookingData, pickupTime: e.target.value })}
                  placeholder="--:--"
                />
              </div>
            </div>

            <button type="submit" className="book-now-btn">
              <FaCalendarAlt className="btn-icon" />
              BOOK NOW
            </button>
          </form>
        </div>
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