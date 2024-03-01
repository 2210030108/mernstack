// SearchLocation.js
import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';


const SearchLocation = () => {
    const [medicineName, setMedicineName] = useState('');
    const [location, setLocation] = useState('');
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/medicines?MedicineName=${medicineName}`);
        const medicine = response.data[0];
        if (medicine) {
          const rackResponse = await axios.get(`http://localhost:3000/racks?MedicineId=${medicine.id}`);
          const rack = rackResponse.data[0];
          if (rack) {
            const locationResponse = await axios.get(`http://localhost:3000/locations?RackId=${rack.id}`);
            const locationData = locationResponse.data[0];
            setLocation(`Rack: ${rack.RackNumber}, Box: ${locationData.BoxNumber}`);
          } else {
            setLocation('Rack not found.');
          }
        } else {
          setLocation('Medicine not found.');
        }
      } catch (error) {
        console.error('Error searching location:', error);
        setLocation('Error searching location. Please try again.');
      }
    };

  return (
    <div className="container mx-auto mt-5">
      <h2 className="text-2xl mb-3">Search Location</h2>
      <label className="block mb-3">
        Medicine Name:
        <input type="text" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} className="block w-full mt-1 p-2 border rounded-md" />
      </label>
      <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
      <p className="mt-3">Location: {location}</p>
    </div>
  );
};

export default SearchLocation;
