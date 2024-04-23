import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import axios from 'axios';

const MedicalRecordEdit = () => {
  const { id } = useParams(); // Get the record ID from URL params
  const [medicalRecord, setMedicalRecord] = useState({
    diagnosis: "",
    symptoms: "",
    medications: "",
    procedures: "",
    tests: "",
    notes: "",
    totalAmount: "",
    pendingAmount: "",
    status: "",
    file: null
  });

  // Fetch medical record data based on the ID
  useEffect(() => {
    const fetchMedicalRecord = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/api/medical-records/${id}`);
        setMedicalRecord(data.medicalRecord);
      } catch (error) {
        console.error('Failed to fetch medical record:', error);
      }
    };
    fetchMedicalRecord();
  }, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a FormData object to send file data
      const formData = new FormData();
      formData.append('userId', medicalRecord.userId); // Include userId
      formData.append('diagnosis', medicalRecord.diagnosis);
      formData.append('symptoms', medicalRecord.symptoms);
      formData.append('medications', medicalRecord.medications);
      formData.append('procedures', medicalRecord.procedures);
      formData.append('tests', medicalRecord.tests);
      formData.append('notes', medicalRecord.notes);
      formData.append('totalAmount', medicalRecord.totalAmount);
      formData.append('pendingAmount', medicalRecord.pendingAmount);
      formData.append('status', medicalRecord.status);
      formData.append('file', medicalRecord.file);
  
      // Make a PUT request to update the medical record
      const response = await axios.put(`http://localhost:3000/api/medical-records/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data for file upload
        },
      });
  
      if (response.status === 200) {
        // Handle successful update
        console.log('Medical record updated successfully');
        // Redirect to the medical records list page or show a success message
      } else {
        // Handle error response
        console.error('Failed to update medical record');
        // Display an error message to the user
      }
    } catch (error) {
      // Handle error
      console.error('An error occurred:', error);
      // Display an error message to the user
    }
  };

  return (
    <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Typography variant="h4" align="center" gutterBottom>Edit Medical Record</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Diagnosis" variant="outlined" fullWidth value={medicalRecord.diagnosis} onChange={(e) => setMedicalRecord({ ...medicalRecord, diagnosis: e.target.value })} />
        <TextField label="Symptoms" variant="outlined" fullWidth value={medicalRecord.symptoms} onChange={(e) => setMedicalRecord({ ...medicalRecord, symptoms: e.target.value })} />
        <TextField label="Medications" variant="outlined" fullWidth value={medicalRecord.medications} onChange={(e) => setMedicalRecord({ ...medicalRecord, medications: e.target.value })} />
        <TextField label="Procedures" variant="outlined" fullWidth value={medicalRecord.procedures} onChange={(e) => setMedicalRecord({ ...medicalRecord, procedures: e.target.value })} />
        <TextField label="Tests" variant="outlined" fullWidth value={medicalRecord.tests} onChange={(e) => setMedicalRecord({ ...medicalRecord, tests: e.target.value })} />
        <TextField label="Notes" variant="outlined" fullWidth value={medicalRecord.notes} onChange={(e) => setMedicalRecord({ ...medicalRecord, notes: e.target.value })} />
        <TextField label="Total Amount" variant="outlined" fullWidth value={medicalRecord.totalAmount} onChange={(e) => setMedicalRecord({ ...medicalRecord, totalAmount: e.target.value })} />
        <TextField label="Pending Amount" variant="outlined" fullWidth value={medicalRecord.pendingAmount} onChange={(e) => setMedicalRecord({ ...medicalRecord, pendingAmount: e.target.value })} />
        <TextField label="Status" variant="outlined" fullWidth value={medicalRecord.status} onChange={(e) => setMedicalRecord({ ...medicalRecord, status: e.target.value })} />
        <input type="file" onChange={(e) => setMedicalRecord({ ...medicalRecord, file: e.target.files[0] })} />
        <Button type="submit" variant="contained" color="primary">Update</Button>
      </form>
    </Container>
  );
};

export default MedicalRecordEdit;
