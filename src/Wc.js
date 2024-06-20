import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import WeatherIcon from '@mui/icons-material/WbSunny';

const WeatherCondition = ({ weatherCondition }) => (
  <Grid item xs={4}>
    <Card sx={{ width: '250%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <WeatherIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          Condition: {weatherCondition !== "" ? weatherCondition : "Fetching weather condition..."}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default WeatherCondition;
