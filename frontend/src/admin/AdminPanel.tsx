import React from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../styles/admin-panel.css";

const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Conditionally render the buttons if the current location is not '/admin'
  const showButtons = location.pathname === "/admin";

  return (
    <div className="container">
      <h1 className="header">Admin Panel</h1>
      {showButtons && (
        <div className="button-container">
          <button onClick={() => navigate("/admin/cars")} className="button">
            Cars
          </button>
          <button onClick={() => navigate("/admin/packages")} className="button">
            Packages
          </button>
        </div>
      )}

      {/* Render nested route content */}
      <div className="content-container">
        <Outlet /> {/* Nested routes will render here */}
      </div>
    </div>
  );
};

export default AdminPanel;
