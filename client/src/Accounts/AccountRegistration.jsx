import React, { useState } from 'react';
import { Typography, TextField, Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if the username and password match the predefined values
    if (username === 'Sairocky656' && password === '123') {
      // Navigate to the account section page
      navigate('/Tabbing');
    } else {
      // Display error message for incorrect username or password
      setErrorMessage('Incorrect username or password. Please try again.');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom>
          Account Registration
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="username"
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            fullWidth
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
        </form>
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default AccountRegistration;
