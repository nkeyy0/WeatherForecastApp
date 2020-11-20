import React from "react";
import Navigation from "./Navigation";
import { Card, Typography, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CardContent } from "@material-ui/core";
import Login from "./Login";
import Registration from "./Registration";
import MyProfile from './MyProfile';
import WeatherPage from "./WeatherPage";
import TemperatureChart from './TemperatureChart'
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);
  // if (!localStorage.getItem("persist:root") && isLogin) {
  //   dispatch(loadGeolocationFromOpenWeatherMap());
  // }

  return (
    <Router>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Navigation />
        </Grid>
        <Container maxWidth="md">
          <Card>
            <CardContent>
              <Route exact path="/registration" component={Registration} />
              {/* <Route exact path = '/myProfile' component = {MyProfile} /> */}
              <Route exact path="/TemperatureChart" component =  {isLogin ? TemperatureChart : Login}/>
              <Route exact path="/" component = {isLogin ? WeatherPage : Login}>
              </Route>
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </Router>
  );
};

export default App;

