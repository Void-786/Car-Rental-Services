import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/packages.css';

interface Package {
  id: string;
  title: string;
  duration: string;
  image: string;
  description: string;
}

const packages: Package[] = [
  {
    id: 'shimla-manali-agra',
    title: 'Shimla Manali Agra',
    duration: '6 Days',
    image: '/images/packages/shimla-manali.jpg',
    description: 'Experience the beauty of North India with our carefully crafted tour package covering the queen of hills Shimla, adventure capital Manali, and the iconic Taj Mahal in Agra.'
  },
  {
    id: 'shimla-manali-dharamshala',
    title: 'Shimla Manali Dharamshala',
    duration: '8 Days',
    image: '/images/packages/dharamshala.jpg',
    description: 'Explore the spiritual and natural wonders of Himachal Pradesh with this comprehensive tour package covering major hill stations and Buddhist culture.'
  },
  {
    id: 'shimla-manali-amritsar',
    title: 'Shimla Manali Amritsar',
    duration: '8 Days',
    image: '/images/packages/amritsar.jpg',
    description: 'Combine the serenity of hill stations with the spiritual grandeur of Golden Temple in this unique tour package.'
  },
  {
    id: 'best-of-shimla-manali',
    title: 'Best of Shimla Manali Chandigarh',
    duration: '7 Days',
    image: '/images/packages/chandigarh.jpg',
    description: 'Experience the best of North India combining modern city life with mountain adventures.'
  },
  {
    id: 'uttarakhand-special',
    title: 'Uttarakhand Special Package',
    duration: '6 Days',
    image: '/images/packages/uttarakhand.jpg',
    description: 'Visit Haridwar, Rishikesh, Mussoorie, Jim Corbett, Nainital, and Kedarnath in this spiritual and nature-filled journey.'
  }
];

const PackagesPage: React.FC = () => {
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

  return (
    <div className="packages-container">
      <h1>Our Travel Packages</h1>
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div 
            key={pkg.id}
            className="package-card"
            onMouseEnter={() => setHoveredPackage(pkg.id)}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            <div className="package-image">
              <img src={pkg.image} alt={pkg.title} />
              {hoveredPackage === pkg.id && (
                <div className="package-overlay">
                  <div className="package-description">
                    <h3>{pkg.title}</h3>
                    <p>{pkg.description}</p>
                    <Link to={`/itinerary/${pkg.id}`} className="book-button">
                      Book Here
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="package-info">
              <h3>{pkg.title}</h3>
              <p className="duration">{pkg.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesPage;
