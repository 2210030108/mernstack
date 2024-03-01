import React from 'react';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto p-4"
        >
            {/* Your not found page content */}
            <h1 className="text-3xl font-semibold mb-4">Page Not Found</h1>
            <p>The page you're looking for does not exist.</p>
        </motion.div>
    );
};

export default NotFoundPage;
