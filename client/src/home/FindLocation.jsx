import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const FindLocation = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8PZbeS9m0XJyh-EIgtckcHCJYUnLdQR6mQ&s')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
            }}
        >
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
                <Typography variant="h4" gutterBottom>Find a Location</Typography>
                <Typography variant="body1" paragraph>
                    Children's National has many convenient locations for your family throughout D.C., Maryland and Virginia, including our main hospital, specialty care centers, pediatricians' offices, and affiliate locations.
                </Typography>
                <Button variant="contained" color="primary">View Locations Near You</Button>
            </div>
        </Box>
    );
};

export default FindLocation;
