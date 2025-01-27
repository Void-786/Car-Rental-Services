import React, { useState } from "react";
import axios from "axios";
import { apiClient } from "../api/apiClient";
import "../styles/delete-car.css"; // Ensure proper styling

interface DeleteCarProps {
  carId: string;
  onDeleteSuccess: () => void;
  onCancel: () => void;
}

const DeleteCar: React.FC<DeleteCarProps> = ({ carId, onDeleteSuccess, onCancel }) => {
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Confirm delete and remove the car
  const handleDelete = async () => {
    try {
      await axios.delete(`${apiClient}/cars/delete/delete-car?carId=${carId}`);
      onDeleteSuccess(); // Notify CarsList to refresh the list
      alert("Car deleted successfully");
    } catch (err) {
      setError("Error deleting car");
    } finally {
      setShowConfirmDelete(false);
    }
  };

  // Cancel delete
  const cancelDelete = () => {
    setShowConfirmDelete(false);
    onCancel(); // Close the modal in the CarsList or parent component
  };

  return (
    <div className="delete-confirmation">
      {error && <p className="error">{error}</p>}
      {showConfirmDelete ? (
        <>
          <p>Are you sure you want to delete this car?</p>
          <div className="confirm-buttons">
            <button onClick={handleDelete} className="confirm-button">
              Yes
            </button>
            <button onClick={cancelDelete} className="cancel-button">
              No
            </button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default DeleteCar;
