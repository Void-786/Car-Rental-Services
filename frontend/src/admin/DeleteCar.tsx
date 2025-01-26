import React, { useState } from 'react';
import axios from 'axios';

interface DeleteCarProps {
  carId: string;
}

const DeleteCar: React.FC<DeleteCarProps> = ({ carId }) => {
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async () => {
    try {
      await axios.delete(`/cars/delete/delete-car?carId=${carId}`);
      alert('Car deleted successfully');
    } catch (error) {
      setError('Error deleting car');
    }
  };

  return (
    <div>
      <button onClick={handleDelete}>Delete Car</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default DeleteCar;
