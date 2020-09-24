import React, { useState } from "react";
import { Input, TextField, Button, Grid, Typography} from "@material-ui/core";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


const Registration = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <Grid
        container
        justify="center"
        direction="column"
        spacing={4}
        alignItems="center"
      >
        <Grid item>
          <TextField
            label="First name"
            variant="outlined"
            
          />
        </Grid>
        <Grid item>
          <TextField
            label="Surname"
            variant="outlined"
            
          />
        </Grid>
        <Grid item>
          <TextField
            label="Patronymic"
            variant="outlined"
            
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            variant="outlined"
            
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password confirm"
            variant="outlined"
            type="password"
            
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
            Register
          </Button>
        </Grid>
        <Grid item>
        <Link to="/login">Back to authorization</Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Registration;
