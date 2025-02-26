import React, {useState} from 'react';
import axios from 'axios';
import apiClient from '../../api/apiClient';
import "../../styles/add-place.css";

const AddPlace: React.FC = () => {

    const[name, setName] = useState("");
    const[image, setImage] = useState<File | null>(null);
    const[message, setMessage] = useState("");
    const[error, setError] = useState("");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append("name", name);
        if (image) {
          formData.append("image", image);
        }
    
        try {
          const response = await axios.post(
            `${apiClient}/places/add/new-place`, // Update with your backend URL if different
            formData,
            {
              headers: { "Content-Type": "multipart/form-data" },
            }
          );
          setMessage("Place added successfully!"); // Success message
          setError(""); // Clear error message
          resetForm();
        } catch (err) {
          setError("Error adding place. Please try again.");
          setMessage(""); // Clear success message
          console.error(err);
        }
      };

      const resetForm = () => {
        setName("");
        setImage(null);
      };

  return (
    <div className="add-place-container">
      <h2 className="add-place-header">Add Place</h2>
      <form onSubmit={handleSubmit} className="add-car-form">
        <div className="form-field">
          <label htmlFor="name" className="label">Place Name</label>
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
          <label htmlFor="image" className="label">Place Image</label>
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

        {/* Error Message */}
        {error && <p className="error-message">{error}</p>}

        {/* Success Message */}
        {message && <p className="success-message">{message}</p>}

        <div className="button-container">
          <button
            type="submit"
            className="submit-button"
          >
            Add Place
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPlace;