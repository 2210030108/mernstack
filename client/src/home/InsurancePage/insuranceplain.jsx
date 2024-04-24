import React from 'react';
import { Container, Typography, Grid, Card, CardContent, MenuItem, Select } from '@mui/material';
import BackgroundImage from '../departments/services.png'; // Import background image

const InsurancePlan = () => {
  return (
    <div style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}> {/* Apply background image */}
      <Container>
        {/* Add Menu Dropdown */}
        <Select defaultValue="" variant="standard" style={{ marginBottom: '20px' }}>
          <MenuItem value="" disabled>Select a Section</MenuItem>
          <MenuItem value="termPlans">SBI Life Term Plans</MenuItem>
          <MenuItem value="whyBuy">Why Should I Buy SBI Term Insurance?</MenuItem>
          {/* Add more menu items for other sections */}
        </Select>

        {/* First Section */}
        <section id="termPlans" className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
          <Container>
            <Typography variant="h3" gutterBottom>
              SBI Life Term Plans
            </Typography>
            <Typography variant="body1" paragraph>
              SBI Life Insurance offers a comprehensive range of term insurance plans that helps you to take care of your financial needs and your altering responsibilities.
            </Typography>
            {/* Add images and more content */}
          </Container>
        </section>

        {/* Second Section */}
        <section id="whyBuy" className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
          <Container>
            <Typography variant="h3" gutterBottom>
              Why Should I Buy SBI Term Insurance?
            </Typography>
            <Typography variant="body1" paragraph>
              SBI Term insurance plans are customized to provide financial protection and security to the policyholder’s family in case of an unfortunate event.
            </Typography>
            {/* Add images and more content */}
          </Container>
        </section>

        {/* Third Section */}
        {/* Add more sections with similar structure */}

      </Container>
    </div>
  );
};

export default InsurancePlan;
