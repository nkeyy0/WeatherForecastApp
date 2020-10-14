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
import { makeStyles } from "@material-ui/core/styles";
import { GetFirstLetterToUpperCase } from "../../convert/index";

const Navigation = ({ isLogin, user }) => {
  const dispatch = useDispatch();
  const handleOnClickLogout = (event) => {
    event.preventDefault();
    dispatch(LogoutUser());
    localStorage.removeItem("jwtToken");
    localStorage.clear();
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
          <Grid container direction="row" spacing={1} alignItems = 'baseline'>
            <Grid item xs={12} sm={8}>
              <Typography variant="h4">Weather</Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h6" display="inline">
                {user}
              </Typography>
            </Grid>
            {/* <Grid item xs={12} sm={2}>
              <Avatar>
                {GetFirstLetterToUpperCase(user.name)}
                {GetFirstLetterToUpperCase(user.surname)}
              </Avatar>
              </Grid> */}
            <Grid item xs={12} sm={1}>
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
