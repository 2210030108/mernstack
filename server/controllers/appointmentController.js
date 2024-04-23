const  Appointment  = require("../schema/appointmentSchema");


const postAppointment = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    appointment_date,
    department,
    doctor_name,
    hasVisited,
    address,
    patientId, // Received as a string from the frontend
    doctorId // Received as a string from the frontend
  } = req.body;

  try {
    // Create appointment with patientId and doctorId as strings
    const appointment = await Appointment.create({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointment_date,
      department,
      doctor: {
        name: doctor_name
      },
      hasVisited,
      address,
      patientId,
      doctorId
    });

    res.status(200).json({
      success: true,
      appointment,
      message: 'Appointment Sent!',
    });
  } catch (error) {
    next(error);
  }
};


const getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({
      success: true,
      appointments,
    });
  } catch (error) {
    next(error);
  }
};

const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    let appointment = await Appointment.findById(id);
    if (!appointment) {
      throw new Error("Appointment not found!");
    }
    appointment = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "Appointment Status Updated!",
    });
  } catch (error) {
    next(error);
  }
};

const deleteAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      throw new Error("Appointment Not Found!");
    }
    await appointment.deleteOne();
    res.status(200).json({
      success: true,
      message: "Appointment Deleted!",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  postAppointment,
  deleteAppointment,
  updateAppointmentStatus,
  getAllAppointments,
};
