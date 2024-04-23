import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar';
import Footer from '../Footer';

const Bloodhome = () => {
  return (
    <>
    <Navbar/>
    <div>
      {/* First Page */}
      <section className="firstPage" style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
  <div style={{ 
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'url("https://img.freepik.com/free-vector/illustration-people-donating-blood_23-2148246357.jpg?w=1060&t=st=1713803208~exp=1713803808~hmac=bba1460494671f91db428c20022683339f8ecda48006aca80b09472d52d994eb")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: -1,
  }}></div>
  <Container style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', backdropFilter: 'blur(10px)', padding: '20px', borderRadius: '10px', border: '2px solid rgba(255, 255, 255, 0.1)' }}>
    <Typography variant="h3" gutterBottom>
      Volunteers Needed to Help Blood Donations
    </Typography>
    <Typography variant="body1" paragraph>
      Volunteer opportunities include supporting blood donations and delivering much-needed services to your community.
    </Typography>
    <Link to="/volunteer">
      <Button variant="contained" color="primary">
        Learn More
      </Button>
    </Link>
  </Container>
</section>


<section className="secondPage" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Am I Eligible to Donate Blood?
                </Typography>
                <Typography variant="body1" paragraph>
                  Are you eligible for blood donation? Find out about the eligibility requirements to donate blood today. Learn about general health, travel, medications, tattoos, and more.
                </Typography>
                <Link to="/eligibility">
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Sickle Cell Patients
                </Typography>
                <Typography variant="body1" paragraph>
                  Help Sickle Cell Patients. Blood donors who are Black play a critical role in helping sickle cell disease patients receive the most compatible blood match. Donors needed to meet this urgent need.
                </Typography>
                <Link to="/volunteer">
                  <Button variant="contained" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
          {/* Add more Grid items here */}
        </Grid>
      </Container>
    </section>

      {/* Third Page */}
      <section className="thirdPage" style={{ backgroundColor: '#e0e0e0', padding: '50px 0' }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <img src="https://img.freepik.com/free-vector/health-care-take-blood-sample_1308-11665.jpg?size=626&ext=jpg&ga=GA1.1.515704085.1713803125&semt=ais" alt="Blood Donation" style={{ maxWidth: '100%', height: 'auto' }} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5" gutterBottom>
                New to Blood Donation?
              </Typography>
              <Typography variant="body1" paragraph>
                We answer the most frequently asked questions in the new Be a Hero Donor Guide. Enter your information to learn the truth about some blood donation myths and how you can help patients.
              </Typography>
              <form>
                <TextField id="firstName" label="First Name" fullWidth margin="normal" required />
                <TextField id="lastName" label="Last Name" fullWidth margin="normal" required />
                <TextField id="email" label="Email" fullWidth margin="normal" required />
                <TextField id="zipCode" label="Zip Code" fullWidth margin="normal" required />
                <Button variant="contained" color="primary" type="submit">
                  Get Your Guide
                </Button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Bloodhome;
