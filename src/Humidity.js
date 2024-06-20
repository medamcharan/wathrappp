import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import HumidityIcon from '@mui/icons-material/Opacity';

const Humidity = ({ humidity }) => (
  <Grid item xs={4}>
    <Card sx={{ width: '250%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <HumidityIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          Humidity: {humidity !== null ? `${humidity}%` : "Fetching humidity..."}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Humidity;
