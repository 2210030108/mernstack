import React from 'react';
import { Container, Typography, Grid, TextField, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const InsurancePage = () => {
  return (
    <div>
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            What is Life Insurance?
          </Typography>
          <Typography variant="body1" paragraph>
            Life insurance is a contract in which a policyholder pays premiums in exchange for a lump-sum death benefit that may be paid to the policyholder's beneficiaries.
          </Typography>
          {/* Add images, if necessary */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img src="/path/to/image1.jpg" alt="Life Insurance" />
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="/path/to/image2.jpg" alt="Life Insurance" />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Add more sections with similar structure */}
      {/* You can repeat the pattern with different colors, images, and content */}

      {/* Example */}
      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            How much does life insurance cost?
          </Typography>
          <Typography variant="body1" paragraph>
            The cost of life insurance depends on several factors, such as age, medical history, and lifestyle. The coverage amount and policy type also play a significant role in determining life insurance costs.
          </Typography>
          {/* Add images, if necessary */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img src="/path/to/image3.jpg" alt="Life Insurance Cost" />
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="/path/to/image4.jpg" alt="Life Insurance Cost" />
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* Example Accordion */}
      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            What are the different types of life insurance?
          </Typography>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h5">Term Life Insurance</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" paragraph>
                Term life insurance covers a specific time period and provides financial help to the beneficiary.
              </Typography>
              {/* Add more content */}
            </AccordionDetails>
          </Accordion>
          {/* Add more Accordion items for other types of insurance */}
        </Container>
      </section>

      {/* Add more sections as needed */}

    </div>
  );
};

export default InsurancePage;
