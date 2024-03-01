// src/MedicineList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000' 
});

const MedicineList = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        
        const response = await axiosInstance.get('/medicines');
        setMedicines(response.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
        setError('Error fetching medicines. Please try again later.');
      }
    };

    fetchMedicines();
  }, []);

  const handleSearch = async () => {
    try {
      const response = await axiosInstance.get('/medicines', {
        params: { searchTerm }
      });
      setMedicines(response.data);
    } catch (error) {
      console.error('Error searching medicines:', error);
      setError('Error searching medicines. Please try again later.');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Medicine List</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          className="border border-gray-400 p-2 flex-grow"
          placeholder="Search by medicine name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 ml-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <table className="w-full" border={1}>
        <thead>
          <tr className="bg-gray-200 ">
            <th className="py-2">Medicine Name</th>
            <th className="py-2">Manufacturer</th>
            <th className="py-2">Dosage Form</th>
            <th className="py-2">Strength</th>
            <th className="py-2">Price Per Unit</th>
            <th className="py-2">Stock Quantity</th>
            <th className="py-2">ManufacturedDate</th>
            <th className="py-2">ExpireDate</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map(medicine => (
            <tr key={medicine._id} className="border-b border-gray-200">
              <td className="py-2">{medicine.MedicineName}</td>
              <td className="py-2">{medicine.Manufacturer}</td>
              <td className="py-2">{medicine.DosageForm}</td>
              <td className="py-2">{medicine.Strength}</td>
              <td className="py-2">{medicine.PricePerUnit}</td>
              <td className="py-2">{medicine.StockQuantity}</td>
              <td className="py-2">{medicine.ManufacturedDate}</td>
              <td className="py-2">{medicine.ExpireDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicineList;
