import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';
import DashboardContent from './DashboardContent';
import { Box } from '@mui/material';

const DashboardPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar no topo */}
      <Navbar />

      <Box sx={{ display: 'flex', flex: 1 }}>
        {/* Sidebar à esquerda */}
        <Sidebar />

        {/* Conteúdo principal */}
        <Box sx={{ flexGrow: 1, padding: 3, overflowY: 'auto' }}>
          <DashboardContent />
        </Box>
      </Box>

      {/* Footer fixo na parte inferior */}
      <Footer />
    </Box>
  );
};

export default DashboardPage;
