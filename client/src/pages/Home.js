import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MedicineList from '../components/MedicineList';
import RackList from '../components/RackList';
import LocationList from '../components/LocationList';
import BillList from '../components/BillList';
import MedicineService from '../services/medicineService';
import RackService from '../services/rackService';
import LocationService from '../services/locationService';
import BillService from '../services/billService';

function Home() {
  const [medicines, setMedicines] = useState([]);
  const [racks, setRacks] = useState([]);
  const [locations, setLocations] = useState([]);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetchMedicines();
    fetchRacks();
    fetchLocations();
    fetchBills();
  }, []);

  const fetchMedicines = async () => {
    try {
      const data = await MedicineService.getAllMedicines();
      setMedicines(data);
    } catch (error) {
      console.error('Error fetching medicines:', error);
    }
  };

  const fetchRacks = async () => {
    try {
      const data = await RackService.getAllRacks();
      setRacks(data);
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };

  const fetchLocations = async () => {
    try {
      const data = await LocationService.getAllLocations();
      setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchBills = async () => {
    try {
      const data = await BillService.getAllBills();
      setBills(data);
    } catch (error) {
      console.error('Error fetching bills:', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl font-semibold mb-4">Home Page</h2>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Medicines</h3>
          <MedicineList medicines={medicines} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Racks</h3>
          <RackList racks={racks} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Locations</h3>
          <LocationList locations={locations} />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">Bills</h3>
          <BillList bills={bills} />
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
