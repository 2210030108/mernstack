const express = require('express');
const router = express.Router();
const rackController = require('../controllers/rackController');

router.get('/', rackController.getAllRacks);
router.post('/', rackController.createRack);


module.exports = router;
