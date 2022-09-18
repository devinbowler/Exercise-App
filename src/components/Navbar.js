import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import setDarkMode from '../pages/Home';
import darkMode from '../pages/Home';
import "../index.css";
import '../App.css';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" position="fixed" style={{ marginTop: "-200px", zIndex: '3' }} justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <div className="bar"></div>
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px', zIndex: '3' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      marginBottom="15px"
      fontSize="24px"
      alignItems="flex-end"
    >
      <a href="#" id="changeHome">Home</a>  
      <a href="#exercises" id="changeExercises">Exercises</a>
      <a href="#" id="workouts">My Workouts</a>
      <div className="themeToggle">
        <button onClick={console.log('yo')} class="fas fa-toggle-on"></button>
      </div>
    </Stack>
  </Stack>
);


export default Navbar;
