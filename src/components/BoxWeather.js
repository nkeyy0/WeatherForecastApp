import React from "react";
import firstLetterToUpperCase from "../convert/firstLetterToUpperCase";
import convertWindSpeed from "../convert/convertWindSpeed";
import Box from "@material-ui/core/Box";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Typography, Grid, Container } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import getSunrise from "../convert/getSunrise";
import { useSelector } from "react-redux";

const BoxWeather = () => {
  const descriptionWeather = useSelector((state) => state.descriptionWeather);
  const cityName = useSelector((state) => state.cityName);
  const countryName = useSelector((state) => state.countryName);
  const temperature = useSelector((state) => state.temperature);
  const humidity = useSelector((state) => state.humidity);
  const windSpeed = useSelector((state) => state.windSpeed);
  const visibility = useSelector((state) => state.visibility);
  const pressure = useSelector((state) => state.pressure);
  const sunrise = useSelector((state) => state.sunrise);
  const sunset = useSelector((state) => state.sunset);
  const weatherImage = useSelector((state) => state.weatherImage);

  return (
    <Box align="center">
      {cityName && countryName ? (
        <Container>
          <Typography variant="h2" color="textPrimary">
            <LocationOnIcon></LocationOnIcon>
            {cityName}, {countryName}
          </Typography>
          <br />
          <Grid container justify = "center" spacing = {2} alignItems = "baseline">
            <Grid item ><img src={`${weatherImage}`} /></Grid>
            <Grid item >{temperature ? (
            <Typography variant="h4" display="inline">
              {temperature} &#8451;
            </Typography>
          ) : null}</Grid>
          
          </Grid>
        </Container>
      ) : null}
      {descriptionWeather ? (
        <Typography variant="h4">
          {firstLetterToUpperCase(descriptionWeather)}
        </Typography>
      ) : null}
      <Grid container spacing={4} justify="center" direction="row">
        <Grid item item xs={8} sm={2}>
          {humidity ? (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Humidity</Typography>
              {humidity} %
            </Typography>
          ) : null}
        </Grid>
        <Grid item item xs={8} sm={2}>
          {windSpeed ? (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Wind speed</Typography>
              {convertWindSpeed(windSpeed)} M/s
            </Typography>
          ) : null}
        </Grid>
        <Grid item item xs={8} sm={2}>
          {visibility ? (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Visibility</Typography> {visibility} km
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={8} sm={2}>
          {pressure ? (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Pressure</Typography> {pressure} hPa
            </Typography>
          ) : null}
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="center">
        <Grid item xs={8} sm={4}>
          {sunrise ? (
            <Typography variant="body1" color="textSecondary">
              {getSunrise(sunrise)}
              <Grid item>
                <img src="https://img.icons8.com/cotton/64/000000/sunrise--v1.png" />
              </Grid>
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={8} sm={4}>
          {sunset ? (
            <Typography variant="body1" color="textSecondary">
              {getSunrise(sunset)}
              <Grid item>
                <img src="https://img.icons8.com/cotton/64/000000/sunset--v2.png" />
              </Grid>
            </Typography>
          ) : null}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxWeather;
