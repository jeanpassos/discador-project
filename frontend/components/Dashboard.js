import React from 'react';
import { Grid, Box, Typography, Card, CardContent } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const metrics = [
    { icon: AttachMoneyIcon, label: 'Revenue', value: '$6,200', percentage: '40.9%' },
    { icon: BarChartIcon, label: 'Conversion Rate', value: '2.49%', percentage: '84.7%' },
    { icon: TrendingUpIcon, label: 'Sessions', value: '44K', percentage: '-23.6%' },
    { icon: PeopleIcon, label: 'Users', value: '26K', percentage: '12.4%' },
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Métricas Recentes
        </Typography>
        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <Card>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <metric.icon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Box>
                      <Typography variant="h6">{metric.label}</Typography>
                      <Typography variant="h4">{metric.value}</Typography>
                      <Typography color="textSecondary">{metric.percentage}</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
