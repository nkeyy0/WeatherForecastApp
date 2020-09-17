import React from "react";
import { firstLetterToUpperCase } from "../../convert/index";
import { convertWindSpeed } from "../../convert/index";
import Box from "@material-ui/core/Box";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Typography, Grid, Container } from "@material-ui/core";
import { getSunrise } from "../../convert/index";
import { getSunset } from "../../convert/index";
import { useSelector } from "react-redux";

const BoxWeather = ({
  descriptionWeather,
  cityName,
  countryName,
  temperature,
  humidity,
  windSpeed,
  visibility,
  pressure,
  sunrise,
  sunset,
  weatherImage,
}) => {
  return (
    <Box align="center">
      {cityName && countryName && (
        <Container>
          <Typography variant="h2" color="textPrimary">
            <LocationOnIcon></LocationOnIcon>
            {cityName}, {countryName}
          </Typography>
          <br />
          <Grid container justify="center" spacing={2} alignItems="baseline">
            <Grid item>
              <img src={`${weatherImage}`} />
            </Grid>
            <Grid item>
              {temperature && (
                <Typography variant="h4" display="inline">
                  {temperature} &#8451;
                </Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      )}
      {descriptionWeather && (
        <Typography variant="h4">
          {firstLetterToUpperCase(descriptionWeather)}
        </Typography>
      )}
      <Grid container spacing={4} justify="center" direction="row">
        <Grid item item xs={8} sm={4}>
          {humidity && (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Humidity</Typography>
              {humidity} %
            </Typography>
          )}
        </Grid>
        <Grid item item xs={8} sm={4}>
          {windSpeed && (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Wind speed</Typography>
              {convertWindSpeed(windSpeed)} M/s
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="center" direction="row">
        <Grid item item xs={8} sm={4}>
          {visibility && (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Visibility</Typography> {visibility} km
            </Typography>
          )}
        </Grid>
        <Grid item xs={8} sm={4}>
          {pressure && (
            <Typography variant="body1" color="textSecondary">
              <Typography variant="h6">Pressure</Typography> {pressure} hPa
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="center">
        <Grid item xs={8} sm={4}>
          {sunrise && (
            <Typography variant="body1" color="primary">
              {getSunrise(sunrise)}
              <Grid item>
                <img src="https://img.icons8.com/cotton/64/000000/sunrise--v1.png" />
              </Grid>
            </Typography>
          )}
        </Grid>
        <Grid item xs={8} sm={4}>
          {sunset && (
            <Typography variant="body1" color="primary">
              {getSunset(sunset)}
              <Grid item>
                <img src="https://img.icons8.com/cotton/64/000000/sunset--v2.png" />
              </Grid>
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default BoxWeather;
