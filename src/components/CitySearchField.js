import React from "react";
import { Button, Select, MenuItem, InputLabel } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import {
  errorDownload,
  loadDataFromOpenWeatherMap,
  loadDataFromWeatherstack,
  selectApi,
} from "../actions/index";
import { changeInputSearch } from "../actions/index";
import { selectOnChange } from "../actions/index";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { useEffect } from "react";

const CitySearchField = () => {
  const dispatch = useDispatch();
  const api = useSelector((state) => state.api);
  const cityName = useSelector((state) => state.cityName);
  const [cityInput, cityChangeInput] = useState("");
  const [selectAPI, changeSelectAPI] = useState("");
  const [timeCompare, submitTime] = useState("");
  const dateCompare = Date.now();
  useEffect(() => {
    cityChangeInput(cityName);
    changeSelectAPI(api);
  }, [cityName, api]);

  const handleInputChange = (event) => {
    event.preventDefault();
    cityChangeInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    changeSelectAPI(event.target.value);
  };

  const handleOnSubmit = (event) => {
    if (selectAPI === "OpenWeatherMap") {
      dispatch(loadDataFromOpenWeatherMap(cityInput));
      dispatch(selectApi(api));
    } else if (selectAPI === "Weatherstack") {
      dispatch(loadDataFromWeatherstack(cityInput));
      dispatch(selectApi(api));
    }
    
    console.log(selectAPI);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <Grid container direction="row" justify="center" spacing={4}>
        <Grid item xs={9} sm={3}>
          <TextField
            fullWidth
            placeholder="Enter city"
            value={cityInput}
            onChange={handleInputChange}
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
