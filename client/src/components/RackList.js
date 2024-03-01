// RackList.js
import React, { useState, useEffect } from 'react';
import rackService from '../services/rackService';

const RackList = () => {
  const [racks, setRacks] = useState([]);

  useEffect(() => {
    loadRacks();
  }, []);

  const loadRacks = async () => {
    try {
      const response = await rackService.getAllRacks();
      setRacks(response.data);
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };

  return (
    <div>
      <h2>Rack List</h2>
      <ul>
        {racks && racks.length > 0 && racks.map(rack => (
          <li key={rack._id}>{rack.rackNumber}</li>
        ))}
      </ul>
    </div>
  );
};

export default RackList;
