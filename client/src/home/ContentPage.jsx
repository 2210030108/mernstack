/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import img1 from './departments/about.png';
import img2 from './departments/contact.png';
import img3 from './departments/services.png';
import img6 from './departments/signin.png';
import img7 from './departments/whoweare.png';

const images = {
  about: img1,
  contact: img2,
  services: img3,
  signIn: img6,
  whoWeAre: img7
  // Add more image URLs as needed
};

const ContentPage = () => {
 

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === Object.keys(images).length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images) {
    return <div>No images found.</div>;
  }

  return (
    <Grid container className="flex h-screen">
      
      <Grid item xs={6} className="full-screen">
        <img
          src={images[Object.keys(images)[currentImageIndex]]}
          alt={`Image ${currentImageIndex + 1}`}
          className="full-screen-image"
        />
      </Grid>
    </Grid>
    
  );
};

export default ContentPage;
