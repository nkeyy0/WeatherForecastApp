import React from "react";
import BoxWeather from "./BoxWeather";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import {
  ERROR_DOWNLOAD_FROM_OPEN_WEATHER_MAP,
  ERROR_DOWNLOAD_FROM_WEATHERSTACK,
} from "../constants/constants";

const WeatherInfo = () => {
  const loading = useSelector((state) => state.loading);
  const downloadError = useSelector((state) => state.downloadError);
  if (
    downloadError === ERROR_DOWNLOAD_FROM_OPEN_WEATHER_MAP ||
    downloadError === ERROR_DOWNLOAD_FROM_WEATHERSTACK
  )
    return (
      <Typography variant="h2" align="center" color="error">
        City not found
      </Typography>
    );
  else if (downloadError === "Failed to access geolocation")
    return (
      <Typography variant="h2" align="center" color="error">
        Failed to access geolocation
      </Typography>
    );
  else if (loading)
    return (
      <Grid container justify="center">
        <CircularProgress size={60} />
      </Grid>
    );
  else return <BoxWeather />;
};

export default WeatherInfo;
