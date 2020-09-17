import React from "react";
import BoxWeather from "./BoxWeather";
import { CircularProgress, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const loading = useSelector((state) => state.loading);
  const downloadError = useSelector((state) => state.downloadError);
  if (downloadError === "request failed") return (
    <Typography variant="h2" align="center" color="error">
    City not found
  </Typography>
  );
   else if(downloadError === "Failed to access geolocation")
  return (
  <Typography variant="h2" align="center" color="error">
  Failed to access geolocation
</Typography>
)
    
  else if(loading) return (
    <Grid container justify = 'center'>
      <CircularProgress size = {60}/>
    </Grid>
    
  ) 
  else return(<BoxWeather />);
};

export default WeatherInfo;
