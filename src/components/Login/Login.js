// import React, { useState } from "react";
// import { CircularProgress, TextField, Button, Grid, Typography } from "@material-ui/core";
// import Registration from "../Registration";
// import {
//   Link,
//   BrowserRouter as Router,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import {
//   setUserEmail,
//   UserLogin,
//   UserLoginFailed,
//   UserLoginSuccess,
//   loadDataFromOpenWeatherMap,
//   WeatherInfoAfterLogin,
// } from "../../actions";
// import jwt_decode from "jwt-decode";
// // var decoded = jwt_decode(token);

// const Login = ({ errorLogin, isLogin, loading }) => {
//   const dispatch = useDispatch();
//   const [LoginInput, LoginChangeInput] = useState("");
//   const [PassInput, PassChangeInput] = useState("");
//   const handleInputChange = (event) => {
//     event.preventDefault();
//     LoginChangeInput(event.target.value);
//   };
//   const handlePassChange = (event) => {
//     event.preventDefault();
//     PassChangeInput(event.target.value);
//   };
//   const handleOnSubmit = (event) => {
//     event.preventDefault();
//     dispatch(setUserEmail(LoginInput));
//     dispatch(UserLogin(LoginInfo));
//   };
//   const LoginInfo = {
//     email: LoginInput,
//     password: PassInput,
//   };
//   if (isLogin) {
//     return <Redirect to="/weather" />;
//   }
//   if (loading)
//     return (
//       <Grid container justify="center">
//         <CircularProgress size={60} />
//       </Grid>
//     );
//   return (
//     <form onSubmit={handleOnSubmit}>
//       <Grid
//         container
//         justify="center"
//         direction="column"
//         spacing={4}
//         alignItems="center"
//       >
//         {errorLogin && (
//           <Grid item>
//             <Typography color="error" variant="h5">
//               {errorLogin}
//             </Typography>
//           </Grid>
//         )}
//         <Grid item>
//           <TextField
//             label="Login or Email"
//             variant="outlined"
//             onChange={handleInputChange}
//           />
//         </Grid>
//         <Grid item>
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             onChange={handlePassChange}
//           />
//         </Grid>
//         <Grid item>
//           <Button
//             fullWidth
//             variant="contained"
//             color="secondary"
//             type="submit"
//             size="large"
//           >
//             Sign In
//           </Button>
//         </Grid>
//         <Grid item>
//           <Link to="/registration">Create new account</Link>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default Login;

import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link as LinkMaterial } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { CircularProgress } from "@material-ui/core";
import { Link, BrowserRouter as Router, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserEmail, UserLogin } from "../../actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <LinkMaterial color="inherit" href="https://material-ui.com/">
        Weather App
      </LinkMaterial>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({ errorLogin, isLogin, loading }) {
  const classes = useStyles();
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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePassChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <LinkMaterial href="#" variant="body2">
                Forgot password?
              </LinkMaterial>
            </Grid>
            <Grid item>
              <LinkMaterial href="#" variant="body2">
                <Link to="/registration" style = {{textDecoration: 'none'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </LinkMaterial>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
