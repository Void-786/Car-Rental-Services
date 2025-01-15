import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaArrowRight, FaStar, FaHotel, FaCar, FaUtensils, FaCamera, FaRoute, FaCalendarCheck, FaImages, FaInfoCircle, FaUsers } from 'react-icons/fa';
import '../styles/packages.css';

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
  {
    id: 'shimla-manali-dharamshala',
    title: 'Spiritual Himalayan Odyssey',
    duration: '8 Days | 7 Nights',
    image: 'https://images.unsplash.com/photo-1542320260-f8f651de8c12?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580181465362-caa2ee197824?w=800&q=80',
      'https://images.unsplash.com/photo-1513023840371-dd774fcaee5b?w=800&q=80',
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80'
    ],
    description: "A soul-stirring journey through the spiritual heart of the Himalayas. From Buddhist monasteries to meditation retreats, experience profound peace and cultural immersion.",
    highlights: [
      "Private audience with Buddhist monks",
      "Sunrise meditation at Triund peak",
      "Luxury spa treatments with Himalayan herbs",
      "Traditional Tibetan art workshop",
      "Night camping under the stars"
    ],
    price: "₹89,999",
    locations: ['Shimla', 'Manali', 'Dharamshala', 'McLeodganj'],
    rating: 4.8,
    reviews: 96,
    included: [
      "Boutique heritage hotels",
      "Wellness programs",
      "Meditation sessions",
      "Cultural performances",
      "Mountain guides"
    ],
    category: "Luxury Wellness",
    nextAvailable: "2024-01-25",
    maxGroupSize: 8,
  },
  {
    id: 'shimla-manali-amritsar',
    title: 'Heritage & Culture Explorer',
    duration: '8 Days | 7 Nights',
    image: 'https://images.unsplash.com/photo-1609188944033-06041b850424?auto=format&fit=crop&w=2000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583067160749-aee4a46f987d?w=800&q=80',
      'https://images.unsplash.com/photo-1587899765642-3a8708a6a780?w=800&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80'
    ],
    description: "Discover the rich cultural tapestry of North India. From the colonial grandeur of Shimla to the spiritual heart of Amritsar's Golden Temple.",
    highlights: [
      "Golden Temple evening ceremony",
      "Traditional Punjabi cooking class",
      "Heritage walks in Shimla",
      "Adventure sports in Manali",
      "Local market exploration"
    ],
    price: "₹82,999",
    locations: ['Shimla', 'Manali', 'Amritsar'],
    rating: 4.7,
    reviews: 84,
    included: [
      "Luxury hotel stays",
      "Private transfers",
      "Cultural experiences",
      "Local guides",
      "All meals"
    ],
    category: "Heritage",
    nextAvailable: "2024-02-01",
    maxGroupSize: 10,
  },
  {
    id: 'best-of-shimla-manali-chandigarh',
    title: 'Urban Hills Expedition',
    duration: '7 Days | 6 Nights',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&q=80',
      'https://images.unsplash.com/photo-1626714485833-537b700b02ce?w=800&q=80',
      'https://images.unsplash.com/photo-1587899765642-3a8708a6a780?w=800&q=80'
    ],
    description: "Experience the perfect blend of modern city life and mountain serenity. From Chandigarh's modern architecture to the colonial charm of Shimla.",
    highlights: [
      "Rock Garden tour in Chandigarh",
      "Mall Road heritage walk",
      "Adventure activities in Manali",
      "Sunset at Jakhu Temple",
      "Local craft workshops"
    ],
    price: "₹69,999",
    locations: ['Chandigarh', 'Shimla', 'Manali'],
    rating: 4.6,
    reviews: 72,
    included: [
      "4-star accommodations",
      "City tours",
      "Adventure activities",
      "All transfers",
      "Experienced guides"
    ],
    category: "Premium",
    nextAvailable: "2024-02-05",
    maxGroupSize: 12,
  },
  {
    id: 'uttarakhand-special',
    title: 'Uttarakhand Divine Circuit',
    duration: '8 Days | 7 Nights',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589813638093-e5b2ee913e7f?w=800&q=80',
      'https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?w=800&q=80',
      'https://images.unsplash.com/photo-1626714485833-537b700b02ce?w=800&q=80'
    ],
    description: "A spiritual journey through the divine lands of Uttarakhand. Experience the holy cities of Haridwar and Rishikesh, the colonial charm of Mussoorie, wildlife at Corbett, and serene Nainital.",
    highlights: [
      "Ganga Aarti in Haridwar",
      "Yoga session in Rishikesh",
      "Kedarnath Temple visit",
      "Safari in Jim Corbett",
      "Boating in Naini Lake"
    ],
    price: "₹79,999",
    locations: ['Haridwar', 'Rishikesh', 'Mussoorie', 'Corbett', 'Nainital', 'Kedarnath'],
    rating: 4.8,
    reviews: 92,
    included: [
      "Luxury accommodations",
      "All transfers",
      "Spiritual guides",
      "Safari rides",
      "Temple visits"
    ],
    category: "Spiritual",
    nextAvailable: "2024-02-10",
    maxGroupSize: 10,
  }
];

const PackagesPage: React.FC = () => {
  const [activePackage, setActivePackage] = useState<string | null>(null);

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
            className="package-card"
            onMouseEnter={() => setActivePackage(pkg.id)}
            onMouseLeave={() => setActivePackage(null)}
          >
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
              <Link to={`/itinerary/${pkg.id}`} className="view-itinerary-btn">
                View Itinerary
              </Link>
            </div>
            <div className="package-content">
              <h3>{pkg.title}</h3>
              <div className="package-details">
                <div className="detail-item">
                  <FaClock />
                  <span>{pkg.duration}</span>
                </div>
                <div className="detail-item">
                  <FaMapMarkerAlt />
                  <span>{pkg.locations[0]}</span>
                </div>
                <div className="detail-item">
                  <FaCalendarCheck />
                  <span>{pkg.nextAvailable}</span>
                </div>
                <div className="detail-item">
                  <FaUsers />
                  <span>Max {pkg.maxGroupSize}</span>
                </div>
              </div>
              
              <div className="package-highlights">
                {pkg.highlights.slice(0, 3).map((highlight, index) => (
                  <span key={index} className="highlight-tag">{highlight}</span>
                ))}
              </div>

              <div className="package-meta">
                <div className="meta-rating">
                  <FaStar />
                  <span>{pkg.rating} ({pkg.reviews} reviews)</span>
                </div>
                <div className="package-price">{pkg.price}</div>
              </div>
              
              <Link to={`/package/${pkg.id}`} className="book-now">
                Book Now <FaArrowRight />
              </Link>
            </div>
            {activePackage === pkg.id && (
              <Link to={`/itinerary/${pkg.id}`} className="view-itinerary">
                View Itinerary
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
