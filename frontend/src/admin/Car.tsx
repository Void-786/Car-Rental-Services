import React from "react";
import '../styles/admin-package.css';

const Car: React.FC = () => {
  return (
    <div className="cars-container">
      <h1 className="header">Cars Management</h1>
      <div className="button-container">
        <button className="action-button">Add Car</button>
        <button className="action-button">Update Car</button>
        <button className="action-button">Remove Car</button>
      </div>
    </div>
  );
};

export default Car;
