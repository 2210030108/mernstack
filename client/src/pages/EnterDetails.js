// EnterDetails.js
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const EnterDetails = () => {
  const [medicineName, setMedicineName] = useState('');
  const [rackNumber, setRackNumber] = useState('');
  const [boxNumber, setBoxNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/enter-details', {
        medicineName,
        rackNumber,
        boxNumber
      });
      alert('Details saved successfully!');
      setMedicineName('');
      setRackNumber('');
      setBoxNumber('');
    } catch (error) {
      console.error('Error saving details:', error);
      alert('Failed to save details. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl mb-3">Enter Details</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-3">
          Medicine Name:
          <input type="text" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} className="block w-full mt-1 p-2 border rounded-md" />
        </label>
        <label className="block mb-3">
          Rack Number:
          <input type="text" value={rackNumber} onChange={(e) => setRackNumber(e.target.value)} className="block w-full mt-1 p-2 border rounded-md" />
        </label>
        <label className="block mb-3">
          Box Number:
          <input type="text" value={boxNumber} onChange={(e) => setBoxNumber(e.target.value)} className="block w-full mt-1 p-2 border rounded-md" />
        </label>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Save Details</button>
      </form>
    </div>
  );
};

export default EnterDetails;
