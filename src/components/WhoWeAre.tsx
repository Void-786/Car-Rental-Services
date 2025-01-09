import { FaAward, FaHandshake, FaCar, FaUserTie } from 'react-icons/fa';
import '../styles/whoWeAre.css';

const WhoWeAre = () => {
  return (
    <section className="who-we-are">
      <div className="who-we-are-content">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-description">
          We are a premium car rental service committed to delivering exceptional travel experiences. 
          With our diverse fleet of luxury vehicles and dedicated customer service, we transform ordinary 
          journeys into extraordinary adventures.
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <FaAward className="feature-icon" />
            <h3>Best Price</h3>
            <p>Provides best price that fits your budget & requirements</p>
          </div>
          <div className="feature-card">
            <FaCar className="feature-icon" />
            <h3>Unmatched Destinations</h3>
            <p>Design truly remarkable travel experiences with selected destinations</p>
          </div>
          <div className="feature-card">
            <FaHandshake className="feature-icon" />
            <h3>Easy Installments</h3>
            <p>Easy installments, partial payments & flexible options</p>
          </div>
          <div className="feature-card">
            <FaUserTie className="feature-icon" />
            <h3>24/7 Support</h3>
            <p>Complete peace of mind during your vacation with 24/7 assistance</p>
          </div>
        </div>

        <div className="motto-section">
          <h2 className="section-title">Our Motto</h2>
          <div className="motto-content">
            <p>"Driving Excellence, Delivering Dreams"</p>
            <span className="motto-description">
              We believe in turning every journey into a memorable experience, 
              combining luxury with reliability to exceed your expectations.
            </span>
          </div>
        </div>

        <div className="goals-section">
          <h2 className="section-title">Our Goals</h2>
          <div className="goals-grid">
            <div className="goal-card">
              <h3>Customer Satisfaction</h3>
              <p>Deliver exceptional service that creates lasting memories and loyal customers.</p>
            </div>
            <div className="goal-card">
              <h3>Quality Assurance</h3>
              <p>Maintain a premium fleet of vehicles that meets the highest standards of luxury and safety.</p>
            </div>
            <div className="goal-card">
              <h3>Innovation</h3>
              <p>Continuously improve our services with cutting-edge technology and customer-focused solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre; 