import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Box, IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import RobotIcon from '@mui/icons-material/SmartToy';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box
      sx={{
        width: isExpanded ? 200 : 70, // Alterna a largura do sidebar
        height: '100vh',
        backgroundColor: '#2E3B55',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 2,
        transition: 'width 0.3s', // Transição suave
        boxShadow: '4px 0 10px rgba(0, 0, 0, 0.5)',
      }}
    >
      <IconButton
        onClick={toggleSidebar}
        sx={{
          color: 'white',
          alignSelf: isExpanded ? 'flex-end' : 'center',
          marginBottom: 2,
        }}
      >
        {isExpanded ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>

      <List>
        <Link href="/" passHref>
          <ListItem
            button
            component="a"
            sx={{
              width: '90%',
              borderRadius: 1,
              marginBottom: 1,
              '&:hover': {
                backgroundColor: '#1C253A',
              },
              justifyContent: isExpanded ? 'flex-start' : 'center',
            }}
          >
            <ListItemIcon sx={{ color: '#FFD700' }}>
              <DashboardIcon />
            </ListItemIcon>
            {isExpanded && (
              <ListItemText
                primary="Dashboard"
                sx={{ color: 'white', fontWeight: 500, fontSize: '1rem' }}
              />
            )}
          </ListItem>
        </Link>

        <Link href="/robo" passHref>
          <ListItem
            button
            component="a"
            sx={{
              width: '90%',
              borderRadius: 1,
              marginBottom: 1,
              '&:hover': {
                backgroundColor: '#1C253A',
              },
              justifyContent: isExpanded ? 'flex-start' : 'center',
            }}
          >
            <ListItemIcon sx={{ color: '#FF4500' }}>
              <RobotIcon />
            </ListItemIcon>
            {isExpanded && (
              <ListItemText
                primary="Robo"
                sx={{ color: 'white', fontWeight: 500, fontSize: '1rem' }}
              />
            )}
          </ListItem>
        </Link>

        <Link href="/relatorios" passHref>
          <ListItem
            button
            component="a"
            sx={{
              width: '90%',
              borderRadius: 1,
              marginBottom: 1,
              '&:hover': {
                backgroundColor: '#1C253A',
              },
              justifyContent: isExpanded ? 'flex-start' : 'center',
            }}
          >
            <ListItemIcon sx={{ color: '#1E90FF' }}>
              <AssessmentIcon />
            </ListItemIcon>
            {isExpanded && (
              <ListItemText
                primary="Relatórios"
                sx={{ color: 'white', fontWeight: 500, fontSize: '1rem' }}
              />
            )}
          </ListItem>
        </Link>

        <Link href="/settings" passHref>
          <ListItem
            button
            component="a"
            sx={{
              width: '90%',
              borderRadius: 1,
              marginBottom: 1,
              '&:hover': {
                backgroundColor: '#1C253A',
              },
              justifyContent: isExpanded ? 'flex-start' : 'center',
            }}
          >
            <ListItemIcon sx={{ color: '#32CD32' }}>
              <SettingsIcon />
            </ListItemIcon>
            {isExpanded && (
              <ListItemText
                primary="Settings"
                sx={{ color: 'white', fontWeight: 500, fontSize: '1rem' }}
              />
            )}
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};

export default Sidebar;
