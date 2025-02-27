import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/admin-place.css";

const Place: React.FC = () => {
  const navigate = useNavigate();

  // const [places, setPlaces] = useState<Place[]>([]);
  // const [error, setError] = useState<string | null>(null);
  // const [loading, setLoading] = useState<boolean>(true);

  // const fetchPlaces = async () => {
  //   try {
  //     setLoading(true);
  //     setError(null);
  //     const response = await axios.get(`${apiClient}/places/all-places`);
  //     setPlaces(response.data);
  //   } catch (err) {
  //     setError("Error fetching places. Please try again later.");
  //     setPlaces([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchPlaces();
  // }, []);

  // const handlePlaceClick = (id: string) => {
  //   navigate(`/admin/places/${id}`);
  // };

  return (
    <div className="packages-container">
      <h1 className="header">Packages Management</h1>
      <div className="button-container">
        <button onClick={() => navigate("/admin/places/add-place")} className="action-button">Add Place</button>
        <button onClick={() => navigate("/admin/places/update-place")} className="action-button">Update Place</button>

        
        <button onClick={() => navigate("/admin/places/packages/add-package")} className="action-button">Add Package</button>
        <button onClick={() => navigate("/admin/places/packages/update-package")} className="action-button">Update Package</button>

        {/* <div className="places-container">
          <h1>Places List</h1>
          {loading && <p>Loading places...</p>}
          {error && <p className="error">{error}</p>}
          <div className="places-list">
            {places.length > 0 ? (
              places.map((place) => (
                <div className="place-item" key={place.id} onClick={() => handlePlaceClick(place.id)}>
                  <span>{place.name}</span>
                </div>
              ))
            ) : (
              <p>No places found</p>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Place;