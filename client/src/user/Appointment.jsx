import React from "react";
import Hero from "./Hero";
import AppointmentForm from "./AppointmentForm";

const Appointment = () => {
  // Mock user object
  const user = {
    id: "65d0bc360c824956285cda07", 
    name: "sairocky656",
   
  };

  return (
    <>
      <Hero
        title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm user={user}/>
    </>
  );
};

export default Appointment;
