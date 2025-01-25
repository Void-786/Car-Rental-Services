import React from "react";
import '../styles/admin-car.css';

const Package: React.FC = () => {
  return (
    <div className="packages-container">
      <h1 className="header">Packages Management</h1>
      <div className="button-container">
        <button className="action-button">Add Package</button>
        <button className="action-button">Update Package</button>
        <button className="action-button">Remove Package</button>
      </div>
    </div>
  );
};

export default Package;
