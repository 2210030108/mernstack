const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  date: {
    type: Date,
    default: Date.now,
  },
  diagnosis: {
    type: String,
  },
  symptoms: {
    type: [String],
  },
  medications: 
    {
      type: String,
    },
  
  procedures: 
    {
      type: String,
    },
  
  tests: 
    {
      type: String,
    },
  
  notes: {
    type: String,
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  pendingAmount: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  file: {
    type: mongoose.Schema.Types.Mixed, // Mixed type to store any type of file data
  },
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
