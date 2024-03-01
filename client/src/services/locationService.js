import axios from 'axios';

const API_URL = 'http://localhost:3000';

const LocationService = {
  getAllLocations: async () => {
    const response = await axios.get(`${API_URL}/api/locations`);
    return response.data;
  },
  getLocationById: async (id) => {
    const response = await axios.get(`${API_URL}/api/locations/${id}`);
    return response.data;
  },
  addLocation: async (locationData) => {
    const response = await axios.post(`${API_URL}/api/locations`, locationData);
    return response.data;
  },
  updateLocation: async (id, updatedLocationData) => {
    const response = await axios.put(`${API_URL}/api/locations/${id}`, updatedLocationData);
    return response.data;
  },
  deleteLocation: async (id) => {
    const response = await axios.delete(`${API_URL}/api/locations/${id}`);
    return response.data;
  }
};

export default LocationService;
