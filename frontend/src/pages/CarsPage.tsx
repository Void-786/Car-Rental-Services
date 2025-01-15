import React, { useState } from 'react';
import '../styles/cars.css';
import { FaCar, FaCog, FaUsers, FaGasPump, FaTachometerAlt, FaRoad, FaArrowRight } from 'react-icons/fa';

const CarsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [carImages, setCarImages] = useState([0, 0, 0, 0]);

  const cars = [
    {
      id: 1,
      name: "Maruti Suzuki Ciaz",
      type: "Sedan",
      transmission: "Automatic",
      price: "₹2000/day",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-2.jpeg",
      highlights: ["Comfortable Seating", "Fuel Efficient", "Smart Features"],
      specs: {
        engine: "1.5L",
        mileage: "20.65 kmpl",
        seats: "5",
        transmission: "Automatic"
      }
    },
    {
      id: 2,
      name: "Maruti Suzuki Dzire",
      type: "Sedan",
      transmission: "Manual",
      price: "₹1800/day",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-3.jpeg",
      highlights: ["Compact Design", "Great Mileage", "Easy to Drive"],
      specs: {
        engine: "1.2L",
        mileage: "23.26 kmpl",
        seats: "5",
        transmission: "Manual"
      }
    },
    {
      id: 3,
      name: "Maruti Suzuki Ertiga",
      type: "MUV",
      transmission: "Automatic",
      price: "₹2500/day",
      image: "/images/cars/ertiga.jpg",
      highlights: [
        "Spacious 7-Seater",
        "Smart Hybrid Technology",
        "Premium Captain Seats",
        "Advanced Safety Features"
      ],
      specs: {
        engine: "1.5L Smart Hybrid",
        mileage: "20.51 kmpl",
        seats: "7 (Captain Seats)",
        transmission: "6-Speed Automatic"
      }
    },
    {
      id: 4,
      name: "Toyota Innova Crysta",
      type: "MUV",
      transmission: "Automatic",
      price: "₹3500/day",
      image: "/images/cars/innova.jpg",
      highlights: [
        "Luxurious Interior",
        "Powerful Diesel Engine",
        "Premium Leather Seats",
        "Advanced Entertainment System"
      ],
      specs: {
        engine: "2.4L Diesel",
        mileage: "15.36 kmpl",
        seats: "7 (Captain Seats)",
        transmission: "6-Speed Automatic"
      }
    }
  ];

  const filteredCars = activeCategory === 'all' 
    ? cars 
    : cars.filter(car => car.type === activeCategory);

  const handlePrevImage = (carIndex: number) => {
    setCarImages(prevImages => {
      const newImages = [...prevImages];
      newImages[carIndex] = (newImages[carIndex] - 1 + 4) % 4;
      return newImages;
    });
  };

  const handleNextImage = (carIndex: number) => {
    setCarImages(prevImages => {
      const newImages = [...prevImages];
      newImages[carIndex] = (newImages[carIndex] + 1) % 4;
      return newImages;
    });
  };

  return (
    <div className="cars-container">
      <div className="cars-hero">
        <div className="hero-overlay"></div>
        <div className="cars-hero-content">
          <h1>OUR FLEET</h1>
        </div>
      </div>

      <div className="category-filter">
        <button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Vehicles
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'Sedan' ? 'active' : ''}`}
          onClick={() => setActiveCategory('Sedan')}
        >
          Sedans
        </button>
        <button 
          className={`filter-btn ${activeCategory === 'MUV' ? 'active' : ''}`}
          onClick={() => setActiveCategory('MUV')}
        >
          MUVs
        </button>
      </div>

      <div className="cars-grid">
        {filteredCars.map((car, index) => (
          <div key={car.id} className="car-card">
            <div className="car-image-wrapper">
              <img 
                src={car.image} 
                alt={car.name} 
                className="car-image" 
              />
              <span className="car-badge">{car.type}</span>
              <span className="price-badge">{car.price}</span>
            </div>
            <div className="car-content">
              <div className="car-header">
                <h3>{car.name}</h3>
                <span className="transmission-badge">{car.transmission}</span>
              </div>
              <div className="car-highlights">
                {car.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-dot"></span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
              <div className="specs-container">
                <div className="spec-item">
                  <FaGasPump className="spec-icon" />
                  <div className="spec-info">
                    <span className="spec-label">Engine</span>
                    <span className="spec-value">{car.specs.engine}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <FaRoad className="spec-icon" />
                  <div className="spec-info">
                    <span className="spec-label">Mileage</span>
                    <span className="spec-value">{car.specs.mileage}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <FaUsers className="spec-icon" />
                  <div className="spec-info">
                    <span className="spec-label">Seats</span>
                    <span className="spec-value">{car.specs.seats}</span>
                  </div>
                </div>
                <div className="spec-item">
                  <FaCog className="spec-icon" />
                  <div className="spec-info">
                    <span className="spec-label">Transmission</span>
                    <span className="spec-value">{car.specs.transmission}</span>
                  </div>
                </div>
              </div>
              <button className="book-now-btn">
                Book Now
                <FaArrowRight className="btn-arrow" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
