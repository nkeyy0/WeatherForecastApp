import React from "react";
import CitySearchField from "../CitySearchField";
import WeatherInfo from "../WeatherInfo";
import { Card, Grid } from "@material-ui/core";
import { CardContent, CircularProgress } from "@material-ui/core";
import {useSelector} from 'react-redux';
import { Redirect } from "react-router-dom";




const WeatherPage = () => {
  const isLogin = useSelector(state => state.auth.isLogin);
  const loading = useSelector(state => state.download.loading);
  if(loading){
    return (
      <Grid container justify="center">
        <CircularProgress size={60} />
      </Grid>
    );
  }
  else if(!isLogin) return <Redirect to = "/login"/>
    return (
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
        );
}

export default WeatherPage;