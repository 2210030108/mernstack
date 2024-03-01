import React, { useState, useEffect } from 'react';
import locationService from '../services/locationService';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    try {
      const response = await locationService.getAllLocations();
      setLocations(response.data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  if (!locations || !locations.length) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Location List</h2>
      <ul>
        {locations.map(location => (
          <><li key={location._id}>{location.name}</li><li key={location._id}>{location.address}</li></>
        ))}
      </ul>
    </div>
  );
};

export default LocationList;
