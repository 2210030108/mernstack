// controllers/userController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schema/User');
const crypto = require('crypto');

const saltRounds = 10; // Number of salt rounds for bcrypt
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Generated Secret Key:', secretKey);

// Function to generate JWT token
const generateToken = (userId) => {
  return jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user with hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token
    const token = generateToken(newUser._id);

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Failed to register user', error: error.message });
  }
};

const getUserByEmailAndPassword = async (req, res) => {
  const { email, password } = req.body; // Retrieve email and password from request body
  try {
    // Find user by email
    const user = await User.findOne({ email });
    
    // If user not found, return appropriate response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare hashed password with input password
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    // If passwords don't match, return appropriate response
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // If everything is okay, return the user and token
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user data', error: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    // Fetch all users from the User collection
    const users = await User.find();

    // Send the fetched users as a JSON response
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  registerUser,
  getUserByEmailAndPassword,
  getUsers
};
