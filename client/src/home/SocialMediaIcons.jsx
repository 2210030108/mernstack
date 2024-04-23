import React from 'react';
import { IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, Pinterest } from '@mui/icons-material';

const SocialMediaIcons = () => {
    return (
        <div>
            <IconButton color="primary" aria-label="facebook" component="a" href="#">
                <Facebook fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="instagram" component="a" href="#">
                <Instagram fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="twitter" component="a" href="#">
                <Twitter fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="linkedin" component="a" href="#">
                <LinkedIn fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="youtube" component="a" href="#">
                <YouTube fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="pinterest" component="a" href="#">
                <Pinterest fontSize="large" />
            </IconButton>
            {/* Add more social media icons as needed */}
        </div>
    );
};

export default SocialMediaIcons;
