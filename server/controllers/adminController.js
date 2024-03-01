// controllers/adminController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const Admin = require('../schema/Admin');

const saltRounds = 10; // Number of salt rounds for bcrypt
const secretKey = crypto.randomBytes(32).toString('hex');

// Function to generate JWT token
const generateToken = (adminId) => {
    return jwt.sign({ adminId }, secretKey, { expiresIn: '1h' });
};

const registerAdmin = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new admin with hashed password
        const newAdmin = new Admin({ username, email, password: hashedPassword });
        await newAdmin.save();

        // Generate JWT token
        const token = generateToken(newAdmin._id);

        res.status(201).json({ message: 'Admin registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: 'Failed to register admin', error: error.message });
    }
};

const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find admin by email
        const admin = await Admin.findOne({ email });

        // If admin not found, return appropriate response
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Compare hashed password with input password
        const isPasswordMatch = await bcrypt.compare(password, admin.password);

        // If passwords don't match, return appropriate response
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        // Generate JWT token
        const token = generateToken(admin._id);

        // If everything is okay, return the admin and token
        res.json({ admin, token });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving admin data', error: error.message });
    }
};

module.exports = {
    registerAdmin,
    loginAdmin
};
