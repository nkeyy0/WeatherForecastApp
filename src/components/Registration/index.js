import React, { useState } from "react";
import { Input, TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newUserRegistration } from "../../actions";
import { v4 as uuidv4 } from "uuid";

const Registration = () => {
  const dispatch = useDispatch();
  const [FirstNameInput, FirstNameChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
  });
  const [SurnameInput, SurnameChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
  });
  const [PatronymicInput, PatronymicChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
  });
  const [EmailInput, EmailChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
  });
  const [CityInput, CityChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
  });
  const [PasswordInput, PasswordChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
  });
  const [PasswordConfirmInput, PasswordConfirmChangeInput] = useState({
    text: "",
    error: null,
    helperText: null,
    label: "Password confirm",
  });
  const [FormValidate, FormValidateChange] = useState({
    error: false,
    errorDescription: null,
  });
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(newUserRegistration(regInfo));
  };
  const handleFirstName = (event) => {
    if (/[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim())) {
      FirstNameChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "the field contains incorrect symbols",
      });
    } else {
      FirstNameChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
    }
  };
  const handleSurname = (event) => {
    if (/[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim())) {
      SurnameChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "the field contains incorrect symbols",
      });
    } else {
      SurnameChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
    }
  };
  const handlePatronymic = (event) => {
    if (/[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim())) {
      PatronymicChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "the field contains incorrect symbols",
      });
    } else {
      PatronymicChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
    }
  };
  const handleEmail = (event) => {
    EmailChangeInput({
      text: event.target.value.trim(),
      error: false,
      helperText: null,
    });
  };

  const handleCity = (event) => {
    if (/[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim())) {
      CityChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "the field contains incorrect symbols",
      });
    } else {
      CityChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
    }
  };
  const handlePassword = (event) => {
    if (event.target.value.length < 8) {
      PasswordChangeInput({
        text: event.target.value,
        error: true,
        helperText: "password is too short",
      });
      FormValidateChange({
        error: true,
        errorDescription: "password is too short",
      });
    } else if (event.target.value !== PasswordConfirmInput.text) {
      PasswordConfirmChangeInput({
        text: PasswordConfirmInput.text,
        error: true,
        helperText: "Passwords do not match",
        label: PasswordConfirmInput.text === "" ? "Password confirm" : null,
      });
      PasswordChangeInput({
        text: event.target.value,
        error: null,
        helperText: null,
      });
    } else {
      PasswordChangeInput({
        text: event.target.value,
        error: null,
        helperText: null,
      });
      FormValidateChange({ error: false, errorDescription: null });
    }
  };
  const handlePasswordConfirm = (event) => {
    if (event.target.value !== PasswordInput.text) {
      PasswordConfirmChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "Passwords do not match",
        label: event.target.value === "" ? "Password confirm" : null,
      });
    } else {
      PasswordConfirmChangeInput({
        text: event.target.value,
        error: false,
        helperText: null,
      });
    }
  };
  const regInfo = {
    id: uuidv4(),
    name: FirstNameInput.text,
    surname: SurnameInput.text,
    patronymic: PatronymicInput.text,
    email: EmailInput.text,
    city: CityInput.text,
    password: PasswordInput.text,
    passConf: PasswordConfirmInput.text,
  };
  // console.log(regInfo);
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
            name="First name"
            variant="outlined"
            onChange={handleFirstName}
            value={FirstNameInput.text}
            error={FirstNameInput.error}
            helperText={FirstNameInput.helperText}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Surname"
            name="Surname"
            variant="outlined"
            onChange={handleSurname}
            value={SurnameInput.text}
            error={SurnameInput.error}
            helperText={SurnameInput.helperText}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Patronymic"
            name="Patronymic"
            variant="outlined"
            onChange={handlePatronymic}
            value={PatronymicInput.text}
            error={PatronymicInput.error}
            helperText={PatronymicInput.helperText}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Email"
            variant="outlined"
            onChange={handleEmail}
            value={EmailInput.text}
            error={EmailInput.error}
            helperText={EmailInput.helperText}
          />
        </Grid>
        <Grid item>
          <TextField
            label="City"
            variant="outlined"
            onChange={handleCity}
            value={CityInput.text}
            error={CityInput.error}
            helperText={CityInput.helperText}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Password"
            name="Password"
            variant="outlined"
            type="password"
            value={PasswordInput.text}
            helperText={PasswordInput.helperText}
            error={PasswordInput.error}
            onChange={handlePassword}
          />
        </Grid>
        <Grid item>
          <TextField
            label={PasswordConfirmInput.label}
            name="Password confirm"
            variant="outlined"
            type="password"
            value={PasswordConfirmInput.text}
            helperText={PasswordConfirmInput.helperText}
            error={PasswordConfirmInput.error}
            onChange={handlePasswordConfirm}
          />
        </Grid>
        <Grid item>
          {/* <Link to="/login" style = {{textDecoration: 'none'}}> */}
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
          >
            Register
          </Button>
          {/* </Link> */}
        </Grid>
        <Grid item>
          <Link to="/login">Back to authorization</Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Registration;
