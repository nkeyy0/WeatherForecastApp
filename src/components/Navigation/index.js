import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar } from '@material-ui/core';




const Navigation = () => {
    return(
      <Container maxWidth = "lg">
        <AppBar position="static" color = "secondary">
    <Toolbar>
    <Grid container direction = "row">
    <Grid item xs = {12} sm = {11}>
    <Typography variant="h4">
        Weather
      </Typography>
    </Grid>
     <Grid item xs = {12} sm = {1} direction = "row">
     <Button color = "inherit">Logout</Button>
    </Grid> 
    </Grid>
    </Toolbar>
    
  </AppBar>
      </Container>
    );
}

export default Navigation;
