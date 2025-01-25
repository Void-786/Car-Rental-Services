import React, { useState } from 'react';
import '../styles/carCatalog.css';
import { FaCar, FaCog, FaUsers, FaGasPump, FaRupeeSign } from 'react-icons/fa';

interface CarOption {
  id: number;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  specs: {
    seats: string;
    mileage: string;
    transmission: string;
    fuelType: string;
  };
}

const CarCatalog: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [selectedDays, setSelectedDays] = useState(1);

  const cars: CarOption[] = [
    {
      id: 1,
      name: 'Ciaz',
      type: 'Sedan',
      image: '/images/ciaz.jpg',
      pricePerDay: 2500,
      specs: {
        seats: '5 Seater',
        mileage: '20.65 kmpl',
        transmission: 'Manual',
        fuelType: 'Petrol'
      }
    },
    {
      id: 2,
      name: 'Dzire',
      type: 'Compact Sedan',
      image: '/images/dzire.jpg',
      pricePerDay: 2000,
      specs: {
        seats: '5 Seater',
        mileage: '23.26 kmpl',
        transmission: 'Manual',
        fuelType: 'Petrol'
      }
    },
    {
      id: 3,
      name: 'Ertiga',
      type: 'MUV',
      image: '/images/ertiga.jpg',
      pricePerDay: 3000,
      specs: {
        seats: '7 Seater',
        mileage: '20.51 kmpl',
        transmission: 'Manual',
        fuelType: 'Petrol'
      }
    }
  ];

  const handleCarSelect = (carId: number) => {
    setSelectedCar(carId);
  };

  return (
    <div className="car-catalog-container">
      <div className="car-selection-header">
        <h2>Choose Your Car</h2>
        <div className="rental-duration">
          <label>Rental Duration:</label>
          <select 
            value={selectedDays} 
            onChange={(e) => setSelectedDays(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 15, 30].map(days => (
              <option key={days} value={days}>{days} {days === 1 ? 'Day' : 'Days'}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="car-options-grid">
        {cars.map((car) => (
          <div 
            key={car.id} 
            className={`car-option-card ${selectedCar === car.id ? 'selected' : ''}`}
            onClick={() => handleCarSelect(car.id)}
          >
            <div className="car-image">
              <img src={car.image} alt={car.name} />
              <span className="car-type">{car.type}</span>
            </div>
            
            <div className="car-details">
              <div className="car-name-price">
                <h3>{car.name}</h3>
                <div className="price">
                  <FaRupeeSign />
                  <span>{car.pricePerDay.toLocaleString()}</span>
                  <small>/day</small>
                </div>
              </div>

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
                  <span>{car.specs.transmission}</span>
                </div>
                <div className="spec-item">
                  <FaCar className="spec-icon" />
                  <span>{car.specs.fuelType}</span>
                </div>
              </div>
            </div>

            {selectedCar === car.id && (
              <div className="total-price">
                <span>Total for {selectedDays} {selectedDays === 1 ? 'day' : 'days'}:</span>
                <div className="price">
                  <FaRupeeSign />
                  <span>{(car.pricePerDay * selectedDays).toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {selectedCar && (
        <button className="book-now-button">
          Book Now
        </button>
      )}
    </div>
  );
};

export default CarCatalog;
