import React from 'react';
import '../styles/fleet.css';
import { FaCar, FaCog, FaUsers, FaGasPump } from 'react-icons/fa';

const Fleet: React.FC = () => {
  const cars = [
    {
      id: 1,
      name: 'Ciaz',
      type: 'Sedan',
      transmission: 'Manual',
      image: '/images/ciaz.jpg',
      specs: {
        seats: '5 Seater',
        mileage: '20.65 kmpl',
        engine: '1462 cc',
        power: '103.25 bhp'
      }
    },
    {
      id: 2,
      name: 'Dzire',
      type: 'Subcompact Sedan',
      transmission: 'Manual',
      image: '/images/dzire.jpg',
      specs: {
        seats: '5 Seater',
        mileage: '23.26 kmpl',
        engine: '1197 cc',
        power: '88.50 bhp'
      }
    },
    {
      id: 3,
      name: 'Ertiga',
      type: 'MUV',
      transmission: 'Manual',
      image: '/images/ertiga.jpg',
      specs: {
        seats: '7 Seater',
        mileage: '20.51 kmpl',
        engine: '1462 cc',
        power: '103.25 bhp'
      }
    },
    {
      id: 4,
      name: 'Innova Crysta',
      type: 'MUV',
      transmission: 'Manual',
      image: '/images/innova.jpg',
      specs: {
        seats: '7 Seater',
        mileage: '15.6 kmpl',
        engine: '2393 cc',
        power: '148.53 bhp'
      }
    }
  ];

  return (
    <div className="fleet-container">
      <div className="fleet-hero">
        <div className="fleet-hero-content">
          <h1>Welcome to Our Premium Fleet</h1>
          <p>Experience luxury and comfort with our carefully curated selection of vehicles</p>
        </div>
      </div>

      <div className="fleet-intro">
        <h2>Our Fleet Collection</h2>
        <p>Choose from our range of meticulously maintained vehicles, each offering a perfect blend of comfort, style, and performance.</p>
      </div>

      <div className="fleet-grid">
        {cars.map((car) => (
          <div key={car.id} className="car-card">
            <div className="car-image">
              <img src={car.image} alt={car.name} />
              <div className="car-type">{car.type}</div>
            </div>
            
            <div className="car-details">
              <h3>{car.name}</h3>
              <div className="car-specs">
                <div className="spec-item">
                  <FaUsers className="spec-icon" />
                  <span>{car.specs.seats}</span>
                </div>
                <div className="spec-item">
                  <FaGasPump className="spec-icon" />
                  <span>{car.specs.mileage}</span>
                </div>
                <div className="spec-item">
                  <FaCog className="spec-icon" />
                  <span>{car.specs.engine}</span>
                </div>
                <div className="spec-item">
                  <FaCar className="spec-icon" />
                  <span>{car.transmission}</span>
                </div>
              </div>
              <button className="book-now">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;
