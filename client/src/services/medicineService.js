import axios from 'axios';

const API_URL = 'http://localhost:3000';

const MedicineService = {
  getAllMedicines: async () => {
    const response = await axios.get(`${API_URL}/medicines`);
    return response.data;
  },
  getMedicineById: async (id) => {
    const response = await axios.get(`${API_URL}/medicines/${id}`);
    return response.data;
  },
  addMedicine: async (medicineData) => {
    const response = await axios.post(`${API_URL}/medicines`, medicineData);
    return response.data;
  },
  updateMedicine: async (id, updatedMedicineData) => {
    const response = await axios.put(`${API_URL}/medicines/${id}`, updatedMedicineData);
    return response.data;
  },
  deleteMedicine: async (id) => {
    const response = await axios.delete(`${API_URL}/medicines/${id}`);
    return response.data;
  }
};

export default MedicineService;
