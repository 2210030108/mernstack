const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Get all locations
router.get('/', locationController.getAllLocations);

// Create a new location
router.post('/', locationController.createLocation);

// Get a single location by ID
router.get('/:id', locationController.getLocationById);

// Update a location
router.put('/:id', locationController.updateLocation);

// Delete a location
router.delete('/:id', locationController.deleteLocation);

module.exports = router;
