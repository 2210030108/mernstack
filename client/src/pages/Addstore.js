import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000' 
});

const AddStore = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axiosInstance.get('/employees/empd');
                setEmployees(response.data);
            } catch (error) {
                console.error('Error fetching employees:', error);
                setError('Error fetching employees. Please try again later.');
            }
        };

        fetchEmployees();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const storeData = { name, location, employeeId, totalSale: 0 };
            await axiosInstance.post('/store/stores', storeData);
            setName('');
            setLocation('');
            setEmployeeId('');
            setError(null);
            alert('Store added successfully!');
        } catch (error) {
            console.error('Error adding store:', error);
            setError('Error adding store. Please try again later.');
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add Store</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Location:</label>
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Employee ID:</label>
                    <select value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500">
                        <option value="">Select an Employee</option>
                        {employees.map(employee => (
                            <option key={employee._id} value={employee._id}>{employee._id}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition duration-300">Add Store</button>
            </form>
        </motion.div>
    );
};

export default AddStore;
