import React, { useState } from "react";
import { Button, ButtonGroup, Container, Grid } from "@material-ui/core";
import Chart from "chart.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCitiesWeatherFromDB, setDataToCharts } from "../../actions";
import {
  convertTemperatureToChart,
  generateRandomColor,
} from "../../convert/index";
import { makeStyles } from "@material-ui/core/styles";

const TemperatureChart = ({ cities, email, loading }) => {
  const chartRef = React.useRef();
  const dispatch = useDispatch();

  // const [weatherToChart, changeWeatherToChart] = useState({data: []});
  const [resData, changeResData] = useState(null)
  const [timeToChart, changeTimeToChart] = useState(null);
  

 
 
  // const handleOnPressureClick = (event) => {
  //   event.preventDefault();
  //   const temperatureData = convertTemperatureToChart(cities).pressure;
  //   const labelsToChart = convertTemperatureToChart(cities).cities;
  //   weatherToChart = temperatureData.map((value) => {
  //     return { data: value };
  //   });
  //   dataToChart = labelsToChart.map((value) => {
  //     return {
  //       label: value,
  //       lineTension: 0,
  //       fill: false,
  //       borderColor: generateRandomColor(),
  //     };
  //   });
  //   for (let i = 0; i < dataToChart.length; i++) {
  //     changeResData(Object.assign(weatherToChart[i], dataToChart[i]));
  //   }
  // };

  useEffect(() => {
    if(!cities && email) {
      dispatch(loadCitiesWeatherFromDB(email));
    }
    if (cities) {
      const timeData = cities.map((value) => {
        return new Date(value.timeRequest);
      });
      changeTimeToChart(timeData);
      const temperatureData = convertTemperatureToChart(cities).temp;
      console.log(temperatureData);
      const labelsToChart = convertTemperatureToChart(cities).cities;
      console.log(labelsToChart);
      
      const weatherToChart = temperatureData.map((value) => {
          return { data: value };
        })
      console.log(weatherToChart);
      const dataToChart = labelsToChart.map((value) => {
        return {
          label: value,
          lineTension: 0,
          fill: false,
          borderColor: generateRandomColor(),
        };
      });
      const resultData = [];
      for (let i = 0; i < dataToChart.length; i++) {
         resultData.push(Object.assign(weatherToChart[i], dataToChart[i]));
      }
      console.log(resultData);
      changeResData(resultData);
      console.log(resData);
      const myChartRef = chartRef.current.getContext("2d");

      new Chart(myChartRef, {
        type: "line",
        data: {
          //Bring in data
          labels: timeToChart,
          datasets: [...resultData],
        },
        options: {
          title: {
            display: true,
            text: "Temperature changes",
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
        },
      });
    }
  }, [cities]);
  // if(loading){
  //   return (
  //     <Grid container justify="center">
  //       <CircularProgress size={60} />
  //     </Grid>
  //   );
  // }
  // else {
    console.log(resData, 'state')
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
              <Button>Temperature</Button>
              <Button>Pressure</Button>
              <Button>Wind speed</Button>
              <Button>Humidity</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Container>

      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default TemperatureChart;
