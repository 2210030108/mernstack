const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'employees',
        required: true
    },
    totalSale: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Store', storeSchema);
