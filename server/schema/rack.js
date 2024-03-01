const mongoose = require('mongoose');

const rackSchema = new mongoose.Schema({
  rackNumber: {
    type: String,
    required: true
  },
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  boxNumbers: [{
    type: String,
    required: true
  }],
  // Add other fields as needed
});

module.exports = mongoose.model('Rack', rackSchema);
