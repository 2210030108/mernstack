import React, { useState, useEffect } from 'react';
import billService from '../services/billService';

const BillList = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    loadBills();
  }, []);

  const loadBills = async () => {
    try {
      const response = await billService.getAllBills();
      setBills(response.data);
    } catch (error) {
      console.error('Error fetching bills:', error);
    }
  };

  if (!bills || !bills.length) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Bill List</h2>
      <ul>
        {bills.map(bill => (
          <li key={bill._id}>{bill.customerInfo}</li>
        ))}
      </ul>
    </div>
  );
};

export default BillList;
