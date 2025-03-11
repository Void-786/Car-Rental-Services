import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Know Travel Explorers</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/who-we-are">Who We Are</Link>
            </li>
            <li>
              <Link to="/packages">Packages</Link>
            </li>
            {/* <li><Link to="/cars">Cars</Link></li> */}
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Policies & FAQ's</h3>
          <ul>
            {/* <li><a href="/terms"></a></li> */}
            {/* <li><a href="/privacy">Privacy Policy</a></li> */}
            <li>
              <Link to="/bookings">Bookings & Refund Policy</Link>
            </li>
            <li>
              <Link to="/faqs">FAQ's</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Customer Reviews</h3>
          <ul>
            <li>
              <a href="/testimonials">Testimonials</a>
            </li>
            <li>
              <a href="mailto:info@travelexplorer.in">
                Email ID: tvistatour@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          {/* <h3>Social</h3>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
            <a href="#" className="social-icon"><FaYoutube /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
          </div> */}
          <Link to="/admin" className="admin-login-btn">
            Login as Admin
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p> © 2024 Safar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
