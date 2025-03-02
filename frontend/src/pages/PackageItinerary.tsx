import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../styles/itinerary.css';
import apiClient from '../api/apiClient';

interface Itinerary {
  day: string;
  heading: string;
  description: string;
}

interface PackageFormData {
  title: string;
  duration: string;
  tour_highlight: string;
  price: string;
  locations: string[];
  itinerary_heading: string;
  itinerary: Itinerary[];
  placeId: number;
  id: number;
}

const PackageItinerary: React.FC = () => {
  const { placeId } = useParams<{ placeId: string }>();
  const [tourPackages, setTourPackages] = useState<PackageFormData[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<PackageFormData | null>(null);
  const [includeAccommodations, setIncludeAccommodations] = useState(true);
  const [includeFood, setIncludeFood] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get(`${apiClient}/place/package/filter-by-place/${placeId}`);
        setTourPackages(response.data);
        if (response.data.length > 0) {
          setSelectedPackage(response.data[0]);
        }
      } catch (err) {
        setError('Failed to fetch tour packages. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, [placeId]);

  const handleSelectPackage = (pkg: PackageFormData) => {
    setSelectedPackage(pkg);
  };

  const handleBookNow = () => {
    if (!selectedPackage) {
      alert('Please select a package before booking.');
      return;
    }
    alert(`Booking ${selectedPackage.title} with accommodations: ${includeAccommodations}, food & beverages: ${includeFood}`);
  };

  if (loading) return <div>Loading packages...</div>;
  if (error) return <div className="error-message">{error}</div>;
  if (!loading && tourPackages.length === 0) {
    return <div className="no-packages-message">No tour packages available for this place yet. Check back soon!</div>;
  }

  return (
    <div className="itinerary-container">
      {/* Package select section */}
      <div className="package-selector">
        <h2>Choose Your Package</h2>
        <div className="package-options">
          {tourPackages.map(pkg => (
            <div 
              key={pkg.id}
              className={`package-card ${selectedPackage && selectedPackage.id === pkg.id ? 'selected' : ''}`}
              onClick={() => handleSelectPackage(pkg)}
            >
              <div className="package-header">
                <h3>{pkg.title}</h3>
                <div className="package-duration">⏱️ {pkg.duration}</div>
              </div>
              <div className="package-price">💰 {pkg.price}</div>
              <button className="select-package-btn">
                {selectedPackage && selectedPackage.id === pkg.id ? (
                  <>
                    <span className="btn-icon">✓</span>
                    Selected
                  </>
                ) : (
                  <>
                    <span className="btn-icon">→</span>
                    Select Package
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tour highlights section */}
      {/* Tour highlights section */}
      {selectedPackage && (
        <div className="tour-highlights">
          <div className="highlights-content">
            <h2>Tour Highlights</h2>
            <div className="duration">{selectedPackage.duration}</div>
            <p className="highlights-description">{selectedPackage.tour_highlight}</p>

            <div className="route-path">
              {selectedPackage.locations.map((city, index) => (
                <React.Fragment key={city}>
                  <span className="city">{city}</span>
                  {index < selectedPackage.locations.length - 1 && (
                    <span className="route-dots">•••••➣</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      )}


      {/* Itinerary Section */}
      <div className="itinerary-container">
        <h1 className="itinerary-title">Itinerary</h1>
        <p className="itinerary-subtitle">
          From glorious past to vibrant cultures, explore royal Rajasthan speaking volumes in architectural grandeur.
        </p>
        
        <div className="timeline">
          {selectedPackage.itinerary.map((day, index) => (
            <div key={day.day} className="timeline-item">
              <div className="day-marker">Day {day.day}</div>
              <div className="timeline-content">
                <h3>{day.heading}</h3>
                <p>{day.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="booking-options">
        <label>
          <input
            type="checkbox"
            checked={includeAccommodations}
            onChange={() => setIncludeAccommodations(!includeAccommodations)}
          />
          Include Accommodations (Extra Charges Apply)*
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeFood}
            onChange={() => setIncludeFood(!includeFood)}
          />
          Include Food & Beverages (Extra Charges Apply)*
        </label>
        <button className="book-now-btn" onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  )
};

export default PackageItinerary;
