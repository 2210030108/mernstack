import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WorkIcon from '@mui/icons-material/Work';
import LocalPharmacyIcon from '@mui/icons-material/LocalPharmacy';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GoogleIcon from '@mui/icons-material/Google';

const Navbar = () => {
  const [userRole, setUserRole] = useState('admin'); // Set the default role as admin
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to switch user role
  const switchRole = (role) => {
    setUserRole(role);
  };

  // Function to handle dropdown menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle dropdown menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ borderBottom: '2px solid #333' }}>
     
      <Toolbar>
      <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
          <ArrowDropDownIcon />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MenuItem component={Link} to="/userreg" onClick={handleMenuClose}>User Registration</MenuItem>
          <MenuItem component={Link} to="/empreg" onClick={handleMenuClose}>Employee Registration</MenuItem>
          <MenuItem component={Link} to="/adminreg" onClick={handleMenuClose}>Admin Registration</MenuItem>
          <MenuItem component={Link} to="/DocotorReg" onClick={handleMenuClose}>Doctor Registration</MenuItem>
          <MenuItem component={Link} to="/accountsreg" onClick={handleMenuClose}>Account Registration</MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleMenuClose}>User Login</MenuItem>
          <MenuItem component={Link} to="/login" onClick={handleMenuClose}>Employee Login</MenuItem>
          <MenuItem component={Link} to="/admin" onClick={handleMenuClose}>Admin Login</MenuItem>
          <MenuItem component={Link} to="/DocotorReg" onClick={handleMenuClose}>Doctor Login</MenuItem>
          <MenuItem component={Link} to="/accountsreg" onClick={handleMenuClose}>Account Login</MenuItem>
        </Menu>
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
       
          <MenuItem
            color="inherit"
            component={Link}
            to="/DocotorReg"
            startIcon={<WorkIcon />}
            onClick={handleMenuClose}
          >
            Apply for Doctor
          </MenuItem>
        
        
          <MenuItem
            color="inherit"
            component={Link}
            to="/userDashboard"
            onClick={handleMenuClose}
          >
            User Dashboard
          </MenuItem>
        
        <MenuItem
          color="inherit"
          component={Link}
          to="/apply-medical-job"
          startIcon={<LocalPharmacyIcon />}
          onClick={handleMenuClose}
        >
          Apply for Medical Store Job
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/Blood"
          startIcon={<AssignmentIcon />}
          onClick={handleMenuClose}
        >
          Donate to the Blood Bank
        </MenuItem>
        <Avatar
          alt="User Avatar"
          onClick={() => switchRole('admin : user')}
          src="/static/images/avatar/1.jpg"
        />
        {/* Add buttons for other roles */}
      </Toolbar>
      <Toolbar>
        <MenuItem
          color="inherit"
          component={Link}
          to="/find-doctor"
          onClick={handleMenuClose}
        >
          Find a Doctor
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/make-appointment"
          onClick={handleMenuClose}
        >
          Make an Appointment
        </MenuItem>
        
        <MenuItem
          color="inherit"
          component={Link}
          to="/medform/view/only"
          onClick={handleMenuClose}
        >
          Medical Records
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/locations"
          onClick={handleMenuClose}
        >
          Find a Location
        </MenuItem>
        <MenuItem
          color="inherit"
          component={Link}
          to="/pay-bill"
          onClick={handleMenuClose}
        >
          Pay My Bill
        </MenuItem>
        <MenuItem component={Link} to="/plan" onClick={handleMenuClose}>Insurance Plan</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
