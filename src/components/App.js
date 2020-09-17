import React from "react";
import CitySearchField from "./CitySearchField/CitySearchField";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import { Card, Typography, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  loadGeolocationFromOpenWeatherMap
} from "../actions/index";

const App = () => {
  const dispatch = useDispatch();
  const dateCompare = Date.now();
  console.log(dateCompare);

  if (
    !localStorage.getItem("persist:root") 
  ) {
    dispatch(loadGeolocationFromOpenWeatherMap());
  }

  return (
    <Container maxWidth="md">
      <Card>
        <Grid container direction="column" spacing={4} wrap="nowrap">
          <Grid item justify="center" zeroMinWidth wrap="nowrap">
            <Typography variant="h3" align="center">
              Weather
            </Typography>
          </Grid>
          <Grid item>
            <CitySearchField />
          </Grid>
          <Grid item>
            <WeatherInfo />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default App;
