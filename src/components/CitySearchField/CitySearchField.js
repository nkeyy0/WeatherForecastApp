import React from "react";
import { Button, Select, MenuItem, InputLabel } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

import {
  errorDownload,
  loadDataFromOpenWeatherMap,
  loadDataFromWeatherstack,
  selectApi,
} from "../../actions/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";

const CitySearchField = ({ api, cityName, email }) => {
  const isValid =(str) => {
    return !/[~`!#$%\^&*+=\\[\]\\';,./{}|\\":<>0-9\?]/g.test(str);
   }
   console.log(isValid('saffas124'))
  const dispatch = useDispatch();
  const [cityInput, cityChangeInput] = useState({ text: "", error: false, helperText: null });
  const [selectAPI, changeSelectAPI] = useState({ text: "", error: false, helperText: null });
  useEffect(() => {
    cityChangeInput({ text: cityName, error: false });
    changeSelectAPI(api);
  }, [cityName, api]);

  const handleInputChange = (event) => {
    event.preventDefault();
    if (event.target.value.trim() !== "") {
      cityChangeInput({ text: event.target.value.trim(), error: false, helperText: null });
    }
     else cityChangeInput({ text: event.target.value.trim(), error: true, helperText: 'Empty field' });
     console.log(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    changeSelectAPI(event.target.value);
  };

  const handleOnSubmit = (event) => {
    if (selectAPI === "OpenWeatherMap") {
      dispatch(loadDataFromOpenWeatherMap({city:cityInput.text, email: email}));
      dispatch(selectApi(api));
    } else if (selectAPI === "Weatherstack") {
      dispatch(loadDataFromWeatherstack(cityInput.text));
      dispatch(selectApi(api));
    }
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Grid container direction="row" justify="center" spacing={4}>
        <Grid item xs={9} sm={3}>
          <TextField
            error={cityInput.error}
            fullWidth
            placeholder="Enter city"
            value={cityInput.text}
            onChange={handleInputChange}
            helperText = {cityInput.helperText}
          />
        </Grid>

        <Grid item xs={9} sm={3}>
          <Select value={selectAPI} fullWidth onChange={handleSelectChange}>
            <MenuItem value="OpenWeatherMap">OpenWeatherMap</MenuItem>
            <MenuItem value="Weatherstack">Weatherstack</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={9} sm={3}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="submit"
            size="large"
            startIcon={<SearchIcon></SearchIcon>}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CitySearchField;


const isValid =(str) => {
  return !/[~`!#$%\^&*+=\\[\]\\';,./{}|\\":<>0-9\?]/g.test(str);
 }

 console.log(isValid('asf'))