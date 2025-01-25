import React, { useState } from 'react';
import '../styles/cars.css';
import { FaCar, FaCog, FaUsers, FaGasPump, FaTachometerAlt, FaRoad, FaArrowRight, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';

const CarsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCar, setSelectedCar] = useState<number | null>(null);
  const [bookingDetails, setBookingDetails] = useState({
    pickupLocation: '',
    dropLocation: '',
    tripType: 'outstation',
    journeyType: 'roundTrip',
    phone: ''
  });

  const cars = [
    {
      id: 1,
      name: "Maruti Suzuki Ciaz",
      type: "Sedan",
      transmission: "Automatic",
      price: "₹2000/day",
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/48542/ciaz-exterior-right-front-three-quarter-2.jpeg?q=80",
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
      image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/45691/dzire-exterior-right-front-three-quarter-3.jpeg?q=80",
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
      image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&auto=format&fit=crop&q=80",
      highlights: [
        "Spacious 7-Seater",
        "Smart Hybrid Technology",
        "Premium Captain Seats",
        "Advanced Safety Features"
      ],
      specs: {
        engine: "1.5L",
        mileage: "20.51 kmpl",
        seats: "7",
        transmission: "Automatic"
      }
    },
    {
      id: 4,
      name: "Toyota Innova Crysta",
      type: "MUV",
      transmission: "Automatic",
      price: "₹3500/day",
      image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop&q=80",
      highlights: [
        "Luxurious Interior",
        "Powerful Diesel Engine",
        "Premium Leather Seats",
        "Advanced Entertainment System"
      ],
      specs: {
        engine: "2.4L Diesel",
        mileage: "15.36 kmpl",
        seats: "7",
        transmission: "6-Speed Automatic"
      }
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking Details:', { ...bookingDetails, selectedCar });
  };

  const filteredCars = activeCategory === 'all' 
    ? cars 
    : cars.filter(car => car.type === activeCategory);

  const handlePrevImage = (carIndex: number) => {
    // setCarImages(prevImages => {
    //   const newImages = [...prevImages];
    //   newImages[carIndex] = (newImages[carIndex] - 1 + 4) % 4;
    //   return newImages;
    // });
  };

  const handleNextImage = (carIndex: number) => {
    // setCarImages(prevImages => {
    //   const newImages = [...prevImages];
    //   newImages[carIndex] = (newImages[carIndex] + 1) % 4;
    //   return newImages;
    // });
  };

  const CarCard = ({ car }: { car: any }) => {
    return (
      <div className="car-card">
        <div className="car-type">{car.type}</div>
        <h3 className="car-name">{car.name}</h3>
        <img src={car.image} alt={car.name} className="car-image" />
        <div className="car-price">{car.price}</div>
      </div>
    );
  };

  return (
    <div className="cars-page">
      <div className="booking-section">
        <div className="trip-type-tabs">
          <button
            className={`tab ${bookingDetails.tripType === 'outstation' ? 'active' : ''}`}
            onClick={() => setBookingDetails(prev => ({ ...prev, tripType: 'outstation' }))}
          >
            Outstation
          </button>
          <button
            className={`tab ${bookingDetails.tripType === 'local' ? 'active' : ''}`}
            onClick={() => setBookingDetails(prev => ({ ...prev, tripType: 'local' }))}
          >
            Local / Airport
          </button>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="journey-type">
            <label className={`radio-label ${bookingDetails.journeyType === 'roundTrip' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="journeyType"
                value="roundTrip"
                checked={bookingDetails.journeyType === 'roundTrip'}
                onChange={handleInputChange}
              />
              Round Trip
            </label>
            <label className={`radio-label ${bookingDetails.journeyType === 'oneWay' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="journeyType"
                value="oneWay"
                checked={bookingDetails.journeyType === 'oneWay'}
                onChange={handleInputChange}
              />
              One Way Trip
            </label>
          </div>

          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              name="pickupLocation"
              placeholder="Enter pickup city"
              value={bookingDetails.pickupLocation}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-group">
            <FaMapMarkerAlt className="input-icon" />
            <input
              type="text"
              name="dropLocation"
              placeholder="Enter destination city"
              value={bookingDetails.dropLocation}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="button" className="add-city-btn">
            + Add More City
            <span>•</span>
          </button>

          <div className="input-group">
            <FaUsers className="input-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Enter mobile number"
              value={bookingDetails.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="book-now-button">
            Check Price & Book Cab
          </button>
        </form>
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
        {filteredCars.map((car) => (
          <div 
            key={car.id} 
            className={`car-card ${selectedCar === car.id ? 'selected' : ''}`}
            onClick={() => setSelectedCar(car.id)}
          >
            <CarCard car={car} />
            <div className="car-info">
              <div className="car-specs">
                <div className="spec">
                  <FaUsers className="icon" />
                  <span>{car.specs.seats} Seater</span>
                </div>
                <div className="spec">
                  <FaGasPump className="icon" />
                  <span>{car.specs.mileage}</span>
                </div>
                <div className="spec">
                  <FaCog className="icon" />
                  <span>{car.specs.transmission}</span>
                </div>
                <div className="spec">
                  <FaCar className="icon" />
                  <span>{car.specs.engine}</span>
                </div>
              </div>
            </div>

            {selectedCar === car.id && (
              <button className="book-now-button" onClick={handleSubmit}>
                Book Now <FaArrowRight />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
