import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AirIcon from '@mui/icons-material/Air';

const WindSpeed = ({ windSpeed }) => (
  <Grid item xs={4}>
    <Card sx={{ width: '250%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <AirIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          Wind Speed: {windSpeed !== null ? `${windSpeed} m/s` : "Fetching wind speed..."}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default WindSpeed;
