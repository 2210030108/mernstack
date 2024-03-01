const express = require('express');
const router = express.Router();
const billController = require('../controllers/billController');

// Get all bills
router.get('/', billController.getAllBills);

// Create a new bill
router.post('/', billController.createBill);

// Add other bill routes as needed

module.exports = router;
