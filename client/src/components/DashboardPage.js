import React from 'react';
import { motion } from 'framer-motion';

const DashboardPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto p-4"
        >
            {/* Your dashboard page content */}
            <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
            <p>Welcome to the admin dashboard!</p>
        </motion.div>
    );
};

export default DashboardPage;
