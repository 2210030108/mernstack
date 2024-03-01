import axios from 'axios';

const API_URL = 'http://localhost:3000';

const BillService = {
  getAllBills: async () => {
    const response = await axios.get(`${API_URL}/api/bills`);
    return response.data;
  },
  getBillById: async (id) => {
    const response = await axios.get(`${API_URL}/api/bills/${id}`);
    return response.data;
  },
  addBill: async (billData) => {
    const response = await axios.post(`${API_URL}/api/bills`, billData);
    return response.data;
  },
  updateBill: async (id, updatedBillData) => {
    const response = await axios.put(`${API_URL}/api/bills/${id}`, updatedBillData);
    return response.data;
  },
  deleteBill: async (id) => {
    const response = await axios.delete(`${API_URL}/api/bills/${id}`);
    return response.data;
  }
};

export default BillService;
