import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SunriseIcon from '@mui/icons-material/Brightness5';
import SunsetIcon from '@mui/icons-material/Brightness6';

const SunriseSunset = ({ sunrise, sunset }) => (
  <Grid item xs={4}>
    <Card sx={{ width: '250%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <SunriseIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          Sunrise: {sunrise !== null ? sunrise : "Fetching sunrise time..."}
        </Typography>
        <SunsetIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          Sunset: {sunset !== null ? sunset : "Fetching sunset time..."}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default SunriseSunset;
