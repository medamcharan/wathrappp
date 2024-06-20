import React, { useState } from "react";
import Temperature from './Temp';
import WindSpeed from './Ws';
import WeatherCondition from './Wc';
import SunriseSunset from './Rise';
import Humidity from "./Humidity";
import Coordinates from "./Coordinates";
import './App.css'; 
import Grid from '@mui/material/Grid';


const Weather = () => {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState("");
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [coordinates, setCoordinates] = useState({ lon: null, lat: null });

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4594e42d223f012c15fc87028b93c70&units=metric`)
      .then(response => response.json())
      .then(data => {
        if (data.main) {
          setTemp(data.main.temp);
          setWindSpeed(data.wind.speed);
          setWeatherCondition(data.weather[0].description);
          setSunrise(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
          setSunset(new Date(data.sys.sunset * 1000).toLocaleTimeString());
          setHumidity(data.main.humidity);
          setCoordinates({ lon: data.coord.lon, lat: data.coord.lat });
        } else {
          setTemp("City not found");
          setWindSpeed(null);
          setWeatherCondition("");
          setSunrise(null);
          setSunset(null);
          setHumidity(null);
          setCoordinates({ lon: null, lat: null });
        }
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        setTemp("Error fetching data");
        setWindSpeed(null);
        setWeatherCondition("");
        setSunrise(null);
        setSunset(null);
        setHumidity(null);
        setCoordinates({ lon: null, lat: null });
      });
  };

  return (
    <div className="weather-app">
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type='text'
          value={city}
          placeholder='Enter city'
          onChange={handleInputChange}
          className="input"
        />
        <input
          type='submit'
          value='Get Weather'
          className="submit-btn"
        />
      </form>
      <Grid container spacing={2} className="grid-container">
        <Grid item xs={12} sm={4}  lg={2} className="grid-item">
          <Temperature temp={temp} />
        </Grid>
        <Grid item xs={12} sm={4} lg={2} className="grid-item">
          <WindSpeed windSpeed={windSpeed} />
        </Grid>
        <Grid item xs={12} sm={4} lg={2} className="grid-item">
          <WeatherCondition weatherCondition={weatherCondition} />
        </Grid>
        <Grid item xs={12} sm={4}  lg={2} className="grid-item">
          <SunriseSunset sunrise={sunrise} sunset={sunset} />
        </Grid>
        <Grid item xs={12} sm={4}  lg={2} className="grid-item">
          <Humidity humidity={humidity} />
        </Grid>
        <Grid item xs={12} sm={4}  lg={2} className="grid-item">
          <Coordinates lon={coordinates.lon} lat={coordinates.lat} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Weather;
