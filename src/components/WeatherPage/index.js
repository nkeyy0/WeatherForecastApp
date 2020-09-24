import React from "react";
import CitySearchField from "../CitySearchField";
import WeatherInfo from "../WeatherInfo";
import { Card, Grid } from "@material-ui/core";
import { CardContent } from "@material-ui/core";




const WeatherPage = () => {
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