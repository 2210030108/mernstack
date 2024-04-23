import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const InsurancePlan = () => {
  return (
    <div>
      {/* First Section */}
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            SBI Life Term Plans
          </Typography>
          <Typography variant="body1" paragraph>
            SBI Life Insurance offers a comprehensive range of term insurance plans that helps you to take care of your financial needs and your altering responsibilities.
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Second Section */}
      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Why Should I Buy SBI Term Insurance?
          </Typography>
          <Typography variant="body1" paragraph>
            SBI Term insurance plans are customized to provide financial protection and security to the policyholder’s family in case of an unfortunate event.
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Third Section */}
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            SBI Life Term Insurance Plans
          </Typography>
          <Grid container spacing={3}>
            {/* Add cards for each insurance plan */}
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    eShield Next - Level Cover
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Life Cover: ₹ 1 Cr
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Max Limit: 85 yrs
                  </Typography>
                  {/* Add more content */}
                </CardContent>
              </Card>
            </Grid>
            {/* Add more Grid items for other insurance plans */}
          </Grid>
        </Container>
      </section>

      {/* Fourth Section */}
      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Critical Illnesses Covered Under SBI Term Insurance
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Fifth Section */}
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            How Much Cover Do I Need?
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Sixth Section */}
      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Choosing the Right Sum Assured Option
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Seventh Section */}
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Term Insurance Premium Calculator
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Eighth Section */}
      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Types of Term Plans
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      {/* Ninth Section */}
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Term Insurance Articles
          </Typography>
          {/* Add more content */}
        </Container>
      </section>
    </div>
  );
};

export default InsurancePlan;
