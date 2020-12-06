import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Box,
  Card,
  CardContent,
  Container,
  MenuList,
  Popover,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import {
  loadCitiesWeatherFromDB,
  LogoutUser,
  setDataToCharts,
} from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import { getFirstLetter } from "../../helpers/index";
import { Menu, MenuItem, Popper } from "@material-ui/core";
import { Link } from "react-router-dom";
import CloudIcon from "@material-ui/icons/Cloud";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  loginButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navigation = ({ isLogin, user }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleOnClickLogout = (event) => {
    event.preventDefault();
    dispatch(LogoutUser());
    localStorage.removeItem("jwtToken");
    localStorage.clear();
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickOnMyProfile = (event) => {
    event.preventDefault();
    dispatch(loadCitiesWeatherFromDB(user.email));
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "menu-popover" : undefined;

  if (!isLogin) {
    return (
      <AppBar position="static" color="primary">
        <Container fixed>
          <Toolbar>
            <IconButton
              component={Link}
              to="/"
              edge="start"
              color="inherit"
              aria-label="menu"
              size="medium"
              className={classes.menuButton}
            >
              <CloudIcon />
            </IconButton>

            <Typography variant="h6" className={classes.title}>
              Weather app
            </Typography>

            <Button
              component={Link}
              to="/login"
              color="inherit"
              variant="outlined"
              component={Link}
              className={classes.loginButton}
            >
              Log In
            </Button>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  return (
    <AppBar position="static" color="primary" title="Weather">
      <Container fixed>
        <Toolbar>
          <IconButton
            component={Link}
            to="/"
            edge="start"
            color="inherit"
            aria-label="menu"
            size="medium"
            className={classes.menuButton}
          >
            <CloudIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Weather app
          </Typography>
          <Button aria-describedby={id} onClick={handleClick}>
            <Avatar>
              {getFirstLetter(user.name)}
              {getFirstLetter(user.surname)}
            </Avatar>
          </Button>
          <Popover
            id={id}
            anchorEl={anchorEl}
            open={open}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            onClose={handleClose}
          >
            <MenuList>
              <MenuItem disabled={true}>
                {user.name} {user.surname}
              </MenuItem>
              <MenuItem disabled={true}>{user.email}</MenuItem>
              <MenuItem onClick={handleClickOnMyProfile}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/TemperatureChart"
                >
                  My account
                </Link>
              </MenuItem>
              <MenuItem onClick={handleOnClickLogout}>Logout</MenuItem>
            </MenuList>
          </Popover>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
