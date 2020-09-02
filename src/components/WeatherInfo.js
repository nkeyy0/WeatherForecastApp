import React from "react";
import BoxWeather from "./BoxWeather";
import { CircularProgress, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

const WeatherInfo = () => {
  const loading = useSelector((state) => state.loading);
  const downloadError = useSelector((state) => state.downloadError);
  return downloadError === "404" ? (
    <Typography variant="h2" align = "center" color = "error"> City not found</Typography>
  ) : loading ? (
    <CircularProgress />
  ) : (
    <BoxWeather />
  );
};

export default WeatherInfo;
