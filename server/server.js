// server.js
const express = require('express');
const connectDB = require('./db');
const medicineRoutes = require('./routes/medicineRoutes');
const errorHandler = require('./middleware/errorHandler');
const doctorRoutes = require('./routes/doctorRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const storeRoutes =require('./routes/storeRoutes');
const rackRoutes = require('./routes/rackRoutes');
const locationRoutes = require('./routes/locationRoutes')
const billRoutes = require('./routes/billRoutes');

const cors = require('cors'); // Import cors middleware

// Initialize Express app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/medicines', medicineRoutes);
app.use('/doctor', doctorRoutes);
app.use('/employees', employeeRoutes);
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/store',storeRoutes);
app.use('/api/racks', rackRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/bills', billRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
