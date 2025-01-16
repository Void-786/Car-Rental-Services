import axios from "axios";
import { apiClient } from "./apiClient";

/**
@param {Object} carData
@returns {Promise}
*/

export const addNewCar = async (carData) => {
    const formData = new FormData();

    formData.append('name', carData.name);
    formData.append('type', carData.type);
    formData.append('transmission_type', carData.transmissionType);
    formData.append('price', carData.price);
    formData.append('image', carData.image); // Should be a File object
    formData.append('highlights', JSON.stringify(carData.highlights)); // Convert array to JSON string
    formData.append('specs', JSON.stringify(carData.specs)); // Convert object to JSON string

    try {
        const response = await axios.post(`${apiClient}/add/new-car`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        return response.data;
      } catch (error) {
        console.error('Error adding new car:', error.response || error.message);
        throw error;
    }
};