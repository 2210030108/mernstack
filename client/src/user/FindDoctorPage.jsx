import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, Button, Card, CardContent, CircularProgress, Divider, Grid, IconButton, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import axios from 'axios'; 
import Navbar from '../home/NavBar';
import ChatIcon from '@mui/icons-material/Chat'; // Add this import
import CallIcon from '@mui/icons-material/Call'; // Add this import

const FindDoctorPage = () => {
  const { doctorId } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/doc/doctors`);
        const data = response.data;
        setDoctor(data);
      } catch (error) {
        console.error('Error fetching doctor:', error);
      }
    };
  
    fetchDoctorData();
  
    // Fetch simulated reviews data
    const simulatedReviews = [
      { id: 1, rating: 4, comment: 'Great experience!' },
      { id: 2, rating: 5, comment: 'Excellent service!' },
      { id: 3, rating: 3, comment: 'Could be better.' },
    ];
    setReviews(simulatedReviews);
  }, [doctorId]); // This dependency array ensures the effect runs when doctorId changes
  
  if (!doctor) {
    return <CircularProgress />;
  }

  const handleRatingChange = (newValue) => {
    setUserRating(newValue);
    // Save the user's rating to the database or state
    console.log('User rating:', newValue);
  };
  const handleBookAppointment = () => {
    // Replace with your booking appointment functionality
    console.log('Booking appointment functionality');
  };

  return (
    <>
      <Navbar />
      <Card variant="outlined" style={{ width: '300px', height: '400px', padding: '20px', borderRadius: '10px' }}>
        <CardContent>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item>
              <Avatar alt="Doctor" src={doctor.photo} sx={{ width: 100, height: 100 }} />
            </Grid>
            <Grid item>
              <Typography variant="h6">{doctor.name}</Typography>
              <Typography variant="body2" color="textSecondary">Status: {doctor.status}</Typography>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                {[1, 2, 3].map((icon, index) => (
                  <IconButton key={index} aria-label={`Action ${index}`}>
                    {/* Replace with appropriate icons and functionality */}
                    {index === 0 ? <ChatIcon /> : index === 1 ? <CallIcon /> : <Button onClick={handleBookAppointment}>Book Appointment</Button>}
                  </IconButton>
                ))}
              </div>
            </Grid>
          </Grid>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6">Rate this Doctor:</Typography>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px', margin: '10px 0' }}>
            {[1, 2, 3, 4, 5].map((value) => (
              <IconButton key={value} onClick={() => handleRatingChange(value)}>
                {value <= userRating ? <StarIcon style={{ color: 'gold' }} /> : <StarOutlineIcon />}
              </IconButton>
            ))}
          </div>
          <Divider style={{ margin: '20px 0' }} />
        </CardContent>
      </Card>
    </>
  );
};

export default FindDoctorPage;
