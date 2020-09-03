import React from "react";
import CitySearchField from "./CitySearchField";
import WeatherInfo from "./WeatherInfo";
import { Card, Typography, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadDataFromOpenWeatherMapByCoord, DisplayInfoByGeo } from '../actions/index';


const App = () =>  {
    const geoLatitude = useSelector(state => state.geoLatitude);
    const geoLongitude = useSelector(state => state.geoLongitude);
    const dispatch = useDispatch();
    useEffect( ()=> {
       dispatch(DisplayInfoByGeo())   
    }, [dispatch]);
    return (
      <Container maxWidth="md">
        <Card>
          <Grid container direction = "column" spacing = {4}>
            <Grid item>
            <Typography variant="h1" align="center">
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
  }


export default App;
