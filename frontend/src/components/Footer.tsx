import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Know Travel Explorers</h3>
          <ul>
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/agent">Who We Are</Link></li>
            <li><Link to="/careers">Packages</Link></li>
            <li><Link to="/careers">Cars</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policies & FAQ's</h3>
          <ul>
            <li><a href="/terms"></a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/bookings">Bookings & Refund Policy</a></li>
            <li><a href="/faqs">FAQ's</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Reviews</h3>
          <ul>
            <li><a href="/testimonials">Testimonials</a></li>
            <li><a href="mailto:info@travelexplorer.in">Email ID: info@travelexplorer.in</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Social</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div>
          <Link to="/admin" className="admin-login-btn">Login as Admin</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p> 2024 Travel Explorers.</p>
      </div>
    </footer>
  );
};

export default Footer; 