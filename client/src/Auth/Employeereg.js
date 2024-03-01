import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000' // Update with your backend URL
});

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    role: '',
    salary: '',
    hiredDate: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/employees/register', formData);
      
      console.log('Employee registered successfully');
      
    } catch (error) {
     
      console.error('Error registering employee:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-8 rounded-md shadow-md"
    >
      <h2 className="text-2xl mb-4">Employee Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Form fields */}
        <div className="flex flex-col">
          <label className="mb-1">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Role:</label>
          <select name="role" value={formData.role} onChange={handleChange} required className="p-2 border rounded-md">
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Salary:</label>
          <input type="number" name="salary" value={formData.salary} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Hired Date:</label>
          <input type="date" name="hiredDate" value={formData.hiredDate} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <div className="flex flex-col">
          <label className="mb-1">Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="p-2 border rounded-md" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Register
        </button>
      </form>
    </motion.div>
  );
};

export default EmployeeForm;
