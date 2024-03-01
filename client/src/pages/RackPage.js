import React from 'react';
import { motion } from 'framer-motion';

function RackPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-4">Rack Page</h2>
        {/* Implement your rack-related components here */}
      </div>
    </motion.div>
  );
}

export default RackPage;
