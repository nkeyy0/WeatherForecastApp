import React from "react";
import firstLetterToUpperCase from "../convert/firstLetterToUpperCase";
import convertWindSpeed from "../convert/convertWindSpeed";
import Box from "@material-ui/core/Box";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Typography, Grid } from "@material-ui/core";
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
        <Typography variant="h2" align="center" color="textPrimary">
          <LocationOnIcon></LocationOnIcon>
          {cityName}, {countryName}
          <br />
          <img src={`${weatherImage}`} />
          {temperature ? (
            <Typography variant="h4" display="inline">
              {temperature} &#8451;
            </Typography>
          ) : null}
        </Typography>
      ) : null}
      {descriptionWeather ? (
        <Typography variant="h4">
          {firstLetterToUpperCase(descriptionWeather)}
        </Typography>
      ) : null}
      <Grid container spacing={4} justify="center" direction="row">
        <Grid item>
          {humidity ? (
            <Typography variant="h6" color="textSecondary">
              Humidity: {humidity} %
            </Typography>
          ) : null}
        </Grid>
        <Grid item>
          {windSpeed ? (
            <Typography variant="h6" color="textSecondary">
              Wind speed: {convertWindSpeed(windSpeed)} M/s
            </Typography>
          ) : null}
        </Grid>
        <Grid item>
          {visibility ? (
            <Typography variant="h6" color="textSecondary">
              Visibility: {visibility} km
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={4}>
          {pressure ? (
            <Typography variant="h6" color="textSecondary">
              Pressure : {pressure} hPa
            </Typography>
          ) : null}
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="center">
        <Grid item xs={3}>
          {sunrise ? (
            <Typography variant="h6" color="textSecondary">
              {getSunrise(sunrise)}
              <Grid item>
                <img src="https://img.icons8.com/cotton/64/000000/sunrise--v1.png" />
              </Grid>
            </Typography>
          ) : null}
        </Grid>
        <Grid item xs={3}>
          {sunset ? (
            <Typography variant="h6" color="textSecondary">
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
