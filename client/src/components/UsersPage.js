import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import Chart from 'chart.js/auto';
import { motion } from 'framer-motion';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000' // Update with your backend URL
});

const UsersPage = ({ chardata }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axiosInstance.get('/users/userdata')
            .then(response => {
                setUsers(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setError('Error fetching users. Please try again later.');
                setLoading(false);
            });
    }, []);

    // Check for loading and error states
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Prepare data for the bar graph
    const userData = users.reduce((acc, user) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
    }, {});

    const barData = {
        labels: Object.keys(userData),
        datasets: [
            {
                label: 'User Count',
                data: Object.values(userData),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4CAF50',
                    '#E91E63',
                    '#9C27B0',
                    '#FF9800',
                    '#3F51B5'
                ],
                borderColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4CAF50',
                    '#E91E63',
                    '#9C27B0',
                    '#FF9800',
                    '#3F51B5'
                ],
                borderWidth: 1
            }
        ]
    };

    // Prepare data for the line graph
    const lineData = {
        labels: Object.keys(userData),
        datasets: [
            {
                label: 'User Count',
                data: Object.values(userData),
                fill: false,
                borderColor: '#FF6384',
                tension: 0.1
            }
        ]
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-4">Users Page</h1>
            <div className="flex">
                <div className="w-1/2 mr-4">
                    <h2 className="text-xl font-bold mb-2">User Roles Distribution (Bar Graph)</h2>
                    <Bar data={barData} />
                </div>
                <div className="w-1/2">
                    <h2 className="text-xl font-bold mb-2">User Roles Distribution (Line Graph)</h2>
                    <Line data={lineData} />
                </div>
            </div>
            <div className="mt-8">
    <h2 className="text-xl font-bold mb-2">User List</h2>
    <div className="overflow-x-auto">
        <motion.table
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-w-full bg-white divide-y divide-gray-200 shadow overflow-hidden sm:rounded-lg"
        >
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Username
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Password
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Role
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {users.map(user => (
                    <tr key={user._id} className="bg-white">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.username}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.password}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{user.role}</div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </motion.table>
    </div>
</div>
        </div>
    );
};

export default UsersPage;
