import React from 'react';
import { motion } from 'framer-motion';

const ProductsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto p-4"
        >
            {/* Your products page content */}
            <h1 className="text-3xl font-semibold mb-4">Products</h1>
            <p>Manage your products here!</p>
        </motion.div>
    );
};

export default ProductsPage;
