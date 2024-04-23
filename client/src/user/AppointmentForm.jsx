import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const AppointmentForm = ({ user }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctor, setDoctor] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertSeverity, setAlertSeverity] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Define departmentsArray within the component
  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/doc/doctors') // Endpoint to fetch all doctors
      .then(res => {
        setDoctors(res.data.data); // Assuming doctors data is inside 'data' key
        setFilteredDoctors(res.data.data); // Initially set filtered doctors to all doctors
      })
      .catch(err => console.error(err));
  }, []);

  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      // Extract doctorId and name from the selected doctor object
      const { doctorId, name: doctorName } = doctors;
  
      const hasVisitedBool = Boolean(hasVisited);
      const response = await axios.post(
        "http://localhost:3000/api/v1/appointment/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor: {
            name: doctorName,
            doctorId: doctorId, // Include the doctorId in the request body
          },
          hasVisited: hasVisitedBool,
          address,
          patientId: user.id,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
  
      if (response && response.data && response.data.message) {
        setAlertSeverity("success");
        setAlertMessage(response.data.message);
        setAlertOpen(true);
      } else {
        throw new Error("Invalid response from server");
      }
  
      // Reset form fields...
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("");
      setDoctor("");
      setAddress("");
      setHasVisited(false);
    } catch (error) {
      setAlertSeverity("error");
      setAlertMessage(error.message || "An error occurred while processing your request");
      setAlertOpen(true);
    }
  };
  
  return (
    <>
      <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <Paper elevation={3} component={motion.div} initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h4" align="center" gutterBottom>Appointment</Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleAppointment}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField fullWidth label="First Name" variant="outlined" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Last Name" variant="outlined" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="Mobile Number" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth label="NIC" variant="outlined" value={nic} onChange={(e) => setNic(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth type="date" label="Date of Birth" variant="outlined" value={dob} onChange={(e) => setDob(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Gender</InputLabel>
                      <Select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <MenuItem value="">Select Gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth type="date" label="Appointment Date" variant="outlined" value={appointmentDate} onChange={(e) => setAppointmentDate(e.target.value)} />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Department</InputLabel>
                      <Select value={department} onChange={(e) => {
                        setDepartment(e.target.value);
                        setDoctor("");
                      }}>
                        {departmentsArray.map((depart, index) => (
                          <MenuItem value={depart} key={index}>{depart}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>Doctor</InputLabel>
                      <Select value={doctor} onChange={(e) => setDoctor(e.target.value)} disabled={!department}>
                        <MenuItem value="">Select Doctor</MenuItem>
                        {filteredDoctors
                          .filter((doc) => doc.specialization === department)
                          .map((doc, index) => (
                            <MenuItem key={index} value={doc}>
  {doc.name}
</MenuItem>

                          ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField fullWidth multiline rows={4} label="Address" variant="outlined" value={address} onChange={(e) => setAddress(e.target.value)} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
                      <Grid item>
                        <Typography>Have you visited before?</Typography>
                      </Grid>
                      <Grid item>
                        <input type="checkbox" checked={hasVisited} onChange={(e) => setHasVisited(e.target.checked)} />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">Get Appointment</Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
        {alertOpen && <Alert severity={alertSeverity}>{alertMessage}</Alert>}
      </Container>
    </>
  );
};

export default AppointmentForm;
