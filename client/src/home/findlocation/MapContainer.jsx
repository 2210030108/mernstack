import React from 'react';
import { Container, Typography, Grid, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import hospitalImage from '../departments/about.png'; // Assuming the image file is in the 'images' folder

const LocationsPage = () => {
  return (
    <>
      <Container>
        {/* Text regarding Hospital Management System */}
        <Typography variant="h4" gutterBottom>
          Welcome to Our Hospital Management System
        </Typography>
        <Typography variant="body1" paragraph>
          Our Hospital Management System is dedicated to providing comprehensive healthcare services
          with compassion and expertise. We prioritize your well-being and ensure a harmonious journey
          towards optimal health and wellness.
        </Typography>
        <img src={hospitalImage} alt="Hospital" style={{ width: '100%', marginTop: '20px' }} />
        {/* Google Map */}
        <div className="gmap_canvas">
          <iframe
            className="gmap_iframe"
            width="100%"
            height="363"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=670&amp;height=363&amp;hl=en&amp;q=kist hospital&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          />
          <a href="https://www.fnfgo.com/">FNF Mods</a>
        </div>

        {/* Location, Phone, and Email */}
        <Grid container spacing={2} alignItems="center" marginTop="20px">
          <Grid item xs={4}>
            <IconButton>
              <LocationOnIcon />
            </IconButton>
            <Typography variant="body1">KIST Hospital, Kathmandu</Typography>
          </Grid>
          <Grid item xs={4}>
            <IconButton>
              <PhoneIcon />
            </IconButton>
            <Typography variant="body1">123-456-7890</Typography>
          </Grid>
          <Grid item xs={4}>
            <IconButton>
              <EmailIcon />
            </IconButton>
            <Typography variant="body1">info@example.com</Typography>
          </Grid>
        </Grid>

        {/* Image */}
        
      </Container>
    </>
  );
};

export default LocationsPage;
