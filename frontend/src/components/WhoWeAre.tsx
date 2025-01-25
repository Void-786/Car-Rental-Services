import React from 'react';
import { FaCar, FaAward, FaHandshake, FaClock, FaStar, FaCarSide, FaUserTie, FaShieldAlt, FaHistory, FaTrophy, FaUsers } from 'react-icons/fa';
import '../styles/whoWeAre.css';

const WhoWeAre = () => {
  const values = [
    {
      icon: <FaCarSide />,
      title: "Premium Fleet",
      description: "Experience luxury with our handpicked collection of premium vehicles",
      bgColor: "#4361ee"
    },
    {
      icon: <FaAward />,
      title: "Excellence Guaranteed",
      description: "Setting the gold standard in luxury car rentals since 2010",
      bgColor: "#3a0ca3"
    },
    {
      icon: <FaUserTie />,
      title: "Personalized Service",
      description: "Tailored solutions to meet your unique travel requirements",
      bgColor: "#7209b7"
    },
    {
      icon: <FaShieldAlt />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for a seamless experience",
      bgColor: "#4361ee"
    }
  ];

  const stats = [
    { number: "5000+", label: "Happy Customers" },
    { number: "100+", label: "Luxury Vehicles" },
    { number: "15+", label: "Years Experience" },
    { number: "24/7", label: "Customer Support" }
  ];

  const mottos = [
    {
      text: "Drive Beyond Ordinary",
      icon: <FaStar />,
      color: "#4361ee"
    },
    {
      text: "Luxury at Your Command",
      icon: <FaCar />,
      color: "#3a0ca3"
    },
    {
      text: "Your Journey, Our Passion",
      icon: <FaHandshake />,
      color: "#7209b7"
    }
  ];

  const timeline = [
    {
      year: "2010",
      icon: <FaHistory />,
      title: "The Beginning",
      description: "Started with a fleet of 5 luxury cars",
      color: "#4361ee"
    },
    {
      year: "2015",
      icon: <FaTrophy />,
      title: "Market Leader",
      description: "Expanded to 50+ premium vehicles",
      color: "#3a0ca3"
    },
    {
      year: "2020",
      icon: <FaUsers />,
      title: "Growing Community",
      description: "Serving 5000+ happy customers",
      color: "#7209b7"
    }
  ];

  return (
    <div className="who-we-are-container">
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="content">
          <h1>Who We Are</h1>
          <p className="tagline">Redefining Luxury Car Rental Experience</p>
        </div>
      </div>

      <div className="mission-section">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            At Safari, we believe that every journey should be extraordinary. 
            We're dedicated to providing exceptional luxury vehicles and unparalleled service, 
            making every drive a memorable experience.
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mottos-banner">
        <div className="mottos-grid">
          {mottos.map((motto, index) => (
            <div key={index} className="motto-item" style={{ backgroundColor: motto.color }}>
              <span className="motto-icon">{motto.icon}</span>
              <h3>{motto.text}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                style={{'--card-color': value.bgColor} as React.CSSProperties}
              >
                <div className="icon-wrapper">
                  <div className="icon">{value.icon}</div>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="story-section">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item" style={{ backgroundColor: item.color }}>
                <div className="timeline-icon">{item.icon}</div>
                <div className="timeline-content">
                  <div className="year">{item.year}</div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;