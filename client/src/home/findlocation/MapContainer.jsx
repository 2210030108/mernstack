import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios";

const HospitalSection = ({ hospital }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
      style={{
        background: ".../departments/services.png", // Use gradient background
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 20, left: 20, color: "white" }}>
        <Typography variant="h4" gutterBottom>{hospital.name}</Typography>
        <Typography variant="body1" gutterBottom>{hospital.location}</Typography>
        <Typography variant="body1">{hospital.description}</Typography>
      </div>
      <img src={`./images/${hospital.image}`} alt={hospital.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </motion.div>
  );
};

const MapContainer = () => {
  const [hospitalLocations, setHospitalLocations] = useState([]);

  useEffect(() => {
    const fetchHospitalLocations = async () => {
      try {
        // Fetch hospital data from an API or local data source
        // For demo purposes, we're using a local array
        const hospitals = [
          { name: "Hospital 1", location: "Location 1", image: "hospital1.jpg", description: "Description of Hospital 1" },
          { name: "Hospital 2", location: "Location 2", image: "hospital2.jpg", description: "Description of Hospital 2" },
          { name: "Hospital 3", location: "Location 3", image: "hospital3.jpg", description: "Description of Hospital 3" },
        ];
        setHospitalLocations(hospitals);
      } catch (error) {
        console.error("Failed to fetch hospital locations:", error);
      }
    };
    fetchHospitalLocations();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {hospitalLocations.map((hospital, index) => (
        <HospitalSection key={index} hospital={hospital} />
      ))}
    </div>
  );
};

export default MapContainer;
