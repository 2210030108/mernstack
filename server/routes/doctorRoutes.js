// routes/doctorRoutes.js
const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');
const upload = require('../middleware/uploadMiddleware');

// POST request to create a new doctor
router.post('/', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'license', maxCount: 1 }]), doctorController.createDoctor);

module.exports = router;
