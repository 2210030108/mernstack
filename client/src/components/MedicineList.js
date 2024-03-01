// MedicineList.js
import React, { useState, useEffect } from 'react';
import medicineService from '../services/medicineService';

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    loadMedicines();
  }, []);

  const loadMedicines = async () => {
    try {
      const response = await medicineService.getAllMedicines();
      setMedicines(response.data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  return (
    <div>
      <h2>Medicine List</h2>
      <ul>
        {medicines && medicines.length > 0 && medicines.map(medicine => (
          <li key={medicine._id}>{medicine.MedicineName}</li>
        ))}
      </ul>
    </div>
  );
};

export default MedicineList;
