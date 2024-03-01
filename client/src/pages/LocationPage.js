import React from 'react';
import { motion } from 'framer-motion';

function LocationPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-4">Location Page</h2>
        {/* Implement your location-related components here */}
      </div>
    </motion.div>
  );
}

export default LocationPage;
