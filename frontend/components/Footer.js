import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
        position: 'fixed', // Fixa o footer na parte inferior
        bottom: 0, // Posiciona o footer na parte inferior da janela
        left: 0,
        zIndex: -100, // Garante que o footer esteja acima de outros elementos
      }}
    >
      <Typography variant="body2">
        © 2024 Meu Dashboard. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
