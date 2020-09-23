import React, { useState } from "react";
import {
  Input,
  TextField,
  Button,
  Grid,
  Typography,
  Link,
} from "@material-ui/core";

const Login = () => {
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
          <TextField label="Login or Email" variant="outlined" onChange = {handleInputChange}/>
        </Grid>
        <Grid item>
          <TextField label="Password" variant="outlined" type="password" onChange = {handlePassChange}/>
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
          <Link>Create Weather App account</Link>
        </Grid>
      </Grid>
    </form>
  );
};

export default Login;
