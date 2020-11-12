import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import Chart from "chart.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCitiesWeatherFromDB, setDataToCharts } from "../../actions";

const TemperatureChart = ({ cities, email, loading }) => {
  const chartRef = React.useRef();
  const dispatch = useDispatch();
  console.log(email);
  
  useEffect(() => {
    dispatch(loadCitiesWeatherFromDB(email));
    if(cities){
      const timeData = cities.map((value) => {
        return new Date(value.timeRequest);
      });
      const temperatureData = cities.map((value) => {
        return value.temperature;
      });
      const citiesName = cities.map((value) => {
        return value.name;
      })
      const myChartRef = chartRef.current.getContext("2d");
  
      new Chart(myChartRef, {
        type: "line",
        data: {
          //Bring in data
          labels: timeData,
          datasets: [
            {
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              hoverBackgroundColor: "rgba(255,99,132,0.4)",
              hoverBorderColor: "rgba(255,99,132,1)",
              label: "Temperature",
              data: temperatureData,
            },
          ],
        },
        options: {
          title: {
            display: true,
            text: "Temperature changes",
          },
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'hour'
                }
            }],
            ticks: {
              min: -30,
              max: 30
            }
        }
        },
      });
    }
    
  }, [email]);
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
        <canvas id="myChart" ref={chartRef} />
      </div>
    );
  // }
  
};

export default TemperatureChart;
