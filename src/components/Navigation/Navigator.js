import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import { LogoutUser } from "../../actions";

const Navigation = ({ isLogin, user }) => {
  const dispatch = useDispatch();
  const handleOnClickLogout = (event) => {
    event.preventDefault();
    dispatch(LogoutUser());
  };

  if (!isLogin) {
    return (
      <Container maxWidth="lg">
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Grid container direction="row" spacing={0}>
              <Grid item xs={12} sm={12}>
                <Typography variant="h4">Weather</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Grid container direction="row" spacing={0} justify="flex-end">
            <Grid item xs={12} sm={8}>
              <Typography variant="h4">Weather</Typography>
            </Grid>
            <Grid item xs={12} sm={3} direction="row">
              <Typography variant="body1" display="inline" color="primary">
                {user.surname} &nbsp;
              </Typography>
              <Typography variant="body1" display="inline" color="primary">
                {user.name} &nbsp;
              </Typography>
              <Typography variant="body1" display="inline" color="primary">
                {user.patronymic} &nbsp;
              </Typography>
            </Grid>
            <Grid item xs={12} sm={1} direction="row">
              <Button color="textPrimary" onClick={handleOnClickLogout}>
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navigation;
