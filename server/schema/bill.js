const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  medicines: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Medicine',
    required: true
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  customerInfo: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true,
    default: Date.now
  }
  // You can add other fields as needed
});

module.exports = mongoose.model('Bill', billSchema);
