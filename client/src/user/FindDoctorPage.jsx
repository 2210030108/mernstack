import React, { useState, useEffect } from 'react';
import { Avatar, Button, Card, CardContent, CircularProgress, Divider, Grid, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import axios from 'axios'; 
import Navbar from '../home/NavBar';
import {  useNavigate } from 'react-router-dom'; // Import useHistory hook

const FindDoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);
  const Navigate = useNavigate(); // Initialize useHistory hook

  useEffect(() => {
    const fetchDoctorsData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/doc/doctors');
        const data = response.data.data; // Assuming data is an array of doctors
        setDoctors(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching doctors:', error);
        setLoading(false);
      }
    };
  
    fetchDoctorsData();
  }, []);

  const handleRatingChange = async (doctorId, newValue) => {
    try {
      const response = await axios.put(`http://localhost:3000/api/doc/update/${doctorId}`, { rating: newValue });
      console.log('Rating updated:', response.data);
      setUserRating(newValue);
    } catch (error) {
      console.error('Error updating rating:', error);
    }
  };

  const handleBookAppointment = (doctor) => {
    // Navigate to appointment page with doctor id and name as URL parameters
    Navigate(`/make-appointment/${doctor.id}`, { doctorName: doctor.name });
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3} justifyContent="center">
          {doctors.map((doctor) => (
            <Grid item key={doctor.id}>
              <Card variant="outlined" style={{ width: '300px', height: '400px', padding: '20px', borderRadius: '10px' }}>
                <CardContent>
                  {/* Doctor information */}
                  <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item>
                      <Avatar alt="Doctor" src={`http://localhost:3000/${doctor.photo}`} sx={{ width: 100, height: 100 }} />
                    </Grid>
                    </Grid>
                  <Typography variant="h6">{doctor.name}</Typography>
                  <Typography variant="body2" color="textSecondary">Status: {doctor.status}</Typography>
                  {/* Appointment booking */}
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <Button onClick={() => handleBookAppointment(doctor)}>Book Appointment</Button>
                  </div>
                  {/* Rating */}
                  <Typography variant="h6">Rate this Doctor:</Typography>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', margin: '10px 0' }}>
                    {[1, 2, 3, 4, 5].map((value) => (
                      <IconButton key={value} onClick={() => handleRatingChange(doctor.id, value)}>
                        {value <= userRating ? <StarIcon style={{ color: 'gold' }} /> : <StarOutlineIcon />}
                      </IconButton>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default FindDoctorPage;
