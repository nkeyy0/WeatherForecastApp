import React from "react";
import CitySearchField from "./CitySearchField";
import WeatherInfo from "./WeatherInfo";
import { Card, Typography, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadDataFromOpenWeatherMap,
  DisplayInfoByGeo,
  setTimeRequest,
  selectApi
} from "../actions/index";

const App = () => {
  const cityName = useSelector(state => state.cityName);
  const geoLatitude = useSelector((state) => state.geoLatitude);
  const geoLongitude = useSelector((state) => state.geoLongitude);
  const dispatch = useDispatch();
  const dateCompare = Date.now();
  console.log(dateCompare);

   if (!localStorage.getItem('persist:root') || !JSON.parse(localStorage.getItem('persist:root')).hasOwnProperty('cityName')){
    useEffect(() => {
      dispatch(DisplayInfoByGeo());
    }, [dispatch]);
  }

  
    
  return (
    <Container maxWidth="md">
      <Card>
        <Grid container direction="column" spacing={4} wrap = 'nowrap'>
          <Grid item justify = 'center' zeroMinWidth wrap = 'nowrap'>
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
