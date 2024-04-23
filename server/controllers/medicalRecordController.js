const MedicalRecord = require("../schema/medicalRecordSchema");

// Create a new medical record
exports.createMedicalRecord = async (req, res) => {
  try {
    const { diagnosis, symptoms, medications, procedures, tests, notes, totalAmount, pendingAmount, status, userId } = req.body;

    // Use userId as needed in your logic
    
    const medicalRecord = new MedicalRecord({
      diagnosis,
      symptoms,
      medications,
      procedures,
      tests,
      notes,
      totalAmount,
      pendingAmount,
      status,
      file: req.file,
      userId, // Include userId in the medical record
    });

    await medicalRecord.save();

    res.status(201).json({ message: "Medical record created successfully", medicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create medical record" });
  }
};


// Get all medical records
exports.getAllMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await MedicalRecord.find();
    res.status(200).json({ medicalRecords });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch medical records" });
  }
};

// Get a single medical record by ID
exports.getMedicalRecordById = async (req, res) => {
  const { id } = req.params;
  try {
    const medicalRecord = await MedicalRecord.findById(id);
    if (!medicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    res.status(200).json({ medicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch medical record" });
  }
};

// Update a medical record by ID
exports.updateMedicalRecordById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedMedicalRecord = await MedicalRecord.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedMedicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    res.status(200).json({ message: "Medical record updated successfully", medicalRecord: updatedMedicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update medical record" });
  }
};

// Delete a medical record by ID
exports.deleteMedicalRecordById = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedMedicalRecord = await MedicalRecord.findByIdAndDelete(id);
    if (!deletedMedicalRecord) {
      return res.status(404).json({ message: "Medical record not found" });
    }
    res.status(200).json({ message: "Medical record deleted successfully", medicalRecord: deletedMedicalRecord });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete medical record" });
  }
};
