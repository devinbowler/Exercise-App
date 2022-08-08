import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box style={{  position: 'relative', zIndex: '1' }} sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="blue" fontWeight="600" fontSize="26px">Fitness Application</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Never, Back <br />
      Down
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      View our wide array of exercises available!
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: 'blue', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" style={{ margin: '-120px 50px' }}/>
  </Box>
);

export default HeroBanner;
