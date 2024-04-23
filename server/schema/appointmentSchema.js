const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  nic: {
    type: String,
  },
  dob: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: Date,
  },
  department: {
    type: String,
  },
  doctor: {
    type: {
      name: String // Define a nested object structure for the doctor field
    }
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
