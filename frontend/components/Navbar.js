import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#333',
        boxShadow: 'none',
        
      }}
    >
      <Toolbar 
        sx={{ 
          minHeight: '40px !important', 
          padding: '0 16px', 
          display: 'flex', 
          justifyContent: 'space-between' 
          
        }}
      >
        <Typography variant="h6" noWrap component="div">
          Navbar
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
