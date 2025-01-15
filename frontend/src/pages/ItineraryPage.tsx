import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/itinerary.css';

interface Itinerary {
  id: string;
  title: string;
  duration: string;
  highlights: string[];
  dayWiseItinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  price: string;
}

const itineraries: Record<string, Itinerary> = {
  'shimla-manali-agra': {
    id: 'shimla-manali-agra',
    title: 'Shimla Manali Agra Tour Package',
    duration: '6 Days',
    highlights: [
      'Mall Road shopping in Shimla',
      'Snow activities in Manali',
      'Taj Mahal visit in Agra',
      'Hadimba Temple',
      'Solang Valley'
    ],
    dayWiseItinerary: [
      {
        day: 1,
        title: 'Arrival in Shimla',
        description: 'Arrive in Shimla and check-in to your hotel. Evening free for Mall Road visit.'
      },
      {
        day: 2,
        title: 'Shimla Sightseeing',
        description: 'Full day sightseeing including Kufri, Mall Road, and local attractions.'
      },
      // Add more days...
    ],
    inclusions: [
      'Hotel accommodation',
      'Daily breakfast and dinner',
      'All transfers and sightseeing',
      'Professional guide',
      'All taxes included'
    ],
    price: '₹25,999 per person'
  },
  // Add more packages...
};

const ItineraryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const itinerary = itineraries[id || ''];

  if (!itinerary) {
    return <div className="not-found">Package not found</div>;
  }

  return (
    <div className="itinerary-container">
      <h1>{itinerary.title}</h1>
      <div className="duration-badge">{itinerary.duration}</div>

      <section className="highlights-section">
        <h2>Package Highlights</h2>
        <ul>
          {itinerary.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </section>

      <section className="day-wise-section">
        <h2>Detailed Itinerary</h2>
        {itinerary.dayWiseItinerary.map((day) => (
          <div key={day.day} className="day-card">
            <h3>Day {day.day}: {day.title}</h3>
            <p>{day.description}</p>
          </div>
        ))}
      </section>

      <section className="inclusions-section">
        <h2>Package Inclusions</h2>
        <ul>
          {itinerary.inclusions.map((inclusion, index) => (
            <li key={index}>{inclusion}</li>
          ))}
        </ul>
      </section>

      <div className="booking-section">
        <div className="price">{itinerary.price}</div>
        <button className="book-now-button">Book Now</button>
      </div>
    </div>
  );
};

export default ItineraryPage;
