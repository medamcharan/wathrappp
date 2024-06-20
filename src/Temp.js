import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';

const Temperature = ({ temp }) => (
  <Grid item xs={4}>
    <Card sx={{ width: '250%', backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardContent>
        <DeviceThermostatIcon />
        <Typography variant="body2" color="textSecondary" component="p">
          Temperature: {temp !== null ? `${temp} °C` : "Fetching temperature..."}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default Temperature;
