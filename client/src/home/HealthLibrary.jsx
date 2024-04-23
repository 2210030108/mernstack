import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';

const HealthLibrary = () => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>Health Library</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #69F0AE', borderRadius: '10px' }}>
                        <Typography variant="h6" color="primary">Diseases & Conditions</Typography>
                        <Typography>
                            Explore a comprehensive range of diseases and medical conditions. Learn about symptoms, causes, diagnosis, and treatment options for various health issues.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #FFEB3B', borderRadius: '10px' }}>
                        <Typography variant="h6" color="primary">Diagnostics & Testing</Typography>
                        <Typography>
                            Discover different diagnostic procedures and testing methods used in healthcare. Understand how these tests help in identifying and diagnosing medical conditions.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #64B5F6', borderRadius: '10px' }}>
                        <Typography variant="h6" color="primary">Treatments & Procedures</Typography>
                        <Typography>
                            Learn about various medical treatments and procedures available for different health conditions. Get insights into surgical and non-surgical treatment options.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #FF8A65', borderRadius: '10px' }}>
                        <Typography variant="h6" color="primary">Body Systems & Organs</Typography>
                        <Typography>
                            Explore the anatomy and functions of different body systems and organs. Understand how these systems work together to maintain overall health.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #FFD54F', borderRadius: '10px' }}>
                        <Typography variant="h6" color="primary">Drugs, Devices & Supplements</Typography>
                        <Typography>
                            Find information about medications, medical devices, and dietary supplements. Learn about their uses, benefits, potential side effects, and precautions.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} style={{ padding: '20px', border: '1px solid #81C784', borderRadius: '10px' }}>
                        <Typography variant="h6" color="primary">Features</Typography>
                        <Typography>
                            Discover the features of our Health Library:
                            <ul>
                                <li>Comprehensive information on a wide range of health topics</li>
                                <li>Regularly updated content based on the latest medical research</li>
                                <li>User-friendly interface for easy navigation and search</li>
                                <li>Accessible on all devices, including smartphones, tablets, and desktops</li>
                            </ul>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default HealthLibrary;
