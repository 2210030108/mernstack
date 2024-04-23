import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Actions</Typography>
                        <Typography>Appointments & Access</Typography>
                        <Typography>Accepted Insurance</Typography>
                        <Typography>Events Calendar</Typography>
                        {/* Add more actions here */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Financial</Typography>
                        <Typography>Assistance</Typography>
                        <Typography>Give to Students Clinic</Typography>
                        <Typography>Pay Your Bill Online</Typography>
                        {/* Add more financial-related items here */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Healthcare</Typography>
                        <Typography>Refer a Patient</Typography>
                        <Typography>Phone Directory</Typography>
                        <Typography>Virtual Second Opinions</Typography>
                        {/* Add more healthcare-related items here */}
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Blog & News</Typography>
                        <Typography>Consult QD</Typography>
                        <Typography>Health Essentials</Typography>
                        <Typography>Newsroom</Typography>
                        {/* Add more blog & news items here */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">About</Typography>
                        <Typography>100 Years of Students Clinic</Typography>
                        <Typography>About Us</Typography>
                        <Typography>Locations</Typography>
                        {/* Add more about items here */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">For Patients</Typography>
                        <Typography>MyStudentsClinic</Typography>
                        <Typography>MyChart</Typography>
                        <Typography>Patient Experience</Typography>
                        {/* Add more patient-related items here */}
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{ marginTop: '20px' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">For Professionals</Typography>
                        <Typography>Resources for Medical Professionals</Typography>
                        <Typography>Research & Innovations</Typography>
                        {/* Add more professional-related items here */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Legal & Policies</Typography>
                        <Typography>Site Information & Policies</Typography>
                        <Typography>Send Us Feedback</Typography>
                        <Typography>Privacy Policy</Typography>
                        {/* Add more legal & policies items here */}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Typography variant="h6">Connect With Us</Typography>
                        <Button variant="contained" color="primary">Facebook</Button>
                        <Button variant="contained" color="primary">Twitter</Button>
                        <Button variant="contained" color="primary">LinkedIn</Button>
                        {/* Add more social media buttons here */}
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ py: 4, textAlign: "center" }}>
                <Typography variant="body2" color="textSecondary" align="center">
                    Copyright © Hospital Management System. A Brand of OnClick Technologies.
                    All Rights Reserved.
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;
