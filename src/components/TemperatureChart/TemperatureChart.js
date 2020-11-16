import React, { useState } from "react";
import { Button, ButtonGroup, Container, FormControl, Grid } from "@material-ui/core";
import Chart from "chart.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCitiesWeatherFromDB, setDataToChart, setLabelsToChart } from "../../actions";
import {
  convertTemperatureToChart,
  generateRandomColor,
  setDataToChartHelper,
  generateRandomColorForChart,
  getCityArray
} from "../../convert/index";
import {Line} from 'react-chartjs-2';
import {Select, MenuItem, Input, InputLabel} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
}));



const TemperatureChart = ({ cities, email, loading, data, labelsToChart }) => {
  // const chartRef = React.useRef();
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(cities);
  const colors = generateRandomColorForChart(cities);
  console.log(colors);
  const [chartTitle, changeChartTitle] = useState('Temperature changes');
  const [weatherIndicator, changeWeatherIndicator] = useState('temperature');
  const [colorsForChart, changeColorsForChart] = useState(colors); 
  const [chartData, setChartData] = useState({});
  const [citiesToFiler, setCitiesToFilter] = useState([]);
  const [personName, setPersonName] = React.useState([]);
  const handleSelectChange = (event) => {
    setPersonName(event.target.value);
  }
  const handleOnWindSpeedClick = (event) => {
    changeChartTitle('Wind speed changes');
    changeWeatherIndicator('wind speed');
    const res = setDataToChartHelper(cities, 'wind speed');
    dispatch(setLabelsToChart(res.time));
    console.log(res.data, 'res');
    dispatch(setDataToChart(res.data));
    setChartData({
      labels: labelsToChart,
      datasets: [...data]
    });
  }
  const handleOnHumidityClick = (event) => {
    changeChartTitle('Humidity changes');
    changeWeatherIndicator('humidity');
    const res = setDataToChartHelper(cities, 'humidity');
    dispatch(setLabelsToChart(res.time));
    dispatch(setDataToChart(res.data));
    setChartData({
      labels: labelsToChart,
      datasets: [...data]
    });
  }
  const handleOnPressureClick = (event) => {
    changeChartTitle('Pressure changes');
    changeWeatherIndicator('pressure');
    const res = setDataToChartHelper(cities, 'pressure');
    dispatch(setLabelsToChart(res.time));
   
    dispatch(setDataToChart(res.data));
    setChartData({
      labels: labelsToChart,
      datasets: [...data]
    });
  }
  const handleOnTemperatureClick = (event) => {
    changeChartTitle('Temperature changes');
    changeWeatherIndicator('temperature');
    const res = setDataToChartHelper(cities, 'temperature');
    dispatch(setLabelsToChart(res.time));
    dispatch(setDataToChart(res.data));
    setChartData({
      labels: labelsToChart,
      datasets: [...data]
    });
  }
  const setData = (cities) => {
    if (!cities.length) {
      dispatch(loadCitiesWeatherFromDB(email));
    }
    const res = setDataToChartHelper(cities, weatherIndicator);
    if(!labelsToChart.length){
      dispatch(setLabelsToChart(res.time));
    }
    dispatch(setDataToChart(res.data));
    console.log(data);
    setChartData({
      labels: labelsToChart,
      datasets: [...data]
    });
    return res;
  };

  useEffect(() => {
    
    const resultData = setData(cities);
    setChartData({
      labels: labelsToChart,
      datasets: [...data]
    });
    const citiesForSelect = getCityArray(cities);
    setCitiesToFilter(citiesForSelect);
    console.log(data)
  }, [labelsToChart]);
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
              <Button onClick = {handleOnTemperatureClick}>Temperature</Button>
              <Button onClick = {handleOnPressureClick}>Pressure</Button>
              <Button onClick = {handleOnWindSpeedClick}>Wind speed</Button>
              <Button onClick = {handleOnHumidityClick}>Humidity</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>
      <Line data = {chartData} options =  {{
          title: {
            display: true,
            text: chartTitle,
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
            // ticks: {
            //   min: -30,
            //   max: 30,
            // },
          },
        }}></Line>
        <FormControl>
        <InputLabel  htmlFor = 'demo-mutiple-name' className = {classes.formControl}>Filter by City</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={personName}
          onChange={handleSelectChange}
          input={<Input />}
        >
          {citiesToFiler.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
      
      {/* <canvas id="myChart" ref={chartRef} /> */}
    </div>
  );
};

export default TemperatureChart;
