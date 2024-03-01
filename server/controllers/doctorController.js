const Doctor = require('../schema/Doctor');

exports.createDoctor = (req, res) => {
  console.log(req.files);

  // Check if req.files exists and if it contains photos for both the doctor and license
  if (
    !req.files ||
    !req.files.photo ||
    !Array.isArray(req.files.photo) ||
    req.files.photo.length === 0 ||
    !req.files.license ||
    !Array.isArray(req.files.license) ||
    req.files.license.length === 0
  ) {
    return res.status(400).json({ error: 'Photo and license files are required' });
  }

  // Destructure the photo files from req.files and extract the filenames
  const doctorPhoto = req.files.photo[0].filename; // Extract the filename for doctor's photo
  const licensePhoto = req.files.license[0].filename; // Extract the filename for license photo

  // Handle form data here
  const {
    email,
    username,
    password,
    qualification,
    communicationSkills,
    experience,
    gender,
    age,
    dob,
    hobbies,
    address,
    phoneNumber,
  } = req.body;

  // Create a new Doctor instance with the extracted photo filenames and other fields
  const newDoctor = new Doctor({
    email,
    username,
    password,
    photo: doctorPhoto, // Assign the doctor's photo filename
    license: licensePhoto, // Assign the license photo filename
    qualification,
    communicationSkills,
    experience,
    gender,
    age,
    dob,
    hobbies,
    address,
    phoneNumber,
  });

  // Save the new Doctor instance
  newDoctor
    .save()
    .then((doctor) => {
      res.json({ success: true, doctor });
    })
    .catch((error) => {
      console.error('Error creating doctor:', error);
      res.status(500).json({ error: 'Error creating doctor' });
    });
    console.log(newDoctor);
};
