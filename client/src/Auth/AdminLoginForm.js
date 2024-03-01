import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000' 
  });
const AdminLoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/admins/login', formData);
            console.log(localStorage.setItem('token', response.data.token));
            window.location.replace("/dashboard");
        } catch (error) {
            console.error('Error logging in admin:', error); // Handle error
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg"
        >
            <h2 className="text-center text-2xl font-bold">Admin Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="password" className="text-sm font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
                >
                    Login
                </button>
            </form>
        </motion.div>
    );
};

export default AdminLoginForm;
