import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Favorite, Star, Group, Lightbulb } from '@mui/icons-material';

const WhyChooseStudentsClinics = () => {
    return (
        <Container style={{ paddingTop: '50px', paddingBottom: '50px' }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <Box bgcolor="#f3e5f5" p={3} borderRadius={10} height="100%">
                        <Typography variant="h5" gutterBottom>
                            Patient-centered care
                        </Typography>
                        <Typography variant="body1">
                            <Favorite fontSize="large" style={{ marginRight: '10px' }} />
                            We don’t just care for your health conditions. We care about you. That means our providers take the time to listen to what’s important to you before recommending next steps.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box bgcolor="#e1bee7" p={3} borderRadius={10} height="100%">
                        <Typography variant="h5" gutterBottom>
                            National recognition
                        </Typography>
                        <Typography variant="body1">
                            <Star fontSize="large" style={{ marginRight: '10px' }} />
                            StudentsClinics is recognized locally and nationally for its expertise and care.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box bgcolor="#d1c4e9" p={3} borderRadius={10} height="100%">
                        <Typography variant="h5" gutterBottom>
                            Collaborative providers
                        </Typography>
                        <Typography variant="body1">
                            <Group fontSize="large" style={{ marginRight: '10px' }} />
                            You’ll get care from board-certified and fellowship-trained experts who work together to create a treatment plan just for you. Only the highest standards ensure excellent outcomes.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box bgcolor="#c5cae9" p={3} borderRadius={10} height="100%">
                        <Typography variant="h5" gutterBottom>
                            Innovation and research
                        </Typography>
                        <Typography variant="body1">
                            <Lightbulb fontSize="large" style={{ marginRight: '10px' }} />
                            We’re focused on today — and tomorrow. Our focus on research and offering the latest options means you can find a wide range of clinical trials and other care that you can’t find elsewhere.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WhyChooseStudentsClinics;
