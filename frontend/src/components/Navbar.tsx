import { Link } from 'react-router-dom';
import { FaMoon, FaUser } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          <span className="logo-text">Safari</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/who-we-are" className="nav-link">Who we are</Link>
          <Link to="/cars" className="nav-link">Cars</Link>
          <Link to="/packages" className="nav-link">Our Packages</Link>
          <Link to="/contact" className="nav-link">Contact Us</Link>
        </div>
        <div className="nav-icons">
          <button className="theme-toggle" aria-label="Toggle theme">
            <FaMoon />
          </button>
          <button className="user-profile" aria-label="User profile">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 