import React, { useState } from "react";
import { Input, TextField, Button, Grid, Typography } from "@material-ui/core";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  newUserRegistration,
  newUserRegistrationFailed,
  newUserRegistrationSuccess,
} from "../../actions";
import { v4 as uuidv4 } from "uuid";
import { ErrorsCheck } from "../../convert/index";
import { ErrorDescription } from "../../convert/index";
import { NEW_USER_REGISTRATION_STATUS } from "../../constants/constants";

const Registration = ({
  registrationErrorDescription,
  registrationUserSuccess,
}) => {
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
        
        
      // }
      
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
    <form onSubmit={handleOnSubmit}>
      <Grid
        container
        justify="center"
        direction="column"
        spacing={4}
        alignItems="center"
      >
        {registrationErrorDescription && (
          <Grid item>
            <Typography color="error" variant="h5">
              {registrationErrorDescription}
            </Typography>
          </Grid>
        )}

        {registrationUserSuccess && (
          <Grid item>
            <Typography color="textSecondary" variant="h5">
              {registrationUserSuccess}
            </Typography>
          </Grid>
        )}
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
            type="email"
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
          <Link to="/">Back to authorization</Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Registration;
