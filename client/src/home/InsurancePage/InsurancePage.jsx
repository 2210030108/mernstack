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
          {/* Add more content */}
        </Container>
      </section>

      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            How much does life insurance cost?
          </Typography>
          <Typography variant="body1" paragraph>
            The cost of life insurance depends on several factors, such as age, medical history, and lifestyle. The coverage amount and policy type also play a significant role in determining life insurance costs.
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

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

      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            What is the best life insurance policy for me?
          </Typography>
          <Typography variant="body1" paragraph>
            As every person's situation is different, you'll need to choose which product is right for you.
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      <section className="section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Why do you need life insurance?
          </Typography>
          <Typography variant="body1" paragraph>
            Life insurance helps you plan ahead and provides long-term financial security for your family when they would need it most.
          </Typography>
          {/* Add more content */}
        </Container>
      </section>

      <section className="section" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Need more information about Life Insurance?
          </Typography>
          <Typography variant="body1" paragraph>
            You can reach us at (888) 532-5433
          </Typography>
          {/* Add more content */}
        </Container>
      </section>
    </div>
  );
};

export default InsurancePage;
