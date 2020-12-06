import React from 'react';
import {Typography, Link as LinkMaterial, Box} from '@material-ui/core';

function Copyright() {
    return (
      <Box mt = {8}>
        <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <LinkMaterial color="inherit" href="https://material-ui.com/">
          Weather App
        </LinkMaterial>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      </Box>
      
    );
  }

export default Copyright;