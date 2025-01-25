import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/itinerary.css';

interface DayPlan {
  day: number;
  title: string;
  description: string;
  breakfast: boolean;
}

interface TourPackage {
  id: string;
  title: string;
  duration: string;
  description: string;
  route: string[];
  days: DayPlan[];
  highlights?: string[];
  stays: string[];
}

const PackageItinerary: React.FC = () => {
  const { id } = useParams();
  const [selectedPackage, setSelectedPackage] = useState<string>('option1');

  const tourPackages: { [key: string]: TourPackage } = {
    option1: {
      id: 'option1',
      title: "Royal Rajasthan Tour",
      duration: "16D / 15N",
      description: "Experience the grandeur and opulence of majestic Rajasthan, India's royal state showcasing the grand forts, lavish palaces and enriching hospitality amidst the sun-soaked lands.",
      route: [
        "Delhi", "Mandawa", "Bikaner", "Jaisalmer",
        "Jodhpur", "Mount Abu", "Udaipur", "Pushkar",
        "Jaipur", "Agra"
      ],
      stays: ["Various Locations"],
      days: [
        {
          day: 1,
          title: "Arriving in Delhi – The Capital of India",
          description: "Will arrive at Delhi Airport for a seamless hotel transfer and to feel revitalised.",
          breakfast: false
        },
        {
          day: 2,
          title: "Discovering Delhi",
          description: "Explore the most cherished landmarks of magnificent Delhi. Unfold the charming tourist attractions like Jama Mosque, Red Fort, Raj Ghat, Qutub Minar and Connaught Place.",
          breakfast: true
        },
        {
          day: 3,
          title: "Delhi to Agra - The City of Taj",
          description: "After relishing scrumptious morning brunch, we'll drive through Delhi to Agra to unveil the timeless allure of the majestic Taj Mahal and other prominent UNESCO Heritage sites like Agra Fort.",
          breakfast: true
        },
        {
          day: 4,
          title: "Journey from Agra to Jaipur",
          description: "In the morning, we'll embark on the Agra to Jaipur drive through Fatehpur Sikri to marvel at the most splendid architecture and trace the royal history of glorious Jaipur palaces.",
          breakfast: true
        },
        {
          day: 5,
          title: "Jaipur's Regal Charm",
          description: "Kickstart the special day with exemplary morning sightseeing. Will visit the most beautiful tourist attractions like Amer Fort, Hawa Mahal, City Palace and Jantar Mantar.",
          breakfast: true
        },
        {
          day: 6,
          title: "Back to Square One - Delhi",
          description: "After check out, we'll proceed towards Delhi and say a hearty bid adieu to the journey filled with delightful memories.",
          breakfast: true
        }
      ]
    },
    option2: {
      id: 'option2',
      title: "Golden Triangle Tour",
      duration: "6N / 7D",
      description: "Explore the iconic Golden Triangle of India, covering the capital city Delhi, the city of Taj Mahal - Agra, and the Pink City - Jaipur.",
      route: ["Delhi", "Agra", "Fatehpur Sikri", "Jaipur", "Delhi"],
      stays: ["2N Delhi", "2N Agra", "2N Jaipur"],
      highlights: [
        "Visit to the magnificent Taj Mahal",
        "Explore the historic Red Fort",
        "Experience the grandeur of Amber Fort",
        "Visit to the architectural marvel Fatehpur Sikri"
      ],
      days: [
        {
          day: 1,
          title: "Arrival Delhi",
          description: "Arrive Delhi. Meet and Assist by Representative of Local Tour operator. You will be transferred to the hotel, where you will Check In. Remaining day is Free at own Leisure.",
          breakfast: false
        },
        {
          day: 2,
          title: "Delhi Local Sightseeing",
          description: "Full day sightseeing of Old & New Delhi including Raj Ghat, Jama Masjid, Red Fort, Humayun's Tomb, Qutub Minar, and India Gate. Drive along the ceremonial avenue Rajpath.",
          breakfast: true
        },
        {
          day: 3,
          title: "Delhi to Agra - Taj Mahal",
          description: "Drive to Agra. Visit the Famous Taj Mahal, one of the greatest symbols of eternal love. Later visit The Agra Fort, where Shah Jahan spent his last days overlooking the Taj Mahal.",
          breakfast: true
        },
        {
          day: 4,
          title: "Agra - Fatehpur Sikri",
          description: "Visit Sikandara, built by Emperor Akbar. Later visit Agra fort and explore the local market. Free time to explore the city.",
          breakfast: true
        },
        {
          day: 5,
          title: "Agra to Jaipur via Fatehpur Sikri",
          description: "Drive to Jaipur via Fatehpur Sikri. Visit the Buland Darwaza, Jama Masjid, and Tomb of Salim Chishti. Evening visit to Chokhi Dhani for authentic Rajasthani experience.",
          breakfast: true
        },
        {
          day: 6,
          title: "Jaipur Sightseeing",
          description: "Visit Amber Fort, Jaigarh Fort, Hawa Mahal, City Palace, and Jantar Mantar. Experience the rich heritage and architecture of the Pink City.",
          breakfast: true
        },
        {
          day: 7,
          title: "Jaipur to Delhi Departure",
          description: "After breakfast, drive back to Delhi. Drop off at airport/railway station for your onward journey.",
          breakfast: true
        }
      ]
    }
  };

  const selectedTour = tourPackages[selectedPackage];

  const renderIcon = (name: string) => {
    switch (name) {
      case 'duration':
        return '⏱️';
      case 'stay':
        return '🏨';
      case 'taj':
        return '🏰';
      case 'fort':
        return '🏛️';
      case 'temple':
        return '⛩️';
      case 'culture':
        return '🎭';
      case 'food':
        return '🍽️';
      case 'transport':
        return '🚗';
      default:
        return '✨';
    }
  };

  const packageFeatures = {
    option1: [
      { icon: 'duration', text: 'Extended 16-day journey' },
      { icon: 'stay', text: 'Luxury accommodations' },
      { icon: 'culture', text: 'Rich cultural experiences' },
      { icon: 'food', text: 'Traditional cuisines' }
    ],
    option2: [
      { icon: 'duration', text: 'Compact 7-day tour' },
      { icon: 'taj', text: 'Taj Mahal visit' },
      { icon: 'fort', text: 'Historic forts' },
      { icon: 'transport', text: 'Comfortable transfers' }
    ]
  };

  return (
    <div className="itinerary-container">
      {/* Package Selection */}
      <div className="package-selector">
        <h2>Choose Your Package</h2>
        <div className="package-options">
          {Object.values(tourPackages).map((pkg) => (
            <div 
              key={pkg.id}
              className={`package-card ${selectedPackage === pkg.id ? 'selected' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <div className="package-header">
                <h3>{pkg.title}</h3>
                <div className="package-duration">
                  {renderIcon('duration')} {pkg.duration}
                </div>
              </div>

              <div className="package-stays">
                {pkg.stays.map((stay, index) => (
                  <span key={index} className="stay-badge">
                    {renderIcon('stay')} {stay}
                  </span>
                ))}
              </div>

              <div className="feature-grid">
                {packageFeatures[pkg.id as keyof typeof packageFeatures].map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">{renderIcon(feature.icon)}</span>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>

              <button className="select-package-btn">
                {selectedPackage === pkg.id ? (
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

      {/* Tour Highlights Section */}
      <div className="tour-highlights">
        <div className="highlights-content">
          <h2>Tour Highlights</h2>
          <div className="duration">{selectedTour.duration}</div>
          <p className="highlights-description">{selectedTour.description}</p>
          
          <div className="route-path">
            {selectedTour.route.map((city, index) => (
              <React.Fragment key={city}>
                <span className="city">{city}</span>
                {index < selectedTour.route.length - 1 && (
                  <span className="route-dots">•••••</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="map-container">
          <img 
            src="/images/india-map.png" 
            alt="India Tour Map" 
            className="india-map"
          />
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="itinerary-container">
        <h1 className="itinerary-title">Itinerary</h1>
        <p className="itinerary-subtitle">
          From glorious past to vibrant cultures, explore royal Rajasthan speaking volumes in architectural grandeur.
        </p>
        
        <div className="timeline">
          {selectedTour.days.map((day, index) => (
            <div key={day.day} className="timeline-item">
              <div className="day-marker">Day {day.day}</div>
              <div className="timeline-content">
                <h3>{day.title}</h3>
                <p>{day.description}</p>
                {day.breakfast && <div className="breakfast-tag">Breakfast Included</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageItinerary;
