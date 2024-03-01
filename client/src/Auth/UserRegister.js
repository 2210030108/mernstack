import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000' // Update with your backend URL
});

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/users/register', formData);
      console.log('User registered successfully');
      setFormData({
        username: '',
        email: '',
        password: ''
      }); 
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-96 bg-white shadow-md rounded-md p-6 mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">Register</button>
      </form>
    </motion.div>
  );
};

export default UserRegistration;
