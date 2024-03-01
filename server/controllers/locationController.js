const Location = require('../schema/location');

// Get all locations
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new location
exports.createLocation = async (req, res) => {
  const { name, address } = req.body;

  const location = new Location({
    name,
    address,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a single location by ID
exports.getLocationById = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a location
exports.updateLocation = async (req, res) => {
  const { name, address } = req.body;

  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    location.name = name;
    location.address = address;
    await location.save();
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a location
exports.deleteLocation = async (req, res) => {
  try {
    const location = await Location.findById(req.params.id);
    if (!location) {
      return res.status(404).json({ message: 'Location not found' });
    }
    await location.remove();
    res.json({ message: 'Location deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
