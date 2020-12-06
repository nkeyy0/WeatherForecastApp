import React, { useState } from "react";
import "chartjs-plugin-colorschemes";
import "date-fns";
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
} from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  loadCitiesWeatherFromDB,
  setDataAndLabelsToChart,
  setDataToChart,
  setLabelsToChart,
} from "../../actions";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import {
  setDataToChartHelper,
  getCityArray,
  getDateForPicker,
  resultFilter,
} from "../../helpers/index";
import { Line } from "react-chartjs-2";
import {
  Select,
  MenuItem,
  Input,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));

const TemperatureChart = ({ cities, email, loading, chartData }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [chartTitle, changeChartTitle] = useState("Temperature changes");
  const [weatherIndicator, changeWeatherIndicator] = useState("temperature");
  const [citiesToFiler, setCitiesToFilter] = useState([]);
  const [cityName, setCityName] = useState([]);
  const [chartDataComponent, setChartDataComponent] = useState({});
  const [selectedDateMin, setSelectedDateMin] = useState(
    getDateForPicker(cities).min
  );
  const [selectedDateMax, setSelectedDateMax] = useState(
    getDateForPicker(cities).max
  );

  const handleMinDateChange = (date) => {
    setSelectedDateMin(date);
  };

  const handleMaxDateChange = (date) => {
    setSelectedDateMax(date);
  };

  const handleSelectChange = (event) => {
    setCityName(event.target.value);
  };

  const handleOnWindSpeedClick = (event) => {
    changeChartTitle("Wind speed changes");
    changeWeatherIndicator("wind speed");
    if (cityName.length) {
      const res = resultFilter(
        cities,
        cityName,
        selectedDateMin,
        selectedDateMax,
        "wind speed"
      );
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    } else {
      const res = setDataToChartHelper(cities, "wind speed");
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    }
  };

  const handleOnHumidityClick = (event) => {
    changeChartTitle("Humidity changes");
    changeWeatherIndicator("humidity");
    if (cityName.length) {
      const res = resultFilter(
        cities,
        cityName,
        selectedDateMin,
        selectedDateMax,
        "humidity"
      );
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    } else {
      const res = setDataToChartHelper(cities, "humidity");
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    }
  };

  const handleOnPressureClick = (event) => {
    changeChartTitle("Pressure changes");
    changeWeatherIndicator("pressure");
    if (cityName.length) {
      const res = resultFilter(
        cities,
        cityName,
        selectedDateMin,
        selectedDateMax,
        "pressure"
      );
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    } else {
      const res = setDataToChartHelper(cities, "pressure");
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    }
  };

  const handleOnTemperatureClick = (event) => {
    changeChartTitle("Temperature changes");
    changeWeatherIndicator("temperature");
    if (cityName.length) {
      const res = resultFilter(
        cities,
        cityName,
        selectedDateMin,
        selectedDateMax,
        "temperature"
      );
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    } else {
      const res = setDataToChartHelper(cities, "temperature");
      dispatch(setDataAndLabelsToChart(res));
      setChartDataComponent(chartData);
    }
  };

  const handleFilterSubmit = (event) => {
    event.preventDefault();
    const res = resultFilter(
      cities,
      cityName,
      selectedDateMin,
      selectedDateMax,
      weatherIndicator
    );
    dispatch(setDataAndLabelsToChart(res));
    setChartDataComponent(chartData);
  };

  const handleOnResetFilters = (event) => {
    event.preventDefault();
    setCityName([]);
    const res = setDataToChartHelper(cities, weatherIndicator);
    dispatch(setLabelsToChart(res.time));
    dispatch(setDataToChart(res.data));

    dispatch(setDataAndLabelsToChart(res));
    setSelectedDateMin(getDateForPicker(cities).min);
    setSelectedDateMax(getDateForPicker(cities).max);
  };

  useEffect(() => {
    if(!cities.length){
      dispatch(loadCitiesWeatherFromDB(email));
    }
    console.log('Chart data update');
  }, [chartData]);
  useEffect(() => {
    const citiesForSelect = getCityArray(cities);
    setCitiesToFilter(citiesForSelect);
    const res = setDataToChartHelper(cities, weatherIndicator);
    dispatch(setDataAndLabelsToChart(res));
    setChartDataComponent(chartData);
    console.log('Set cities');
  }, []);
  // useEffect(() => {
  //   console.log('Did mount');
  // }, []);
  // if(loading){
  //   return (
  //     <Grid container justify="center">
  //       <CircularProgress size={60} />
  //     </Grid>
  //   );
  // }
  // else {
  return (
    <div>
      <Container>
        <Grid container justify="center">
          <Grid item>
            <ButtonGroup
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              <Button onClick={handleOnTemperatureClick}>Temperature</Button>
              <Button onClick={handleOnPressureClick}>Pressure</Button>
              <Button onClick={handleOnWindSpeedClick}>Wind speed</Button>
              <Button onClick={handleOnHumidityClick}>Humidity</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
      <Line
        data={chartDataComponent}
        options={{
          title: {
            display: true,
            text: chartTitle,
          },
          legend: {
            display: true,
            position: "bottom",
            onClick: null,
            labels: {
              usePointStyle: true,
            },
          },
          scales: {
            xAxes: [
              {
                type: "time",
                time: {
                  unit: "day",
                },
              },
            ],
          },
          plugins: {
            colorschemes: {
              scheme: "brewer.Paired12",
              fillAlpha: 0.7,
            },
          },
        }}
      ></Line>
      <form onSubmit={handleFilterSubmit}>
        <Grid container spacing={2} justify="center" direction="column">
          <Grid item>
            <FormControl style={{ minWidth: 120, maxWidth: 200 }}>
              <InputLabel id="select-city-label">Filter by City</InputLabel>
              <Select
                labelId="select-city-label"
                id="select-city"
                multiple
                value={cityName}
                onChange={handleSelectChange}
                input={<Input />}
                renderValue={(selected) => selected.join(", ")}
              >
                {citiesToFiler.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={cityName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="min-date-picker"
                  label="Minimum date"
                  minDate={getDateForPicker(cities).min}
                  maxDate={selectedDateMax}
                  value={selectedDateMin}
                  onChange={handleMinDateChange}
                  autoOk
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="max-date-picker"
                  label="Maximum date"
                  minDate={selectedDateMin}
                  maxDate={getDateForPicker(cities).max}
                  value={selectedDateMax}
                  onChange={handleMaxDateChange}
                  autoOk
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
          </Grid>
          <Grid item>
            <Button type="submit" color="primary" variant="contained">
              Apply filters
            </Button>
          </Grid>
          <Grid item>
            <Button
              type="submit"
              onClick={handleOnResetFilters}
              color="secondary"
              variant="contained"
            >
              Reset filters
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default TemperatureChart;
