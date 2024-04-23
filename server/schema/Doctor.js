const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    photo: { type: String, required: true },
    license: { type: String, required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    specialization: { type: String, required: true },
    experienceYears: { type: Number, required: true },
    education: { type: String, required: true },
    qualifications: [{ type: String }],
    consultationFee: { type: Number, required: true },
    availability: {
        days: [{ type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }],
        timings: { type: String } // You can make this more detailed based on your requirements, e.g., an array of objects with start and end times for each day
    },
    languages: [{ type: String }], // Languages known by the doctor
    address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        zip: { type: String }
    },
    reviews: [{
        patientName: { type: String },
        rating: { type: Number, min: 1, max: 5 },
        comment: { type: String }
    }],
    appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment' }] // Assuming there's an Appointment model
});

module.exports = mongoose.model('Doctor', doctorSchema);
