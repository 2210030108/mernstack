import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkIcon from '@mui/icons-material/Work';

const Navbar = () => {
  const [userRole, setUserRole] = useState('admin'); // Set the default role as admin

  // Function to switch user role
  const switchRole = (role) => {
    setUserRole(role);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ borderBottom: '2px solid #333' }}>
       <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          component={Link}
          to="/"
          aria-label="home"
        >
          <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hospital Management System
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/facilities"
          startIcon={<AssignmentIcon />}
          sx={{ borderRight: '2px solid #333' }}
        >
          Facilities
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/DocotorReg"
          startIcon={<WorkIcon />}
          sx={{ borderRight: '2px solid #333' }}
        >
          Apply for Doctor
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/userreg"
          startIcon={<WorkIcon />}
          sx={{ borderRight: '2px solid #333' }}
        >
          Apply for Medical Store Job
        </Button>
        {userRole === 'admin' && (
        <Button
          color="inherit"
          component={Link}
          to="/facilities"
          startIcon={<AssignmentIcon />}
          sx={{ borderRight: '2px solid #333' }}
        >
          Facilities
        </Button>
      )}
      {userRole === 'user' && (
        <Button
          color="inherit"
          component={Link}
          to="/userDashboard"
          startIcon={<Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />}
          sx={{ borderRight: '2px solid #333' }}
        >
          User Dashboard
        </Button>
      )}
      
      <Avatar alt="User Avatar" onClick={() => switchRole('admin : user')} src="/static/images/avatar/1.jpg" />
      {/* Add buttons for other roles */}
        
      </Toolbar>
      <Toolbar>
        <Button
          color="inherit"
          aria-controls="get-care-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          sx={{ borderRight: '2px solid #333' }}
        >
          Get Care
        </Button>
        <Menu
          id="get-care-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem component={Link} to="/locations" onClick={handleMenuClose}>
            Locations
          </MenuItem>
          <MenuItem
            component={Link}
            to="/make-appointment"
            onClick={handleMenuClose}
          >
            Make an Appointment
          </MenuItem>
          <MenuItem component={Link} to="/primary-care" onClick={handleMenuClose}>
            Primary Care
          </MenuItem>
          <MenuItem
            component={Link}
            to="/specialty-care"
            onClick={handleMenuClose}
          >
            Specialty Care
          </MenuItem>
          <MenuItem
            component={Link}
            to="/departments"
            onClick={handleMenuClose}
          >
            Departments
          </MenuItem>
          <MenuItem
            component={Link}
            to="/health-library"
            onClick={handleMenuClose}
          >
            Health Library
          </MenuItem>
          <MenuItem
            component={Link}
            to="/clinical-trials"
            onClick={handleMenuClose}
          >
            Clinical Trials
          </MenuItem>
          <MenuItem
            component={Link}
            to="/second-opinion"
            onClick={handleMenuClose}
          >
            Getting a Second Opinion
          </MenuItem>
        </Menu>
        <Button
          color="inherit"
          aria-controls="plan-visit-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          sx={{ borderRight: '2px solid #333' }}
        >
          Plan Your Visit
        </Button>
        <Menu
          id="plan-visit-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            component={Link}
            to="/inpatient-stays"
            onClick={handleMenuClose}
          >
            Inpatient and Hospital Stays
          </MenuItem>
          <MenuItem
            component={Link}
            to="/primary-care"
            onClick={handleMenuClose}
          >
            Primary Care
          </MenuItem>
          <MenuItem
            component={Link}
            to="/specialty-care"
            onClick={handleMenuClose}
          >
            Specialty Care
          </MenuItem>
          <MenuItem
            component={Link}
            to="/emergency-visits"
            onClick={handleMenuClose}
          >
            Emergency Visits
          </MenuItem>
          <MenuItem
            component={Link}
            to="/virtual-visit"
            onClick={handleMenuClose}
          >
            Virtual Visit Instructions
          </MenuItem>
          <MenuItem
            component={Link}
            to="/directions"
            onClick={handleMenuClose}
          >
            Directions and Parking
          </MenuItem>
          <MenuItem
            component={Link}
            to="/visiting-hours"
            onClick={handleMenuClose}
          >
            Visiting Hours and Guidelines
          </MenuItem>
          <MenuItem
            component={Link}
            to="/medical-records"
            onClick={handleMenuClose}
          >
            Medical Records
          </MenuItem>
          <MenuItem
            component={Link}
            to="/insurance-billing"
            onClick={handleMenuClose}
          >
            Insurance and Billing
          </MenuItem>
          <MenuItem
            component={Link}
            to="/patient-portal"
            onClick={handleMenuClose}
          >
            Patient Portal
          </MenuItem>
          <MenuItem
            component={Link}
            to="/international-patients"
            onClick={handleMenuClose}
          >
            International Patients
          </MenuItem>
        </Menu>
        <Button
          color="inherit"
          aria-controls="make-difference-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
          sx={{ borderRight: '2px solid #333' }}
        >
          Make a Difference
        </Button>
        <Menu
          id="make-difference-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            component={Link}
            to="/hospital-foundation"
            onClick={handleMenuClose}
          >
            Children's National Hospital Foundation
          </MenuItem>
          <MenuItem component={Link} to="/volunteer" onClick={handleMenuClose}>
            Volunteer
          </MenuItem>
          <MenuItem
            component={Link}
            to="/donate-items"
            onClick={handleMenuClose}
          >
            Donate Items
          </MenuItem>
          <MenuItem
            component={Link}
            to="/donate-blood"
            onClick={handleMenuClose}
          >
            Donate Blood
          </MenuItem>
          <MenuItem
            component={Link}
            to="/advisory-council"
            onClick={handleMenuClose}
          >
            Patient and Family Advisory Council
          </MenuItem>
          <MenuItem component={Link} to="/give-now" onClick={handleMenuClose}>
            Give Now
          </MenuItem>
        </Menu>
        <Button
          color="inherit"
          component={Link}
          to="/find-doctor"
          sx={{ borderRight: '2px solid #333' }}
        >
          Find a Doctor
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/make-appointment"
          sx={{ borderRight: '2px solid #333' }}
        >
          Make an Appointment
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/patient-portal"
          sx={{ borderRight: '2px solid #333' }}
        >
          Patient Portal
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/medform/view/only"
          sx={{ borderRight: '2px solid #333' }}
        >
          Medical Records
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/locations"
          sx={{ borderRight: '2px solid #333' }}
        >
          Find a Location
        </Button>
        <Button color="inherit" component={Link} to="/pay-bill">
          Pay My Bill
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
