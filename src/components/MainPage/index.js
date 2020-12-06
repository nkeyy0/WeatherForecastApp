// This is a weather tracking website. Log in to continue
import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import CloudIcon from "@material-ui/icons/Cloud";

const MainPage = () => {
  return (
    <Container fixed>
      <Grid container direction = 'column' spacing = {2}>
        <Grid item>
          <Typography variant="h6" align="center">
            This is a weather tracking website. Please log in to continue
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center">
            <CloudIcon color="inherit" />
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainPage;
