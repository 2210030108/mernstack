/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-eval */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, TextField, Typography, Button, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import logo from '../Designer.png'; 
import './Emhome.css'; 

const Emhome = () => {
  const [medicines, setMedicines] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [calcDisplay, setCalcDisplay] = useState('0');
  const [searchTerm, setSearchTerm] = useState('');

  
const fetchMedicines = async () => {
  try {
    const response = await axios.get('http://localhost:3000/medicines');
    const filteredMedicines = response.data.filter(medicine =>
      medicine.MedicineName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMedicines(filteredMedicines);
  } catch (error) {
    console.error('Error fetching medicines:', error);
    
  }
};
useEffect(() => {
  fetchMedicines();
}, [searchTerm]);

  
  const addToCart = (medicine) => {
    const updatedCart = [...cart, { ...medicine, quantity }];
    setCart(updatedCart);
    
    setCalcDisplay((parseFloat(calcDisplay) + parseFloat(medicine.PricePerUnit * quantity)).toFixed(2));
  };

  
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    const removedItem = updatedCart.splice(index, 1)[0];
    
    setCalcDisplay((parseFloat(calcDisplay) - parseFloat(removedItem.PricePerUnit * removedItem.quantity)).toFixed(2));
    setCart(updatedCart);
  };

  
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  
  const handleMedicineSelect = (medicine) => {
    setSelectedMedicine(medicine);
  };

 
  const handleCalcButtonClick = (value) => {
    if (calcDisplay === '0' && value !== '.') {
      setCalcDisplay(value);
    } else {
      setCalcDisplay(calcDisplay + value);
    }
  };

  
  const evaluateExpression = () => {
    try {
      const result = eval(calcDisplay);
      setCalcDisplay(result.toString());
    } catch (error) {
      setCalcDisplay('Error');
    }
  };

  
  const clearCalcDisplay = () => {
    setCalcDisplay('0');
  };

   
   const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

 
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.PricePerUnit * item.quantity), 0).toFixed(2);
  };

  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="page">
      <div className="hospital-info">
        <img src={logo} alt="Hospital Logo" className="hospital-logo" />
        <Typography variant="h6" align="center">Hospital Name</Typography>
        {cart.map((item, index) => (
          <Typography key={index}>
            {item.MedicineName} - ${item.PricePerUnit * item.quantity} ({item.quantity} x ${item.PricePerUnit})
          </Typography>
        ))}
        <Typography variant="h6" align="center">Total: ${calculateTotal()}</Typography>
        <Typography variant="body2" align="center">Hospital Address</Typography>
      </div>
      <Grid container spacing={2} className="content">
        <Grid item xs={6}>
          <TextField label="Search" fullWidth value={searchTerm} onChange={handleSearchTermChange} />
          <Button variant="contained" color="primary" onClick={fetchMedicines}>Search</Button>
          <div className="medicine-list">
            {/* Display medicines */}
            {medicines.map((medicine, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }} onClick={() => handleMedicineSelect(medicine)}>
                <Card className="medicine-card">
                  <CardContent>
                    <Typography variant="body1" align="center">{medicine.MedicineName}</Typography>
                    <Typography variant="body2" align="center">Price: ${medicine.PricePerUnit}</Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5">Cart</Typography>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <Typography>{item.MedicineName} - ${item.PricePerUnit * item.quantity} ({item.quantity} x ${item.PricePerUnit})</Typography>
              <Button onClick={() => removeFromCart(index)}>Remove</Button>
            </div>
          ))}
          <div className="quantity-selector">
            <Button onClick={() => handleQuantityChange(quantity - 1)}>-</Button>
            <TextField type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
            <Button onClick={() => handleQuantityChange(quantity + 1)}>+</Button>
            <Button onClick={() => addToCart(selectedMedicine)}>Add to Cart</Button>
          </div>
          <div className="calculator">
            <TextField
              variant="outlined"
              fullWidth
              value={calcDisplay}
              InputProps={{
                readOnly: true,
              }}
            />
            <Grid container spacing={1}>
              {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 0, '.', '/', '='].map((value, index) => (
                <Grid item xs={3} key={index}>
                  <Button onClick={() => handleCalcButtonClick(value)}>{value}</Button>
                </Grid>
              ))}
            </Grid>
            <Button variant="contained" color="primary" onClick={evaluateExpression} className="calc-btn">=</Button>
            <Button variant="contained" color="secondary" onClick={clearCalcDisplay} className="calc-btn">C</Button>
            <Button variant="contained" onClick={handlePrint} className="calc-btn">Print</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Emhome;
