const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  employeeID: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'manager', 'employee'],
    default: 'employee'
  },
  salary: {
    type: Number,
    required: true
  },
  hiredDate: {
    type: Date,
    default: Date.now
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
