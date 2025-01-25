import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaUsers, FaStar, FaCalendarCheck, FaHotel, FaCar, FaUtensils, FaArrowLeft } from 'react-icons/fa';
import '../styles/packageDetails.css';

interface Package {
  id: string;
  title: string;
  duration: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  price: string;
  locations: string[];
  rating: number;
  reviews: number;
  included: string[];
  category: string;
  nextAvailable: string;
  maxGroupSize: number;
}

// Importing the packages data
const packages: Package[] = [
  {
    id: 'shimla-manali-agra',
    title: 'Royal Himalayan Expedition',
    duration: '6 Days | 5 Nights',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      'https://images.unsplash.com/photo-1626714485833-537b700b02ce?w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80'
    ],
    description: "Embark on a majestic journey through India's crown jewels. Experience the colonial charm of Shimla, adventure through Manali's pristine valleys, and witness the timeless beauty of the Taj Mahal in Agra.",
    highlights: [
      "Sunrise view of Taj Mahal with professional photographer",
      "Private helicopter tour of Himalayan peaks",
      "Luxury camping in Manali with gourmet dining",
      "Heritage walk through Shimla's Victorian architecture",
      "Traditional Himachali cooking class with local family"
    ],
    price: "₹74,999",
    locations: ['Delhi', 'Shimla', 'Manali', 'Agra'],
    rating: 4.9,
    reviews: 128,
    included: [
      "5-star luxury accommodations",
      "Private chauffeur-driven SUV",
      "All meals at premium restaurants",
      "Professional photography session",
      "Local expert guides"
    ],
    category: "Premium",
    nextAvailable: "2024-01-20",
    maxGroupSize: 12,
  },
  // ... other packages
];

const PackageDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const packageDetails = packages.find(pkg => pkg.id === id);

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  return (
    <div className="package-details-container">
      <Link to="/packages" className="back-button">
        <FaArrowLeft /> Back to Packages
      </Link>

      <div className="package-hero">
        <img src={packageDetails.image} alt={packageDetails.title} className="hero-image" />
        <div className="hero-content">
          <h1>{packageDetails.title}</h1>
          <div className="hero-meta">
            <span><FaClock /> {packageDetails.duration}</span>
            <span><FaUsers /> Max {packageDetails.maxGroupSize} people</span>
            <span><FaStar /> {packageDetails.rating} ({packageDetails.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="package-content-grid">
        <div className="main-content">
          <section className="description-section">
            <h2>About This Package</h2>
            <p>{packageDetails.description}</p>
          </section>

          <section className="highlights-section">
            <h2>Package Highlights</h2>
            <div className="highlights-grid">
              {packageDetails.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-number">{index + 1}</span>
                  <p>{highlight}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="gallery-section">
            <h2>Gallery</h2>
            <div className="gallery-grid">
              {packageDetails.gallery.map((image, index) => (
                <img key={index} src={image} alt={`Gallery ${index + 1}`} />
              ))}
            </div>
          </section>

          <section className="included-section">
            <h2>What's Included</h2>
            <div className="included-grid">
              {packageDetails.included.map((item, index) => (
                <div key={index} className="included-item">
                  {item}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="booking-sidebar">
          <div className="booking-card">
            <div className="price-display">
              <span className="price">{packageDetails.price}</span>
              <span className="per-person">per person</span>
            </div>

            <div className="booking-details">
              <div className="detail-item">
                <FaCalendarCheck />
                <div>
                  <span className="label">Next Available</span>
                  <span className="value">{packageDetails.nextAvailable}</span>
                </div>
              </div>
              <div className="detail-item">
                <FaMapMarkerAlt />
                <div>
                  <span className="label">Destinations</span>
                  <span className="value">{packageDetails.locations.join(' → ')}</span>
                </div>
              </div>
            </div>

            <Link to={`/book/${packageDetails.id}`} className="book-now-button">
              Book Now
            </Link>

            <div className="included-summary">
              <div className="summary-item">
                <FaHotel /> Premium Accommodations
              </div>
              <div className="summary-item">
                <FaCar /> Private Transportation
              </div>
              <div className="summary-item">
                <FaUtensils /> All Meals Included
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PackageDetails;
