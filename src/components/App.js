import React from "react";
import Navigation from "./Navigation";
import { Card, Typography, Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { CardContent } from "@material-ui/core";
import Login from "./Login";
import Registration from "./Registration";
import MyProfile from "./MyProfile";
import CssBaseline from "@material-ui/core/CssBaseline";
import WeatherPage from "./WeatherPage";
import TemperatureChart from "./TemperatureChart";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import NotFound from "./NotFound";
import Copyright from "./Copyright";
import MainPage from "./MainPage";

const App = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);
  // if (!localStorage.getItem("persist:root") && isLogin) {
  //   dispatch(loadGeolocationFromOpenWeatherMap());
  // }

  return (
    <Router>
      <CssBaseline />

      <Navigation />

      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Switch>
            {isLogin ? <Route
              exact
              path="/"
              component={WeatherPage}
            /> : <Route
            exact
            path="/"
            component={MainPage}
          />}
            <Route exact path="/registration" component={Registration} />
            <Route exact path = '/login' component = {Login}/>
            {isLogin ? <Route
              exact
              path="/TemperatureChart"
              component={TemperatureChart}
            /> : <Route
            exact
            path="/"
            component={Login}
          />}
            <Route component = {NotFound}></Route>
            </Switch>
            <Copyright/>
          </CardContent>
          
        </Card>
        
      </Container>
    </Router>
  );
};

export default App;
