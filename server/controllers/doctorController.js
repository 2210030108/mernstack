const Doctor = require('../schema/Doctor');
const upload = require('../util/uploads');

// Create a new doctor
exports.createDoctor = async (req, res) => {
    try {
        if (!req.files || !req.files['photo'] || !req.files['license']) {
            return res.status(400).json({ success: false, error: "Both photo and license images are required" });
        }

        const { photo, license, ...doctorData } = req.body;
        const doctor = new Doctor({
            ...doctorData,
            photo: req.files['photo'][0].filename, // Assuming 'photo' is an array of files
            license: req.files['license'][0].filename // Assuming 'license' is an array of files
        });
        await doctor.save();
        res.status(201).json({ success: true, data: doctor });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

exports.uploadDoctorImages = upload.fields([{ name: 'photo', maxCount: 1 }, { name: 'license', maxCount: 1 }]);

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json({ success: true, data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get doctors by status
exports.getDoctorsByStatus = async (req, res) => {
    try {
        const { status } = req.params;
        if (!['pending', 'accepted', 'rejected'].includes(status)) {
            return res.status(400).json({ success: false, error: 'Invalid status' });
        }

        const doctors = await Doctor.find({ status });
        res.status(200).json({ success: true, data: doctors });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get a single doctor by ID
exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, error: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Update a doctor by ID
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!doctor) {
            return res.status(404).json({ success: false, error: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: doctor });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// Delete a doctor by ID
exports.deleteDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndDelete(req.params.id);
        if (!doctor) {
            return res.status(404).json({ success: false, error: 'Doctor not found' });
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
