import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper, TextField } from "@mui/material";

const MedicalRecordsViewOnly = () => {
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [filteredMedicalRecords, setFilteredMedicalRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMedicalRecords = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/api/medical-records");
        setMedicalRecords(data.medicalRecords);
        setFilteredMedicalRecords(data.medicalRecords);
      } catch (error) {
        console.error("Failed to fetch medical records:", error);
      }
    };
    fetchMedicalRecords();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredMedicalRecords(
      medicalRecords.filter((record) =>
        record.userId.toLowerCase().includes(query)
      )
    );
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>Medical Records</Typography>
      <TextField
        label="Search by User ID"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: 16 }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Diagnosis</TableCell>
              <TableCell>Symptoms</TableCell>
              <TableCell>Medications</TableCell>
              <TableCell>Procedures</TableCell>
              <TableCell>Tests</TableCell>
              <TableCell>Notes</TableCell>
              <TableCell>Total Amount</TableCell>
              <TableCell>Pending Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMedicalRecords.map((record) => (
              <TableRow key={record._id}>
                <TableCell>{record.diagnosis}</TableCell>
                <TableCell>{record.symptoms}</TableCell>
                <TableCell>{record.medications}</TableCell>
                <TableCell>{record.procedures}</TableCell>
                <TableCell>{record.tests}</TableCell>
                <TableCell>{record.notes}</TableCell>
                <TableCell>{record.totalAmount}</TableCell>
                <TableCell>{record.pendingAmount}</TableCell>
                <TableCell>{record.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MedicalRecordsViewOnly;
