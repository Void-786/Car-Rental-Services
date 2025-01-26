import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateCar: React.FC = () => {
  const { carId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [type, setType] = useState('');
  const [seats, setSeats] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (carId) {
      axios.get(`/cars/get-car?carId=${carId}`).then((response) => {
        const car = response.data;
        setName(car.name);
        setType(car.type);
        setSeats(car.seats);
      }).catch(() => setError('Car not found'));
    }
  }, [carId]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!image) {
      setError('Image is required');
      return;
    }

    const formData = new FormData();
    formData.append('carId', carId || '');
    formData.append('name', name);
    formData.append('image', image);
    formData.append('type', type);
    formData.append('seats', String(seats));

    try {
      const response = await axios.put('/cars/update-car', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert(response.data);
      navigate('/admin/cars');
    } catch (error) {
      setError('Error updating car');
    }
  };

  return (
    <div>
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
          required
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
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UpdateCar;
