import React from "react";
import BoxWeather from "../BoxWeather";
import { CircularProgress, Grid, Typography } from "@material-ui/core";

const WeatherInfo = ({loading, downloadError}) => {
  if (loading)
    return (
      <Grid container justify="center">
        <CircularProgress size={60} />
      </Grid>
    );
  else if (
    downloadError
  )
    return (
      <Typography variant="h2" align="center" color="error">
        {downloadError}
      </Typography>
    );
  else return <BoxWeather />;
};

export default WeatherInfo;
