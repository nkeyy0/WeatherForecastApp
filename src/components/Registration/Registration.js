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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  textField: {
    position : 'relative'
  }
}));

export default function Registration({
  registrationErrorDescription,
  registrationUserSuccess,
}) {
  const classes = useStyles();
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
    error: {
      name: false,
      surname: false,
      patronymic: false,
      email: false,
      city: false,
      password: false,
      passwordConfirm: false,
    },
    errorDescription: {
      name: null,
      surname: null,
      patronymic: null,
      email: null,
      city: null,
      password: null,
      passwordConfirm: null,
    },
  });
  const handleOnSubmit = (event) => {
    event.preventDefault();

    if (ErrorsCheck(FormValidate.error)) {
      const errRegistration = ErrorDescription(FormValidate.errorDescription);
      dispatch(newUserRegistrationSuccess(null));
      dispatch(newUserRegistrationFailed(errRegistration));
    } else {
      dispatch(newUserRegistration(regInfo));
      // if(registrationErrorDescription){
      //
      // }
      // else {
      FormValidateChange({
        error: {
          name: false,
          surname: false,
          patronymic: false,
          email: false,
          city: false,
          password: false,
          passwordConfirm: false,
        },
        errorDescription: {
          name: null,
          surname: null,
          patronymic: null,
          email: null,
          city: null,
          password: null,
          passwordConfirm: null,
        },
      });
      dispatch(newUserRegistrationFailed(null));
    }
  };
  const handleFirstName = (event) => {
    if (
      /[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim()) ||
      event.target.value.length === 0
    ) {
      FirstNameChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "Invalid name",
      });
      FormValidateChange({
        error: {
          name: true,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: "Invalid name",
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    } else {
      FirstNameChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: false,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: null,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    }
  };
  const handleSurname = (event) => {
    if (
      /[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim()) ||
      event.target.value.length === 0
    ) {
      SurnameChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "Invalid surname",
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: true,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: "Invalid Surname",
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    } else {
      SurnameChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: false,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: null,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    }
  };
  const handlePatronymic = (event) => {
    if (
      /[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim()) ||
      event.target.value.length === 0
    ) {
      PatronymicChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "Invalid patronymic",
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: true,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: "Invalid patronymic",
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    } else {
      PatronymicChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: false,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: null,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    }
  };
  const handleEmail = (event) => {
    if (
      !/^[\w\.\d-_]+@[\w\.\d-_]+\.\w{2,4}$/i.test(event.target.value.trim()) ||
      event.target.value.length === 0
    ) {
      EmailChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "Invalid email",
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: true,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: "Invalid email",
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    } else {
      EmailChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: false,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: null,
          city: FormValidate.errorDescription.city,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    }
  };

  const handleCity = (event) => {
    if (
      /[^A-Za-zА-Яа-яЁё]/g.test(event.target.value.trim()) ||
      event.target.value.length === 0
    ) {
      CityChangeInput({
        text: event.target.value.trim(),
        error: true,
        helperText: "Invalid city",
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: true,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: "Invalid city",
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    } else {
      CityChangeInput({
        text: event.target.value.trim(),
        error: false,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: false,
          password: FormValidate.error.password,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: null,
          password: FormValidate.errorDescription.password,
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
      });
    }
  };
  const handlePassword = (event) => {
    if (event.target.value.length < 8) {
      PasswordChangeInput({
        text: event.target.value,
        error: true,
        helperText: "Password is too short",
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: true,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: "Password is to short",
          passwordConfirm: FormValidate.errorDescription.passwordConfirm,
        },
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
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: true,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: null,
          passwordConfirm: "Passwords do not match",
        },
      });
    } else {
      PasswordChangeInput({
        text: event.target.value,
        error: null,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: false,
          passwordConfirm: FormValidate.error.passwordConfirm,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: null,
          passwordConfirm: "Passwords do not match",
        },
      });
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
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: FormValidate.error.password,
          passwordConfirm: true,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: null,
          passwordConfirm: "Passwords do not match",
        },
      });
    } else {
      PasswordConfirmChangeInput({
        text: event.target.value,
        error: false,
        helperText: null,
      });
      FormValidateChange({
        error: {
          name: FormValidate.error.name,
          surname: FormValidate.error.surname,
          patronymic: FormValidate.error.patronymic,
          email: FormValidate.error.email,
          city: FormValidate.error.city,
          password: false,
          passwordConfirm: false,
        },
        errorDescription: {
          name: FormValidate.errorDescription.name,
          surname: FormValidate.errorDescription.surname,
          patronymic: FormValidate.errorDescription.patronymic,
          email: FormValidate.errorDescription.email,
          city: FormValidate.errorDescription.city,
          password: null,
          passwordConfirm: null,
        },
      });
    }
  };
  const regInfo = {
    name: FirstNameInput.text,
    surname: SurnameInput.text,
    patronymic: PatronymicInput.text,
    email: EmailInput.text,
    city: CityInput.text,
    password: PasswordInput.text,
  };

  return (
    <Container component="main" maxWidth="xs" fixed>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleOnSubmit}>
          <Grid container spacing={2} justify = 'center'>
            <Grid item xs={12}>
              <Typography color="error" component="h1" variant="h5">
                {registrationErrorDescription}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography color="textSecondary" component="h1" variant="h5">
                {registrationUserSuccess}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={handleFirstName}
                value={FirstNameInput.text}
                error={FirstNameInput.error}
                helperText={FirstNameInput.helperText}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={handleSurname}
                value={SurnameInput.text}
                error={SurnameInput.error}
                helperText={SurnameInput.helperText}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="patronymic"
                label="Patronymic"
                name="patronymic"
                autoComplete="patronymic"
                onChange={handlePatronymic}
                value={PatronymicInput.text}
                error={PatronymicInput.error}
                helperText={PatronymicInput.helperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleEmail}
                value={EmailInput.text}
                error={EmailInput.error}
                helperText={EmailInput.helperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                autoFocus
                fullWidth
                id="city"
                label="City"
                name="city"
                autoComplete="city"
                className = {classes.textField}
                onChange={handleCity}
                value={CityInput.text}
                error={CityInput.error}
                helperText={CityInput.helperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlePassword}
                value={PasswordInput.text}
                error={PasswordInput.error}
                helperText={PasswordInput.helperText}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password-confirmed"
                label="Password confirmed"
                type="password"
                id="password-confirmed"
                autoComplete="password-confirmed"
                onChange={handlePasswordConfirm}
                value={PasswordConfirmInput.text}
                error={PasswordConfirmInput.error}
                helperText={PasswordConfirmInput.helperText}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <LinkMaterial href="#" variant="body2">
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Already have an account? Sign in
                </Link>
              </LinkMaterial>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
