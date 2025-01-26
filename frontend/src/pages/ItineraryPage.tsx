import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/itinerary.css';

const ItineraryPage: React.FC = () => {
  const { id } = useParams();
  
  const itineraryData = {
    title: "Golden Triangle Tour",
    subtitle: "From glorious past to vibrant cultures, explore royal Rajasthan speaking volumes in architectural grandeur.",
    days: [
      {
        day: 1,
        title: "Arriving in Delhi - The Capital of India",
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
  };

  return (
    <div className="itinerary-container">
      <div className="itinerary-header">
        <h1>Itinerary</h1>
        <p className="subtitle">{itineraryData.subtitle}</p>
      </div>
      
      <div className="timeline">
        {itineraryData.days.map((day, index) => (
          <div key={day.day} className="timeline-item">
            <div className="day-marker">Day {day.day}</div>
            <div className="timeline-content">
              <div className="timeline-dot"></div>
              <div className="content-wrapper">
                <h3>{day.title}</h3>
                <p>{day.description}</p>
                {day.breakfast && <div className="breakfast-tag">Breakfast Included</div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryPage;
