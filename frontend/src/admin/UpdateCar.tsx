import React, { useState } from "react";
import axios from "axios";
import '../styles/update-car.css';

interface Car {
  id: string;
  name: string;
  type: string;
  seats: number;
}

interface UpdateCarFormProps {
  car: Car;
  onClose: () => void;
}

const UpdateCar: React.FC<UpdateCarFormProps> = ({ car, onClose }) => {
  const [name, setName] = useState(car.name);
  const [type, setType] = useState(car.type);
  const [seats, setSeats] = useState(car.seats);
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("carId", car.id);
    formData.append("name", name);
    formData.append("type", type);
    formData.append("seats", String(seats));
    if (image) {
      formData.append("image", image);
    }

    try {
      await axios.put(`/cars/update-car`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Car updated successfully!");
      onClose();
    } catch (err) {
      setError("Error updating car");
    }
  };

  return (
    <div className="update-car-form">
      <h2>Update Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
        <input
          type="text"
          placeholder="Car Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Seats"
          value={seats}
          onChange={(e) => setSeats(Number(e.target.value))}
          required
        />
        <button type="submit">Update Car</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UpdateCar;
