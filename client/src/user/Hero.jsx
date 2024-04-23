import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = ({ title, imageUrl }) => {
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
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mt: theme.spacing(2) }}>
          ZeeCare Medical Institute is a state-of-the-art facility dedicated
          to providing comprehensive healthcare services with compassion and
          expertise. Our team of skilled professionals is committed to
          delivering personalized care tailored to each patient's needs. At
          ZeeCare, we prioritize your well-being, ensuring a harmonious
          journey towards optimal health and wellness.
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
        <img src={imageUrl} alt="hero" className="animated-image" />
        {/* Ensure you have the rights to use any images you include */}
      </Box>
    </Box>
  );
};

export default Hero;
