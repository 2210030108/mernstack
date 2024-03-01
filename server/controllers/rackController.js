const Rack = require('../schema/rack');

// Get all racks
exports.getAllRacks = async (req, res) => {
  try {
    const racks = await Rack.find();
    res.json(racks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new rack
exports.createRack = async (req, res) => {
  const rack = new Rack({
    rackNumber: req.body.rackNumber,
    location: req.body.location,
    boxNumbers: req.body.boxNumbers,
    // Add other fields as needed
  });

  try {
    const newRack = await rack.save();
    res.status(201).json(newRack);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other rack controller functions as needed
