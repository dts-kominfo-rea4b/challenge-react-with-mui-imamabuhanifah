// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import { Box, Divider } from '@mui/material';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Box>
        <h1>Call a Friend</h1>
        <p>Your friendly Contact App</p>
        <Divider/>
      </Box>
    </>
  );
};

export default Header;
