import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-4 text-white h-screen w-48 flex-shrink-0"
        >
            {/* Your sidebar content */}
            <ul className="space-y-2">
                <li>
                    <a href="/" className="block hover:text-gray-300">Dashboard</a>
                </li>
                <li>
                    <a href="/" className="block hover:text-gray-300">Users</a>
                </li>
                <li>
                    <Link to="/admin/ProductsPage">Productpage:</Link>
                </li>
                <li>
                    <Link to="/empreg">Orders</Link>
                </li>
                <li>
                    <a href="/" className="block hover:text-gray-300">Settings</a>
                </li>
                
            </ul>
        </motion.div>
    );
};

export default Sidebar;
