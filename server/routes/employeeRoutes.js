const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route for employee registration
router.post('/register', employeeController.registerEmployee);

// Route for employee login (you can add this if needed)
router.post('/login', employeeController.loginEmployee);

router.get('/empd',employeeController.getEmployees);

module.exports = router;

