import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';

const DashboardContent = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Users
            </Typography>
            <Typography variant="h5">
              26K <PeopleIcon />
            </Typography>
            <Typography color="textSecondary">
              (-12.4%)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Income
            </Typography>
            <Typography variant="h5">
              $6,200 <AttachMoneyIcon />
            </Typography>
            <Typography color="textSecondary">
              (+40.9%)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Conversion Rate
            </Typography>
            <Typography variant="h5">
              2.49% <TrendingUpIcon />
            </Typography>
            <Typography color="textSecondary">
              (+84.7%)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Sessions
            </Typography>
            <Typography variant="h5">
              44K <BarChartIcon />
            </Typography>
            <Typography color="textSecondary">
              (-23.6%)
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DashboardContent;
