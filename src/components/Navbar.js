import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack 
    direction="row" 
    justifyContent="space-around" 
    // align-items = "center"
    height= "130px"
    sx={{
      gap: { sm: '123px', xs: '40px' }, 
      mt: { sm: '0px', xs: '0px' }, 
      justifyContent: 'none',
       alignItems :'center',
      backgroundColor: 'orange', // Set background color to orange
      padding: '10px 20px', // Optional: Add some padding for better spacing
    }}
  >
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
