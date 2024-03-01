import axios from 'axios';

const API_URL = 'http://localhost:3000';

const RackService = {
  getAllRacks: async () => {
    const response = await axios.get(`${API_URL}/api/racks`);
    return response.data;
  },
  getRackById: async (id) => {
    const response = await axios.get(`${API_URL}/api/racks/${id}`);
    return response.data;
  },
  addRack: async (rackData) => {
    const response = await axios.post(`${API_URL}/api/racks`, rackData);
    return response.data;
  },
  updateRack: async (id, updatedRackData) => {
    const response = await axios.put(`${API_URL}/api/racks/${id}`, updatedRackData);
    return response.data;
  },
  deleteRack: async (id) => {
    const response = await axios.delete(`${API_URL}/api/racks/${id}`);
    return response.data;
  }
};

export default RackService;
