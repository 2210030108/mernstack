import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Checkbox,
  Alert,
} from "@mui/material";

const DoctorSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    photo: null,
    license: null,
    specialization: "",
    experienceYears: "",
    education: "",
    qualifications: [],
    consultationFee: "",
    availability: {
      days: [],
      timings: "",
    },
    languages: [],
    address: {
      street: "",
      city: "",
      state: "",
      country: "",
      zip: "",
    },
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.'); // Split the nested property name
    if (parent === 'availability') {
        setFormData(prevState => ({
            ...prevState,
            [parent]: {
                ...prevState[parent],
                [child]: value
            }
        }));
    } else {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
};

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    const isChecked = e.target.checked;

    setFormData((prevState) => ({
      ...prevState,
      [name]: isChecked
        ? [...prevState[name], value]
        : prevState[name].filter((item) => item !== value),
    }));
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  };
  const handleAvailabilityChange = (e) => {
    setFormData({
        ...formData,
        availability: {
            ...formData.availability,
            days: e.target.value, // Set selected days directly
        },
    });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        if (typeof formData[key] === "object" && formData[key] !== null) {
          if (key === "availability") {
            formDataToSend.append(key, JSON.stringify(formData[key]));
          } else {
            formDataToSend.append(key, formData[key]);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }

      const res = await axios.post("http://localhost:3000/api/doc/doc", formDataToSend);
      console.log(res.data); // Assuming the response contains doctor data with status
      console.log(formDataToSend);
      setSuccessMessage("Doctor signed up successfully.");

      // Redirect to admin panel or display appropriate message
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to sign up doctor.");
      // Handle error
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
    <Grid item xs={12} sm={10} md={8} lg={6}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h4" gutterBottom>
            Doctor Signup
          </Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            label="Contact"
            variant="outlined"
            fullWidth
            margin="normal"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          {/* File input for photo */}
          <input
            type="file"
            accept="image/*"
            name="photo"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="photo-upload"
          />
          <label htmlFor="photo-upload">
            <Button
              component="span"
              variant="outlined"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Upload Photo
            </Button>
          </label>
          {/* Display selected filename for photo */}
          {formData.photo && (
            <Typography variant="body1">{formData.photo.name}</Typography>
          )}

          {/* File input for license */}
          <input
            type="file"
            accept="image/*"
            name="license"
            onChange={handleFileChange}
            style={{ display: "none" }}
            id="license-upload"
          />
          <label htmlFor="license-upload">
            <Button
              component="span"
              variant="outlined"
              fullWidth
              style={{ marginTop: "10px" }}
            >
              Upload License
            </Button>
          </label>
          {/* Display selected filename for license */}
          {formData.license && (
            <Typography variant="body1">{formData.license.name}</Typography>
          )}
          <TextField
            label="Specialization"
            variant="outlined"
            fullWidth
            margin="normal"
            name="specialization"
            value={formData.specialization}
            onChange={handleChange}
            required
          />
          <TextField
            label="Experience (Years)"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
            required
          />
          <TextField
            label="Education"
            variant="outlined"
            fullWidth
            margin="normal"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Qualifications</InputLabel>
            <Select
              multiple
              value={formData.qualifications}
              onChange={handleChange}
              inputProps={{ name: "qualifications" }}
              variant="outlined"
              required
            >
              <MenuItem value="MBBS">MBBS</MenuItem>
              <MenuItem value="MD">MD</MenuItem>
              <MenuItem value="MS">MS</MenuItem>
              <MenuItem value="DM">DM</MenuItem>
              <MenuItem value="MCh">MCh</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Consultation Fee"
            variant="outlined"
            fullWidth
            margin="normal"
            type="number"
            name="consultationFee"
            value={formData.consultationFee}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Languages</InputLabel>
            <Select
              multiple
              value={formData.languages}
              onChange={handleChange}
              inputProps={{ name: "languages" }}
              variant="outlined"
              required
            >
              <MenuItem value="English">English</MenuItem>
              <MenuItem value="Spanish">Spanish</MenuItem>
              <MenuItem value="French">French</MenuItem>
              <MenuItem value="German">German</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>Availability</InputLabel>
            <Select
              multiple
              value={formData.availability.days}
              onChange={handleAvailabilityChange}
              inputProps={{ name: "availability.days" }}
              variant="outlined"
              required
            >
              {[
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ].map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Timings"
            variant="outlined"
            fullWidth
            margin="normal"
            name="availability.timings"
            value={formData.availability.timings}
            onChange={handleChange}
            required
          />
          <TextField
            label="Street"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address.street"
            value={formData.address.street}
            onChange={handleChange}
            required
          />
          <TextField
            label="City"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address.city"
            value={formData.address.city}
            onChange={handleChange}
            required
          />
          <TextField
            label="ZIP"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address.zip"
            value={formData.address.zip}
            onChange={handleChange}
            required
          />
          <TextField
            label="State"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address.state"
            value={formData.address.state}
            onChange={handleChange}
            required
          />
          <TextField
            label="Country"
            variant="outlined"
            fullWidth
            margin="normal"
            name="address.country"
            value={formData.address.country}
            onChange={handleChange}
            required
          />
          {successMessage && (
            <Alert severity="success" onClose={() => setSuccessMessage("")}>
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error" onClose={() => setErrorMessage("")}>
              {errorMessage}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "20px" }}
          >
            Submit
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default DoctorSignup;
