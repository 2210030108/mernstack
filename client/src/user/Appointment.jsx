import React from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";

const Appointment = () => {
  // Retrieve URL parameters
  const { userId, userName } = useParams();

  // Create a user object using the retrieved parameters
  const user = {
    id: userId,
    name: userName,
  };

  return (
    <>
      <Hero
        title={"Schedule Your Appointment | MyStudentClinic Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm user={user}/>
    </>
  );
};

export default Appointment;
