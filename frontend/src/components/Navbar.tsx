import { useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaUser } from "react-icons/fa";
import "../styles/navbar.css";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
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

  const navigateToPage = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-logo" onClick={() => scrollToSection("home")}>
          <span className="logo-text">Vista Tours</span>
        </div>
        <div className="nav-links">
          <div onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </div>
          <div
            onClick={() => navigateToPage("/who-we-are")}
            className={`nav-link ${
              location.pathname === "/who-we-are" ? "active" : ""
            }`}
          >
            Who We Are
          </div>
          <div onClick={() => scrollToSection("cars")} className="nav-link">
            Cars
          </div>
          <div onClick={() => scrollToSection("packages")} className="nav-link">
            Our Packages
          </div>
          <div onClick={() => scrollToSection("contact")} className="nav-link">
            Contact Us
          </div>
        </div>
        {/* <div className="nav-icons">
          <button className="theme-toggle" aria-label="Toggle theme">
            <FaMoon />
          </button>
          {/* <button className="user-profile" aria-label="User profile">
            <FaUser />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
