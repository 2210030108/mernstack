// medicalRecordRoutes.js
const express = require("express");
const router = express.Router();
const multer = require("multer");

const medicalRecordController = require("../controllers/medicalRecordController");

// Multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./fileupload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + '-' + file.originalname);
}
});
const upload = multer({ storage });

// Routes for medical records
router.post("/create", upload.single("file"), medicalRecordController.createMedicalRecord);
router.get("/", medicalRecordController.getAllMedicalRecords);
router.get("/:id", medicalRecordController.getMedicalRecordById);
router.put("/:id", medicalRecordController.updateMedicalRecordById);
router.delete("/:id", medicalRecordController.deleteMedicalRecordById);

module.exports = router;
