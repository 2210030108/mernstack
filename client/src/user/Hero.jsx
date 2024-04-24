import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import img from '../home/departments/hero.png';
const Hero = () => {
  const theme = useTheme();

  return (
    <Box
      className="hero container"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: theme.spacing(4),
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="banner"
        sx={{ textAlign: 'center' }}
      >
        <Typography variant="h2" component="h1">
          
        </Typography>
        <Typography variant="body1" sx={{ mt: theme.spacing(2) }}>
        MYStudentClinic is an advanced healthcare center devoted to offering extensive medical services with empathy and proficiency. Our team of proficient experts is dedicated to delivering individualized care customized to meet every patient's requirements. At MYStudentClinic, we place your health and wellness at the forefront, guaranteeing a seamless path toward achieving optimal well-being.






        </Typography>
      </Box>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="banner"
        sx={{ mt: theme.spacing(4) }}
      >
        <img src={img} alt="hero" className="animated-image" />
        {/* Ensure you have the rights to use any images you include */}
      </Box>
    </Box>
  );
};

export default Hero;
