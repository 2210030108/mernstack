// routes/storeRoutes.js
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.post('/stores', storeController.createStore);
router.get('/data', storeController.getAllStores);
module.exports = router;
