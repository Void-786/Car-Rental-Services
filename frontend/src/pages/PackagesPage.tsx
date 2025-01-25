import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaStar, FaHotel, FaCar, FaUtensils, FaCamera, FaRoute, FaCalendarCheck, FaImages, FaInfoCircle, FaUsers, FaCheck } from 'react-icons/fa';
import '../styles/packages.css';

interface Package {
  id: number;
  title: string;
  image: string;
  location: string;
  duration: string;
  startDate: string;
  maxPeople: number;
  price: number;
  rating: number;
  reviews: number;
  highlight: string;
  description: string;
  details: { icon: string; text: string }[];
}

const packages: Package[] = [
  {
    id: 1,
    title: "Royal Himalayan Expedition",
    image: "https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?w=800&auto=format&fit=crop&q=80",
    location: "Delhi",
    duration: "6 Days | 5 Nights",
    startDate: "2024-01-20",
    maxPeople: 12,
    price: 74999,
    rating: 4.9,
    reviews: 128,
    highlight: "Sunrise view of Taj Mahal with professional photography session",
    description: "Experience the majestic Himalayas in royal style. Journey through ancient monasteries, pristine lakes, and snow-capped peaks. Includes luxury camping under the stars and traditional Himalayan cuisine experiences.",
    details: [
      { icon: "calendar", text: "6 Days | 5 Nights" },
      { icon: "location", text: "Delhi" },
      { icon: "group", text: "Max 12 people" },
      { icon: "calendar", text: "Jan 20, 2024" }
    ]
  },
  {
    id: 2,
    title: "Spiritual Himalayan Odyssey",
    image: "https://images.unsplash.com/photo-1506604900144-7360175909e2?w=800&auto=format&fit=crop&q=80",
    location: "Shimla",
    duration: "8 Days | 7 Nights",
    startDate: "2024-01-25",
    maxPeople: 8,
    price: 89999,
    rating: 4.8,
    reviews: 96,
    highlight: "Private audience with Buddhist monks and meditation sessions",
    description: "Embark on a spiritual journey through ancient monasteries and sacred sites. Experience traditional Buddhist ceremonies, meditation sessions, and learn about Tibetan medicine and philosophy.",
    details: [
      { icon: "calendar", text: "8 Days | 7 Nights" },
      { icon: "location", text: "Shimla" },
      { icon: "group", text: "Max 8 people" },
      { icon: "calendar", text: "Jan 25, 2024" }
    ]
  },
  {
    id: 3,
    title: "Heritage & Culture Explorer",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&auto=format&fit=crop&q=80",
    location: "Shimla",
    duration: "6 Days | 5 Nights",
    startDate: "2024-02-01",
    maxPeople: 10,
    price: 69999,
    rating: 4.7,
    reviews: 84,
    highlight: "Exclusive tour of centuries-old palaces with local historians",
    description: "Discover the rich cultural heritage of India through its magnificent palaces, ancient temples, and historic markets. Includes traditional art workshops and cultural performances.",
    details: [
      { icon: "calendar", text: "6 Days | 5 Nights" },
      { icon: "location", text: "Shimla" },
      { icon: "group", text: "Max 10 people" },
      { icon: "calendar", text: "Feb 1, 2024" }
    ]
  }
];

const PackagesPage: React.FC = () => {
  const [activePackage, setActivePackage] = useState<number | null>(null);

  return (
    <div className="packages-container">
      <div className="packages-hero">
        <div className="hero-content">
          <h1>Exclusive Travel</h1>
          <p>Discover India's finest curated experiences</p>
        </div>
      </div>

      <div className="section-divider"></div>

      <div className="best-packages">
        <h2>Best-Selling Packages</h2>
        <div className="best-packages-grid">
          {packages.slice(0, 3).map((pkg) => (
            <div key={pkg.id} className="best-package-card">
              <img src={pkg.image} alt={pkg.title} />
              <div className="best-package-overlay">
                <h3>{pkg.title}</h3>
                <p>{pkg.duration}</p>
                <Link to={`/itinerary/${pkg.id}`} className="view-package">
                  Explore Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="packages-grid">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className={`package-card ${activePackage === pkg.id ? 'expanded' : ''}`}
            onClick={() => setActivePackage(activePackage === pkg.id ? null : pkg.id)}
          >
            <div className="package-image-wrapper">
              <img src={pkg.image} alt={pkg.title} className="package-image" />
              <div className="image-overlay"></div>
              <div className="package-title-overlay">
                <h2>{pkg.title}</h2>
                <p>{pkg.duration}</p>
              </div>
              <Link to={`/itinerary/${pkg.id}`} className="explore-button">Explore Now</Link>
            </div>
            
            <div className="package-content">
              <div className="package-details">
                <div className="detail-item">
                  <FaClock />
                  <span>{pkg.duration}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt />
                  <span>{pkg.location}</span>
                </div>
                <div className="detail-item">
                  <FaCalendarCheck />
                  <span>{pkg.startDate}</span>
                </div>
                <div className="detail-item">
                  <FaUsers />
                  <span>Max {pkg.maxPeople}</span>
                </div>
              </div>
              
              <div className="package-description">
                {pkg.description}
              </div>
              
              <div className="package-highlights">
                <span className="highlight-tag">{pkg.highlight}</span>
              </div>

              <div className="package-meta">
                <div className="meta-left">
                  <div className="price">
                    <span className="price-symbol">₹</span>
                    {pkg.price.toLocaleString()}
                  </div>
                  <div className="rating">
                    <FaStar />
                    <span>{pkg.rating}</span>
                    <span className="rating-count">({pkg.reviews} reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="package-details-expanded">
              <div className="details-grid">
                <div className="details-section">
                  <h4><FaRoute /> Package Highlights</h4>
                  <div className="highlights-list">
                    <div className="highlight-item">
                      <span>1</span>
                      {pkg.highlight}
                    </div>
                  </div>
                </div>

                <div className="details-section">
                  <h4><FaImages /> Gallery</h4>
                  <div className="gallery-grid">
                    <img src={pkg.image} alt="Gallery 1" />
                  </div>
                </div>

                <div className="details-section">
                  <h4><FaInfoCircle /> What's Included</h4>
                  <div className="included-list">
                    {pkg.details.map((detail, index) => (
                      <div key={index} className="included-item">
                        <FaCheck /> {detail.text}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="details-section">
                  <h4><FaMapMarkerAlt /> Destinations</h4>
                  <div className="locations-list">
                    <div className="location-item">
                      {pkg.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
