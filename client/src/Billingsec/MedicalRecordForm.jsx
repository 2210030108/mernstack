import React, { useState } from "react";
import axios from "axios";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";

const MedicalRecordForm = () => {
  const [recordData, setRecordData] = useState({
    diagnosis: "",
    symptoms: "",
    medications: "",
    procedures: "",
    tests: "",
    notes: "",
    totalAmount: "",
    pendingAmount: "",
    status: "",
    file: null,
    userId: "", // New field for user ID
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecordData({ ...recordData, [name]: value });
  };

  const handleFileChange = (e) => {
    setRecordData({ ...recordData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in recordData) {
      formData.append(key, recordData[key]);
    }
    try {
      await axios.post("http://localhost:3000/api/medical-records/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Medical record created successfully");
      setRecordData({
        diagnosis: "",
        symptoms: "",
        medications: "",
        procedures: "",
        tests: "",
        notes: "",
        totalAmount: "",
        pendingAmount: "",
        status: "",
        file: null,
        userId: "", // Reset user ID after submission
      });
    } catch (error) {
      console.error("Failed to create medical record:", error);
      alert("Failed to create medical record. Please try again later.");
    }
  };

  return (
    <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Typography variant="h4" align="center" gutterBottom>Medical Record Form</Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Diagnosis" name="diagnosis" value={recordData.diagnosis} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Symptoms" name="symptoms" value={recordData.symptoms} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Medications" name="medications" value={recordData.medications} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Procedures" name="procedures" value={recordData.procedures} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Tests" name="tests" value={recordData.tests} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Notes" name="notes" value={recordData.notes} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Total Amount" name="totalAmount" value={recordData.totalAmount} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Pending Amount" name="pendingAmount" value={recordData.pendingAmount} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="Status" name="status" value={recordData.status} onChange={handleChange} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth label="User ID" name="userId" value={recordData.userId} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <input type="file" name="file" onChange={handleFileChange} />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MedicalRecordForm;
