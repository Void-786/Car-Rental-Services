import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Know Travel Explorers</h3>
          <ul>
            <li>
              <a href="#home" onClick={(e) => scrollToSection("home", e)}>
                Home
              </a>
            </li>
            <li>
              <Link to="/who-we-are">Who We Are</Link>
            </li>
            <li>
              <a
                href="#packages"
                onClick={(e) => scrollToSection("packages", e)}
              >
                Packages
              </a>
            </li>
            <li>
              <a href="#cars" onClick={(e) => scrollToSection("cars", e)}>
                Cars
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection("contact", e)}>
                Contact Us
              </a>
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
              <a href="mailto:tvistatour@gmail.com">
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
        <p> © 2024 Safari. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
