const express = require('express');
const router = express.Router();

const messageController = require("../controllers/messageController");


router.post("/send", messageController.sendMessage);
router.get("/getall", messageController.getAllMessages);

module.exports = router;
