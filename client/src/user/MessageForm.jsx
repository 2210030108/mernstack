import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@mui/styles";
import { Container, TextField, Button, Snackbar, Typography } from "@mui/material";
import { Alert } from "@mui/material";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 16,
  },
  form: {
    width: "100%",
    maxWidth: 400,
    "& > *": {
      marginBottom: 16,
    },
  },
}));

const MessageForm = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/message/send",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      setSnackbarSeverity("success");
      setSnackbarMessage(response.data.message);
      setOpenSnackbar(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage(error.response?.data?.message || "Failed to send message.");
      setOpenSnackbar(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Send Us A Message
      </Typography>
      <form className={classes.form} onSubmit={handleMessage}>
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          value={formData.firstName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="phone"
          label="Mobile Number"
          variant="outlined"
          value={formData.phone}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          multiline
          rows={5}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send
        </Button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default MessageForm;
