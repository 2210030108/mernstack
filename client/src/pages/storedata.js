import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { motion } from 'framer-motion';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000' 
});

const StoreDashboard = () => {
    const [stores, setStores] = useState([]);
    const [filteredStores, setFilteredStores] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStores = async () => {
            try {
                const response = await axiosInstance.get('/store/data');
                setStores(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching stores:', error);
                setError('Error fetching stores. Please try again later.');
                setLoading(false);
            }
        };

        fetchStores();
    }, []);

    useEffect(() => {
        const filteredResults = stores.filter(store => store.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredStores(filteredResults);
    }, [searchTerm, stores]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    
const storeGrossEarnings = filteredStores.map(store => {
    
    return {
        name: store.name,
        grossEarnings: store.totalSale
    };
});


    
    const barChartData = {
        labels: storeGrossEarnings.map(store => store.name),
        datasets: [{
            label: 'Gross Earnings',
            data: storeGrossEarnings.map(store => store.grossEarnings),
            backgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    };

    const lineChartData = {
        labels: storeGrossEarnings.map(store => store.name),
        datasets: [{
            label: 'Gross Earnings',
            data: storeGrossEarnings.map(store => store.grossEarnings),
            borderColor: 'rgba(255, 99, 132, 0.6)',
            fill: false
        }]
    };

    const pieChartData = {
        labels: storeGrossEarnings.map(store => store.name),
        datasets: [{
            data: storeGrossEarnings.map(store => store.grossEarnings),
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
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4CAF50',
                '#E91E63',
                '#9C27B0',
                '#FF9800',
                '#3F51B5'
            ]
        }]
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Store Dashboard</h1>
            <input
                type="text"
                placeholder="Search store by name..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="mb-4 px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:border-indigo-500"
            />

            <div className="flex flex-wrap gap-4 mb-8">
                <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-bold mb-2">Bar Chart</h2>
                    <Bar data={barChartData} />
                </div>

                <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-bold mb-2">Line Chart</h2>
                    <Line data={lineChartData} />
                </div>

                <div className="w-full md:w-1/3">
                    <h2 className="text-xl font-bold mb-2">Pie Chart</h2>
                    <Pie data={pieChartData} />
                </div>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-2">Store Details</h2>
                <motion.table
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full border-collapse border border-gray-400"
                >
                    <thead>
                        <tr>
                            <th className="border border-gray-400 px-4 py-2">Name</th>
                            <th className="border border-gray-400 px-4 py-2">Location</th>
                            <th className="border border-gray-400 px-4 py-2">Total Sale</th>
                            {/* Add more table headers as needed */}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStores.map(store => (
                            <tr key={store._id}>
                                <td className="border border-gray-400 px-4 py-2">{store.name}</td>
                                <td className="border border-gray-400 px-4 py-2">{store.location}</td>
                                <td className="border border-gray-400 px-4 py-2">{store.totalSale}</td>
                                {/* Add more table cells as needed */}
                            </tr>
                        ))}
                    </tbody>
                </motion.table>
            </div>
        </div>
    );
};

export default StoreDashboard;
