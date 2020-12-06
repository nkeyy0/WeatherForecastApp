import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link as LinkMaterial } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  newUserRegistration,
  newUserRegistrationFailed,
  newUserRegistrationSuccess,
} from "../../actions";
import { ErrorsCheck } from "../../helpers/index";
import { ErrorDescription } from "../../helpers/index";


const NotFound = () => {
  return (
    <Container component="main" maxWidth="xs">
     <Typography variant = 'h1' align = 'center'>404</Typography>
     <Typography variant = 'h4' align = 'center'>Ooops!!!</Typography>
     <Typography variant = 'h6' align = 'center'>That page doesn't exist or unavailable</Typography>
     <Typography variant = 'h6' align = 'center'><Link to = '/' style = {{textDecoration: 'none'}}>Back to home</Link></Typography>
    </Container>
  );
};

export default NotFound;
