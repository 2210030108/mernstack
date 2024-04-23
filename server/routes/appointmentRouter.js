const express = require('express');
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");


router.post("/post",  appointmentController.postAppointment);
router.get("/getall", appointmentController.getAllAppointments);
router.put("/update/:id", appointmentController.updateAppointmentStatus);
router.delete("/delete/:id", appointmentController.deleteAppointment);

module.exports = router;
