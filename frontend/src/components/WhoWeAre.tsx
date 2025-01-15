import React from 'react';
import { FaCar, FaAward, FaHandshake, FaClock, FaStar, FaCarSide, FaUserTie, FaShieldAlt } from 'react-icons/fa';
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
      icon: <FaStar />
    },
    {
      text: "Luxury at Your Command",
      icon: <FaCar />
    },
    {
      text: "Your Journey, Our Passion",
      icon: <FaHandshake />
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

      <div className="mottos-section">
        <div className="container">
          <div className="mottos-carousel">
            {mottos.map((motto, index) => (
              <div key={index} className="motto">
                <div className="motto-icon">{motto.icon}</div>
                <h2>{motto.text}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="story-section">
        <div className="container">
          <div className="story-content">
            <h2>Our Story</h2>
            <div className="story-grid">
              <div className="story-text">
                <p>
                  Founded in 2010, Safari has grown from a small local rental service to 
                  a premier luxury car rental provider. Our journey has been driven by a 
                  singular focus: delivering exceptional experiences through premium vehicles 
                  and outstanding service.
                </p>
                <p>
                  Today, we proudly serve thousands of satisfied customers, from business 
                  executives to luxury enthusiasts, all seeking the perfect blend of 
                  sophistication and performance in their travel experiences.
                </p>
              </div>
              <div className="story-image">
                <img 
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&h=600" 
                  alt="Luxury car showroom"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;