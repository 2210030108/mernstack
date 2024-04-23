import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const GetCare = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                    <Typography variant="h6" color="primary">Getting an appointment at Students Clinic is easy.</Typography>
                    <Typography>Schedule using any of these convenient options:</Typography>
                    <Typography variant="subtitle1">866.320.4573</Typography>
                    <Typography variant="subtitle1">Appointment request form</Typography>
                    <Typography variant="subtitle1">Virtual visits</Typography>
                    <Typography variant="subtitle1">Express Care and Urgent Care</Typography>
                    <Typography variant="subtitle1">Virtual second opinions</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                    <Typography variant="h6" color="primary">Find health and wellness information</Typography>
                    <Typography>to help you and your family live a bit healthier each day:</Typography>
                    <Typography variant="subtitle1">Health news and trends</Typography>
                    <Typography variant="subtitle1">Sign up for our newsletter</Typography>
                    <Typography variant="subtitle1">Tune in to our podcast</Typography>
                    <Typography variant="subtitle1">Nutrition and healthy eating</Typography>
                    <Typography variant="subtitle1">Cold, flu, COVID + RSV</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3} style={{ padding: '20px', border: '1px solid #e0e0e0', borderRadius: '10px' }}>
                    <Typography variant="h6" color="primary">Need Help?</Typography>
                    <Typography>We want to make it easy to find what you're looking for.</Typography>
                    <Typography variant="subtitle1">216.444.2200</Typography>
                    <Typography variant="subtitle1">Visiting our main campus</Typography>
                    <Typography variant="subtitle1">Pay your bill online</Typography>
                    <Typography variant="subtitle1">MyChart</Typography>
                    <Typography variant="subtitle1">Request your medical records</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default GetCare;
