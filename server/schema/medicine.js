// schema/medicine.js
const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
    MedicineName: String,
    description:String,
    Manufacturer: String,
    DosageForm: String,
    Strength: String,
    PricePerUnit: Number,
    StockQuantity: Number,
    ManufacturedDate: Date, // New field for manufactured date
    ExpireDate: Date // New field for expiry date
});

module.exports = mongoose.model('Medicine', medicineSchema);
