import React, { useState, useEffect } from "react";
import axios from "axios";
import apiClient from "../../api/apiClient";
import "../../styles/admin-package-list.css";

interface ItineraryDay {
  day: number;
  heading: string;
  description: string;
}

interface Package {
  id: number;
  title: string;
  duration: string;
  tour_highlight: string;
  price: string;
  locations: string[];
  itinerary_heading: string;
  itinerary: ItineraryDay[];
}

const PackageList: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showConfirmDelete, setShowConfirmDelete] = useState<boolean>(false);
  const [packageToDelete, setPackageToDelete] = useState<number | null>(null);
  const [showEditForm, setShowEditForm] = useState<boolean>(false);
  const [editPackage, setEditPackage] = useState<Package | null>(null);

  // Fetch all packages
  const fetchPackages = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${apiClient}/place/package/all-packages`);
      console.log("API Response:", response.data); // Debugging
  
      // Transform data if necessary
      const transformedData = response.data.map((pkg) => ({
        ...pkg,
        itinerary: pkg.itinerary || [], // Ensure itinerary is an array
      }));
  
      setPackages(transformedData);
    } catch (err) {
      setError("Error fetching packages. Please try again later.");
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle delete click
  const handleDeleteClick = (packageId: number) => {
    setPackageToDelete(packageId);
    setShowConfirmDelete(true);
  };

  // Confirm delete
  const handleDeleteConfirm = async () => {
    if (packageToDelete) {
      try {
        await axios.delete(`${apiClient}/place/package/remove-package?packageId=${packageToDelete}`);
        alert("Package deleted successfully");
        setPackages((prevPackages) => prevPackages.filter((pkg) => pkg.id !== packageToDelete));
      } catch (err) {
        setError("Error deleting package");
      }
      setShowConfirmDelete(false);
    }
  };

  // Cancel delete
  const handleDeleteCancel = () => {
    setShowConfirmDelete(false);
  };

  // Handle edit click
  const handleEditClick = (pkg: Package) => {
    setEditPackage(pkg);
    setShowEditForm(true);
  };

  // Handle updating package details
  const handleUpdatePackage = async (event: React.FormEvent) => {
    event.preventDefault();
    if (editPackage) {
      try {
        const formData = new FormData();
        formData.append("packageId", String(editPackage.id));
        formData.append("title", editPackage.title);
        formData.append("duration", editPackage.duration);
        formData.append("tour_highlight", editPackage.tour_highlight);
        formData.append("price", editPackage.price);
        formData.append("locations", JSON.stringify(editPackage.locations));
        formData.append("itinerary_heading", editPackage.itinerary_heading);
        formData.append("itinerary", JSON.stringify(editPackage.itinerary));

        await axios.put(`${apiClient}/place/package/update-package`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Package updated successfully");
        setPackages((prevPackages) =>
          prevPackages.map((pkg) => (pkg.id === editPackage.id ? editPackage : pkg))
        );
        setShowEditForm(false);
      } catch (err) {
        setError("Error updating package");
      }
    }
  };

  // Handle changes in itinerary fields
  const handleItineraryChange = (
    index: number,
    field: keyof ItineraryDay,
    value: string
  ) => {
    if (editPackage) {
      const updatedItinerary = [...editPackage.itinerary];
      updatedItinerary[index] = { ...updatedItinerary[index], [field]: value };
      setEditPackage({ ...editPackage, itinerary: updatedItinerary });
    }
  };

  // Add a new day to the itinerary
  const handleAddNewDay = () => {
    if (editPackage) {
      const newDay: ItineraryDay = {
        day: editPackage.itinerary.length + 1,
        heading: "",
        description: "",
      };
      setEditPackage({
        ...editPackage,
        itinerary: [...editPackage.itinerary, newDay],
      });
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  return (
    <div className="package-list-container">
      <h1>Package List</h1>
      {loading && <p>Loading packages...</p>}
      {error && <p className="error">{error}</p>}
      <div className="package-list">
        {packages.length > 0 ? (
          packages.map((pkg) => (
            <div className="package-item" key={pkg.id}>
              <span>{pkg.title}</span>
              <button className="button-edit" onClick={() => handleEditClick(pkg)}>
                Edit
              </button>
              <button className="button-delete" onClick={() => handleDeleteClick(pkg.id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No packages found</p>
        )}
      </div>

      {/* Edit Form */}
      {showEditForm && editPackage && (
        <div className="edit-package-form">
          <h2>Edit Package</h2>
          <form onSubmit={handleUpdatePackage}>
            <div className="form-field">
              <label htmlFor="title">Package Title</label>
              <input
                type="text"
                id="title"
                value={editPackage.title}
                onChange={(e) => setEditPackage({ ...editPackage, title: e.target.value })}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="duration">Duration</label>
              <input
                type="text"
                id="duration"
                value={editPackage.duration}
                onChange={(e) => setEditPackage({ ...editPackage, duration: e.target.value })}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="tour_highlight">Tour Highlight</label>
              <input
                type="text"
                id="tour_highlight"
                value={editPackage.tour_highlight}
                onChange={(e) => setEditPackage({ ...editPackage, tour_highlight: e.target.value })}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                value={editPackage.price}
                onChange={(e) => setEditPackage({ ...editPackage, price: e.target.value })}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="locations">Locations (comma separated)</label>
              <input
                type="text"
                id="locations"
                value={editPackage.locations.join(', ')}
                onChange={(e) => setEditPackage({ ...editPackage, locations: e.target.value.split(',') })}
              />
            </div>
            <div className="form-field">
              <label htmlFor="itinerary_heading">Itinerary Heading</label>
              <input
                type="text"
                id="itinerary_heading"
                value={editPackage.itinerary_heading}
                onChange={(e) => setEditPackage({ ...editPackage, itinerary_heading: e.target.value })}
              />
            </div>

            {/* Itinerary Fields */}
            <div className="itinerary-fields">
              <h3>Itinerary</h3>
              {editPackage.itinerary.map((day, index) => (
                <div key={index} className="itinerary-day">
                  <div className="form-field">
                    <label htmlFor={`day-${index}`}>Day</label>
                    <input
                      type="number"
                      id={`day-${index}`}
                      value={day.day}
                      onChange={(e) => handleItineraryChange(index, "day", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor={`heading-${index}`}>Heading</label>
                    <input
                      type="text"
                      id={`heading-${index}`}
                      value={day.heading}
                      onChange={(e) => handleItineraryChange(index, "heading", e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor={`description-${index}`}>Description</label>
                    <textarea
                      id={`description-${index}`}
                      value={day.description}
                      onChange={(e) => handleItineraryChange(index, "description", e.target.value)}
                      required
                    />
                  </div>
                </div>
              ))}
              <button type="button" onClick={handleAddNewDay} className="add-day-button">
                Add New Day
              </button>
            </div>

            <div className="button-container">
              <button type="submit">Update Package</button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showConfirmDelete && (
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this package?</p>
          <div className="confirm-buttons">
            <button onClick={handleDeleteConfirm} className="confirm-button">
              Yes
            </button>
            <button onClick={handleDeleteCancel} className="cancel-button">
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageList;