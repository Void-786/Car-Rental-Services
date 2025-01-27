import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/feedback.css';

const FeedbackSection = () => {
  const feedbacks = [
    {
      id: 1,
      avatar: <FaUser />,
      rating: 1,
      date: '01/15/2024',
      text: "I'm sorry but this place lost a customer. I don't know if they changed management or what but it went downhill. I stopped by this evening for dinner. We...",
      readMore: "#"
    },
    {
      id: 2,
      rating: 2,
      date: '01/20/2024',
      text: "Fish and Chips was like eating fish sticks, they were also very dry. Their famous wings were terrible, no meat and very dry. The only thing that was good that we ordered was the garlic knots. They were very tasty.",
      readMore: "#"
    },
    {
      id: 3,
      avatar: <FaUser />,
      rating: 2,
      date: '01/17/2024',
      text: "We visited on a Friday at 6 p.m. The restaurant was 85% full, but it took 1 hour to get our food after ordering. You might survive this if you don't have...",
      readMore: "#"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>★</span>
    ));
  };

  return (
    <div className="feedback-section">
      <h2>Thanks for giving us your feedback online.</h2>
      <p className="feedback-subtitle">Below are a few of the reviews that brought some recent issues to light for our business.</p>
      
      <div className="feedback-container">
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="feedback-card">
            <div className="feedback-header">
              <div className="avatar">
                {feedback.avatar || <FaUser />}
              </div>
              <div className="rating">
                {renderStars(feedback.rating)}
              </div>
              <div className="date">{feedback.date}</div>
            </div>
            <div className="feedback-content">
              <p>{feedback.text}</p>
              <a href={feedback.readMore} className="read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="feedback-navigation">
        <span className="nav-dot active"></span>
        <span className="nav-dot"></span>
      </div>
    </div>
  );
};

export default FeedbackSection;
