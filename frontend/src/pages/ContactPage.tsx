import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import '../styles/contact.css';
import QueryForm from '../components/QueryForm';
import FeedbackSection from '../components/FeedbackSection';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'luxury-rental',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="contact-page">
      {/* Query Form Section */}
      {/* <div className="form-section">
        <h2 className="main-title">Submit Your <span>Query</span></h2>
        <QueryForm />
      </div> */}

      <FeedbackSection />

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <FaPhoneAlt className="info-icon" />
              <h3>Phone</h3>
              <p>8920046623</p>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <h3>Email</h3>
              <p>info@luxuryrentals.com</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Address</h3>
              <p>123 Luxury Avenue, Beverly Hills, CA 90210</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <select
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="luxury-rental">Luxury Car Rental</option>
                  <option value="chauffeur">Chauffeur Service</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="event">Event Transportation</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      <a href="https://wa.me/+918920046623" className="whatsapp-button">
        <FaWhatsapp /> Chat on WhatsApp
      </a>
    </div>
  );
};

export default ContactPage;