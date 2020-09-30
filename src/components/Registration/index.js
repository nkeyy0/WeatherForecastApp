import React, { useState } from "react";
import { Input, TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newUserRegistration } from "../../actions";

const Registration = () => {
  const dispatch = useDispatch();
  const [FirstNameInput, FirstNameChangeInput] = useState("");
  const [SurnameInput, SurnameChangeInput] = useState("");
  const [PatronymicInput, PatronymicChangeInput] = useState("");
  const [EmailInput, EmailChangeInput] = useState("");
  const [PasswordInput, PasswordChangeInput] = useState("");
  const [PasswordConfirmInput, PasswordConfirmChangeInput] = useState("");
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(newUserRegistration(regInfo));
  };
  const handleFirstName = (event) => {
    event.preventDefault();
    FirstNameChangeInput(event.target.value);
  };
  const handleSurname = (event) => {
    event.preventDefault();
    SurnameChangeInput(event.target.value);
  };
  const handlePatronymic = (event) => {
    event.preventDefault();
    PatronymicChangeInput(event.target.value);
  };
  const handleEmail = (event) => {
    event.preventDefault();
    EmailChangeInput(event.target.value);
  };
  const handlePassword = (event) => {
    event.preventDefault();
    PasswordChangeInput(event.target.value);
  };
  const handlePasswordConfirm = (event) => {
    event.preventDefault();
    PasswordConfirmChangeInput(event.target.value);
  };
  const regInfo = {
    name: FirstNameInput,
    surname: SurnameInput,
    patronymic: PatronymicInput,
    email: EmailInput,
    password: PasswordInput,
    passwordConfirm: PasswordConfirmInput,
  };
  console.log(regInfo);
  return (
    <form onSubmit={handleOnSubmit} method="post">
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
            name="First name"
            variant="outlined"
            onChange={handleFirstName}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Surname"
            name="Surname"
            variant="outlined"
            onChange={handleSurname}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Patronymic"
            name="Patronymic"
            variant="outlined"
            onChange={handlePatronymic}
          />
        </Grid>
        <Grid item>
          <TextField label="Email" variant="outlined" onChange={handleEmail} />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            name="Password"
            variant="outlined"
            type="password"
            onChange={handlePassword}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password confirm"
            name="Password confirm"
            variant="outlined"
            type="password"
            onChange={handlePasswordConfirm}
          />
        </Grid>
        <Grid item>
          <Link to="/login" style = {{textDecoration: 'none'}}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              type="submit"
              size="large"
            >
              Register
            </Button>
          </Link>
        </Grid>
        <Grid item>
          <Link to="/login">Back to authorization</Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Registration;
