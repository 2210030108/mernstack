import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AppBar, Toolbar, Typography, Container, Grid, Button, Avatar, IconButton } from '@mui/material';
import { Home as HomeIcon, Assignment as AssignmentIcon, Work as WorkIcon } from '@mui/icons-material'; // Icons

import logo from './logo192.png'; 

const Homepage = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" component={Link} to="/" aria-label="home">
                        <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Hospital Management System
                    </Typography>
                    <Button color="inherit" component={Link} to="/facilities" startIcon={<AssignmentIcon />}>
                        Facilities
                    </Button>
                    <Button color="inherit" component={Link} to="/DocotorReg" startIcon={<WorkIcon />}>
                        Apply for Doctor
                    </Button>
                    <Button color="inherit" component={Link} to="/userreg" startIcon={<WorkIcon />}>
                        Apply for Medical Store Job
                    </Button>
                    <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Welcome to Hospital Management System
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non urna eget ante consectetur
                    porttitor vel ac mi. Integer vel velit eu nibh condimentum sollicitudin. Proin vel lectus quis
                    nisl lobortis finibus. Phasellus auctor mi a mauris consequat vestibulum.
                </Typography>
                <Typography variant="body1" paragraph>
                    In our hospital, we offer a wide range of facilities including emergency care, surgeries,
                    diagnostic services, and specialized treatments.
                </Typography>
                <Grid container spacing={2} justify="center">
                    
                </Grid>
            </Container>
        </motion.div>
    );
};

export default Homepage;
