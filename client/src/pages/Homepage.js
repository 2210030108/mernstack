import React from "react";
import Navbar from "../home/NavBar";
import ContentPage from "../home/ContentPage";
import HealthLibrary from "../home/HealthLibrary";
import FindLocation from "../home/FindLocation";
import GetCare from "../home/GetCare";
import WhyChooseStudentsClinics from "../home/WhyChooseStudentsClinics";
import SocialMediaIcons from "../home/SocialMediaIcons";
import Footer from "../home/Footer";
import { motion } from 'framer-motion';
import MessageForm from "../user/MessageForm";

const Homepage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Navbar />
      <ContentPage />
      <HealthLibrary />
      <FindLocation />
      <GetCare />
      <WhyChooseStudentsClinics />
      <MessageForm/>
      <SocialMediaIcons />
      <Footer />
      </motion.div>
  );
};

export default Homepage;
