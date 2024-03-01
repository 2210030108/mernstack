const Employee = require('../schema/employee');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const saltRounds = 10; // Number of salt rounds for bcrypt

const registerEmployee = async (req, res, next) => {
  try {

    const employeeID = uuid.v4();


    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const newEmployee = new Employee({
      employeeID,
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
      role: req.body.role,
      salary: req.body.salary,
      hiredDate: req.body.hiredDate,
      password: hashedPassword
    });


    await newEmployee.save();

    res.status(201).json({ success: true, employeeID });
  } catch (err) {
    next(err);
  }
};

const loginEmployee = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find employee by email
    const employee = await Employee.findOne({ email });

    // If employee not found, return appropriate response
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Compare hashed password with input password
    const isPasswordMatch = await bcrypt.compare(password, employee.password);

    // If passwords don't match, return appropriate response
    if (!isPasswordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    // Generate JWT token
    const token = generateToken(employee.employeeID);

    // If everything is okay, return the token
    res.json({ success: true, token });
  } catch (err) {
    next(err);
  }
};
const getEmployees = async (req, res) => {
  try {
      const employees = await Employee.find({}, '_id employeeID name');
      res.status(200).json(employees);
  } catch (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to generate JWT token
const generateToken = (employeeID) => {
  const secretKey = crypto.randomBytes(32).toString('hex'); // Generate a secure random secret key
  return jwt.sign({ employeeID }, secretKey, { expiresIn: '1h' });
};

module.exports = {
  registerEmployee,
  loginEmployee,
  getEmployees
};
