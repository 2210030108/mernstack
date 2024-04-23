import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, CardMedia, Typography, Link } from "@mui/material";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:3000/doctor/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div>
      <h1>Doctor List</h1>
      <Grid container spacing={2}>
        {doctors.map((doctor) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={doctor._id}>
            <Card>
            <CardMedia
  component="img"
  height="200"
  image={`data:${doctor.photo.contentType};base64,${doctor.photo.data}`}
  alt="Doctor"
/>


              <CardContent>
                <Typography variant="h6" component="div">{doctor.username}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Email: {doctor.email}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Experience: {doctor.experience} years</Typography>
                {doctor.doctorLicense && (
                  <Link href={`data:${doctor.doctorLicense.contentType};base64,${doctor.doctorLicense.data.data.toString('base64')}`} download>
                  Download License
                </Link>
                
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default DoctorList;
