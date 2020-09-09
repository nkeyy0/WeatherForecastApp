import React from "react";
import BoxWeather from "./BoxWeather";
import { CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const loading = useSelector((state) => state.loading);
  const downloadError = useSelector((state) => state.downloadError);
  if (downloadError === "404") return (
    <Typography variant="h2" align="center" color="error">
    City not found
  </Typography>
  );
   else if(downloadError === "You have denied access to geolocation")
  return (
  <Typography variant="h2" align="center" color="error">
  You have denied access to geolocation
</Typography>
)
    
  else if(loading) return (
    <CircularProgress />
  ) 
  else return(<BoxWeather />);
};

export default WeatherInfo;
