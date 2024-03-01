import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion'; // Import motion component from Framer Motion

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000' // Update with your backend URL
  });
const AdminRegistrationForm = () => {
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
            const response = await axiosInstance.post('/admins/register', formData);
            console.log(response.data); // Handle success response
        } catch (error) {
            console.error('Error registering admin:', error); // Handle error
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg"
        >
            <h2 className="text-3xl font-bold text-gray-900">Admin Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                <button type="submit" className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
            </form>
        </motion.div>
    );
};

export default AdminRegistrationForm;
