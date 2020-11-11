import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Card, CardContent, Container, MenuList, Popover } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar } from "@material-ui/core";
import { loadCitiesWeatherFromDB, LogoutUser, setDataToCharts } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import { getFirstLetter } from "../../convert/index";
import { Menu, MenuItem, Popper } from "@material-ui/core";
import { Link } from "react-router-dom";

const Navigation = ({ isLogin, user }) => {
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
    // dispatch(loadCitiesWeatherFromDB(user.email));
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? "menu-popover" : undefined;

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
          <Grid container direction="row" spacing={1} alignItems="baseline">
            <Grid item xs={12} sm={11}>
              <Typography variant="h4">Weather</Typography>
            </Grid>

            <Grid item xs={12} sm={1}>
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
                onClose = {handleClose}
              >
                <MenuList>
                  <MenuItem disabled={true}>
                    {user.name} {user.surname}
                  </MenuItem>
                  <MenuItem disabled={true}>{user.email}</MenuItem>
                  <MenuItem onClick={handleClickOnMyProfile}><Link style = {{textDecoration: 'none', color: 'black'}}  to = '/TemperatureChart'>My account</Link></MenuItem>
                  <MenuItem onClick={handleOnClickLogout}>Logout</MenuItem>
                </MenuList>
                {/* <h1>ASG</h1> */}
              </Popover>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Navigation;
