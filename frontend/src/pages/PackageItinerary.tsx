import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaCalendarAlt } from 'react-icons/fa';
import '../styles/packageItinerary.css';

const PackageItinerary: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from your data source
  const itineraries = {
    'shimla-manali-agra': {
      title: 'Royal Himalayan Expedition',
      duration: '6 Days | 5 Nights',
      route: [
        {
          day: 1,
          location: 'Delhi',
          activities: [
            'Arrival and transfer to hotel',
            'Welcome dinner at luxury restaurant',
            'Evening city tour'
          ]
        },
        {
          day: 2,
          location: 'Delhi → Shimla',
          activities: [
            'Morning drive to Shimla',
            'Evening heritage walk',
            'Dinner at Mall Road'
          ]
        },
        {
          day: 3,
          location: 'Shimla',
          activities: [
            'Visit to Jakhu Temple',
            'Colonial architecture tour',
            'Local cooking class'
          ]
        },
        {
          day: 4,
          location: 'Shimla → Manali',
          activities: [
            'Scenic drive to Manali',
            'Stop at viewpoints',
            'Evening at Old Manali'
          ]
        },
        {
          day: 5,
          location: 'Manali',
          activities: [
            'Hadimba Temple visit',
            'Adventure activities',
            'Luxury camping experience'
          ]
        },
        {
          day: 6,
          location: 'Manali → Agra',
          activities: [
            'Morning flight to Agra',
            'Taj Mahal sunset visit',
            'Farewell dinner'
          ]
        }
      ]
    },
    'shimla-manali-dharamshala': {
      title: 'Spiritual Himalayan Odyssey',
      duration: '8 Days | 7 Nights',
      route: [
        {
          day: 1,
          location: 'Shimla',
          activities: [
            'Arrival and check-in',
            'Evening meditation session',
            'Welcome ceremony'
          ]
        },
        {
          day: 2,
          location: 'Shimla',
          activities: [
            'Morning yoga',
            'Buddhist monastery visit',
            'Traditional dinner'
          ]
        },
        // Add more days...
      ]
    },
    'shimla-manali-amritsar': {
      title: 'Heritage & Culture Explorer',
      duration: '8 Days | 7 Nights',
      route: [
        {
          day: 1,
          location: 'Shimla',
          activities: [
            'Heritage hotel check-in',
            'Victorian architecture tour',
            'Traditional welcome dinner'
          ]
        },
        {
          day: 2,
          location: 'Shimla → Manali',
          activities: [
            'Scenic mountain drive',
            'Cultural village visit',
            'Evening folk performance'
          ]
        },
        {
          day: 3,
          location: 'Manali',
          activities: [
            'Ancient temple trail',
            'Local craft workshop',
            'Traditional music evening'
          ]
        },
        {
          day: 4,
          location: 'Manali',
          activities: [
            'Naggar Castle visit',
            'Art gallery tour',
            'Cooking demonstration'
          ]
        },
        {
          day: 5,
          location: 'Manali → Amritsar',
          activities: [
            'Morning drive to Amritsar',
            'Evening Wagah Border ceremony',
            'Street food tour'
          ]
        },
        {
          day: 6,
          location: 'Amritsar',
          activities: [
            'Golden Temple visit',
            'Heritage walk',
            'Langar experience'
          ]
        },
        {
          day: 7,
          location: 'Amritsar',
          activities: [
            'Local markets exploration',
            'Cultural performance',
            'Farewell dinner'
          ]
        },
        {
          day: 8,
          location: 'Departure',
          activities: [
            'Morning prayers',
            'Souvenir shopping',
            'Airport transfer'
          ]
        }
      ]
    }
  };

  const itinerary = itineraries[id as keyof typeof itineraries];

  if (!itinerary) {
    return <div>Itinerary not found</div>;
  }

  return (
    <div className="itinerary-container">
      <Link to="/packages" className="back-link">
        <FaArrowLeft /> Back to Packages
      </Link>
      
      <div className="itinerary-header">
        <h1>{itinerary.title}</h1>
        <div className="header-meta">
          <span><FaClock /> {itinerary.duration}</span>
        </div>
      </div>

      <div className="itinerary-timeline">
        {itinerary.route.map((day) => (
          <div key={day.day} className="timeline-item">
            <div className="timeline-day">
              <span className="day-number">Day {day.day}</span>
              <span className="location"><FaMapMarkerAlt /> {day.location}</span>
            </div>
            <div className="timeline-activities">
              {day.activities.map((activity, index) => (
                <div key={index} className="activity-item">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageItinerary;
