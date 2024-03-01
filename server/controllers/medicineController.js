// controllers/medicineController.js
const Medicine = require('../schema/medicine');

exports.getAllMedicines = async (req, res, next) => {
    try {
        const medicines = await Medicine.find();
        res.json(medicines);
    } catch (err) {
        next(err);
    }
};
