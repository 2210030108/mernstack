// server.js
const express = require('express');
const connectDB = require('./db');
const medicineRoutes = require('./routes/medicineRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const storeRoutes = require('./routes/storeRoutes');
const errorHandler = require('./middleware/errorHandler');
const billRoutes = require('./routes/billRoutes');
const messageRouter = require('./routes/messageRouter');
const appointmentRouter = require('./routes/appointmentRouter');
const cors = require('cors'); // Import cors middleware
const medicalRecordRoutes = require("./routes/medicalRecordRoutes");
// Initialize Express app
const app = express();

const corsOptions = {
  origin: 'http://localhost:3001',
  credentials: true 
};

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Enable CORS with options
app.use(express.static('uploads')); // Serve static files
app.use(express.static('client/src/departments')); // Serve static files
// Routes
app.use('/medicines', medicineRoutes);
app.use('/api/doc', doctorRoutes);
app.use('/employees', employeeRoutes);
app.use('/users', userRoutes);
app.use('/admins', adminRoutes);
app.use('/store', storeRoutes);
app.use('/api/v1/message', messageRouter);
app.use('/api/v1/appointment', appointmentRouter);
app.use('/api/bills', billRoutes);
app.use("/api/medical-records", medicalRecordRoutes);

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
