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


const MyProfile = ({isLogin, cities}) => {
  if(!cities){
    return (<Typography>Cities not found</Typography>)
  }
    return(
        <Container component="main" maxWidth="xs">
      <Typography variant = 'h4'>My profile</Typography>
    <Typography>{cities.map((value) => {
      return <p>{value.name}</p>
    })}</Typography>
    </Container>
    )
}

export default MyProfile;