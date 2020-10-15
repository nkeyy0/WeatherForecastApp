import React, { useState } from "react";
import { CircularProgress, TextField, Button, Grid, Typography } from "@material-ui/core";
import Registration from "../Registration";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setUserEmail,
  UserLogin,
  UserLoginFailed,
  UserLoginSuccess,
  loadDataFromOpenWeatherMap,
  WeatherInfoAfterLogin,
} from "../../actions";
import jwt_decode from "jwt-decode";
// var decoded = jwt_decode(token);

const Login = ({ errorLogin, isLogin, loading }) => {
  const dispatch = useDispatch();
  const [LoginInput, LoginChangeInput] = useState("");
  const [PassInput, PassChangeInput] = useState("");
  const handleInputChange = (event) => {
    event.preventDefault();
    LoginChangeInput(event.target.value);
  };
  const handlePassChange = (event) => {
    event.preventDefault();
    PassChangeInput(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(setUserEmail(LoginInput));
    dispatch(UserLogin(LoginInfo));
  };
  const onGoogleSignInClick = async (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
      console.log(user);
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
    });
    console.log(user);
    console.log(user.displayName);
    dispatch(UserLoginSuccess(user.displayName));
  }
  const LoginInfo = {
    email: LoginInput,
    password: PassInput,
  };
  if (isLogin) {
    return <Redirect to="/weather" />;
  }
  if (loading)
    return (
      <Grid container justify="center">
        <CircularProgress size={60} />
      </Grid>
    );
  return (
    <form onSubmit={handleOnSubmit}>
      <Grid
        container
        justify="center"
        direction="column"
        spacing={4}
        alignItems="center"
      >
        {errorLogin && (
          <Grid item>
            <Typography color="error" variant="h5">
              {errorLogin}
            </Typography>
          </Grid>
        )}
        <Grid item>
          <TextField
            label="Login or Email"
            variant="outlined"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            onChange={handlePassChange}
          />
        </Grid>
        <Grid item>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
          >
            Sign In
          </Button>
        </Grid>
        <Grid item>
          <Link to="/registration">Create new account</Link>
        </Grid>
        <Grid item>
          <Button onClick = {onGoogleSignInClick}>Sign in with Google</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
