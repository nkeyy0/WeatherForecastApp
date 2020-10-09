import React, { useState } from "react";
import { Input, TextField, Button, Grid, Typography } from "@material-ui/core";
import Registration from "../Registration";
import { Link, BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserEmail, UserLogin, UserLoginFailed, UserLoginSuccess } from "../../actions";
import jwt_decode from "jwt-decode";
// var decoded = jwt_decode(token);

const Login = ({ errorLogin, isLogin }) => {
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
  const LoginInfo = {
    email: LoginInput,
    password: PassInput,
  };
  if(isLogin) {
    return <Redirect to = "/weather" />
  }
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
      </Grid>
    </form>
  );
};

export default Login;
