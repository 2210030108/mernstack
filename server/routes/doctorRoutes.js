const express = require('express');
const router = express.Router();
const multer = require('multer');
const doctorController = require('../controllers/doctorController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + '-' + file.originalname);
    }
});

// Multer configuration without file filter
const upload = multer({
    storage: storage
});

// Route for creating a new doctor with file upload
router.post('/doc', upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'license', maxCount: 1 }]), doctorController.createDoctor);
router.get('/doctors', doctorController.getAllDoctors);
router.get('/doctors/:id', doctorController.getDoctorById);
router.put('/update/:id', doctorController.updateDoctor);
router.delete('/delete/:id', doctorController.deleteDoctor);

// Route for getting doctors by status
router.get('/doctors/status/:status', doctorController.getDoctorsByStatus);

module.exports = router;
