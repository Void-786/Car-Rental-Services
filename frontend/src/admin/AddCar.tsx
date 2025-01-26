import React, { useState } from 'react';
import axios from 'axios';
import '../styles/add-car.css'
import { apiClient } from '../api/apiClient';

const AddCar: React.FC = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null)
  const [type, setType] = useState("");
  const [seats, setSeats] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("type", type);
    formData.append("seats", seats);

    try {
      const response = await axios.post(
        `${apiClient}/cars/add/new-car`, // Update with your backend URL if different
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage(response.data); // Display success message
      resetForm();
    } catch (err) {
      setError("Error adding car. Please try again.");// Clear success message
      console.error(err);
    }
  };

  const resetForm = () => {
    setName("");
    setImage(null);
    setType("");
    setSeats();
  };

  return (
    <div className="create-car-container">
      <h2 className="create-car-header">Add Car</h2>
      <form onSubmit={handleSubmit} className="create-car-form">
        <div className="form-field">
          <label htmlFor="name" className="label">Car Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter car name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="form-field">
          <label htmlFor="image" className="label">Car Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setImage(e.target.files[0]);
              }
            }}
            required
            className="input-field"
          />
        </div>

        <div className="form-field">
          <label htmlFor="type" className="label">Car Type</label>
          <input
            type="text"
            id="type"
            placeholder="Enter car type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="form-field">
          <label htmlFor="seats" className="label">Seats</label>
          <input
            type="number"
            id="seats"
            placeholder="Enter number of seats"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            required
            className="input-field"
          />
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="button-container">
          <button
            type="submit"
            className="submit-button"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
