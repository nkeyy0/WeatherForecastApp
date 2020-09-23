import React from "react";
import CitySearchField from "./CitySearchField";
import WeatherInfo from "./WeatherInfo";
import Navigation from "./Navigation";
import { Card, Typography, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CardContent } from "@material-ui/core";
import Login from "./Login";
import { loadGeolocationFromOpenWeatherMap } from "../actions/index";

const App = () => {
  const dispatch = useDispatch();
  if (!localStorage.getItem("persist:root")) {
    dispatch(loadGeolocationFromOpenWeatherMap());
  }

  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Navigation />
      </Grid>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Login />
          </CardContent>
        </Card>
      </Container>
    </Grid>
  );
};

export default App;

{
  /* <Card>
      <CardContent>
        <Grid container direction="column" spacing={4} wrap="nowrap">
          <Grid item>
            <CitySearchField />
          </Grid>
          <Grid item>
            <WeatherInfo />
          </Grid>
        </Grid>
        </CardContent>
      </Card> */
}
