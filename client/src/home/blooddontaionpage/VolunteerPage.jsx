import React from 'react';
import { Container, Typography, Button, Card, CardContent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const VolunteerPage = () => {
  return (
    <section className="volunteerPage" style={{ padding: '80px 0' ,gap:'20px'}}>
        <Typography variant="h3" margin={1} align='center'>
  Volunteers Needed
</Typography>
<Typography variant="body1" paragraph>
  Here Are Our Most-Needed Volunteer Opportunities
  (Please note, position availability may vary based on your location and the needs of your community.)
</Typography>

      <Container>
        <Grid container spacing={3}>
          {/* Blood Donor Ambassador Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <img src="https://img.freepik.com/free-vector/health-care-take-blood-sample_1308-11665.jpg?size=626&ext=jpg&ga=GA1.1.515704085.1713803125&semt=ais" alt="Blood Donor Ambassador" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Blood Donor Ambassador
                </Typography>
                <Typography variant="body1" paragraph>
                  Urgent need for volunteers
                </Typography>
                <Typography variant="body1" paragraph>
                  As a Blood Donor Ambassador volunteer, you will engage donors by greeting, registering, answering questions, providing information, and supporting them through the recovery process at the refreshments table.
                </Typography>
                <Link to="/apply-now">
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Blood Transportation Specialist Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <img src="https://img.freepik.com/free-vector/flat-design-volunteer-donating-blood_23-2148273548.jpg?w=740&t=st=1713803126~exp=1713803726~hmac=3820cdff827625c0da618b69e8e7ef1d2d51b926bc16ce31f5e348512d376e64" alt="Blood Transportation Specialist" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Blood Transportation Specialist
                </Typography>
                <Typography variant="body1" paragraph>
                  Urgent need for volunteers
                </Typography>
                <Typography variant="body1" paragraph>
                  As a Transportation Specialist volunteer, you will be the critical link between blood donors and blood recipients by delivering blood, platelets or other blood products to a hospital.
                </Typography>
                <Link to="/apply-now">
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Disaster Action Team (DAT) Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Disaster Action Team (DAT)
                </Typography>
                <Typography variant="body1" paragraph>
                  Every day people are forced from their homes due to fires, storms and other disasters. Single- and multi-family fires account for 90% of disaster responses. You can be part of a team that helps and responds to over 60,000 emergencies every year. From offering a caring and compassionate ear, to meeting the disaster-caused needs of individuals and households, such as lodging and clothing, and connecting them with long term recovery services, our volunteers ensure that families don’t have to face tough times alone.
                </Typography>
                <Typography variant="body1" paragraph>
                  If you are team-oriented and want to make a difference, please consider joining the Disaster Action Team and apply now. We supply all the training you need.
                </Typography>
                <Link to="/apply-now">
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Disaster Mental Health Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Disaster Mental Health
                </Typography>
                <Typography variant="body1" paragraph>
                  Join our team of Disaster Mental Health volunteers and make a meaningful impact in times of crisis. Your empathy and support can provide vital relief to those affected by disasters, large and small. If you're passionate about helping others navigate challenging situations and you are a licensed mental health professional, we welcome you to be a crucial part of our community resilience efforts.
                </Typography>
                <Typography variant="body1" paragraph>
                  Apply now and be a beacon of hope in times of need.
                </Typography>
                <Link to="/apply-now">
                  <Button variant="contained" color="primary">
                    Apply Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          {/* Add more Grid items for other volunteer opportunities */}
        </Grid>
      </Container>
    </section>
  );
};

export default VolunteerPage;
