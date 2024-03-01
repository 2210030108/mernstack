// models/Doctor.js
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  qualification: { type: String, required: true },
  communicationSkills: { type: String, required: true },
  experience: { type: Number, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  dob: { type: Date, required: true },
  hobbies: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  photo: { type: String, required: true },
  license: { type: String, required: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
